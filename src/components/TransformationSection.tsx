const before = [
  "Receita imprevisível, dependente de indicação",
  "Dono no operacional, sem tempo para estratégia",
  "Leads dispersos no WhatsApp e no e-mail",
  "Time sem clareza de meta e sem rotina",
  "Decisões pela sensação, não pelo número",
  "Ferramentas soltas, sem integração",
];

const after = [
  "Receita mais previsível, alimentada por funil",
  "Dono fora da operação, focado em crescimento",
  "Funil único, com estágios e cadência",
  "Time com meta clara e ritual semanal",
  "Painel de indicadores atualizado e vivo",
  "IA integrada, organizando gestão e comercial",
];

const TransformationSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Transformação
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-foreground mb-6">
            Antes da Sprint.{" "}
            <span className="italic text-gradient-gold">Depois dos 90 dias.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card/50 border border-border rounded-3xl p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-medium">Hoje na sua operação</div>
            <ul className="space-y-4">
              {before.map((t) => (
                <li key={t} className="text-muted-foreground leading-relaxed pl-6 relative">
                  <span className="absolute left-0 top-2.5 w-3 h-px bg-muted-foreground/40" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-primary/30 rounded-3xl p-8 md:p-10 shadow-premium">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-6 font-medium">Depois dos 90 dias</div>
            <ul className="space-y-4">
              {after.map((t) => (
                <li key={t} className="text-foreground leading-relaxed pl-6 relative">
                  <span className="absolute left-0 top-2.5 w-3 h-px bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
