import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo dura a Sprint?",
    a: "A Sprint Traciona tem 90 dias, dividida em 4 fases (Diagnóstico, Estruturação, Ativação e Ritmo). Em cada fase há entregas específicas e acompanhamento semanal com o dono.",
  },
  {
    q: "Como é o formato de trabalho?",
    a: "Implantação guiada 1:1 com o Leonardo e o time. Reuniões semanais, entregas objetivas, cockpit centralizado e execução dentro da sua operação — não é curso, não é mentoria em grupo.",
  },
  {
    q: "Para que tipo de empresa faz sentido?",
    a: "Empresas de serviços B2B ou recorrentes, com faturamento entre R$ 30 mil e R$ 300 mil por mês, equipe de 3 a 25 pessoas e operação comercial ainda dependente do fundador.",
  },
  {
    q: "Preciso ter CRM ou usar IA hoje?",
    a: "Não. A Sprint estrutura o comercial e a gestão do zero se necessário, e o cockpit Traciona AI é configurado durante a implantação. A IA aparece como motor de produtividade — não como pré-requisito.",
  },
  {
    q: "Qual é o investimento?",
    a: "O investimento é apresentado após a etapa de diagnóstico, quando entendemos aderência, escopo e prioridades. A Sprint é uma aplicação — não vendemos para qualquer empresa.",
  },
  {
    q: "Qual é o próximo passo?",
    a: "Preencher o formulário de aplicação. Se houver aderência, agendamos uma conversa com o Leonardo para diagnóstico e definição de escopo.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-secondary/40 border-t border-border/40">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-14">
          <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
            <span className="h-px w-8 bg-primary" />
            Perguntas frequentes
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-foreground">
            O que você precisa saber{" "}
            <span className="text-muted-foreground">antes de aplicar.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
