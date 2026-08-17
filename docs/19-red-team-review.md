# 19 — Red Team & Evaluator Review

**Escopo:** `src/pages/*.tsx`, `src/pages/lp/*.tsx`, componentes de conversão/LP, `index.html`, `public/robots.txt`, `public/sitemap.xml`, contra `docs/14-copy-system.md` e `docs/17-proof-assets.md`.
**Data da revisão:** 2026-08-16 · **Revisor:** Red Team (somente leitura — nada foi editado).
**Barra de aprovação:** média ≥ 8,5 por página e nota mínima 9 em Clareza / Diferenciação / Credibilidade nas páginas principais.

---

## 1. Scorecard (0–10)

Dimensões: Cla=Clareza (entende em 5s?) · ICP · Dif=Diferenciação · Cre=Credibilidade · RvT=Resultado-vs-tecnologia · Con=Conversão · Des=Design premium · Mob=Mobile · Perf=Performance · SEO. **Negrito** = abaixo de 9 em dimensão crítica.

| Página | Cla | ICP | Dif | Cre | RvT | Con | Des | Mob | Perf | SEO | **Média** | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Home `/` | 9 | 8 | 9 | **7** | 9 | 8 | 8 | 8 | 7 | **5** | **7,8** | ❌ REPROVA |
| `/metodo` | 9 | 8 | 9 | **7** | 9 | 7 | 8 | 8 | 7 | 6 | **7,8** | ❌ REPROVA |
| `/cases` | 8 | 8 | 8 | **5** | **6** | 6 | 8 | 8 | 8 | 6 | **7,1** | ❌ REPROVA |
| `/solucoes` | 8 | 9 | 8 | **7** | 8 | 8 | 8 | 8 | 8 | 6 | **7,8** | ❌ REPROVA |
| `/comunidade` | 8 | 8 | 8 | **6** | 8 | **3** | 8 | 8 | 8 | 6 | **7,1** | ❌ REPROVA |
| `/consultoria` | 8 | 8 | 9 | **7** | 9 | 8 | 8 | 7 | 8 | 6 | **7,8** | ❌ REPROVA |
| `/empresas` | 8 | 8 | 8 | **6** | 8 | 8 | 8 | 8 | 8 | 6 | **7,6** | ❌ REPROVA |
| `/diagnostico` | 9 | 9 | 8 | **7** | 8 | 9 | 8 | 8 | 8 | 6 | **8,0** | ❌ REPROVA |
| `/lp/diagnostico` | 9 | 9 | 8 | **7** | 8 | 8 | 8 | 8 | 8 | 5 | **7,8** | ❌ REPROVA |
| `/lp/curso` | 9 | 8 | 8 | **6** | 8 | **2** | 8 | 8 | 8 | 5 | **7,0** | ❌ REPROVA |
| `/lp/comunidade` | 8 | 8 | 8 | **6** | 8 | **2** | 8 | 8 | 8 | 5 | **6,9** | ❌ REPROVA |
| `/lp/imersao` | 8 | 8 | 8 | **6** | 8 | **2** | 8 | 8 | 8 | 5 | **6,9** | ❌ REPROVA |
| `/lp/consultoria` | 8 | 8 | 9 | **7** | 9 | 8 | 8 | 7 | 8 | 5 | **7,7** | ❌ REPROVA |
| `/lp/empresas` | 8 | 8 | 8 | **6** | 8 | 8 | 8 | 8 | 8 | 5 | **7,5** | ❌ REPROVA |

**Veredito: 14 de 14 páginas reprovam na barra de 8,5.** Os motivos concentram-se em 4 buracos sistêmicos, não em copy:

1. **Conversão quebrada no ponto de venda** — todas as ofertas de checkout direto (Comunidade, Cursos, Imersão e as 3 LPs de funil A/B) terminam em link morto (detalhe no P0-2).
2. **Credibilidade sem lastro publicado** — zero cases de cliente com número, zero depoimento, zero logo. A marca promete "resultado com recibo" e a página de cases não exibe um único recibo.
3. **SEO técnico comprometido na fundação** — `index.html` estático ainda carrega a marca antiga "Sprint Traciona 90 Dias" (title, description, OG, keywords e JSON-LD de Service). Crawlers sociais e de busca que não executam JS veem outra empresa.
4. **SEO score 5–6 transversal** — SPA sem SSR/prerender: title/meta/canonical/OG só existem após execução de JS (`SEO.tsx` via `useEffect`), OG image cai em `placeholder.svg` (SVG não renderiza em WhatsApp/LinkedIn), e as 6 LPs estão no `sitemap.xml` sem `noindex`.

---

## 2. Ataques por persona

### 2.1 Skeptical Buyer — "Por que eu confiaria nesse cara?"
- `src/pages/Cases.tsx:23-36` — a página inteira de prova tem 2 cases próprios **sem um número** e 2 cases de clientes "em documentação", anonimizados, sem data. O próprio título ("Resultado com recibo: o antes, o depois e o número") promete o que a página não entrega. Um cético lê: "nenhum cliente ainda".
- `src/pages/Index.tsx:329-352` — a seção Cases da home repete o mesmo padrão: um card "o que está rodando" sem métrica e um card "em documentação".
- `src/pages/Sobre.tsx:155-166` — heading "Marcos verificáveis" lista MBA UFPR, LL.M. CEDIN e formações Columbia/UGA/Michigan, mas o doc 17 (item 6) marca esses diplomas como **pendentes de digitalização**. "Verificável" sem link de verificação é uma promessa que se autodestrói na primeira checagem.

### 2.2 Enterprise CFO — "Qual o ROI?"
- `src/pages/Empresas.tsx:199-213` — "A partir de R$ 150.000/ano" sem composição de escopo, sem exemplo de business case, sem payback típico. O CFO recebe "relatório trimestral de ROI ao board" como promessa, mas não vê um único ROI histórico.
- `src/pages/Empresas.tsx:206` e `src/pages/lp/LPEmpresas.tsx:64` — "plataformas multiagente começam em R$ 250 mil", "Big consultancy R$ 250k+", "plug-and-play R$ 75k+/ano": números de mercado **sem fonte citada**. Um CFO que checa e não acha a fonte desconta toda a página.
- Único conteúdo de ROI real está enterrado no artigo `/insights` ("ROI de agentes de IA"), fora do caminho de conversão enterprise.

### 2.3 CTO — "Consultoria séria ou guru de IA?"
- Pontos a favor reais: evals, HITL, modo sombra, dossiê LGPD, monitoramento de drift (`Metodo.tsx:20-47`, `Empresas.tsx:41-48`). Vocabulário correto.
- Mas: nenhuma stack nomeada, nenhuma arquitetura de referência, nenhuma integração específica (ERP/CRM citados genericamente), nenhum SLA, e o "squad técnico" que responde a objeção-chave (`Empresas.tsx:52-55`, `LPEmpresas.tsx:50-52`) **nunca é apresentado** — nem nome, nem tamanho, nem evidência. Para um CTO, "squad" sem rosto é guru com outra roupa.

### 2.4 Marketing Director — "Essa oferta converteria?"
- **Não, porque o último clique está morto.** `src/components/lp/LandingPage.tsx:71` — `CHECKOUT_PLACEHOLDER = "#checkout-em-breve"`: os CTAs de compra das LPs `/lp/curso`, `/lp/comunidade`, `/lp/imersao` apontam para uma âncora inexistente. `src/pages/Community.tsx:106,245,266,297` e `src/pages/Cursos.tsx:139,258,300,331` usam `href="#checkout"` e **não existe `id="checkout"` em lugar nenhum do `src/`** (grep confirma). Tráfego pago entraria e morreria no botão de compra.
- O "teste A/B" das LPs (`LandingPage.tsx:82-84`) é só `?v=b` na query string — sem randomização, sem persistência, sem atribuição. Não é um teste, é um switch manual.
- `src/pages/lp/LPImersao.tsx:18,93` — vende "Garantir minha vaga" a R$ 2.997 com "próxima turma a confirmar": cobrar por evento sem data é risco de chargeback e de CDC; e o clique dispara `checkout_start` para uma **lista de espera**, sujando o funil.

### 2.5 UX Critic — "O que está confuso?"
- `src/pages/Solucoes.tsx` empilha 8 ofertas + 5 níveis de maturidade + tabela de 3 formatos + 5 situações: três taxonomias concorrentes na mesma página (degraus, níveis N1–N5, "sozinho/junto/por você"). O usuário precisa decidir qual mapa usar.
- Home (`Index.tsx`) tem 12 seções e 5 blocos de CTA para destinos diferentes — a escada completa compete com o diagnóstico, que deveria ser o único protagonista.
- `src/pages/Insights.tsx:10-45` — a home tagueia 3 artigos como "Em produção", mas os clusters listam 21 títulos de artigos que não existem; clicar é um dead-end editorial.
- Tabelas de comparação com `min-w-[640px]`/`min-w-[720px]` (`Solucoes.tsx:234`, `Consultoria.tsx:140`) exigem scroll horizontal no mobile sem affordance visual.

### 2.6 Competitive Strategist — "Concorrente copia isso amanhã?"
- Sim, em um fim de semana. O próprio `/metodo` (`Metodo.tsx:57-63`) confessa que o CARGA é DMAIC+VSM+JTBD+evals+HITL rebatizado. Preços públicos, value ladder de 8 degraus, rituais da comunidade, scripts de objeção — tudo copiável do HTML.
- O único fosso defensável seria **prova auditada** (cases com baseline e número) e a biografia regulada (4W Energia, Lei 14.300/22). A prova ainda não está publicada. Janela de vulnerabilidade: até o primeiro case auditado ir ao ar, a marca é copiável.

### 2.7 Legal/Claims Reviewer — claims não sustentados (varredura completa do `src/`)
- ⛔ **McKinsey distorcido** — `Index.tsx:207-208`, `lp/LPDiagnostico.tsx:21`, `Insights.tsx` (artigo 3): "88% das empresas já usam IA. Só 1% captura valor de verdade. Fonte: McKinsey, State of AI 2025." O State of AI 2025 (nov/2025) reporta 88% de uso (correto), **39% com impacto em EBIT e 6% "high performers"** — o "1%" é de *auto-avaliação de maturidade* do relatório Superagency (jan/2025), não captura de valor. Claim fusão de dois relatórios, numericamente errado contra a fonte citada.
- ⛔ **Dead code com claims proibidos** — `src/components/AboutSection.tsx:33,45` ("projetos de R$ 5 bilhões", "projetos bilionários", e nome errado "4Watt Tech"), `src/components/conversion/ProofBar.tsx:15-20` (defaults fabricados: "150+ empresas estruturadas", "4.9/5 avaliação média", "100% método com dados"), `HeroSection.tsx`, `FaqSection.tsx`, `ForWhomSection.tsx`, `LeadForm.tsx`. Hoje não estão importados, mas permanecem no repositório prontos para vazar em um import futuro.
- ⚠️ **"A única formação de IA do Brasil em que o certificado exige um processo real em produção"** — `lp/LPCurso.tsx:22`. Claim de unicidade nacional, impublicável sem varredura de mercado.
- ⚠️ **Números de mercado sem fonte na página** — `Consultoria.tsx:217` ("Diagnósticos custam R$ 15–60 mil; pilotos, R$ 30–120 mil"), `lp/LPDiagnostico.tsx:56-60`, `lp/LPConsultoria.tsx:21,63` ("consultoria de R$ 100 mil", "R$ 60–250 mil"), `lp/LPComunidade.tsx:54,62` ("plataformas de IA R$ 2.580+/mês", "1/9 do plano de entrada"), `lp/LPCurso.tsx:59` ("cursos de ferramenta R$ 571–1.497").
- ✅ Verificados OK: "Empresas brasileiras testam mais agentes que as americanas (Intel/IDC, 2025)" (`Empresas.tsx:111`) — sustentado (estudo Intel/IDC, jun/2025, cobertura pública); menções Ford/CNC/Electrolux sem número de resultado (conforme doc 17); nenhuma ocorrência de "2+ GW", Caixa Cantada, TWS/CMPG ou "R$ 5M Electrolux" no código ativo.
- ⚠️ **Garantia do Sprint** (`Consultoria.tsx:240-243`, `lp/LPConsultoria.tsx:81-82`): "KPIs não atingidos = extensão sem custo até atingir" — obrigação contratual forte sem termo anexado no site; exigir contrato com definição de "falha de execução nossa".
- ⚠️ **LGPD operacional**: `LeadCaptureForm.tsx` coleta nome/e-mail/WhatsApp com apenas um disclaimer textual ("Seus dados são usados apenas para o contato…") — sem checkbox de consentimento nem link inline para `/privacidade`.

---

## 3. Lista priorizada de correções

### P0 — bloqueia publicação

| # | Arquivo | Problema | Correção |
|---|---|---|---|
| P0-1 | `index.html` | Title, description, keywords, OG e JSON-LD estáticos ainda dizem **"Sprint Traciona 90 Dias · Sistema Operacional de Crescimento"** — marca e oferta antigas. Crawlers sociais (WhatsApp, LinkedIn) e buscadores sem JS indexam a empresa errada. | Reescrever o head estático com a marca "L.V. Pedrini — IA que Trabalha", description atual, canonical absoluto e JSON-LD Person/WebSite; remover keywords legadas. |
| P0-2 | `src/components/lp/LandingPage.tsx:71`; `src/pages/Community.tsx:106,245,266,297`; `src/pages/Cursos.tsx:139,258,300,331` | **Checkout inexistente**: `CHECKOUT_PLACEHOLDER = "#checkout-em-breve"` e `href="#checkout"` sem nenhum `id="checkout"` no código. Todo CTA de compra dos funis A/B (Curso, Lab, Imersão) é link morto. | Conectar URLs reais de checkout (Hotmart/Kiwify) via `checkoutUrl`, ou trocar todos para lista de espera/form até o checkout existir. Sem isso, zero tráfego pago. |
| P0-3 | `src/components/AboutSection.tsx`, `HeroSection.tsx`, `FaqSection.tsx`, `ForWhomSection.tsx`, `LeadForm.tsx`, `conversion/ProofBar.tsx` | Dead code com claims proibidos ("R$ 5 bilhões", "projetos bilionários", "4Watt Tech") e stats fabricados ("150+ empresas", "4.9/5", "100%"). | Deletar os 6 arquivos do repositório (não apenas deixar sem import) antes do deploy. |
| P0-4 | `src/pages/Index.tsx:207-208`; `src/pages/lp/LPDiagnostico.tsx:21`; `src/pages/Insights.tsx` (artigo 3, lede) | Claim McKinsey incorreto: "Só 1% captura valor de verdade" atribuído ao State of AI 2025. | Corrigir para o dado real com fonte precisa: ex. "88% usam IA; só 39% apontam impacto no resultado e 6% capturam valor em escala (McKinsey, State of AI, nov/2025)" — ou citar o 1% de maturidade do relatório correto (Superagency, jan/2025). |
| P0-5 | `src/pages/Sobre.tsx:152-166` | Heading "Marcos verificáveis" sobre credenciais cujos diplomas o doc 17 marca como pendentes de digitalização. | Digitalizar e linkar os diplomas, ou trocar o heading para "Formação" até que sejam de fato verificáveis. |

### P1 — corrigir antes de tráfego pago

| # | Arquivo | Problema | Correção |
|---|---|---|---|
| P1-1 | `src/components/lp/LPLayout.tsx`; `public/sitemap.xml` | 6 LPs indexáveis e presentes no sitemap — canibalizam as páginas principais e duplicam conteúdo. | Passar `noindex` nas LPs (a prop já existe em `SEO.tsx:23`) e remover `/lp/*` do sitemap. |
| P1-2 | `src/components/SEO.tsx:63` | OG image default é `placeholder.svg` — SVG não renderiza em WhatsApp/LinkedIn/Twitter. | Gerar `og-image.png` 1200×630 brandeado e definir por página. |
| P1-3 | `Consultoria.tsx:217`; `LPEmpresas.tsx:64`; `LPConsultoria.tsx:63`; `LPComunidade.tsx:62`; `LPCurso.tsx:59` | Faixas de preço de mercado apresentadas como fato, sem fonte. | Adicionar fonte com link ou reescrever como "referência típica observada em propostas que avaliamos". |
| P1-4 | `lp/LPCurso.tsx:22` | "A única formação de IA do Brasil…" — unicidade insustentável. | Suavizar: "formação em que o certificado exige um processo real em produção" (sem "única do Brasil"). |
| P1-5 | `lp/LPImersao.tsx:15-24`; `Imersao.tsx:136-140,286-301` | Venda de evento sem data ("próxima turma a confirmar") com CTA "Garantir minha vaga" disparando `checkout_start` para lista de espera. | Padronizar: CTA "Entrar na lista de espera" + evento `waitlist_join`; só vender com data e cidade fechadas. |
| P1-6 | `src/pages/Insights.tsx:10-45`; `Index.tsx:483-505` | 21 artigos listados, 3 existem; home marca posts como "Em produção". | Publicar ou remover os placeholders; taguear corretamente. |
| P1-7 | `src/components/conversion/LeadCaptureForm.tsx:163-165` | Captura de dados pessoais sem consentimento LGPD explícito nem link inline para `/privacidade`. | Adicionar checkbox/texto de consentimento com link para a política. |
| P1-8 | `Consultoria.tsx:240-243` | Garantia de extensão do Sprint sem termo contratual disponível. | Anexar minuta de contrato ou condicionar a garantia a termo assinado na copy. |

### P2 — melhoria

| # | Arquivo | Problema | Correção |
|---|---|---|---|
| P2-1 | arquitetura (Vite SPA) | Meta/OG/JSON-LD só via JS (`useEffect`); sem SSR/prerender. | Avaliar `vite-plugin-prerender` ou SSG para as rotas institucionais. |
| P2-2 | `src/pages/Cases.tsx` | Página de prova sem prova numérica publicada. | Publicar 1 case próprio com números auditados (4W Energia) — doc 17 item "números internos com metodologia". |
| P2-3 | `src/pages/Solucoes.tsx` | 3 taxonomias concorrentes (8 degraus × 5 níveis × 3 formatos). | Manter níveis N1–N5 como frame único e mapear ofertas dentro deles. |
| P2-4 | `LandingPage.tsx:82-84` | A/B via `?v=b` sem randomização/persistência. | Randomizar no primeiro hit, persistir em cookie/localStorage, atribuir variante nos eventos. |
| P2-5 | `Index.tsx:157-172` | Barra de credibilidade só textual; nenhuma prova visual. | Adicionar foto/artifact verificável (registro 4W, Lattes) quando disponível. |
| P2-6 | `Metodo.tsx:230-235` | CTA "Aplicar o CARGA na minha empresa" leva ao quiz do diagnóstico — desencontro rótulo/destino. | Renomear para "Começar pelo AI Work Audit". |
| P2-7 | `Solucoes.tsx:234`; `Consultoria.tsx:140` | Tabelas largas no mobile sem affordance de scroll. | Adicionar hint visual ("deslize →") ou converter em cards empilhados. |

---

## Conclusão

A copy e a arquitetura de ofertas estão acima da média do mercado — tagline, Método CARGA, preços públicos e honestidade de prova são decisões corretas. Mas o site **não está pronto para publicação nem para tráfego pago**: a fundação técnica carrega a marca errada (`index.html`), o ponto de venda está morto (checkout placeholder), há claims proibidos/fabricados em dead code prontos para vazar, e o claim estatístico central (McKinsey 88%/1%) está incorreto contra a própria fonte citada. Resolvidos os 5 itens P0 e os 8 itens P1, a barra de 8,5 fica ao alcance — hoje nenhuma página a atinge.
