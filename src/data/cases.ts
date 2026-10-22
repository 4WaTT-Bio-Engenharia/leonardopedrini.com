import logo4watt from "@/assets/logos/4watt.png";
import logo4wEnergia from "@/assets/logos/4w-energia.png";
import logoElectrolux from "@/assets/logos/electrolux.png";
import logoTws from "@/assets/logos/tws-logo.png";
import logoOabGoias from "@/assets/logos/oab-goias.png";
import logoGeolab from "@/assets/logos/geolab.png";
import logoCachoeiraAlta from "@/assets/logos/cachoeira-alta.png";
import logoCaixaCantada from "@/assets/logos/caixa-cantada.png";
import logoJacoCoelho from "@/assets/logos/jaco-coelho.png";
import logoAnaville from "@/assets/logos/anaville.png";
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
    sector: "Engenharia · bioenergia",
    logo: logo4watt,
    site: "https://www.4watt.tech",
    siteLabel: "4watt.tech",
    owned: true,
    text: "Da estratégia à operação: planejamento e condução de projetos de resíduos, biogás e biometano, com automação própria na gestão e na controladoria do andamento de cada projeto.",
    tags: ["Planejamento estratégico", "Projetos de engenharia", "Automação", "Controladoria"],
  },
  {
    id: "4w-energia",
    name: "4W Energia",
    short: "4W Energia",
    sector: "Energia por assinatura",
    logo: logo4wEnergia,
    site: "https://www.4wenergia.com",
    siteLabel: "4wenergia.com",
    owned: true,
    text: "Modelo de negócio recorrente no setor de energia: leitura de dados e análise de consumo automatizadas para entregar resultado visível na fatura do cliente, mês após mês.",
    tags: ["Modelo de negócio", "Data Science", "Análise de faturas", "Operação regulada"],
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
    text: "Validação do planejamento estratégico e automação do trabalho jurídico diário em setores regulados, com qualidade medida e fluxo de peças mais rápido.",
    tags: ["Estratégia", "Automação jurídica", "Setores regulados", "Skill customizada"],
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
    text: "Planejamento estratégico e comercial validados com dados, e rotina de produção de peças jurídicas mais ágil, sem perder o rigor técnico do escritório.",
    tags: ["Planejamento comercial", "Estratégia", "Setores regulados", "Skill customizada"],
  },
  {
    id: "oab-goias",
    name: "OAB Goiás",
    short: "OAB GO",
    sector: "Jurídico · institucional",
    logo: logoOabGoias,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Uma das maiores entidades de advocacia do país abrindo espaço para método: estruturação de processos e gestão orientada a dados na operação institucional.",
    tags: ["Estratégia", "Gestão por dados", "Processos"],
  },
  {
    id: "geolab",
    name: "Geolab Indústria Farmacêutica",
    short: "Geolab",
    sector: "Indústria farmacêutica",
    logo: logoGeolab,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Indústria farmacêutica de operação complexa e alta exigência regulatória: melhoria de processos e automação da gestão para decidir com consistência.",
    tags: ["Lean", "Automação", "Indústria"],
  },
  {
    id: "cachoeira-alta",
    name: "Prefeitura de Cachoeira Alta",
    short: "Cachoeira Alta",
    sector: "Gestão pública municipal",
    logo: logoCachoeiraAlta,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Administração municipal estruturando projetos e processos com o mesmo rigor que se exige do setor privado: planejamento, dados e execução.",
    tags: ["Gestão pública", "Planejamento", "Projetos"],
  },
  {
    id: "caixa-cantada",
    name: "Caixa Cantada",
    short: "Caixa Cantada",
    sector: "Música · negócio criativo",
    logo: logoCaixaCantada,
    site: "https://www.instagram.com/caixacantadaoficial/",
    siteLabel: "@caixacantadaoficial",
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Projeto criativo que vive de audiência e constância: estratégia e automação tratando o negócio da música com a mesma seriedade de qualquer operação.",
    tags: ["Estratégia", "Automação", "Operação criativa"],
  },
  {
    id: "jaco-coelho",
    name: "Jacó Coelho Advogados",
    short: "Jacó Coelho",
    sector: "Jurídico",
    logo: logoJacoCoelho,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Escritório de advocacia com nome próprio: estratégia comercial estruturada e rotina jurídica mais ágil, sem perder o rigor técnico da profissão.",
    tags: ["Estratégia comercial", "Automação jurídica", "Processos"],
  },
  {
    id: "anaville",
    name: "Condomínio Anaville",
    short: "Anaville",
    sector: "Gestão condominial",
    logo: logoAnaville,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Gestão condominial conduzida com dados e transparência: condôminos informados e decisões de assembleia baseadas em número, não em impressão.",
    tags: ["Gestão", "Dados", "Transparência"],
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
        caption: "Apresentação dos resultados do workshop de melhoria contínua: R$ 5,6 milhões em impacto financeiro.",
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
