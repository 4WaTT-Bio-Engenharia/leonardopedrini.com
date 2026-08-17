import LandingPage, { type LPConfig } from "@/components/lp/LandingPage";

const config: LPConfig = {
  productId: "ai_work_lab",
  productName: "AI Work Lab",
  priceRange: "297_mes",
  funnel: "b",
  seo: {
    title: "AI Work Lab — uma implementação real por mês no seu negócio",
    description:
      "O laboratório de implementação de IA para negócios: rituais semanais, desafios com prazo, office hours e um grupo que cobra entrega. 7 dias de teste · R$ 297/mês.",
    path: "/lp/comunidade",
  },
  heroA: {
    headline: "Você sabe o que fazer com IA. Só não está fazendo — toda semana, há 6 meses.",
    sub: "O AI Work Lab é o laboratório de implementação onde membros colocam uma automação ou agente em produção todo mês: rituais semanais, desafios com prazo, office hours comigo e um grupo que cobra entrega.",
    cta: "Quero ser avisado",
    note: "R$ 297/mês · inscrições abrem em breve — entre na lista",
  },
  heroB: {
    headline: "Comunidade de IA tem de sobra. Laboratório de implementação, só este.",
    sub: "Nada de ferramenta da semana, aula por aula ou grupo com 400 mensagens. Aqui a métrica é uma só: membros com IA em produção, toda semana.",
    cta: "Entrar na lista de espera",
    note: "R$ 297/mês ou R$ 2.970/ano · avisamos quando as inscrições abrirem",
  },
  painTitle: "Não é falta de conhecimento. É falta de cadência.",
  pain: [
    "Você fez o curso. Salvou os templates. Assiste aos vídeos. E a sua operação continua sendo você apagando incêndio no WhatsApp.",
    "Não é falta de conhecimento — é falta de cadência, de revisão e de alguém olhando o que você construiu.",
  ],
  mechanismTitle: "Ritual fixo vira hábito",
  mechanism:
    "Segunda você declara o que coloca em produção; quarta eu destravo 3–4 membros ao vivo; sexta quem implementou mostra. Todo mês, um desafio com template e prazo. Toda implementação vira template novo na biblioteca.",
  benefits: [
    "Uma implementação real por mês — com evidência, não intenção.",
    "Revisão de especialista antes de você errar em produção.",
    "Templates que nascem de implementações reais de membros, não de teoria.",
    "Parceiro de accountability do seu segmento — alguém que cobra e é cobrado.",
  ],
  deliverables: [
    "3 rituais semanais ao vivo (Plano da Semana, Office Hours, Demo & Wins)",
    "Desafio mensal de implementação com template e prazo",
    "Masterclass mensal com um caso real desmontado do zero ao ROI",
    "Biblioteca viva de blueprints, prompts e políticas de IA/LGPD",
    "Diretório de membros e pareamento de accountability",
    "Plano pessoal de implementação no onboarding",
  ],
  authority:
    "O Lab é liderado por quem implanta: engenheiro, fundador de 3 empresas, com IA rodando nas próprias operações — não um curador de links.",
  objections: [
    {
      objection: "R$ 297/mês é caro para comunidade",
      response:
        "não é comunidade de conteúdo; é implementação assistida — e custa cerca de 1/9 do plano de entrada típico das plataformas de IA para empresas, em propostas que avaliamos.",
    },
    {
      objection: "Vou entrar e não usar",
      response: "o onboarding coloca sua primeira implementação no ar antes do dia 7.",
    },
  ],
  comparison: {
    columns: ["Comunidades de ferramenta (em geral R$ 60–100/mês)", "Plataformas de IA (em geral R$ 2.580+/mês)", "AI Work Lab"],
    rows: [
      ["Foco", "Conteúdo", "Solução genérica plug-and-play", "Implementação no seu negócio"],
      ["Métrica", "Aulas assistidas", "Licenças ativas", "Implementações em produção"],
      ["Preço", "Baixo", "Alto", "R$ 297/mês"],
    ],
  },
  offer: (
    <>
      <span className="font-display text-4xl font-medium text-foreground md:text-5xl">R$ 297/mês</span>
      <p className="mt-4">
        ou <strong>R$ 2.970/ano</strong> (2 meses grátis). 7 dias de teste com cartão.
      </p>
    </>
  ),
  guarantee:
    "7 dias de teste real: entre, participe dos rituais, instale seu primeiro agente. Se não for para você, cancele em 1 clique. Sem fidelidade nunca; pausa de até 2 meses quando faltar tempo.",
  faq: [
    {
      question: "Para quem é?",
      answer:
        "Para quem já passou da curiosidade: sabe que precisa implementar e falta cadência e revisão. Se você está no zero absoluto, comece pelo Starter Kit ou pela Formação.",
    },
    {
      question: "Quanto tempo exige?",
      answer:
        "Os rituais somam ~2h/semana. A implementação, você faria de qualquer jeito — aqui ela acontece com método e prazo.",
    },
    {
      question: "E se eu não implementar nada?",
      answer:
        "Nossa métrica interna é justamente essa: membros implementando toda semana. Se você travar, o onboarding e o office hours existem para destravar — e, se mesmo assim não for para você, o cancelamento é imediato.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim. E pausar por até 2 meses mantendo o preço.",
    },
  ],
  finalTitle: "O próximo mês vai passar de qualquer jeito. A questão é se ele termina com algo em produção.",
  finalCta: "Entrar na lista de espera",
  cta: { mode: "checkout", value: 297, formSource: "lp_comunidade_waitlist", submitLabel: "Entrar na lista de espera" },
};

const LPComunidade = () => <LandingPage config={config} />;

export default LPComunidade;
