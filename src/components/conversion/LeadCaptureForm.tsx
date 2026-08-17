import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import useUTM, { UTM_KEYS } from "@/hooks/useUTM";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const schema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "WhatsApp inválido").max(20),
  cargo: z.string().trim().max(80).optional().or(z.literal("")),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
});

const inputCls =
  "w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition";

interface LeadCaptureFormProps {
  /** Identificador da origem do lead (ex.: "lp_curso", "footer_diagnostico"). */
  source: string;
  /** Rota de sucesso — default "/obrigado". */
  successRedirect?: string;
  /** Texto do botão. */
  submitLabel?: string;
  /** Mostrar campo cargo (default true). */
  showCargo?: boolean;
  /** Mostrar campo empresa (default true). */
  showEmpresa?: boolean;
  className?: string;
}

/**
 * Formulário genérico de captura — submete para a mesma tabela `leads`
 * usada pelo LeadForm da home. Carrega UTMs (first/last touch) e dispara
 * lead_start (primeiro foco) e lead_submit (envio bem-sucedido).
 */
const LeadCaptureForm = ({
  source,
  successRedirect = "/obrigado",
  submitLabel = "Quero o diagnóstico gratuito",
  showCargo = true,
  showEmpresa = true,
  className,
}: LeadCaptureFormProps) => {
  const [f, setF] = useState({ nome: "", email: "", telefone: "", cargo: "", empresa: "" });
  const [loading, setLoading] = useState(false);
  const started = useRef(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { hiddenFields } = useUTM();

  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }));

  const handleFocus = () => {
    if (!started.current) {
      started.current = true;
      trackEvent("lead_start", { form_source: source });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(f);
    if (!parsed.success) {
      toast({ title: "Verifique os campos", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const utmNote = [
        `origem: ${source}`,
        hiddenFields.utm_source && `utm_source: ${hiddenFields.utm_source}`,
        hiddenFields.utm_medium && `utm_medium: ${hiddenFields.utm_medium}`,
        hiddenFields.utm_campaign && `utm_campaign: ${hiddenFields.utm_campaign}`,
      ]
        .filter(Boolean)
        .join(" | ");

      // Compatível com o schema atual da tabela `leads` (mesma do LeadForm).
      const { error } = await supabase.from("leads").insert({
        nome: parsed.data.nome,
        email: parsed.data.email,
        telefone: parsed.data.telefone,
        empresa: parsed.data.empresa || null,
        site: [parsed.data.cargo, utmNote].filter(Boolean).join(" · ") || null,
        segmento: source,
        objetivo: "Diagnóstico gratuito",
      });
      if (error) throw error;

      trackEvent("lead_submit", {
        form_source: source,
        ...Object.fromEntries(UTM_KEYS.map((k) => [k, hiddenFields[k] || undefined])),
      });

      supabase.functions.invoke("notify-lead", { body: { ...parsed.data, origem: source } }).catch(() => {});
      navigate(successRedirect);
    } catch {
      toast({ title: "Erro ao enviar", description: "Não conseguimos registrar seus dados. Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} onFocusCapture={handleFocus} className={cn("space-y-4", className)}>
      {/* Campos ocultos de UTM (first-touch + last-touch) */}
      {Object.entries(hiddenFields).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <input type="hidden" name="form_source" value={source} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            Nome completo
          </label>
          <input className={inputCls} value={f.nome} onChange={(e) => set("nome", e.target.value)} required maxLength={100} />
        </div>
        <div>
          <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            E-mail corporativo
          </label>
          <input type="email" className={inputCls} value={f.email} onChange={(e) => set("email", e.target.value)} required maxLength={255} />
        </div>
        <div>
          <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            WhatsApp
          </label>
          <input type="tel" placeholder="(00) 00000-0000" className={inputCls} value={f.telefone} onChange={(e) => set("telefone", e.target.value)} required maxLength={20} />
        </div>
        {showCargo && (
          <div>
            <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              Cargo
            </label>
            <input placeholder="Ex.: sócio, diretor comercial" className={inputCls} value={f.cargo} onChange={(e) => set("cargo", e.target.value)} maxLength={80} />
          </div>
        )}
        {showEmpresa && (
          <div className="sm:col-span-2">
            <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              Empresa
            </label>
            <input className={inputCls} value={f.empresa} onChange={(e) => set("empresa", e.target.value)} maxLength={120} />
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-primary py-4 text-base font-semibold text-primary-foreground shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-cobre-dark disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {loading ? "Enviando..." : submitLabel}
        {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </button>

      <p className="pt-1 text-center text-xs text-muted-foreground">
        Ao enviar, você concorda com a{" "}
        <Link to="/privacidade" className="underline underline-offset-2 hover:text-foreground">
          Política de Privacidade
        </Link>
        . Seus dados são usados apenas para este contato. Sem spam.
      </p>
    </form>
  );
};

export default LeadCaptureForm;
