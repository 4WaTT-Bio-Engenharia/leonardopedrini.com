const companies = [
  {
    name: "4Watt Tech",
    sector: "Tecnologia · Energia",
    description:
      "Plataforma tecnológica de gestão e monitoramento para o setor de infraestrutura energética.",
  },
  {
    name: "4W Energia",
    sector: "Infraestrutura · Energia",
    description:
      "Operação de projetos de energia com pipeline bilionário, estruturada do zero até escala nacional.",
  },
  {
    name: "TracionaAI",
    sector: "Inteligência Artificial",
    description:
      "Ecossistema de IA aplicada aos processos comerciais, financeiros e operacionais de PMEs.",
  },
];

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Autoridade construída na prática
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-foreground mb-6">
            Não sou consultor de teoria.{" "}
            <span className="italic text-muted-foreground">
              Sou operador de negócios reais.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Construí, validei e escalei empresas em setores diferentes.
            Estruturei áreas comerciais, implementei tecnologia de crescimento
            e operei projetos de infraestrutura de grande porte. Toda
            recomendação aqui vem de dentro do jogo — não de fora dele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
          {companies.map((c) => (
            <div
              key={c.name}
              className="bg-card p-8 md:p-10 hover:bg-secondary transition-colors duration-500 group"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-4">
                {c.sector}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                {c.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
