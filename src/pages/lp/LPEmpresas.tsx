import LandingPage, { type LPConfig } from "@/components/lp/LandingPage";

const config: LPConfig = {
  productId: "enterprise_ai_transformation",
  productName: "Enterprise AI Transformation",
  priceRange: "150k_ano",
  funnel: "d",
  seo: {
    title: "Enterprise AI Transformation — IA como infraestrutura corporativa",
    description:
      "Programa anual que tira a IA do sandbox: estratégia, governança, implantação por squads e formação in-company, com o Método CARGA e relatório trimestral de ROI ao board.",
    path: "/lp/empresas",
  },
  heroA: {
    headline: "Sua empresa testa agentes de IA há um ano. Quantos estão em produção?",
    sub: "Enterprise AI Transformation: programa anual que tira a IA do sandbox — estratégia, governança, implantação por squads e formação in-company, com o Método CARGA e relatório trimestral de ROI ao board.",
    cta: "Solicitar proposta executiva",
  },
  heroB: {
    headline: "IA como infraestrutura corporativa: do piloto que morre no ERP à operação que seu board consegue medir.",
    sub: "12 meses, escopo sob medida, squad dedicado. Evals, LGPD e human-in-the-loop como entregáveis — não como promessa.",
    cta: "Agendar conversa executiva",
  },
  painTitle: "O piloto funcionou na apresentação e morreu na integração.",
  pain: [
    "O piloto funcionou na apresentação e morreu na integração. O fornecedor sumiu depois do go-live. O board pergunta a estratégia e recebe uma lista de ferramentas. Enquanto isso, o concorrente anuncia capacidade AI-native.",
  ],
  mechanismTitle: "Macrofases Enxergar → Projetar → Operar, sobre o Método CARGA",
  mechanism:
    "Diagnóstico executivo, roadmap por ROI, sprints de implantação por área, formação in-company, comitê mensal de IA. Cada processo entra em produção com critérios de aceite, evals contínuos e grau de autonomia promovido por evidência.",
  benefits: [
    "Pilotos que viram operação — integração com legado, não demo.",
    "Governança que o jurídico aprova: dossiê LGPD por processo, HITL nos pontos críticos.",
    "Capacidade interna: seu time treinado, documentação, runbooks.",
    "Resposta estrutural para o board: arquitetura de trabalho AI-native, com ROI trimestral.",
  ],
  deliverables: [
    "Estratégia e roadmap de IA",
    "N sprints de implantação por área",
    "Trilhas de formação in-company",
    "Política de governança e LGPD",
    "Comitê mensal de IA",
    "Relatório trimestral de ROI ao board",
    "Assentos ilimitados no AI Work Lab",
  ],
  authority:
    "Liderado por engenheiro que construiu e opera empresas reguladas (energia) — ambiente onde “funciona na demo” não é critério de nada.",
  objections: [
    {
      objection: "Você é uma pessoa, não uma empresa",
      response: "squad técnico, método documentado e continuidade contratual.",
    },
    { objection: "Compliance aprova?", response: "jurídico e segurança entram na fase de projeto." },
    {
      objection: "Referências deste porte?",
      response: "comece pelo piloto de 6–8 semanas com aceite formal; decida o anual com evidência.",
    },
  ],
  comparison: {
    columns: ["Big consultancy", "Plataforma plug-and-play", "Enterprise AI Transformation"],
    rows: [
      ["Entrega", "Estratégia em slide", "Solução genérica", "Sistemas em produção"],
      ["Integração com legado", "Cara e lenta", "Não faz", "Core do programa"],
      ["Preço de entrada", "Em geral R$ 250k+", "Em geral R$ 75k+/ano", "R$ 150k/ano"],
      ["Transferência para o time", "Limitada", "Nenhuma", "Entregável formal"],
    ],
  },
  offer: (
    <>
      <p>
        A partir de <span className="font-display text-3xl font-medium text-foreground">R$ 150.000/ano</span>,
        sob proposta.
      </p>
      <p className="mt-3">
        Porta de entrada recomendada: AI Opportunity Assessment (90 min, gratuito) → piloto de 6–8
        semanas com KPI.
      </p>
    </>
  ),
  guarantee:
    "Piloto com critérios de aceite formais: a decisão pelo programa anual é tomada com evidência, não com confiança.",
  faq: [
    {
      question: "Você é uma pessoa, não uma empresa — como garante continuidade?",
      answer:
        "Método documentado, squad técnico, garantias contratuais e transferência de conhecimento como entregável. A continuidade é desenhada, não prometida.",
    },
    {
      question: "Compliance e segurança aprovam?",
      answer:
        "O dossiê LGPD e a arquitetura de evals são entregáveis de cada processo — seus times jurídico e de segurança participam desde a fase de projeto.",
    },
    {
      question: "Referências em projetos deste porte?",
      answer:
        "A porta de entrada recomendada é um piloto de 6–8 semanas com critérios de aceite: você valida com evidência antes de qualquer compromisso anual.",
    },
  ],
  finalTitle: "O próximo board meeting está marcado. Chegue com arquitetura, não com lista de ferramentas.",
  finalCta: "Solicitar proposta executiva",
  cta: {
    mode: "form",
    formSource: "lp_empresas",
    submitLabel: "Solicitar proposta executiva",
  },
};

const LPEmpresas = () => <LandingPage config={config} />;

export default LPEmpresas;
