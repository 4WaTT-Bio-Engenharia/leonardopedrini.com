import { ArrowRight } from "lucide-react";

const SprintOfferSection = () => {
  const scrollToForm = () => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="sprint" className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium justify-center">
            <span className="h-px w-8 bg-primary" />
            A oferta
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-foreground mb-8">
            Sprint Traciona{" "}
            <span className="italic text-gradient-gold">90 Dias.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            Uma implantação guiada de um sistema operacional de crescimento —
            focada em <span className="text-foreground font-medium">clareza de gestão, previsibilidade comercial e disciplina de execução</span>.
            Não é consultoria aberta. Não é mentoria genérica. Não é projeto de IA solto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {[
              { label: "Duração", value: "90 dias" },
              { label: "Formato", value: "Implantação guiada 1:1" },
              { label: "Foco", value: "Gestão + Comercial + IA" },
            ].map((i) => (
              <div key={i.label} className="glass rounded-2xl p-6 border border-border/60">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{i.label}</div>
                <div className="font-display text-xl text-foreground font-medium">{i.value}</div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToForm}
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold text-base px-8 py-4 rounded-full shadow-gold hover:-translate-y-0.5 transition-all duration-300"
          >
            Quero aplicar para a Sprint
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SprintOfferSection;
