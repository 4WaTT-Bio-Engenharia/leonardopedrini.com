import LandingPage, { type LPConfig } from "@/components/lp/LandingPage";

const config: LPConfig = {
  productId: "formacao_ia_que_trabalha",
  productName: "Formação IA que Trabalha",
  priceRange: "1997",
  funnel: "a",
  seo: {
    title: "Formação IA que Trabalha — um processo real em produção em 6 semanas",
    description:
      "Em 6 semanas, coloque um processo real do seu negócio rodando com IA em produção — Método CARGA, projeto obrigatório e ROI medido. Sem código. Garantia de 15 dias.",
    path: "/lp/curso",
  },
  heroA: {
    headline: "Você usa o ChatGPT todos os dias. E sua operação continua igual.",
    sub: "Em 6 semanas, a Formação IA que Trabalha coloca um processo real do seu negócio rodando com IA em produção — com o Método CARGA, projeto obrigatório e ROI medido. Sem código. Sem turismo de prompts.",
    cta: "Entrar na lista de espera",
    note: "12x R$ 197 · Garantia de 15 dias · inscrições abrem em breve",
  },
  heroB: {
    headline: "Pare de colecionar prompts. Comece a colecionar processos que rodam sem você.",
    sub: "Uma formação em que o certificado exige um processo real em produção: 5 módulos, 6 encontros ao vivo e um projeto final com baseline e resultado medidos.",
    cta: "Quero ser avisado",
    note: "R$ 1.997 ou 12x R$ 197 · R$ 1.797 no PIX",
  },
  painTitle: "O problema nunca foi a ferramenta. Foi começar pela ferramenta.",
  pain: [
    "Você já fez o teste: curso de prompt, tutorial de automação, fim de semana tentando montar um fluxo. Resultado conhecido — “comprei curso e não terminei”, “a automação quebrou e não sei consertar”, “o curso ensina a ferramenta, não o meu negócio”.",
    "O problema nunca foi a ferramenta. Foi começar pela ferramenta.",
  ],
  mechanismTitle: "Método CARGA: a ferramenta é meio. O entregável é processo.",
  mechanism:
    "A Formação aplica o Método CARGA — o ciclo de engenharia que uso para implantar IA em empresas reais: Cartografar (mapear e medir o trabalho) → Arquitetar (desenhar o processo futuro) → Rodar (construir e pilotar) → Governar (LGPD, exceções, dono) → Ampliar (backlog de 12 meses).",
  benefits: [
    "Um processo real do seu negócio em produção em 6 semanas.",
    "Um método replicável para os próximos processos — você não depende de mim depois.",
    "Números para provar: baseline antes, resultado depois, calculadora de horas configurada.",
    "Segurança: módulo de LGPD e políticas de IA prontas para usar com sua equipe.",
  ],
  deliverables: [
    "30+ aulas gravadas",
    "6 encontros ao vivo de tira-dúvidas",
    "15 templates de processo",
    "10 blueprints de automação",
    "Projeto final em produção (obrigatório para o certificado)",
    "Bônus: Starter Kit completo + 2 meses de AI Work Lab + biblioteca de políticas de IA/LGPD",
  ],
  authority:
    "Leonardo Pedrini: engenheiro, co-fundador da 4WaTT Bio Engenharia, fundador e CEO da 4W Energia, Lean/VSM/DMAIC na operação de multinacional. Não ensino ferramenta porque aprendi IA — ensino IA porque passei 15 anos resolvendo problemas reais de empresas.",
  objections: [
    { objection: "Já comprei curso e não usei", response: "este termina em projeto, não em aula." },
    { objection: "Não tenho tempo", response: "3–4h/semana, e a implementação é o próprio trabalho do curso." },
    { objection: "Funciona no meu tipo de negócio?", response: "o módulo 1 parte do seu processo, não de um exemplo genérico." },
  ],
  comparison: {
    columns: ["Cursos de ferramenta (n8n etc.)", "Formação IA que Trabalha"],
    rows: [
      ["Foco", "A ferramenta", "O seu processo"],
      ["Fim do curso", "Certificado de aulas", "Processo em produção"],
      ["Preço", "Em geral R$ 571–1.497", "R$ 1.997"],
      ["Ao vivo", "Geralmente não", "6 encontros"],
      ["ROI medido", "Não", "Sim, obrigatório"],
    ],
  },
  offer: (
    <>
      <span className="font-display text-4xl font-medium text-foreground md:text-5xl">R$ 1.997</span>
      <p className="mt-4">
        em 12x R$ 197 · ou R$ 1.797 no PIX. Alunos recebem crédito de R$ 1.000 na Mentoria AI Work
        (se quiserem acelerar depois).
      </p>
    </>
  ),
  guarantee: "15 dias, incondicional. Entre, assista, aplique — se não for para você, devolvo 100%.",
  faq: [
    {
      question: "Já comprei curso de IA e não terminei. Por que este seria diferente?",
      answer:
        "Porque o curso não termina em aula — termina em projeto. Cada módulo tem um entregável real do seu negócio, e o certificado exige um processo em produção.",
    },
    {
      question: "Preciso saber programar?",
      answer: "Não. As implementações usam ferramentas sem código, sempre como meio — o foco é o processo.",
    },
    { question: "Quanto tempo por semana?", answer: "3–4 horas, incluindo a implementação." },
    {
      question: "E se meu negócio for “diferente”?",
      answer: "O método começa mapeando o SEU processo. A formação não assume seu negócio — ela parte dele.",
    },
    {
      question: "Tem suporte?",
      answer: "Encontros ao vivo semanais durante as 6 semanas + e-mail por 12 meses.",
    },
  ],
  finalTitle: "Daqui a 6 semanas, você pode ter lido mais 30 posts sobre IA — ou ter um processo rodando.",
  finalCta: "Entrar na lista de espera",
  cta: { mode: "checkout", value: 1997, formSource: "lp_curso_waitlist", submitLabel: "Entrar na lista de espera" },
};

const LPCurso = () => <LandingPage config={config} />;

export default LPCurso;
