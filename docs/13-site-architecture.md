# 13 — Arquitetura do Site (Sitemap Completo)
## Leonardo Vieira Pedrini — "Pare de conversar com a IA. Coloque a IA para trabalhar."

**Responsável:** Copy Chief + Information Architect
**Base:** docs 03 (ICPs), 04 (posicionamento), 06 (Método CARGA), 07 (value ladder), 10–11 (funis), 15 (SEO), 16 (tracking); research/02 (benchmark CRO: Couto, G4, V4).
**Convenções:**
- Value ladder oficial: AI Work Audit (grátis) → AI Work Starter Kit R$ 197 → Formação IA que Trabalha R$ 1.997 → AI Work Lab R$ 297/mês → Imersão IA que Trabalha R$ 2.997 → Mentoria AI Work R$ 9.997 → AI Implementation Sprint R$ 45.000 → Enterprise AI Transformation a partir de R$ 150.000/ano.
- Método proprietário: **Método CARGA** (Cartografar, Arquitetar, Rodar, Governar, Ampliar) — substitui qualquer referência a "M.A.P.A.".
- Eventos de tracking seguem a naming convention do doc 16 (`snake_case`).
- Claims proibidos até validação (research/03): "2+ GW", exit Caixa Cantada, TWS/CMPG nomeados, economia R$ 5M Electrolux, depoimentos/logos inventados. Placeholder padrão: `[PROVA: descrição]`.

---

## 1. Mapa geral

```
INSTITUCIONAL (navegação principal)
├── /                        Home — roteador do ecossistema
├── /sobre                   Autoridade pessoal (Leonardo)
├── /metodo                  Método CARGA (ativo defensável)
├── /cases                   Prova social / portfólio
├── /solucoes                Value ladder completa (hub)
├── /cursos                  Formação IA que Trabalha (página de produto)
├── /imersao                 Imersão IA que Trabalha (página de produto)
├── /comunidade              AI Work Lab (página de produto)
├── /consultoria             Mentoria AI Work + AI Implementation Sprint
├── /empresas                Enterprise AI Transformation (B2B)
├── /diagnostico             AI Work Audit (interativo)
├── /insights                Blog / hub de SEO (7 clusters, doc 15)
├── /newsletter              Newsletter "IA que Trabalha"
├── /contato                 Contato direto
├── /privacidade             Política de privacidade (LGPD)
└── /termos                  Termos de uso

LANDING PAGES (tráfego pago/campanha — fora do nav, noindex opcional)
├── /lp/curso                → Formação IA que Trabalha (Funil A)
├── /lp/comunidade           → AI Work Lab (Funil B)
├── /lp/imersao              → Imersão (Funil A/B)
├── /lp/consultoria          → Mentoria/Sprint (Funil C)
├── /lp/empresas             → Enterprise (Funil D)
└── /lp/diagnostico          → AI Work Audit (topo de todos os funis)

SEO (doc 15 — pilares dentro de /insights ou raiz conforme implementação)
├── /implementacao-de-ia/ · /quanto-custa-implementar-ia/ · /consultoria-de-ia/
├── /agentes-de-ia/ · /automacao-com-ia/ · /ia-para-gestores/ · /ia-para-pequenas-empresas/
└── /insights/[slug] (supportings)
```

**Regras estruturais:**
1. Cada produto pago tem **página institucional** (no nav, indexável, evergreen) **e LP de campanha** (foco total em conversão, sem nav, message match com o anúncio). Padrão benchmark Couto (research/02 §1.3a): "cada degrau tem página própria".
2. Toda página termina com CTA para o **próximo degrau** do value ladder — nunca pular dois degraus (doc 11, regra de transição).
3. Todo formulário promete prazo de resposta (padrão V4/Sprint atual: "retorno em até 48h").
4. Escassez sempre quantificada (40 vagas/turma de imersão, 12 vagas/mentoria, 4 empresas/trimestre no Sprint).

---

## 2. Páginas institucionais

### 2.1 `/` — Home

- **Objetivo:** roteador do ecossistema — em 5 segundos o visitante sabe o que é, para quem é e onde clicar; capturar não-prontos no AI Work Audit.
- **ICP-alvo:** os 5 ICPs (roteamento por seção "Para quem é").
- **Seções em ordem:** (1) Hero + barra de credibilidade → (2) Credibilidade/empresas fundadas → (3) Problema (turismo de prompts) → (4) A nova forma (IA como infraestrutura) → (5) Método CARGA (diagrama) → (6) Cases → (7) Soluções (value ladder em cards) → (8) Para quem é (rotas por ICP) → (9) Leonardo (autoridade + foto) → (10) Insights (últimos artigos) → (11) Newsletter → (12) CTA final (Audit).
- **CTA principal:** "Fazer o AI Work Audit gratuito →" (/diagnostico). **Secundário:** "Conhecer o Método CARGA" (/metodo).
- **Tracking:** `page_view`, `scroll_50`, `scroll_90`, `diagnostic_start` (clique CTA), `newsletter_signup`, `case_view` (cliques em cards), `product_view` (cliques em soluções), `whatsapp_click`.
- **SEO — Title:** Leonardo Pedrini — IA que trabalha pela sua empresa | **Description:** Pare de conversar com a IA. Implementação de IA com resultado mensurável para empresas: diagnóstico, agentes e consultoria. Faça o AI Work Audit.

### 2.2 `/sobre` — Sobre Leonardo

- **Objetivo:** construir autoridade por biografia ("implementador, não professor"); humanizar; página de apoio a E-E-A-T (schema Person).
- **ICP-alvo:** todos; decisivo para ICP 4/5 (CEO/empresa) que "querem falar com quem já fez".
- **Seções em ordem:** (1) Hero pessoal (foto + headline) → (2) Linha do tempo (chão de fábrica → engenharia → Electrolux → 4WaTT → 4W Energia → Traciona AI) → (3) O que eu acredito (manifesto curto) → (4) Formação e credenciais (verificadas) → (5) Por que IA, por que agora → (6) CTA.
- **CTA principal:** "Falar com Leonardo" (/contato). **Secundário:** "Ver como eu trabalho (Método CARGA)" (/metodo).
- **Tracking:** `page_view`, `scroll_90`, `lead_start`/`lead_submit` (contato), `diagnostic_start`.
- **SEO — Title:** Sobre Leonardo Vieira Pedrini | **Description:** Engenheiro e fundador da 4WaTT e da 4W Energia. Implanto IA como infraestrutura de trabalho em empresas reais — inclusive as minhas.

### 2.3 `/metodo` — Método CARGA

- **Objetivo:** apresentar o ativo defensável da marca; transformar metodologia em razão de compra; SEO para "método de implementação de IA".
- **ICP-alvo:** ICP 2, 3, 4 (gestor, especialista, CEO) — compradores que precisam de "como" crível.
- **Seções em ordem:** (1) Hero (definição do CARGA em 1 frase) → (2) Por que projetos de IA falham (sem método) → (3) As 5 etapas (C-A-R-G-A, uma seção por letra com entregáveis e gates) → (4) Camadas transversais (HITL, evals, LGPD) → (5) O que você recebe em cada formato (como o CARGA aparece no curso, Lab, mentoria, Sprint) → (6) Métricas proprietárias (Carga Automatizável / Carga Assumida) → (7) CTA.
- **CTA principal:** "Aplicar o CARGA na minha empresa" (/lp/consultoria ou /diagnostico). **Secundário:** "Baixar o template de Cartografia" (lead magnet).
- **Tracking:** `page_view`, `scroll_90`, `lead_submit` (template), `diagnostic_start`.
- **SEO — Title:** Método CARGA — implementação de IA com retorno medido | **Description:** Cartografar, Arquitetar, Rodar, Governar, Ampliar: o ciclo de engenharia que coloca IA para trabalhar na sua operação, com KPI em cada etapa.

### 2.4 `/cases` — Cases

- **Objetivo:** corrigir a fragilidade #1 da auditoria (credibilidade 3/10): prova social quantificada com estrutura C-A-R-G-A.
- **ICP-alvo:** todos; decisivo para fundo de funil (ICP 2, 4, 5).
- **Seções em ordem:** (1) Hero ("trabalho executado, medido em horas e reais") → (2) Cases em formato padrão (contexto → mapa → blueprint → piloto → governança → resultado) → (3) Cases anonimizados por setor enquanto autorizações não chegam → (4) O que estou rodando nas minhas próprias empresas → (5) CTA.
- **CTA principal:** "Quero um diagnóstico como o destes cases" (/diagnostico). **Secundário:** "Aplicar para consultoria" (/consultoria).
- **Tracking:** `case_view` (por case, com `case_id` e `sector`), `scroll_90`, `diagnostic_start`, `calendar_click`.
- **SEO — Title:** Cases de implementação de IA — resultados em R$ | **Description:** Implementações reais de IA com antes/depois e números auditáveis. Veja o que funciona em empresas brasileiras.
- **Nota de conformidade:** nenhum case nomeado (TWS, CMPG) sem autorização escrita; usar `[PROVA: ...]` e anonimização por setor (doc 17).

### 2.5 `/solucoes` — Hub da value ladder

- **Objetivo:** tornar a escada de valor explícita (fragilidade #3 da auditoria); roteador comercial por estágio de maturidade.
- **ICP-alvo:** todos.
- **Seções em ordem:** (1) Hero ("por onde começar") → (2) Os 5 níveis de maturidade (espelho do Audit) → (3) Cards das 6 ofertas pagas em ordem de preço com "para quem é" e "o que sai funcionando" → (4) Tabela comparativa de formatos (fazer sozinho / fazer junto / fazer por você) → (5) CTA.
- **CTA principal:** "Descobrir meu nível (AI Work Audit)" (/diagnostico). **Secundário:** CTA próprio em cada card para a página do produto.
- **Tracking:** `page_view`, `product_view` (por card), `diagnostic_start`.
- **SEO — Title:** Soluções de IA para empresas — do curso à implantação | **Description:** Do diagnóstico gratuito à transformação enterprise: formação, comunidade, imersão, mentoria e implantação de IA com KPI contratado.

### 2.6 `/cursos` — Formação IA que Trabalha (página institucional)

- **Objetivo:** página evergreen do produto N2 (R$ 1.997); recebe tráfego orgânico/SEO e newsletter.
- **ICP-alvo:** ICP 1 (empreendedor), ICP 3 (especialista), ICP 2 (gestor que quer fazer com o time).
- **Seções em ordem:** (1) Hero → (2) Para quem é / não é → (3) O que você sai tendo (projeto em produção) → (4) Os 5 módulos (C-A-R-G-A aplicado) → (5) O que está incluído + bônus → (6) Instrutor (autoridade) → (7) Prova → (8) Investimento + garantia → (9) FAQ → (10) CTA.
- **CTA principal:** "Quero implementar meu primeiro processo em 6 semanas →" (checkout). **Secundário:** "Fazer o AI Work Audit antes" (/diagnostico).
- **Tracking:** `product_view`, `scroll_50/90`, `checkout_start`, `purchase`, `lead_submit` (lista de espera se turma fechada).
- **SEO — Title:** Formação IA que Trabalha — curso de IA aplicada a negócios | **Description:** 6 semanas para sair com um processo real da sua empresa rodando com IA — método CARGA, projeto obrigatório e ROI medido. Garantia de 15 dias.

### 2.7 `/imersao` — Imersão IA que Trabalha

- **Objetivo:** página evergreen do produto N4 (R$ 2.997, turmas de 40); conversão + lista de espera entre turmas.
- **ICP-alvo:** ICP 4 (CEO) e ICP 2 (gestor) que aprendem ao vivo.
- **Seções em ordem:** (1) Hero (próxima turma/cidade/data) → (2) Para quem é / não é → (3) Os 3 entregáveis dos 2 dias → (4) Programação dia a dia → (5) Bônus → (6) Prova → (7) Instrutor → (8) Investimento → (9) FAQ logística → (10) CTA.
- **CTA principal:** "Garantir minha vaga (40 por turma) →". **Secundário:** "Entrar na lista de espera".
- **Tracking:** `product_view`, `checkout_start`, `purchase`, `lead_submit` (lista de espera).
- **SEO — Title:** Imersão IA que Trabalha — 2 dias de implementação ao vivo | **Description:** Dois dias hands-on para sair com backlog priorizado, uma automação construída no seu negócio e plano de 90 dias. Turmas de 40 vagas.

### 2.8 `/comunidade` — AI Work Lab

- **Objetivo:** página evergreen do produto N3 (R$ 297/mês); converter com prova de rituais e resultados de membros.
- **ICP-alvo:** ICP 1, 2, 3 em Nível 3 do Audit ("Estruturante").
- **Seções em ordem:** (1) Hero (promessa: 1 implementação/mês em produção) → (2) Anti-promessa (o que o Lab não é) → (3) Como funciona (rituais semanais/mensais) → (4) Biblioteca viva + desafios → (5) Resultados de membros → (6) Planos (mensal/anual, trial 7 dias) → (7) FAQ → (8) CTA.
- **CTA principal:** "Entrar no laboratório (7 dias de teste) →". **Secundário:** "Ver o desafio do mês".
- **Tracking:** `product_view`, `trial_start`, `trial_convert`, `checkout_start`, `purchase`.
- **SEO — Title:** AI Work Lab — comunidade de implementação de IA | **Description:** Todo mês, uma automação ou agente em produção no seu negócio: rituais semanais, templates e office hours. Teste por 7 dias.

### 2.9 `/consultoria` — Mentoria AI Work + AI Implementation Sprint

- **Objetivo:** página de fundo de funil para N5 (R$ 9.997) e N6 (R$ 45.000); aplicação qualificada.
- **ICP-alvo:** ICP 2, 3, 4 (gestor, especialista, CEO).
- **Seções em ordem:** (1) Hero ("implementação assistida, com KPI contratado") → (2) Para quem é / não é → (3) As duas modalidades (Mentoria 12 semanas vs. Sprint 90 dias, lado a lado) → (4) Como funciona (Método CARGA nas 4 fases) → (5) O que sai funcionando (8 frentes implantáveis) → (6) Investimento transparente → (7) Garantias e escassez quantificada → (8) Prova → (9) FAQ → (10) Aplicação (formulário).
- **CTA principal:** "Aplicar para a próxima turma/trimestre →" (formulário). **Secundário:** "Agendar sessão de diagnóstico (R$ 497, revertida em crédito)".
- **Tracking:** `product_view`, `lead_start`, `lead_submit` (aplicação), `calendar_click`, `call_held` (offline import).
- **SEO — Title:** Mentoria e implantação de IA com KPI contratado | **Description:** Implementação assistida de IA para empresas: 3 processos em produção em 12 semanas ou implantação completa em 90 dias. Aplicação com retorno em 48h.

### 2.10 `/empresas` — Enterprise AI Transformation

- **Objetivo:** funil D (enterprise); gerar solicitação de proposta executiva; falar a língua de procurement (macrofases Enxergar → Projetar → Operar).
- **ICP-alvo:** ICP 5 (empresa 300+/scale-up) e ICP 4 de maior porte.
- **Seções em ordem:** (1) Hero (transformação anual com IA como infraestrutura) → (2) O problema enterprise (piloto que morre no PoC) → (3) O programa (diagnóstico executivo → sprints por área → formação in-company → comitê mensal) → (4) Governança, evals e LGPD → (5) Por que um implementador e não uma consultoria de slides → (6) Investimento (a partir de R$ 150.000/ano) → (7) FAQ B2B → (8) CTA.
- **CTA principal:** "Solicitar proposta executiva →". **Secundário:** "Baixar o Executive Brief" (PDF, `brief_download`).
- **Tracking:** `page_view`, `brief_download`, `lead_submit`, `calendar_click`, `proposal_sent` (offline).
- **SEO — Title:** IA para empresas — transformação enterprise com IA | **Description:** Programa anual de transformação com IA: estratégia, governança/LGPD, implantação por squads e formação in-company. A partir de R$ 150 mil/ano.

### 2.11 `/diagnostico` — AI Work Audit (interativo)

- **Objetivo:** lead magnet central e máquina de roteamento (quiz de 14 perguntas → score → oferta roteada). Conversão padrão de topo de todos os funis.
- **ICP-alvo:** todos.
- **Seções em ordem:** (1) Hero (promessa: score em 8 minutos) → (2) Como funciona (3 passos) → (3) O que o relatório contém → (4) Início do quiz (14 perguntas, captura de e-mail no meio do fluxo) → (5) Resultado na tela + roteamento por score → (6) Relatório PDF por e-mail.
- **CTA principal:** "Começar o diagnóstico →". **Secundário:** (pós-resultado) oferta roteada por score: N1/N2 → Starter Kit + Formação; N3 → AI Work Lab; N4/N5 → sessão de diagnóstico consultivo (R$ 497) → Mentoria/Sprint.
- **Tracking:** `diagnostic_start`, `diagnostic_complete` (com `score_range`), `lead_submit`, `product_view` (oferta roteada).
- **SEO — Title:** AI Work Audit — diagnóstico gratuito de maturidade em IA | **Description:** Descubra em 8 minutos o nível de maturidade da sua empresa em IA e receba um relatório com os 3 processos candidatos à automação.

### 2.12 `/insights` — Blog / hub SEO

- **Objetivo:** casa dos 7 clusters do doc 15; aquisição orgânica de fundo de funil; autoridade (E-E-A-T).
- **ICP-alvo:** todos em momento de busca ativa.
- **Seções em ordem:** (1) Hero editorial → (2) Artigos em destaque → (3) Navegação por cluster (7 categorias) → (4) Últimos artigos → (5) CTA newsletter → (6) CTA Audit.
- **CTA principal:** "Fazer o AI Work Audit" (em todo artigo). **Secundário:** "Assinar a newsletter".
- **Tracking:** `page_view`, `scroll_50/90`, `newsletter_signup`, `diagnostic_start`.
- **SEO — Title:** Insights — IA que trabalha: implementação, custos e ROI | **Description:** Artigos de fundo de funil sobre implementação de IA: quanto custa, como sair do piloto, ROI de agentes e erros a evitar.

### 2.13 `/newsletter` — Newsletter "IA que Trabalha"

- **Objetivo:** captura de baixa fricção; ativo próprio de relacionamento.
- **ICP-alvo:** todos; porta de entrada de ICP 1 e 2.
- **Seções em ordem:** (1) Hero (o que chega toda semana) → (2) Amostra (últimas edições) → (3) Quem escreve → (4) Formulário → (5) Pós-inscrição: convite ao Audit.
- **CTA principal:** "Assinar gratuitamente →". **Secundário:** "Fazer o AI Work Audit".
- **Tracking:** `newsletter_signup`, `lead_start`, `diagnostic_start`.
- **SEO — Title:** Newsletter IA que Trabalha — 1 implementação real por semana | **Description:** Toda semana: um processo real decomposto e automatizado, um template prático e um número de ROI. Sem hype.

### 2.14 `/contato` — Contato

- **Objetivo:** capturar alta intenção fora dos funis (imprensa, parcerias, palestras, dúvidas).
- **ICP-alvo:** todos + imprensa/parceiros.
- **Seções em ordem:** (1) Hero → (2) Formulário com motivo (comercial/imprensa/parceria/palestra) → (3) WhatsApp direto → (4) Promessa de prazo (48h).
- **CTA principal:** envio do formulário. **Secundário:** `whatsapp_click`.
- **Tracking:** `lead_start`, `lead_submit`, `whatsapp_click`.
- **SEO — Title:** Contato — Leonardo Vieira Pedrini | **Description:** Fale com Leonardo: consultoria, palestras, parcerias e imprensa. Resposta em até 48h úteis.

### 2.15 `/privacidade` e `/termos`

- **Objetivo:** conformidade LGPD e legal; exigência do stack de analytics (doc 16 §7) e checkout.
- **Seções:** texto jurídico padrão (controlador, dados coletados, cookies/consentimento, direitos do titular, contato do encarregado) / termos de uso do site e das ofertas digitais.
- **Tracking:** `page_view` apenas.
- **SEO:** noindex aceitável; Title: Política de Privacidade / Termos de Uso.

---

## 3. Landing Pages de campanha (estrutura resumida — copy completa no doc 14)

| LP | Funil | Oferta | Fonte de tráfego | CTA único | Tracking principal |
|---|---|---|---|---|---|
| `/lp/curso` | A | Formação IA que Trabalha R$ 1.997 | Meta Ads, Instagram, newsletter | `checkout_start` → compra | `product_view`, `scroll_50/90`, `checkout_start`, `purchase` |
| `/lp/comunidade` | B | AI Work Lab R$ 297/mês (trial 7d) | Webinar, Meta Ads, newsletter | `trial_start` | `product_view`, `trial_start`, `trial_convert` |
| `/lp/imersao` | A/B | Imersão R$ 2.997 | Instagram, lista, eventos | `checkout_start` → compra | `product_view`, `checkout_start`, `purchase` |
| `/lp/consultoria` | C | Mentoria R$ 9.997 / Sprint R$ 45.000 | LinkedIn, SEO fundo, cases | `lead_submit` (aplicação) | `lead_start/submit`, `calendar_click`, `call_held` |
| `/lp/empresas` | D | Enterprise R$ 150k+/ano | ABM, LinkedIn Ads, referral | `lead_submit` (proposta) | `brief_download`, `lead_submit`, `proposal_sent` |
| `/lp/diagnostico` | A/B/C/D (topo) | AI Work Audit (grátis) | Todos os canais pagos e orgânicos | `diagnostic_complete` | `diagnostic_start/complete`, `lead_submit` |

**Regras das LPs:** sem navegação global; message match com o anúncio (headline espelha a promessa do criativo); um único objetivo de conversão; FAQ específica da oferta; escassez quantificada onde real (turma de 40, 12 vagas, 4 empresas/trimestre).

---

## 4. Jornadas por ICP (roteamento a partir da home)

A seção "Para quem é" da home apresenta 5 cartões-rota. Cada rota leva à sequência abaixo:

| ICP | Dor central | Rota na home | Sequência de páginas | Oferta-destino |
|---|---|---|---|---|
| **ICP 1 — Empreendedor** ("uso ChatGPT todo dia e nada mudou") | Uso sem processo | "Para o dono que virou gargalo" | Home → /diagnostico → score baixo → /cursos (ou /lp/curso via retargeting) | Starter Kit R$ 197 → Formação R$ 1.997 → Lab R$ 297/mês |
| **ICP 2 — Gestor/Head** ("a diretoria cobrou um plano de IA") | Cobrança sem plano | "Para o gestor que precisa apresentar resultado" | Home → /metodo → /diagnostico → score médio/alto → /consultoria | Lab → Mentoria R$ 9.997 → Sprint |
| **ICP 3 — Especialista/Consultor** ("vendo horas, quero escalar conhecimento") | Conhecimento sem escala | "Para quem vende o que sabe" | Home → /insights (artigos RAG/sigilo) → /consultoria | Formação → Mentoria R$ 9.997 |
| **ICP 4 — Empresário/CEO** ("quero resultado sem aprender ferramenta") | Investimento sem retorno | "Para o CEO que quer número, não novidade" | Home → /cases → /consultoria | Sprint R$ 45.000 |
| **ICP 5 — Empresa** ("piloto morre no PoC") | Piloto sem produção | "Para empresas com sistemas e compliance" | Home → /empresas → Executive Brief → assessment | Enterprise R$ 150k+/ano |

**Roteamento transversal:** o AI Work Audit (/diagnostico) é o mecanismo objetivo de roteamento — o score substitui a auto-seleção quando o visitante não sabe qual ICP é. Todo CTA secundário do site aponta para ele.

---

## 5. Navegação global

**Header:** Logo "Leonardo Pedrini" | Método · Soluções (dropdown: Formação, AI Work Lab, Imersão, Mentoria & Sprint, Enterprise) · Cases · Insights · Sobre — **CTA persistente:** "AI Work Audit" (botão cobre).
**Footer:** Newsletter (captura) · mapa do site · Instagram/LinkedIn · /privacidade · /termos · CNPJ/razão social · "IA que não executa é enfeite."

*Fim do documento 13.*
