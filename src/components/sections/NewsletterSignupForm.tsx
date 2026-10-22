import { useRef, useState } from "react";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().trim().email("E-mail inválido").max(255),
});

interface NewsletterSignupFormProps {
  /** Identificador da origem (ex.: "newsletter_page", "insights_footer"). */
  source: string;
  submitLabel?: string;
  className?: string;
  /** Texto de apoio abaixo do botão. */
  note?: string;
}

/**
 * Captura simples de e-mail para a newsletter "IA que Trabalha".
 * Grava na tabela `leads` (segmento = source) e dispara `newsletter_signup`.
 */
const NewsletterSignupForm = ({
  source,
  submitLabel = "Assinar gratuitamente",
  className,
  note = "1 e-mail por semana. Sem spam. Cancele quando quiser.",
}: NewsletterSignupFormProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const started = useRef(false);
  const { toast } = useToast();

  const handleFocus = () => {
    if (!started.current) {
      started.current = true;
      trackEvent("lead_start", { form_source: source });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      toast({ title: "Verifique o e-mail", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert({
        nome: parsed.data.email.split("@")[0],
        email: parsed.data.email,
        telefone: "newsletter",
        segmento: source,
        objetivo: "Assinatura da newsletter Leonardo Pedrini",
      });
      if (error) throw error;
      trackEvent("newsletter_signup", { source_form: source });
      setDone(true);
    } catch {
      toast({ title: "Erro ao assinar", description: "Não conseguimos registrar seu e-mail. Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className={cn("rounded-md border border-medicao/30 bg-medicao-soft/40 px-6 py-5 text-center", className)}>
        <p className="font-display text-lg font-medium text-foreground">Inscrição confirmada.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          A próxima edição chega na sua caixa de entrada esta semana.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`newsletter-email-${source}`} className="sr-only">
          Seu melhor e-mail
        </label>
        <input
          id={`newsletter-email-${source}`}
          type="email"
          required
          maxLength={255}
          value={email}
          onFocus={handleFocus}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          className="w-full flex-1 rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobre-dark disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {loading ? "Assinando..." : submitLabel}
          {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
        </button>
      </div>
      {note && <p className="mt-3 text-center text-xs text-muted-foreground sm:text-left">{note}</p>}
      <p className="mt-2 text-center text-xs text-muted-foreground sm:text-left">
        Ao assinar, você concorda com a{" "}
        <a href="/privacidade" className="underline underline-offset-2 hover:text-foreground">
          Política de Privacidade
        </a>
        .
      </p>
    </form>
  );
};

export default NewsletterSignupForm;
