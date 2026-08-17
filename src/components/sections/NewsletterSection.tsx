import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import useUTM from "@/hooks/useUTM";
import { trackEvent } from "@/lib/analytics";

/**
 * Seção de captura da newsletter "IA que Trabalha" — usada na Home.
 * Submete para a tabela `leads` (mesmo padrão do SiteFooter) e dispara
 * newsletter_submit / lead_start.
 */
const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const started = useRef(false);
  const { toast } = useToast();
  const { hiddenFields } = useUTM();

  const handleFocus = () => {
    if (!started.current) {
      started.current = true;
      trackEvent("lead_start", { form_source: "home_newsletter" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      toast({ title: "E-mail inválido", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        nome: value,
        email: value,
        telefone: "-",
        objetivo: "Newsletter",
        segmento: hiddenFields.utm_source ? `origem: ${hiddenFields.utm_source}` : "home_newsletter",
      });
      if (error) throw error;
      trackEvent("newsletter_signup", { form_location: "home_section" });
      setDone(true);
      setEmail("");
    } catch {
      toast({
        title: "Não foi possível cadastrar",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-b border-border bg-muted/40">
      <div className="container py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Newsletter
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium leading-[1.1] text-foreground">
            IA que Trabalha — 1 implementação real por semana
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Toda semana na sua caixa de entrada: um processo real decomposto e automatizado, um
            template pronto para usar e um número de ROI. Sem hype, sem ferramenta da semana.
          </p>

          {done ? (
            <p className="mt-10 rounded-lg border border-medicao/40 bg-medicao-soft px-6 py-4 text-base font-medium text-medicao-dark">
              Inscrição confirmada. Até a próxima edição.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="home-newsletter" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="home-newsletter"
                type="email"
                required
                value={email}
                onFocus={handleFocus}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition"
              />
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-all duration-200 hover:bg-cobre-dark hover:-translate-y-0.5 disabled:opacity-60"
              >
                {loading ? "Assinando..." : "Assinar gratuitamente"}
                {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-muted-foreground">
            Gratuita. Cancele quando quiser. Sem spam. Ao assinar, você concorda com a{" "}
            <a href="/privacidade" className="underline underline-offset-2 hover:text-foreground">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
