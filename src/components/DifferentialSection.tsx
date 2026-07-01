import { X, Check } from "lucide-react";

const traditional = [
  "Entregam relatório e vão embora",
  "Consultores acadêmicos sem operação real",
  "Modelos genéricos aplicados a qualquer empresa",
  "IA como buzzword em uma apresentação",
  "Foco em diagnóstico, não em resultado",
];

const ours = [
  "Construímos junto o sistema de crescimento",
  "Founders que operaram negócios de verdade",
  "Estratégia sob medida com base em dados do seu setor",
  "IA implementada nos processos, com ROI mensurável",
  "Métrica única: faturamento e margem crescendo",
];

const DifferentialSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Diferencial
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-foreground">
            Consultoria tradicional entrega slides.{" "}
            <span className="italic text-gradient-gold">
              Nós entregamos sistema.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="p-8 md:p-10 rounded-lg bg-card/50 border border-border/50">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Consultorias tradicionais
            </div>
            <ul className="space-y-4">
              {traditional.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-4 h-4 mt-1 flex-shrink-0 text-destructive/70" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-10 rounded-lg bg-gradient-to-br from-card to-card/50 border border-primary/40 shadow-premium">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-6">
              O que fazemos
            </div>
            <ul className="space-y-4">
              {ours.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
