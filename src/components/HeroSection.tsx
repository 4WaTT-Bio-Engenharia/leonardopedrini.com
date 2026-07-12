import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/50" />

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Sprint Traciona · 90 Dias
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground mb-8">
            Organize gestão e vendas para{" "}
            <span className="italic text-gradient-gold">
              crescer com previsibilidade em 90 dias.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            Um sistema operacional de crescimento para pequenas empresas de
            serviços — com IA aplicada à gestão e ao comercial. Menos
            improviso, mais rotina, funil e números sob controle.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold text-base px-8 py-4 rounded-full shadow-gold hover:shadow-[0_15px_50px_-10px_hsl(40_55%_45%/0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Quero meu diagnóstico
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => document.getElementById("sprint")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-primary/40"
            >
              Como funciona a Sprint de 90 dias
            </button>
          </div>

          <div className="mt-16 pt-8 border-t border-border/40 grid grid-cols-3 gap-6 max-w-2xl">
            <div>
              <div className="font-display text-3xl md:text-4xl text-primary font-medium">90</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Dias de implantação</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-primary font-medium">1:1</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Condução com o fundador</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl text-primary font-medium">4</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Fases estruturadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
