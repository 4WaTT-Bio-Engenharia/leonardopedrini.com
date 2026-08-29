import logo4watt from "@/assets/logos/4watt.png";
import logo4wEnergia from "@/assets/logos/4w-energia.png";
import logoTraciona from "@/assets/logos/traciona-ai.png";
import logoElectrolux from "@/assets/logos/electrolux.png";
import logoTws from "@/assets/logos/tws-logo.png";
import electroluxResultados from "@/assets/cases/electrolux/electrolux-economia-5m-leonardo.jpg";
import electroluxProcesso01 from "@/assets/cases/electrolux/electrolux-processo-01.jpeg";
import electroluxProcesso02 from "@/assets/cases/electrolux/electrolux-processo-02.jpeg";
import electroluxProcesso03 from "@/assets/cases/electrolux/electrolux-processo-03.jpeg";

export type CasePhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseItem = {
  id: string;
  name: string;
  short: string;
  sector: string;
  logo?: string;
  site?: string;
  siteLabel?: string;
  text: string;
  tags: string[];
  owned: boolean;
  note?: string;
  /** Fotos do projeto — quando presentes, o case ganha uma página de detalhe em /cases/:id. */
  photos?: CasePhoto[];
};

export const NOTA_TERCEIROS =
  "Trabalho realizado por Leonardo Pedrini. Marca citada apenas como referência de atuação profissional.";

export const cases: CaseItem[] = [
  {
    id: "4watt",
    name: "4WaTT Bio Engenharia",
    short: "4WaTT",
    sector: "Deeptech · bioenergia",
    logo: logo4watt,
    site: "https://www.4watt.tech",
    siteLabel: "4watt.tech",
    owned: true,
    text: "Planejamento estratégico, desenvolvimento de soluções físicas (deeptech) e soluções em IA: sistemas RAG, automação de processos e agentes virtuais para gestão, implantação de soluções de negócio e controladoria interna do andamento de projetos.",
    tags: ["Planejamento estratégico", "RAG", "Agentes", "Automação", "Controladoria"],
  },
  {
    id: "4w-energia",
    name: "4W Energia",
    short: "4W Energia",
    sector: "Energia por assinatura",
    logo: logo4wEnergia,
    site: "https://www.4wenergia.com.br",
    siteLabel: "4wenergia.com.br",
    owned: true,
    text: "Soluções em IA para leitura de dados e aplicação de data science no setor de energia. Sistemas RAG para evitar alucinações, com analisador automático de faturas e de dados de consumo.",
    tags: ["Data Science", "RAG", "Análise de faturas", "Automação"],
  },
  {
    id: "tws",
    name: "TWS Sociedade de Advogados",
    short: "TWS",
    sector: "Jurídico · setores regulados",
    logo: logoTws,
    site: "https://www.twsadv.com.br",
    siteLabel: "twsadv.com.br",
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Automações personalizadas para o setor jurídico. IA generativa e RAG aplicados à validação do planejamento estratégico, além de skill customizada para o trabalho diário na construção de peças jurídicas nichadas em setores regulados.",
    tags: ["Automação jurídica", "RAG", "IA generativa", "Skill customizada"],
  },
  {
    id: "traciona-ai",
    name: "Traciona AI",
    short: "Traciona AI",
    sector: "Inteligência de negócio",
    logo: logoTraciona,
    site: "https://www.tracionaai.com.br",
    siteLabel: "tracionaai.com.br",
    owned: true,
    text: "IA generativa e data science aplicados a grandes volumes de dados para análise de mercado, estruturação do plano de negócio, modelo financeiro e automação dos processos gerenciais da companhia.",
    tags: ["Data Science", "IA generativa", "Modelo financeiro", "Automação gerencial"],
  },
  {
    id: "cmpg",
    name: "CMPG Advocacia",
    short: "CMPG",
    sector: "Jurídico · setores regulados",
    site: "https://www.instagram.com/cmpg.advocacia/",
    siteLabel: "@cmpg.advocacia",
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Soluções personalizadas para o setor jurídico. IA generativa e RAG para validação do planejamento estratégico e desenvolvimento do planejamento comercial, com skill customizada para construção diária de peças jurídicas em setores regulados.",
    tags: ["Planejamento comercial", "RAG", "IA generativa", "Skill customizada"],
  },
  {
    id: "electrolux",
    name: "Electrolux do Brasil",
    short: "Electrolux",
    sector: "Indústria · manufatura",
    logo: logoElectrolux,
    site: "https://www.electrolux.com.br",
    siteLabel: "electrolux.com.br",
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Mapeamento de processos com Lean Manufacturing avançado (Value Stream Mapping), projetos de engenharia para desenvolvimento de ligas metálicas especiais aplicadas a máquinas de processo, desenvolvimento de máquina especial para fabricação de mangueiras hidráulicas e uso de data science e automação digital para redução de custos — redução superior a R$ 5 milhões em projetos de engenharia e supply chain.",
    tags: ["Lean / VSM", "Engenharia de materiais", "Máquina especial", "Data Science"],
    photos: [
      {
        src: electroluxResultados,
        alt: "Leonardo Pedrini apresentando o resultado financeiro do projeto na Electrolux, com impacto de R$ 5,6 milhões",
        caption: "Apresentação dos resultados do workshop de melhoria contínua com IA: R$ 5,6 milhões em impacto financeiro.",
      },
      {
        src: electroluxProcesso01,
        alt: "Mapa de fluxo de valor (VSM) da linha de produção, com os fluxos de laterais, caixa interna, contra portas e corpo de porta",
        caption: "VSM da linha: fluxos de material mapeados com tempo de ciclo, distância percorrida e restrições por operação.",
      },
      {
        src: electroluxProcesso02,
        alt: "Detalhe do VSM mostrando as etapas de pré-montagem e espumação de gabinetes, com problemas identificados em post-its",
        caption: "Problemas de processo identificados etapa a etapa — da pré-montagem à espumação dos gabinetes.",
      },
      {
        src: electroluxProcesso03,
        alt: "VSM da planta de Curitiba com o planejamento semanal congelado, reuniões de PCP e indicadores de tempo de ciclo",
        caption: "VSM Curitiba: planejamento semanal, reuniões de PCP e indicadores de ciclo por operação (corte, laterais, portas).",
      },
    ],
  },
];
