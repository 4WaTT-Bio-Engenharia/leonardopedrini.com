const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Raio-x completo de comercial, financeiro, operação e time. Identificamos gargalos reais que travam o crescimento.",
  },
  {
    number: "02",
    title: "Estratégia",
    text: "Definição de posicionamento, mercado prioritário, modelo de crescimento e plano executivo de 12–18 meses.",
  },
  {
    number: "03",
    title: "Execução",
    text: "Estruturação comercial, gestão financeira, processos e cadência de gestão. Implementamos junto com seu time.",
  },
  {
    number: "04",
    title: "Indicadores",
    text: "Painel único com KPIs comerciais, financeiros e operacionais. Decisão orientada por dado, não por sensação.",
  },
  {
    number: "05",
    title: "Escala com IA",
    text: "Aplicação de Inteligência Artificial em prospecção, atendimento, análise e operação. Produtividade em outro patamar.",
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Método proprietário
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-foreground mb-6">
            Um sistema operacional de crescimento{" "}
            <span className="italic text-gradient-gold">em cinco fases.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Consultorias tradicionais entregam relatório. Nós entregamos
            operação em funcionamento — com IA aplicada, indicadores vivos e
            time treinado para sustentar o crescimento.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {steps.map((step, i) => (
              <div key={step.number} className="relative lg:pt-8">
                <div className="hidden lg:flex absolute top-14 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="lg:pt-8 lg:text-center">
                  <div className="font-display text-5xl md:text-6xl text-primary/30 font-medium mb-3 lg:mt-2">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed lg:px-2">
                    {step.text}
                  </p>
                </div>

                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-16 bottom-0 w-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
