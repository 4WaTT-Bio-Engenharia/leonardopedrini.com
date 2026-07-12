import { Check, X } from "lucide-react";

const forWhom = [
  "Agências, consultorias, contabilidades, software houses, BPOs, engenharia, facilities e prestadores técnicos B2B",
  "Faturamento mensal entre R$ 30 mil e R$ 300 mil",
  "Equipe de 3 a 25 pessoas",
  "Dono ainda centraliza o comercial ou a operação",
  "Uso intenso de WhatsApp com pouca organização de funil",
  "Empresário que quer estrutura, previsibilidade e escala — não fórmula mágica",
];

const notFor = [
  "MEI de baixíssimo ticket ou operação puramente autônoma",
  "Empresas sem produto ou serviço validado no mercado",
  "Quem procura curso, mentoria genérica ou ferramenta de IA sem implantação",
  "Enterprise com estrutura corporativa consolidada",
  "Quem não está disposto a executar durante os 90 dias",
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="py-24 md:py-32 bg-secondary/40 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Aderência
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-foreground mb-6">
            Feito para empresas de serviços.{" "}
            <span className="text-muted-foreground">Não para qualquer negócio.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Sprint é intensiva e prática. Só faz sentido para quem tem operação real e quer organizá-la.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-primary/30 rounded-3xl p-8 md:p-10 shadow-premium">
            <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-primary font-medium">
              <Check className="w-4 h-4" /> Para quem é
            </div>
            <ul className="space-y-4">
              {forWhom.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
            <div className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              <X className="w-4 h-4" /> Para quem não é
            </div>
            <ul className="space-y-4">
              {notFor.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/70 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
