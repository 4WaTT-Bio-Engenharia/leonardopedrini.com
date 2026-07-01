import {
  TrendingDown,
  BarChart3,
  Users,
  Wallet,
  HelpCircle,
  Activity,
} from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Crescimento sem controle",
    text: "Sua empresa cresceu, mas a operação não acompanhou. Cada mês parece mais caótico que o anterior.",
  },
  {
    icon: BarChart3,
    title: "Falta de previsibilidade",
    text: "Você não sabe quanto vai faturar no próximo trimestre. O planejamento é reativo, não estratégico.",
  },
  {
    icon: Users,
    title: "Comercial inconsistente",
    text: "Vendas dependem de você ou de poucas pessoas-chave. Não há processo replicável nem previsão de pipeline.",
  },
  {
    icon: Wallet,
    title: "Caixa apertado",
    text: "Fatura bem, mas o dinheiro some. Não há visibilidade sobre margem real, ponto de equilíbrio ou reserva.",
  },
  {
    icon: HelpCircle,
    title: "Decisões por achismo",
    text: "Grandes escolhas são tomadas no feeling. Sem dado, sem modelo financeiro, sem cenário estruturado.",
  },
  {
    icon: Activity,
    title: "Ausência de indicadores",
    text: "Você não tem um painel único que mostre saúde comercial, financeira e operacional em tempo real.",
  },
];

const ProblemsSection = () => {
  return (
    <section id="problemas" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Diagnóstico
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-foreground mb-6">
            Se qualquer um destes pontos parece familiar,{" "}
            <span className="italic text-gradient-gold">
              sua empresa cresceu sem gestão estruturada.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            É o padrão de negócios entre R$ 20 mil e R$ 500 mil/mês que
            atingiram um teto operacional e agora precisam de um sistema de
            crescimento — não de mais esforço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group relative p-8 rounded-lg bg-card border border-border/60 hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
