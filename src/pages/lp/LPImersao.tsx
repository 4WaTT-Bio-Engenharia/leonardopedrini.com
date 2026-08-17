import LandingPage, { type LPConfig } from "@/components/lp/LandingPage";

const config: LPConfig = {
  productId: "imersao_ia_que_trabalha",
  productName: "Imersão IA que Trabalha",
  priceRange: "2997",
  funnel: "a",
  seo: {
    title: "Imersão IA que Trabalha — 2 dias hands-on, automação rodando e plano de 90 dias",
    description:
      "2 dias de trabalho de engenharia no seu negócio com o Método CARGA: backlog priorizado por ROI, uma automação construída ao vivo e plano de 90 dias. Turma de 40.",
    path: "/lp/imersao",
  },
  heroA: {
    headline: "Sexta você entra com a operação no caos do chat. Domingo sai com uma automação rodando e o plano de 90 dias pronto.",
    sub: "2 dias hands-on, turma de 40: você mapeia seus processos, prioriza por ROI, constrói uma automação ao vivo no seu negócio e sai sabendo exatamente o que fazer nas próximas 12 semanas.",
    cta: "Entrar na lista de espera",
    note: "12x R$ 297 · próxima turma a confirmar — avisamos você primeiro",
  },
  heroB: {
    headline: "A última imersão de IA que você viu terminou em inspiração. Esta termina em produção.",
    sub: "Sem palco motivacional: 2 dias de trabalho de engenharia no seu negócio, com o Método CARGA, e 30 dias de follow-up para o plano não morrer na segunda-feira.",
    cta: "Quero ser avisado da próxima turma",
    note: "R$ 2.997 · grupos de 3+: R$ 2.797/vaga · turma a confirmar",
  },
  painTitle: "IA está na pauta de toda reunião. E nunca sai da pauta.",
  pain: [
    "Você sabe que IA é prioridade. Está na pauta de toda reunião. Mas entre uma crise e outra, nunca sobra o bloco de tempo para desenhar a implementação — e o assunto volta a ser “alguém pesquisa aí”.",
  ],
  mechanismTitle: "Dois dias de Método CARGA aplicado ao seu negócio",
  mechanism:
    "Dia 1, Cartografar e Arquitetar (mapa, priorização, desenho); dia 2, Rodar (construção ao vivo da sua automação) e planejar (90 dias, responsáveis, metas). Depois, 30 dias de follow-up em grupo.",
  benefits: [
    "Sai com algo construído, não com anotações.",
    "Backlog priorizado por ROI — você sabe o que atacar primeiro e por quê.",
    "Networking com matching por segmento: 39 empresários resolvendo o mesmo problema.",
    "Follow-up incluído: 2 calls de revisão nos 30 dias seguintes.",
  ],
  deliverables: [
    "Mapa de processos da sua empresa",
    "Backlog de automação priorizado por ROI",
    "1 automação/agente construído ao vivo no seu negócio",
    "Plano de 90 dias com responsáveis e metas",
    "Apostila e acesso às gravações",
    "Bônus: 3 meses de AI Work Lab + Starter Kit",
  ],
  authority:
    "Facilitador: Leonardo Pedrini — engenheiro, fundador da 4WaTT e da 4W Energia, implementador de IA em operação real.",
  objections: [
    {
      objection: "Não posso parar 2 dias",
      response: "é exatamente por não parar que o plano não existe há 1 ano.",
    },
    {
      objection: "E se eu não for técnico?",
      response: "a imersão foi desenhada para decisores; a construção usa templates guiados.",
    },
  ],
  comparison: {
    columns: ["Imersões executivas de IA (R$ 3.000)", "Imersão IA que Trabalha"],
    rows: [
      ["Formato", "Palestras e frameworks", "Hands-on no seu negócio"],
      ["Você sai com", "Inspiração", "Automação rodando + plano de 90 dias"],
      ["Pós-evento", "Nenhum", "30 dias de follow-up"],
      ["Turma", "Até 150", "40"],
    ],
  },
  offer: (
    <>
      <span className="font-display text-4xl font-medium text-foreground md:text-5xl">R$ 2.997</span>
      <p className="mt-4">
        em 12x R$ 297 ou R$ 2.697 no PIX · grupos de 3+: R$ 2.797/vaga. 40 vagas por turma — quando
        fecha, abre lista de espera.
      </p>
    </>
  ),
  guarantee: "Reembolso integral até 15 dias antes do evento. Depois disso, crédito total para a próxima turma.",
  faq: [
    { question: "Preciso levar notebook?", answer: "Sim — o dia 2 é mão na massa." },
    { question: "Emite certificado?", answer: "Sim." },
    {
      question: "E se eu não puder viajar?",
      answer: "Existe uma versão online compacta de 1 dia (R$ 997) — escreva para saber a próxima data.",
    },
    {
      question: "Política de cancelamento",
      answer: "Reembolso integral até 15 dias antes; depois, crédito para a próxima turma.",
    },
    { question: "Almoço incluído?", answer: "Sim, nos dois dias." },
  ],
  finalTitle: "Daqui a 90 dias, ou sua operação mudou — ou você ainda está “pesquisando IA”.",
  finalCta: "Entrar na lista de espera",
  cta: { mode: "checkout", value: 2997, formSource: "lp_imersao_waitlist", submitLabel: "Entrar na lista de espera" },
};

const LPImersao = () => <LandingPage config={config} />;

export default LPImersao;
