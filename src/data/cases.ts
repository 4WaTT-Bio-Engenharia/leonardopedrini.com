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
    sector: "Engenharia · institucional",
    logo: logoOabGoias,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Cliente da 4WaTT em projeto de engenharia. A maior entidade de advocacia do estado confiando em engenharia séria para projeto sério.",
    tags: ["Engenharia", "Projeto", "4WaTT"],
  },
  {
    id: "geolab",
    name: "Geolab Indústria Farmacêutica",
    short: "Geolab",
    sector: "Indústria farmacêutica · energia",
    logo: logoGeolab,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Cliente de consultoria de energia. Indústria farmacêutica de alta exigência regulatória decidindo sobre energia com dados e método.",
    tags: ["Consultoria de energia", "Indústria"],
  },
  {
    id: "cachoeira-alta",
    name: "Prefeitura de Cachoeira Alta",
    short: "Cachoeira Alta",
    sector: "Gestão pública · energia solar",
    logo: logoCachoeiraAlta,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Cliente de estudo de viabilidade e estruturação de projeto de engenharia de usina solar. Gestão pública decidindo com número.",
    tags: ["Estudo de viabilidade", "Usina solar", "Gestão pública"],
  },
  {
    id: "caixa-cantada",
    name: "Caixa Cantada",
    short: "Caixa Cantada",
    sector: "Estratégia · planejamento comercial",
    logo: logoCaixaCantada,
    site: "https://www.instagram.com/caixacantadaoficial/",
    siteLabel: "@caixacantadaoficial",
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Planejamento estratégico e comercial elaborado em 2022. A execução seguiu o plano e os resultados vieram conforme o previsto.",
    tags: ["Planejamento estratégico", "Comercial", "Execução"],
  },
  {
    id: "jaco-coelho",
    name: "Jacó Coelho Advogados",
    short: "Jacó Coelho",
    sector: "Energia solar · jurídico",
    logo: logoJacoCoelho,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "A usina solar do escritório projetada e estruturada com a 4WaTT. Energia limpa gerando resultado real para a operação.",
    tags: ["Energia solar", "Engenharia", "4WaTT"],
  },
  {
    id: "anaville",
    name: "Condomínio Anaville",
    short: "Anaville",
    sector: "Gestão condominial · engenharia",
    logo: logoAnaville,
    owned: false,
    note: NOTA_TERCEIROS,
    text: "Cliente de consultoria de engenharia na estruturação do projeto, realizado pela 4WaTT. Condomínio decidindo com técnica, não com impressão.",
    tags: ["Consultoria de engenharia", "Estruturação de projeto", "4WaTT"],
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
    text: "Mapeamento de processos com Lean Manufacturing avançado (Value Stream Mapping), projetos de engenharia para desenvolvimento de ligas metálicas especiais aplicadas a máquinas de processo, desenvolvimento de máquina especial para fabricação de mangueiras hidráulicas e uso de data science e automação digital para redução de custos: redução superior a R$ 5 milhões em projetos de engenharia e supply chain.",
    tags: ["Lean / VSM", "Engenharia de materiais", "Máquina especial", "Data Science"],
  },
];
