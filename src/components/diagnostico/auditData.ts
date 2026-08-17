/**
 * AI Work Audit — dados do diagnóstico (doc 07, Nível 0).
 * 14 perguntas, 6 dimensões ponderadas, respostas em escala 0–4.
 */

export type DimensionKey =
  | "estrategia"
  | "processos"
  | "dados"
  | "ferramentas"
  | "pessoas"
  | "governanca";

export interface DimensionMeta {
  key: DimensionKey;
  label: string;
  weight: number;
  /** Oportunidades genéricas exibidas quando a dimensão está entre as mais fracas. */
  opportunities: string[];
}

export const DIMENSIONS: DimensionMeta[] = [
  {
    key: "estrategia",
    label: "Estratégia",
    weight: 0.2,
    opportunities: [
      "Definir formalmente onde a IA deve (e não deve) ser usada, com responsável nomeado",
      "Priorizar os 3 processos com maior retorno potencial e quantificar o ganho em R$",
      "Criar um orçamento e uma meta vinculada para iniciativas de IA",
    ],
  },
  {
    key: "processos",
    label: "Processos",
    weight: 0.2,
    opportunities: [
      "Documentar os processos-chave (vendas, atendimento, financeiro, operação) com métricas de ciclo",
      "Medir as horas semanais gastas em tarefas repetitivas com regra clara",
      "Escolher um processo candidato com a matriz impacto × automatizabilidade",
    ],
  },
  {
    key: "dados",
    label: "Dados",
    weight: 0.15,
    opportunities: [
      "Centralizar clientes, pedidos e histórico em um CRM/ERP acessível digitalmente",
      "Integrar os sistemas isolados para eliminar copiar/colar entre ferramentas",
      "Estabelecer uma rotina de auditoria de qualidade dos dados",
    ],
  },
  {
    key: "ferramentas",
    label: "Ferramentas",
    weight: 0.15,
    opportunities: [
      "Definir um stack padrão de IA com licenças e padrões de uso",
      "Colocar a primeira automação simples em produção (não em teste)",
      "Criar monitoramento e nomear um responsável pelas automações ativas",
    ],
  },
  {
    key: "pessoas",
    label: "Pessoas",
    weight: 0.15,
    opportunities: [
      "Treinar a equipe no uso de IA aplicado às tarefas reais do dia a dia",
      "Nomear campeões internos e criar rituais de uso semanais",
      "Tratar a resistência com quick wins visíveis, não com comunicados",
    ],
  },
  {
    key: "governanca",
    label: "Governança",
    weight: 0.15,
    opportunities: [
      "Escrever a política de uso de IA (dados de clientes, LGPD, confidencialidade)",
      "Definir KPI e baseline antes de qualquer iniciativa de IA",
      "Instituir revisão recorrente de ROI das automações em produção",
    ],
  },
];

export interface AuditQuestion {
  id: number;
  dimension: DimensionKey;
  text: string;
  /** 5 opções, do nível 0 ao 4. */
  options: string[];
}

export const QUESTIONS: AuditQuestion[] = [
  // Estratégia
  {
    id: 1,
    dimension: "estrategia",
    text: "Sua empresa tem uma decisão formal sobre onde a IA deve (e não deve) ser usada?",
    options: [
      "Nunca discutido",
      "Ideias soltas",
      "Prioridades definidas informalmente",
      "Roadmap documentado com responsáveis",
      "Roadmap revisado trimestralmente com metas",
    ],
  },
  {
    id: 2,
    dimension: "estrategia",
    text: "Você consegue citar hoje os 3 processos em que IA geraria mais retorno no seu negócio?",
    options: [
      "Não",
      "Vagamente",
      "Sim, sem priorização",
      "Sim, priorizados",
      "Sim, priorizados e quantificados em R$",
    ],
  },
  {
    id: 3,
    dimension: "estrategia",
    text: "Existe um orçamento ou dono designado para iniciativas de IA?",
    options: [
      "Não",
      "Eu mesmo, quando sobra tempo",
      "Dono informal",
      "Dono + orçamento",
      "Dono, orçamento e meta vinculada",
    ],
  },
  // Processos
  {
    id: 4,
    dimension: "processos",
    text: "Os processos-chave do seu negócio (vendas, atendimento, financeiro, operação) estão documentados?",
    options: [
      "Só na cabeça das pessoas",
      "Alguns",
      "Maioria documentada",
      "Documentados e atualizados",
      "Documentados com métricas de ciclo e gargalo",
    ],
  },
  {
    id: 5,
    dimension: "processos",
    text: "Quanto tempo por semana sua equipe gasta em tarefas repetitivas que seguem regra clara (copiar/colar, preencher, responder o mesmo tipo de pergunta)?",
    options: [
      "Não sei",
      "Muito, mas nunca medimos",
      "Medimos informalmente",
      "Medido e mapeado",
      "Medido, mapeado e já em automação",
    ],
  },
  // Dados
  {
    id: 6,
    dimension: "dados",
    text: "Os dados necessários para operar (clientes, pedidos, histórico de atendimento, financeiro) estão centralizados e acessíveis digitalmente?",
    options: [
      "Planilhas soltas e papel",
      "Sistemas isolados sem integração",
      "CRM/ERP central",
      "Integrados",
      "Integrados, limpos e consultáveis por linguagem natural",
    ],
  },
  {
    id: 7,
    dimension: "dados",
    text: "Você tomaria uma decisão importante hoje confiando na qualidade dos seus dados?",
    options: [
      "Não",
      "Com ressalvas grandes",
      "Na maioria dos casos",
      "Sim",
      "Sim, com auditoria de qualidade periódica",
    ],
  },
  // Ferramentas
  {
    id: 8,
    dimension: "ferramentas",
    text: "Quais ferramentas de IA sua equipe usa hoje no trabalho real?",
    options: [
      "Nenhuma",
      "Uso pessoal e informal",
      "Algumas licenças pagas sem padrão",
      "Stack definido com padrões de uso",
      "Stack + automações/agentes integrados aos sistemas",
    ],
  },
  {
    id: 9,
    dimension: "ferramentas",
    text: "Você já tem alguma automação ou agente de IA rodando em produção (não em teste)?",
    options: [
      "Não",
      "Testes abandonados",
      "1 automação simples",
      "Algumas rodando",
      "Várias, com monitoramento e responsável",
    ],
  },
  // Pessoas
  {
    id: 10,
    dimension: "pessoas",
    text: "Sua equipe sabe usar IA no trabalho do dia a dia?",
    options: [
      "Não",
      "Cada um por si",
      "Alguns “fazedores” informais",
      "Treinamento feito",
      "Treinamento + rituais de uso + campeões internos",
    ],
  },
  {
    id: 11,
    dimension: "pessoas",
    text: "Existe resistência ou medo de IA na equipe?",
    options: [
      "Resistência forte não tratada",
      "Medo difuso",
      "Curiosidade sem direção",
      "Engajamento",
      "Equipe propõe ativamente novos usos",
    ],
  },
  {
    id: 12,
    dimension: "pessoas",
    text: "Quem implementaria uma automação se você decidisse hoje?",
    options: [
      "Ninguém",
      "Eu, sem tempo",
      "Alguém da equipe aprenderia",
      "Temos quem faça",
      "Temos quem faça e já fez",
    ],
  },
  // Governança
  {
    id: 13,
    dimension: "governanca",
    text: "Sua empresa tem regras sobre o que pode ser enviado a ferramentas de IA (dados de clientes, LGPD, confidencialidade)?",
    options: [
      "Não",
      "Preocupação sem política",
      "Orientação informal",
      "Política escrita",
      "Política + controle técnico + revisão",
    ],
  },
  {
    id: 14,
    dimension: "governanca",
    text: "Como você mediria o retorno de uma iniciativa de IA?",
    options: [
      "Não mediria",
      "Sensação de economia",
      "Horas economizadas estimadas",
      "KPI definido antes de iniciar",
      "KPI + baseline + revisão de ROI recorrente",
    ],
  },
];

/* ---------- Scoring ---------- */

export interface DimensionScore {
  key: DimensionKey;
  label: string;
  /** Média 0–4 das perguntas da dimensão. */
  score: number;
}

export interface AuditResult {
  dimensions: DimensionScore[];
  /** Score geral ponderado, 0–4. */
  overall: number;
  level: MaturityLevel;
  /** Dimensões mais fracas (até 2), para as oportunidades. */
  weakest: DimensionScore[];
}

export interface MaturityLevel {
  min: number;
  name: string;
  description: string;
}

export const MATURITY_LEVELS: MaturityLevel[] = [
  { min: 0, name: "Espectador", description: "Consome conteúdo de IA, nada implementado." },
  { min: 1.5, name: "Experimentador", description: "Testes individuais, sem método nem ROI." },
  { min: 2.5, name: "Estruturante", description: "Processos mapeados, primeiras automações, falta consistência." },
  { min: 3.3, name: "Integrado", description: "Automações em produção, falta escala/governança." },
  { min: 3.9, name: "Orquestrado", description: "IA como infraestrutura; candidato a projetos avançados." },
];

export const computeResult = (answers: number[]): AuditResult => {
  const dimensions: DimensionScore[] = DIMENSIONS.map((d) => {
    const qs = QUESTIONS.filter((q) => q.dimension === d.key);
    const sum = qs.reduce((acc, q) => acc + (answers[q.id - 1] ?? 0), 0);
    return { key: d.key, label: d.label, score: sum / qs.length };
  });
  const overall = DIMENSIONS.reduce((acc, d, i) => acc + dimensions[i].score * d.weight, 0);
  const level = [...MATURITY_LEVELS].reverse().find((l) => overall >= l.min) || MATURITY_LEVELS[0];
  const weakest = [...dimensions].sort((a, b) => a.score - b.score).slice(0, 2);
  return { dimensions, overall, level, weakest };
};

/** Faixa de score para o parâmetro score_range do evento diagnostic_complete (doc 16). */
export const scoreRange = (overall: number): string => {
  const pct = Math.round((overall / 4) * 100);
  if (pct <= 25) return "0-25";
  if (pct <= 50) return "26-50";
  if (pct <= 75) return "51-75";
  return "76-100";
};

/* ---------- Roteamento por score (doc 07 + doc 14) ---------- */

export interface RouteCTA {
  headline: string;
  text: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export const routeByScore = (overall: number): RouteCTA => {
  if (overall < 2.5) {
    return {
      headline: "Falta base — processo, método e a primeira implementação guiada",
      text: "Seu resultado mostra: antes de contratar qualquer consultoria, estruture a base em 6 semanas.",
      primaryLabel: "Ver a Formação IA que Trabalha",
      primaryTo: "/cursos",
      secondaryLabel: "Conhecer o AI Work Starter Kit — R$ 197",
      secondaryTo: "/cursos",
    };
  }
  if (overall < 3.3) {
    return {
      headline: "Você sabe o que fazer — falta cadência",
      text: "Falta cadência, templates e revisão de especialista. Implementação é um hábito semanal, não um evento.",
      primaryLabel: "Conhecer o AI Work Lab — 7 dias de teste",
      primaryTo: "/comunidade",
    };
  }
  return {
    headline: "Você está pronto para implantação com KPI",
    text: "Seu gargalo não é conhecimento — é execução assistida. O próximo passo é uma sessão de diagnóstico consultivo de 45 min (R$ 497, revertidos em crédito).",
    primaryLabel: "Agendar sessão de diagnóstico consultivo",
    primaryTo: "/consultoria",
  };
};

/** 3 processos candidatos à automação, derivados das respostas de Processos e Ferramentas. */
export const candidateProcesses = (answers: number[]): string[] => {
  const out: string[] = [];
  const repetitive = answers[4] ?? 0; // Q5
  const inProd = answers[8] ?? 0; // Q9
  const stack = answers[7] ?? 0; // Q8
  if (repetitive <= 2) {
    out.push("Mapear e medir as tarefas repetitivas com regra clara — o maior estoque de horas recuperáveis");
  } else {
    out.push("Automatizar o primeiro processo repetitivo já medido (atendimento de primeira linha ou backoffice)");
  }
  if (inProd <= 1) {
    out.push("Colocar um agente de IA em produção em uma frente de baixo risco (ex.: triagem de e-mails ou propostas)");
  } else {
    out.push("Expandir as automações existentes com monitoramento e responsável nomeado");
  }
  if (stack <= 2) {
    out.push("Padronizar o stack de IA da equipe antes de contratar novas ferramentas");
  } else {
    out.push("Integrar o stack de IA aos sistemas centrais (CRM, planilhas, WhatsApp)");
  }
  return out.slice(0, 3);
};
