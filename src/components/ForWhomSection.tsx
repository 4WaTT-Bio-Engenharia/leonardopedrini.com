import { Check, X } from "lucide-react";

const forYou = [
  "...você é MEI, autônomo ou dono de um pequeno negócio.",
  "...você se sente sobrecarregado e sem tempo.",
  "...você quer organizar suas finanças e ter mais lucro.",
  "...você está pronto para aplicar um método simples e comprovado.",
];

const notForYou = [
  "...você busca uma fórmula mágica para ficar rico.",
  "...você não está disposto a dedicar 15 minutos por dia ao seu negócio.",
  "...você prefere continuar apagando incêndios a construir um sistema.",
];

const ForWhomSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Isto é para você se...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-destructive">
              Isto NÃO é para você se...
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
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
