const companies = [
  {
    name: "4WaTT Tech",
    sector: "Deeptech · Sustentabilidade",
    description:
      "Deeptech que transforma qualquer tipo de lixo em biocombustível. Limpa o planeta e garante o futuro das próximas gerações.",
  },
  {
    name: "4W Energia",
    sector: "Energia por Assinatura",
    description:
      "Energia com desconto no modelo de assinatura, acessível a qualquer pessoa — física ou jurídica.",
  },
  {
    name: "Traciona AI",
    sector: "IA para PMEs",
    description:
      "Sistema completo para o micro e pequeno empreendedor que quadriplica o crescimento em até 18 meses com IA integrada que não alucina — escale com segurança e garantia.",
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
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-foreground mb-6">
            Não sou consultor de teoria.{" "}
            <span className="text-muted-foreground">
              Sou operador de negócios reais.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fundei e opero três empresas em setores distintos — deeptech,
            energia e inteligência artificial. Toda recomendação aqui vem de
            dentro do jogo, não de fora dele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companies.map((c) => (
            <div
              key={c.name}
              className="glass rounded-3xl p-8 md:p-10 border border-border/60 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 shadow-soft group"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-5">
                {c.sector}
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
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
