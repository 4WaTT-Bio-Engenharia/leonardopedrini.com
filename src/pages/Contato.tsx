import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ArrowRight, Calendar, Mail, MessageCircle } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import useUTM from "@/hooks/useUTM";
import { trackEvent } from "@/lib/analytics";

const schema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  motivo: z.enum(["comercial", "palestra", "parceria", "imprensa"]),
  mensagem: z.string().trim().min(10, "Escreva um pouco de contexto (mín. 10 caracteres)").max(2000),
});

const motivoLabels: Record<string, string> = {
  comercial: "Comercial",
  palestra: "Palestra",
  parceria: "Parceria",
  imprensa: "Imprensa",
};

const inputCls =
  "w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition";

const labelCls = "mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground";

const Contato = () => {
  const [f, setF] = useState({ nome: "", email: "", empresa: "", motivo: "comercial", mensagem: "" });
  const [loading, setLoading] = useState(false);
  const started = useRef(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { hiddenFields } = useUTM();

  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }));

  const handleFocus = () => {
    if (!started.current) {
      started.current = true;
      trackEvent("lead_start", { form_source: "contato" });
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
        "origem: contato",
        hiddenFields.utm_source && `utm_source: ${hiddenFields.utm_source}`,
        hiddenFields.utm_medium && `utm_medium: ${hiddenFields.utm_medium}`,
        hiddenFields.utm_campaign && `utm_campaign: ${hiddenFields.utm_campaign}`,
      ]
        .filter(Boolean)
        .join(" | ");

      // Compatível com o schema da tabela `leads` (mesma base do LeadCaptureForm).
      const { error } = await supabase.from("leads").insert({
        nome: parsed.data.nome,
        email: parsed.data.email,
        telefone: "-",
        empresa: parsed.data.empresa || null,
        site: [parsed.data.mensagem.slice(0, 400), utmNote].filter(Boolean).join(" · "),
        segmento: `contato:${parsed.data.motivo}`,
        objetivo: motivoLabels[parsed.data.motivo],
      });
      if (error) throw error;

      trackEvent("lead_submit", {
        form_source: "contato",
        motivo: parsed.data.motivo,
        utm_source: hiddenFields.utm_source || undefined,
        utm_medium: hiddenFields.utm_medium || undefined,
        utm_campaign: hiddenFields.utm_campaign || undefined,
      });

      supabase.functions.invoke("notify-lead", { body: { ...parsed.data, origem: "contato" } }).catch(() => {});
      navigate("/obrigado");
    } catch {
      toast({ title: "Erro ao enviar", description: "Não conseguimos enviar sua mensagem. Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout
      title="Contato — Leonardo Vieira Pedrini"
      description="Fale com Leonardo: consultoria, palestras, parcerias e imprensa. Resposta em até 48h úteis."
      path="/contato"
      flush
    >
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Coluna de contexto + canais */}
            <div className="lg:col-span-2">
              <div className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Contato
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.1] text-foreground">
                Fale comigo
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Comercial, palestras, parcerias ou imprensa — escolha o motivo e escreva com
                contexto. Resposta em até 48h úteis.
              </p>

              <div className="mt-12 space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <div className="text-sm font-semibold text-foreground">WhatsApp</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Prefere direto? Canal de WhatsApp em configuração — por ora, o formulário ao
                      lado é o caminho mais rápido.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                  <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Agendar uma conversa</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Agenda online em configuração. Se preferir call, mencione no formulário que
                      retorno com horários.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Prazo de resposta</div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Toda mensagem é lida e respondida em até 48h úteis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                onFocusCapture={handleFocus}
                className="space-y-5 rounded-lg border border-border bg-card p-8 md:p-10"
              >
                {Object.entries(hiddenFields).map(([k, v]) => (
                  <input key={k} type="hidden" name={k} value={v} />
                ))}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contato-nome" className={labelCls}>Nome</label>
                    <input id="contato-nome" className={inputCls} value={f.nome} onChange={(e) => set("nome", e.target.value)} required maxLength={100} />
                  </div>
                  <div>
                    <label htmlFor="contato-email" className={labelCls}>E-mail</label>
                    <input id="contato-email" type="email" className={inputCls} value={f.email} onChange={(e) => set("email", e.target.value)} required maxLength={255} />
                  </div>
                  <div>
                    <label htmlFor="contato-empresa" className={labelCls}>Empresa</label>
                    <input id="contato-empresa" className={inputCls} value={f.empresa} onChange={(e) => set("empresa", e.target.value)} maxLength={120} />
                  </div>
                  <div>
                    <label htmlFor="contato-motivo" className={labelCls}>Motivo</label>
                    <select
                      id="contato-motivo"
                      className={inputCls}
                      value={f.motivo}
                      onChange={(e) => set("motivo", e.target.value)}
                    >
                      {Object.entries(motivoLabels).map(([value, label]) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="contato-mensagem" className={labelCls}>Mensagem</label>
                    <textarea
                      id="contato-mensagem"
                      rows={6}
                      className={inputCls}
                      placeholder="Contexto ajuda: o que você precisa, prazo, tamanho da operação."
                      value={f.mensagem}
                      onChange={(e) => set("mensagem", e.target.value)}
                      required
                      maxLength={2000}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-primary py-4 text-base font-semibold text-primary-foreground shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-cobre-dark disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loading ? "Enviando..." : "Enviar"}
                  {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </button>

                <p className="pt-1 text-center text-xs text-muted-foreground">
                  Ao enviar, você concorda com a{" "}
                  <a href="/privacidade" className="underline underline-offset-2 hover:text-foreground">
                    Política de Privacidade
                  </a>
                  . Seus dados são usados apenas para responder ao seu contato.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contato;
