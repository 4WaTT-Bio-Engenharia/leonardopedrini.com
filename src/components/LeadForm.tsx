import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Clock, ShieldCheck, Target } from "lucide-react";

const leadSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "WhatsApp inválido").max(20),
  empresa: z.string().trim().min(1, "Empresa é obrigatória").max(120),
  site: z.string().trim().max(200).optional().or(z.literal("")),
  segmento: z.string().trim().min(1, "Segmento é obrigatório").max(120),
  faturamento: z.string().min(1, "Selecione uma faixa"),
  tamanho_equipe: z.string().min(1, "Selecione o tamanho"),
  gargalo: z.string().min(1, "Selecione um gargalo"),
  usa_crm: z.string().min(1, "Selecione uma opção"),
  objetivo: z.string().min(1, "Selecione um objetivo"),
});

const inputCls =
  "w-full px-4 py-3.5 rounded-md bg-input text-foreground border border-border placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition";

const LeadForm = () => {
  const [f, setF] = useState({
    nome: "", email: "", telefone: "", empresa: "", site: "",
    segmento: "", faturamento: "", tamanho_equipe: "", gargalo: "",
    usa_crm: "", objetivo: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const set = (k: string, v: string) => setF((s) => ({ ...s, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(f);
    if (!parsed.success) {
      toast({ title: "Verifique os campos", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        nome: parsed.data.nome,
        email: parsed.data.email,
        telefone: parsed.data.telefone,
        empresa: parsed.data.empresa,
        site: parsed.data.site || null,
        segmento: parsed.data.segmento,
        faturamento: parsed.data.faturamento,
        tamanho_equipe: parsed.data.tamanho_equipe,
        gargalo: parsed.data.gargalo,
        usa_crm: parsed.data.usa_crm,
        objetivo: parsed.data.objetivo,
      });
      if (error) throw error;

      // Dispara notificação por e-mail (lead + interno). Não bloqueia a conversão.
      supabase.functions.invoke("notify-lead", { body: parsed.data }).catch(() => {});

      navigate("/obrigado");
    } catch {
      toast({ title: "Erro ao enviar", description: "Não conseguimos registrar sua aplicação. Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
              <span className="h-px w-8 bg-primary" />
              Aplicação para a Sprint
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-foreground mb-6">
              Aplique para a Sprint{" "}
              <span className="italic text-gradient-gold">Traciona 90 Dias.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              A Sprint é conduzida com um número limitado de empresas por trimestre.
              Preencha a aplicação — se houver aderência ao seu momento, agendamos o diagnóstico.
            </p>

            <div className="space-y-5">
              {[
                { icon: Target, title: "Aplicação, não venda", text: "Analisamos o seu perfil antes de qualquer conversa comercial." },
                { icon: Clock, title: "Retorno em até 48h", text: "Se houver aderência, entramos em contato pelo WhatsApp para agendar o diagnóstico." },
                { icon: ShieldCheck, title: "Dados protegidos", text: "Suas informações são usadas apenas para qualificar a aplicação." },
              ].map((i) => (
                <div key={i.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-lg text-foreground font-medium mb-1">{i.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{i.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-card border border-border rounded-lg p-8 md:p-10 shadow-premium">
              <div className="mb-8">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Formulário de aplicação</div>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground">Conte sobre o seu negócio</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Nome completo</label>
                    <input className={inputCls} value={f.nome} onChange={(e) => set("nome", e.target.value)} required maxLength={100} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">E-mail corporativo</label>
                    <input type="email" className={inputCls} value={f.email} onChange={(e) => set("email", e.target.value)} required maxLength={255} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">WhatsApp</label>
                    <input type="tel" placeholder="(00) 00000-0000" className={inputCls} value={f.telefone} onChange={(e) => set("telefone", e.target.value)} required maxLength={20} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Empresa</label>
                    <input className={inputCls} value={f.empresa} onChange={(e) => set("empresa", e.target.value)} required maxLength={120} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Site ou Instagram</label>
                    <input placeholder="site.com.br ou @suaempresa" className={inputCls} value={f.site} onChange={(e) => set("site", e.target.value)} maxLength={200} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Segmento</label>
                    <input placeholder="Ex.: agência de marketing, contabilidade, engenharia..." className={inputCls} value={f.segmento} onChange={(e) => set("segmento", e.target.value)} required maxLength={120} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Faturamento mensal</label>
                    <select className={inputCls} value={f.faturamento} onChange={(e) => set("faturamento", e.target.value)} required>
                      <option value="">Selecione</option>
                      <option>Até R$ 30 mil</option>
                      <option>R$ 30 mil – R$ 100 mil</option>
                      <option>R$ 100 mil – R$ 300 mil</option>
                      <option>Acima de R$ 300 mil</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Tamanho da equipe</label>
                    <select className={inputCls} value={f.tamanho_equipe} onChange={(e) => set("tamanho_equipe", e.target.value)} required>
                      <option value="">Selecione</option>
                      <option>1–2 pessoas</option>
                      <option>3–10 pessoas</option>
                      <option>11–25 pessoas</option>
                      <option>Mais de 25</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Principal gargalo hoje</label>
                    <select className={inputCls} value={f.gargalo} onChange={(e) => set("gargalo", e.target.value)} required>
                      <option value="">Selecione</option>
                      <option>Vendas inconsistentes</option>
                      <option>Dependência do dono</option>
                      <option>Funil e processo comercial</option>
                      <option>Gestão financeira e números</option>
                      <option>Rotina e produtividade do time</option>
                      <option>Marketing e geração de leads</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Usa CRM?</label>
                    <select className={inputCls} value={f.usa_crm} onChange={(e) => set("usa_crm", e.target.value)} required>
                      <option value="">Selecione</option>
                      <option>Sim</option>
                      <option>Não</option>
                      <option>Uso planilha</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Objetivo</label>
                    <select className={inputCls} value={f.objetivo} onChange={(e) => set("objetivo", e.target.value)} required>
                      <option value="">Selecione</option>
                      <option>Quero o diagnóstico</option>
                      <option>Quero aplicar para a Sprint</option>
                      <option>Quero falar com um especialista</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-semibold text-base py-4 rounded-md shadow-gold hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0 mt-2"
                >
                  {loading ? "Enviando..." : "Enviar aplicação"}
                  {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>

                <p className="text-center text-xs text-muted-foreground pt-2">
                  Suas informações são usadas apenas para qualificar a aplicação. Sem spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
