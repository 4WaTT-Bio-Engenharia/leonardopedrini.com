import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const ThankYou = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <SEO
        title="Aplicação recebida"
        description="Sua aplicação foi recebida e está em análise. Retorno em até 48h úteis."
        path="/obrigado"
        noindex
      />
      <div className="text-center max-w-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-8">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>

        <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
          <span className="h-px w-8 bg-primary" />
          Aplicação recebida
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight text-foreground mb-6">
          Sua aplicação está{" "}
          <span className="italic text-gradient-gold">em análise.</span>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Vamos avaliar aderência ao perfil da Sprint Traciona 90 Dias e, se
          fizer sentido, entramos em contato em até 48h úteis pelo WhatsApp
          para agendar o diagnóstico com o Leonardo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-lg mx-auto text-left">
          {[
            { n: "01", t: "Análise de aderência", d: "Perfil, momento e escopo" },
            { n: "02", t: "Contato pelo WhatsApp", d: "Até 48h úteis" },
            { n: "03", t: "Diagnóstico executivo", d: "60 min com o Leonardo" },
          ].map((s) => (
            <div key={s.n} className="p-4 rounded-md bg-card border border-border">
              <div className="font-display text-2xl text-primary/60 mb-1">{s.n}</div>
              <div className="text-sm font-medium text-foreground">{s.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.d}</div>
            </div>
          ))}
        </div>

        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
