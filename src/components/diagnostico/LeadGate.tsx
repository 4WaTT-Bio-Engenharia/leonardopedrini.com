import { useRef, useState } from "react";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import useUTM, { UTM_KEYS } from "@/hooks/useUTM";
import { trackEvent } from "@/lib/analytics";

const schema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "WhatsApp inválido").max(20),
  cargo: z.string().trim().max(80).optional().or(z.literal("")),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  tamanho: z.string().min(1, "Selecione o tamanho"),
  desafio: z.string().min(1, "Selecione o principal desafio"),
});

const inputCls =
  "w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors duration-300 focus:border-cobre focus:outline-none focus:ring-1 focus:ring-cobre/60";

const labelCls = "mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground";

interface LeadGateProps {
  /** Score geral 0–4, já calculado — gravado junto ao lead. */
  overall: number;
  levelName: string;
  onSuccess: (nome: string) => void;
}

/**
 * Tela de captura ANTES do resultado do AI Work Audit.
 * Grava na tabela `leads` (mesmo schema do LeadForm): campos extras
 * compactados em colunas existentes (site/segmento/objetivo).
 * Eventos: lead_start (primeiro foco), lead_submit (sucesso).
 */
const LeadGate = ({ overall, levelName, onSuccess }: LeadGateProps) => {
  const [f, setF] = useState({
    nome: "", email: "", telefone: "", cargo: "", empresa: "", tamanho: "", desafio: "",
  });
  const [loading, setLoading] = useState(false);
  const started = useRef(false);
  const { toast } = useToast();
  const { hiddenFields } = useUTM();

  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }));

  const handleFocus = () => {
    if (!started.current) {
      started.current = true;
      trackEvent("lead_start", { form_id: "ai_work_audit_gate", form_type: "audit" });
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
        "origem: ai_work_audit",
        hiddenFields.utm_source && `utm_source: ${hiddenFields.utm_source}`,
        hiddenFields.utm_medium && `utm_medium: ${hiddenFields.utm_medium}`,
        hiddenFields.utm_campaign && `utm_campaign: ${hiddenFields.utm_campaign}`,
      ]
        .filter(Boolean)
        .join(" | ");

      const { error } = await supabase.from("leads").insert({
        nome: parsed.data.nome,
        email: parsed.data.email,
        telefone: parsed.data.telefone,
        empresa: parsed.data.empresa || null,
        site: [parsed.data.cargo, utmNote].filter(Boolean).join(" · ").slice(0, 200) || null,
        segmento: "ai_work_audit",
        tamanho_equipe: parsed.data.tamanho,
        gargalo: parsed.data.desafio,
        objetivo: `AI Work Audit | score ${overall.toFixed(1)}/4 | ${levelName}`,
      });
      if (error) throw error;

      trackEvent("lead_submit", {
        form_id: "ai_work_audit_gate",
        form_type: "audit",
        ...Object.fromEntries(UTM_KEYS.map((k) => [k, hiddenFields[k] || undefined])),
      });

      supabase.functions
        .invoke("notify-lead", { body: { ...parsed.data, origem: "ai_work_audit" } })
        .catch(() => {});

      onSuccess(parsed.data.nome);
    } catch {
      toast({ title: "Erro ao enviar", description: "Não conseguimos registrar seus dados. Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-9 text-center">
        <div className="eyebrow mb-5 justify-center text-cobre-dark">
          <span className="h-px w-10 bg-cobre-dark/70" />
          Relatório pronto
          <span className="h-px w-10 bg-cobre-dark/70" />
        </div>
        <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground md:text-5xl">
          Seu diagnóstico está calculado. Para onde envio o relatório completo?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          O resultado aparece na tela logo em seguida — o e-mail recebe a versão completa em PDF.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        onFocusCapture={handleFocus}
        className="space-y-4 rounded-lg border border-border bg-card p-7 shadow-premium md:p-10"
      >
        {Object.entries(hiddenFields).map(([k, v]) => (
          <input key={k} type="hidden" name={k} value={v} />
        ))}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Nome completo</label>
            <input className={inputCls} value={f.nome} onChange={(e) => set("nome", e.target.value)} required maxLength={100} />
          </div>
          <div>
            <label className={labelCls}>E-mail corporativo</label>
            <input type="email" className={inputCls} value={f.email} onChange={(e) => set("email", e.target.value)} required maxLength={255} />
          </div>
          <div>
            <label className={labelCls}>WhatsApp</label>
            <input type="tel" placeholder="(00) 00000-0000" className={inputCls} value={f.telefone} onChange={(e) => set("telefone", e.target.value)} required maxLength={20} />
          </div>
          <div>
            <label className={labelCls}>Cargo</label>
            <input placeholder="Ex.: sócio, diretor comercial" className={inputCls} value={f.cargo} onChange={(e) => set("cargo", e.target.value)} maxLength={80} />
          </div>
          <div>
            <label className={labelCls}>Empresa</label>
            <input className={inputCls} value={f.empresa} onChange={(e) => set("empresa", e.target.value)} maxLength={120} />
          </div>
          <div>
            <label className={labelCls}>Tamanho da empresa</label>
            <select className={inputCls} value={f.tamanho} onChange={(e) => set("tamanho", e.target.value)} required>
              <option value="">Selecione</option>
              <option>1–2 pessoas</option>
              <option>3–10 pessoas</option>
              <option>11–25 pessoas</option>
              <option>26–50 pessoas</option>
              <option>Mais de 50</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Principal desafio hoje</label>
            <select className={inputCls} value={f.desafio} onChange={(e) => set("desafio", e.target.value)} required>
              <option value="">Selecione</option>
              <option>Vendas e geração de demanda</option>
              <option>Atendimento e relacionamento com clientes</option>
              <option>Operação e backoffice</option>
              <option>Financeiro e gestão de números</option>
              <option>Marketing e produção de conteúdo</option>
              <option>Rotina e produtividade da equipe</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-cobre py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-grafite-900 shadow-gold transition-all duration-300 ease-luxury hover:-translate-y-0.5 hover:bg-cobre-light disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {loading ? "Gerando relatório..." : "Ver meu resultado"}
          {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
        </button>

        <p className="pt-1 text-center text-xs text-muted-foreground">
          Ao enviar, você concorda com a{" "}
          <a href="/privacidade" className="underline underline-offset-2 hover:text-foreground">
            Política de Privacidade
          </a>
          . Seus dados são usados apenas para gerar e enviar o relatório. Sem spam.
        </p>
      </form>
    </div>
  );
};

export default LeadGate;
