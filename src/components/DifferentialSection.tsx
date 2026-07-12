const rows = [
  { label: "Foco", others: "Diagnóstico solto ou aulas gravadas", sprint: "Implantação guiada dentro da sua operação" },
  { label: "Prazo", others: "Meses indefinidos ou curso vitalício", sprint: "90 dias, com marcos e entregas claras" },
  { label: "Condução", others: "Consultor júnior ou plataforma sem gente", sprint: "1:1 com o founder e operador de negócios reais" },
  { label: "Escopo", others: "Amplo demais ou restrito a uma frente", sprint: "Gestão, comercial, financeiro e IA integrados" },
  { label: "Resultado", others: "Relatório, apostila ou ferramenta solta", sprint: "Rotina, funil e indicadores em funcionamento" },
];

const DifferentialSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Diferenciais
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-foreground mb-6">
            Sprint estruturada,{" "}
            <span className="text-muted-foreground">não consultoria genérica.</span>
          </h2>
        </div>

        <div className="bg-card border border-border rounded-3xl overflow-hidden">
          <div className="grid grid-cols-3 border-b border-border bg-secondary/40">
            <div className="p-5 text-xs uppercase tracking-wider text-muted-foreground font-medium" />
            <div className="p-5 text-xs uppercase tracking-wider text-muted-foreground font-medium">Outras opções</div>
            <div className="p-5 text-xs uppercase tracking-wider text-primary font-medium">Sprint Traciona</div>
          </div>
          {rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-border/60" : ""}`}>
              <div className="p-5 text-sm text-muted-foreground font-medium">{r.label}</div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed">{r.others}</div>
              <div className="p-5 text-sm text-foreground leading-relaxed">{r.sprint}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
