import { AlertTriangle, TrendingDown, Flame, MessageSquareX, GitBranch, BarChart3 } from "lucide-react";

const pains = [
  { icon: TrendingDown, title: "Vendas inconsistentes", text: "Mês bom, mês ruim. A receita depende de sorte, sazonalidade e indicação — não de processo." },
  { icon: AlertTriangle, title: "Dependência do dono", text: "Toda decisão comercial passa por você. Se você para, a operação para junto." },
  { icon: Flame, title: "Rotina de apagar incêndio", text: "O dia inteiro reagindo a urgências, sem tempo para pensar estratégia ou olhar os números." },
  { icon: MessageSquareX, title: "Leads perdidos no WhatsApp", text: "Contatos que somem em conversas antigas. Sem funil, sem cadência, sem visibilidade real." },
  { icon: GitBranch, title: "Funil desorganizado", text: "Você não sabe quantas oportunidades tem, em que estágio estão, nem quanto pode fechar no mês." },
  { icon: BarChart3, title: "Falta de clareza sobre números", text: "Margem, caixa, custo de aquisição, receita recorrente. Decisões tomadas pela sensação, não pelo dado." },
];

const PainPointsSection = () => {
  return (
    <section id="dores" className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            O que trava o seu crescimento
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-foreground mb-6">
            Sua empresa cresce no esforço.{" "}
            <span className="text-muted-foreground">Faltam previsibilidade e rotina.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Empresas de serviços entre R$ 30 mil e R$ 300 mil por mês costumam bater no mesmo teto.
            Não é falta de esforço — é falta de estrutura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div key={p.title} className="glass rounded-3xl p-8 border border-border/60 hover:border-primary/40 transition-all duration-500 shadow-soft">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3 font-medium">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
