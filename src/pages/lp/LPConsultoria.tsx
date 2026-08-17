import LandingPage, { type LPConfig } from "@/components/lp/LandingPage";

const config: LPConfig = {
  productId: "mentoria_sprint",
  productName: "Mentoria AI Work & AI Implementation Sprint",
  priceRange: "9997_45000",
  funnel: "c",
  seo: {
    title: "Mentoria AI Work e AI Implementation Sprint — implementação assistida com KPI contratado",
    description:
      "3 processos em produção em 12 semanas (Mentoria, R$ 9.997) ou implantação completa em 90 dias (Sprint, R$ 45.000). Escopo fechado, baseline medido, KPI contratado.",
    path: "/lp/consultoria",
  },
  heroA: {
    headline: "Sua empresa não precisa de mais um curso de IA. Precisa de 3 processos rodando em produção em 12 semanas — com KPI contratado.",
    sub: "Mentoria AI Work: implementação assistida em grupo de 12 empresas, comigo e com squad técnico. Escopo fechado, baseline medido, número no relatório.",
    cta: "Aplicar para a próxima turma",
    note: "Aplicação ≠ compra · resposta em 48h",
  },
  heroB: {
    headline: "Um diagnóstico de consultoria custa, em referência típica de propostas que avaliamos, R$ 15–60 mil e entrega um relatório. A Mentoria AI Work custa R$ 9.997 e entrega 3 processos em produção.",
    sub: "12 semanas, 12 empresas, encontros semanais e canal direto. Você executa com o seu time — e o resultado fica quando a mentoria termina.",
    cta: "Aplicar agora (12 vagas)",
  },
  painTitle: "Entre o curso de R$ 1.000 e a consultoria de R$ 100 mil (faixas típicas observadas em propostas que avaliamos), não existia ninguém que implementasse com você.",
  pain: [
    "Você já tentou: o curso que ninguém terminou, a automação que quebrou, o “projeto de IA” que virou apresentação. A diretoria quer número, a operação quer alívio — e entre o curso de R$ 1.000 e a consultoria de R$ 100 mil, não existia ninguém que implementasse com você.",
  ],
  mechanismTitle: "Método CARGA em duas modalidades — ambas com KPI contratado",
  mechanism:
    "Mentoria (você executa, eu arquiteto e reviso — 12 semanas, 3 processos) ou Sprint (eu e o squad implantamos — 90 dias, 4–6 frentes). Ambas com KPI contratado antes do início.",
  benefits: [
    "Processos em produção, medidos contra baseline — não promessa.",
    "Escopo e preço fechados antes de começar. Sem “projeto aberto”.",
    "Dono interno treinado: a capacidade fica na sua empresa.",
    "LGPD e governança incluídos por desenho.",
  ],
  deliverablesTitle: "O que cada modalidade entrega",
  deliverables: [
    "Mentoria: diagnóstico 1:1 de entrada",
    "Mentoria: plano de 12 semanas + 12 encontros ao vivo + canal direto",
    "Mentoria: 3 processos em produção + dashboard de ROI",
    "Mentoria: 12 meses de AI Work Lab incluídos",
    "Sprint: 8 frentes implantáveis (escolha 4–6)",
    "Sprint: documentação completa + equipe treinada",
    "Sprint: 60 dias de estabilização",
    "Sprint: auditorias trimestrais por 1 ano",
  ],
  authority:
    "Implementador, não professor: 15 anos entre chão de fábrica, supply chain de multinacional e 3 empresas fundadas. Eu assino o que entrego porque já assinei o que construí.",
  objections: [
    { objection: "Quanto custa no total?", response: "preço público e fechado; ferramentas estimadas no blueprint." },
    { objection: "Quem opera depois?", response: "dono interno treinado é entregável." },
    {
      objection: "Já me venderam isso com outro nome",
      response: "por isso o KPI é contratado: ou o número aparece, ou estendo o trabalho sem custo (Sprint).",
    },
  ],
  comparison: {
    columns: ["Curso/comunidade", "Consultoria tradicional", "Mentoria/Sprint"],
    rows: [
      ["Entrega", "Conhecimento", "Relatório", "Processos em produção"],
      ["Preço", "R$ 200–2.000", "Em geral R$ 60–250 mil", "R$ 9.997 / R$ 45.000"],
      ["KPI contratado", "Não", "Raramente", "Sempre"],
      ["Capacidade fica na empresa", "Parcial", "Não", "Sim"],
    ],
  },
  offer: (
    <>
      <p>
        <strong>Mentoria AI Work — R$ 9.997</strong> (12x R$ 997 ou R$ 8.997 à vista) · 12 vagas/turma.
      </p>
      <p className="mt-3">
        <strong>Sprint — R$ 45.000</strong> (3x R$ 15.000) · 4 empresas/trimestre.
      </p>
      <p className="mt-3">
        Entrada: sessão de diagnóstico consultivo de 45 min, R$ 497 revertidos em crédito.
      </p>
    </>
  ),
  guarantee:
    "Aplicação sem compromisso e resposta em 48h. Sprint: KPIs contratados não atingidos por falha nossa = extensão sem custo até atingir, conforme termo contratual assinado.",
  faq: [
    {
      question: "Quem opera isso depois que você sair?",
      answer:
        "A fase de transferência existe para isso: dono interno treinado, documentação e rituais. Dependência eterna de consultor é falha de projeto, não modelo de receita.",
    },
    {
      question: "Quanto custa no total, com tudo?",
      answer: "O preço é fechado e público. Custos de ferramentas/licenças são estimados no blueprint, antes de você assinar.",
    },
    {
      question: "Meu time vai resistir.",
      answer: "Por isso o método inclui dono interno e treinamento — IA imposta de fora para dentro não sobrevive ao primeiro mês.",
    },
    {
      question: "E a LGPD?",
      answer: "Dossiê de dados por processo, política de uso e human-in-the-loop onde erro custa caro. Incluído, não opcional.",
    },
  ],
  finalTitle: "O custo de mais 3 meses sem decidir é maior que o da aplicação. E a aplicação não custa nada.",
  finalCta: "Aplicar para a próxima turma",
  cta: {
    mode: "form",
    formSource: "lp_consultoria",
    submitLabel: "Enviar aplicação",
  },
};

const LPConsultoria = () => <LandingPage config={config} />;

export default LPConsultoria;
