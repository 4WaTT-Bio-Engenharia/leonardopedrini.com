import { Target, GitBranch, Users, LineChart, Wallet, Cpu, Repeat, BookOpen } from "lucide-react";

const items = [
  { icon: Target, title: "Metas claras", text: "Definição das metas de receita, vendas e produtividade para os próximos 90 dias e 12 meses." },
  { icon: GitBranch, title: "Funil comercial estruturado", text: "Desenho de funil com estágios, critérios e taxas de conversão medidas etapa a etapa." },
  { icon: Users, title: "Processo comercial", text: "Rotina de prospecção, qualificação, follow-up e fechamento — replicável e independente do dono." },
  { icon: LineChart, title: "Indicadores vivos", text: "Painel único com KPIs de comercial, financeiro e operação. Fim das planilhas soltas." },
  { icon: Wallet, title: "Financeiro essencial", text: "Organização de caixa, margem, precificação e visibilidade de receita recorrente." },
  { icon: Cpu, title: "Cockpit Traciona AI", text: "Setup inicial da IA integrada — motor invisível de organização, análise e produtividade." },
  { icon: Repeat, title: "Cadência de gestão", text: "Ritual semanal de acompanhamento com o time. Menos reunião, mais decisão." },
  { icon: BookOpen, title: "Playbooks", text: "Documentação prática de vendas, atendimento e gestão para escalar sem depender de memória." },
];

const DeliverablesSection = () => {
  return (
    <section id="entregaveis" className="py-24 md:py-32 bg-secondary/40 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            O que é implantado
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-foreground mb-6">
            Oito frentes que saem do papel{" "}
            <span className="text-muted-foreground">e entram em operação.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <i.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground font-medium mb-2">{i.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
