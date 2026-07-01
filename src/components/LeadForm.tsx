import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Clock, ShieldCheck, Target } from "lucide-react";

const leadSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
});

const LeadForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = leadSchema.safeParse({ nome, email, telefone });
    if (!parsed.success) {
      toast({
        title: "Erro",
        description: parsed.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("leads").insert({
        nome: parsed.data.nome,
        email: parsed.data.email,
        telefone: parsed.data.telefone,
      });

      if (error) throw error;

      // TODO: Integração com Google Apps Script (URL a ser fornecida)
      // try {
      //   await fetch(GOOGLE_SCRIPT_URL, {
      //     method: "POST", mode: "no-cors",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(parsed.data),
      //   });
      // } catch {}

      navigate("/obrigado");
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Não conseguimos registrar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="py-24 md:py-32 bg-secondary/40 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
              <span className="h-px w-8 bg-primary" />
              Sessão Estratégica Gratuita
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-foreground mb-6">
              60 minutos que podem redefinir{" "}
              <span className="italic text-gradient-gold">
                os próximos 18 meses do seu negócio.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Uma sessão executiva, individual, com foco no seu negócio real —
              seus números, seu mercado, seus gargalos. Você sai com um plano
              claro, não com um pitch.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Target,
                  title: "Diagnóstico executivo",
                  text: "Análise de comercial, financeiro, operação e potencial de IA aplicada.",
                },
                {
                  icon: Clock,
                  title: "60 minutos, 1:1",
                  text: "Conversa direta comigo. Sem SDR, sem apresentação genérica, sem enrolação.",
                },
                {
                  icon: ShieldCheck,
                  title: "Sem compromisso",
                  text: "Se fizer sentido trabalharmos juntos, avançamos. Se não, você sai com valor.",
                },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-lg text-foreground font-medium mb-1">
                      {f.title}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {f.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-lg p-8 md:p-10 shadow-premium">
              <div className="mb-8">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">
                  Aplicação
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                  Solicitar minha sessão
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    placeholder="Como devemos te chamar"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3.5 rounded-md bg-input text-foreground border border-border placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    E-mail corporativo
                  </label>
                  <input
                    type="email"
                    placeholder="seu.email@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={255}
                    className="w-full px-4 py-3.5 rounded-md bg-input text-foreground border border-border placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                    maxLength={20}
                    className="w-full px-4 py-3.5 rounded-md bg-input text-foreground border border-border placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-semibold text-base py-4 rounded-md shadow-gold hover:shadow-[0_15px_50px_-10px_hsl(40_55%_45%/0.5)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0 mt-2"
                >
                  {loading ? "Enviando..." : "Agendar Diagnóstico Gratuito"}
                  {!loading && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground pt-2">
                  Suas informações estão 100% protegidas. Não fazemos spam.
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
