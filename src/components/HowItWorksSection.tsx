const phases = [
  { number: "01", title: "Diagnóstico", days: "Dias 1–15", text: "Raio-x da operação: comercial, financeiro, time e gargalos. Metas e escopo da Sprint definidos com o dono." },
  { number: "02", title: "Estruturação", days: "Dias 16–45", text: "Desenho do funil, do processo comercial, dos indicadores e do financeiro essencial. Cockpit Traciona AI configurado." },
  { number: "03", title: "Ativação", days: "Dias 46–75", text: "Implantação com o time: cadência, playbooks, rotina de prospecção e follow-up. Ajustes semanais junto ao dono." },
  { number: "04", title: "Ritmo", days: "Dias 76–90", text: "Consolidação da rotina, do painel e da autonomia do time. Entrega do sistema operando sem dependência do fundador." },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-secondary/40 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Como funciona
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-foreground mb-6">
            Quatro fases,{" "}
            <span className="italic text-gradient-gold">noventa dias.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Um processo estruturado, com entregas previsíveis e execução acompanhada de perto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p) => (
            <div key={p.number} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all">
              <div className="font-display text-5xl text-primary/30 font-medium mb-3">{p.number}</div>
              <div className="text-xs uppercase tracking-wider text-primary mb-2">{p.days}</div>
              <h3 className="font-display text-2xl text-foreground font-medium mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
