import LandingPage, { type LPConfig } from "@/components/lp/LandingPage";

const config: LPConfig = {
  productId: "ai_work_audit",
  productName: "AI Work Audit",
  priceRange: "gratuito",
  funnel: "a",
  seo: {
    title: "AI Work Audit — descubra o nível de maturidade da sua empresa em IA em 8 minutos",
    description:
      "14 perguntas, 6 dimensões, score de maturidade e relatório personalizado: os 3 processos candidatos à automação e o próximo passo recomendado. Gratuito, sem cartão.",
    path: "/lp/diagnostico",
  },
  heroA: {
    headline: "Sua empresa está pronta para IA que trabalha? Descubra em 8 minutos — com score, não com opinião.",
    sub: "O AI Work Audit mede sua maturidade em 6 dimensões e devolve um relatório personalizado: seu nível (de Espectador a Orquestrado), os 3 processos candidatos à automação e o próximo passo recomendado para o seu caso.",
    cta: "Começar o diagnóstico",
    note: "Gratuito · sem cartão · resultado imediato",
  },
  heroB: {
    headline: "88% das empresas usam IA. Só 6% capturam valor de forma consistente. Em qual grupo está a sua?",
    sub: "14 perguntas sobre estratégia, processos, dados, ferramentas, pessoas e governança — e um relatório que mostra onde você está perdendo dinheiro e o que automatizar primeiro. Dados: McKinsey, State of AI 2025.",
    cta: "Fazer o AI Work Audit gratuito",
  },
  painTitle: "Decidir no escuro sai caro.",
  pain: [
    "Todo mundo fala que você precisa de IA. Ninguém te diz por onde começar, quanto deveria custar ou se a sua empresa está pronta. Decidir no escuro sai caro — em ferramenta errada, em consultoria prematura, em piloto que morre.",
  ],
  mechanismTitle: "A régua do Método CARGA, aplicada ao seu caso",
  mechanism:
    "O Audit aplica a régua do Método CARGA: 14 perguntas objetivas (0–4 pontos cada), score ponderado por dimensão, nível de maturidade de 1 a 5 — e roteamento automático para o próximo passo correto, do Starter Kit à sessão consultiva.",
  benefits: [
    "Clareza em 8 minutos: nível, gargalos e prioridades.",
    "Relatório no seu e-mail com os 3 processos candidatos.",
    "Recomendação de próximo passo adequada ao seu nível — não a oferta mais cara.",
  ],
  deliverables: [
    "Score geral + score por dimensão",
    "Nível de maturidade nomeado (Espectador → Orquestrado)",
    "3 processos candidatos à automação",
    "Recomendação de próximo passo",
    "Relatório em PDF por e-mail",
  ],
  authority: "A mesma régua que uso para diagnosticar empresas em projetos de R$ 45 mil — aqui, gratuita.",
  objections: [
    {
      objection: "É isca de venda?",
      response: "o relatório é útil mesmo que você nunca compre nada; a recomendação depende do seu score.",
    },
    {
      objection: "E meus dados?",
      response: "usados apenas para gerar seu relatório; política de privacidade no rodapé.",
    },
  ],
  comparison: {
    columns: ["Ebook genérico", "Consultoria de diagnóstico (em geral R$ 15–60 mil)", "AI Work Audit"],
    rows: [
      ["Personalização", "Zero", "Total", "Por dimensão e resposta"],
      ["Tempo", "—", "2 semanas", "8 minutos"],
      ["Custo", "Grátis", "Em geral R$ 15–60 mil", "Grátis"],
    ],
  },
  offerEyebrow: "Gratuito",
  offer: (
    <p>
      Gratuito. O e-mail é pedido no meio do fluxo, apenas para enviar o relatório completo.
    </p>
  ),
  guarantee: "Resultado imediato na tela; relatório no e-mail em minutos. Sem compromisso, sem cartão.",
  faq: [
    { question: "Quanto tempo leva?", answer: "~8 minutos, 14 perguntas." },
    {
      question: "Preciso preparar algo?",
      answer: "Não — responda com a realidade de hoje, não com o plano.",
    },
    {
      question: "O que acontece depois?",
      answer:
        "Você recebe o relatório e a recomendação de próximo passo; se quiser, agenda uma sessão consultiva. Nada é automático além disso.",
    },
  ],
  finalTitle: "8 minutos agora economizam 6 meses de tentativa e erro.",
  finalCta: "Começar o diagnóstico",
  cta: { mode: "route", to: "/diagnostico" },
};

const LPDiagnostico = () => <LandingPage config={config} />;

export default LPDiagnostico;
