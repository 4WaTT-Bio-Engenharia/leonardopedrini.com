# Leonardo Vieira Pedrini — Site institucional

Memória viva do projeto. Este arquivo é o resumo operacional; a fonte completa e
detalhada de cada tópico vive em `docs/NN-*.md` (linkado abaixo em cada seção).
Se este arquivo divergir de um doc, o doc mais recente/específico vence — mas
atualize este resumo também.

## ⚠️ Contradições conhecidas no repo (não copiar sem checar)

- **`README.md`** contém o prompt original do Lovable ("Business Acceleration
  Hub" / isca "Biblioteca Essencial do MEI", paleta preto+verde-neon). Isso é
  **histórico/obsoleto** — o projeto evoluiu para o posicionamento "IA que
  Trabalha" descrito abaixo e em `docs/`. Não usar o README como referência de
  marca ou produto.
- **Nome do método:** `docs/06-proprietary-method.md` e `docs/13-site-architecture.md`
  definem o vencedor como **Método CARGA** (Cartografar, Arquitetar, Rodar,
  Governar, Ampliar) e dizem explicitamente que ele **substitui** qualquer
  menção a "M.A.P.A.". Porém `docs/07-offer-architecture.md` (Nível 2 —
  Formação) ainda descreve o curso com o método antigo "M.A.P.A." (Mapear,
  Arquitetar, Produzir, Aferir). **Usar sempre CARGA**; se mexer no conteúdo do
  curso, atualizar essa página para CARGA também.
- **Design system:** existem duas direções visuais documentadas.
  `docs/05-brand-strategy.md` §6 especifica a direção vencedora **"Engenharia
  Editorial"** (grafite `#1B2431` / papel `#F4F1EA` / cobre `#C2703D`,
  tipografia Fraunces + Inter/Archivo + IBM Plex Mono). `docs/20-design-system.md`
  documenta o que está **de fato implementado hoje** no código: **"Luxo Navy &
  Champagne"** (navy `#0E233A` / papel `#F7F5F1` / cobre-champagne `#C9A962`,
  tipografia Montserrat em tudo + IBM Plex Mono só para números). **`docs/20`
  é a fonte de verdade para trabalho de UI** (reflete `src/index.css` e
  `tailwind.config.ts`); `docs/05` é a tese de direção de marca original.
  Fraunces/Archivo foram removidas do projeto — não reintroduzir.

## O que é este projeto

Site institucional + funil de vendas da marca pessoal de **Leonardo Vieira
Pedrini** — engenheiro, empreendedor (4WaTT Bio Engenharia, 4W Energia,
Traciona AI) que implementa IA como infraestrutura de trabalho dentro de
empresas reais. Não é curso de prompt, não é comunidade de ferramentas: é
implementação com processo, KPI e resultado medido.

**Live app:** https://lvpedrini-mentor-boost.lovable.app (build via Lovable,
sincroniza com este repo/branch `main`).
**Domínio público alvo:** https://www.leonardopedrini.com (`VITE_SITE_URL`).

## Posicionamento e tagline

**Tagline oficial:** "Pare de conversar com a IA. Coloque a IA para trabalhar."

**Território vencedor:** IA como infraestrutura de trabalho, não IA como chat.
**Inimigo conceitual:** o "turismo de prompts" — IA como enfeite (curso de
ferramenta sem processo, prompt solto, piloto que nunca vira produção).
**Frase de assinatura:** "IA que não executa é enfeite. — LVP"

**Statement de posicionamento:** Para empresários, gestores e especialistas
que já experimentaram IA mas continuam presos no chat, Leonardo é o
engenheiro-implementador que transforma IA em infraestrutura de trabalho —
processos, workflows e agentes que executam dentro da operação real — porque
passou mais de uma década construindo e operando empresas de verdade
(bioenergia, energia por assinatura, software) e implantando sistemas com
método (Lean, VSM, DMAIC) antes de falar de IA para qualquer audiência.

Detalhe completo: [`docs/04-positioning.md`](../docs/04-positioning.md)
(manifesto, narrativa, bios curta/longa, elevator pitch, headline LinkedIn).

## Tom de voz — regras rápidas

- Registro **executivo-pragmático**: frases curtas, verbos de ação, números
  sempre com unidade e fonte ("4 horas por semana", "R$ 12 mil/mês").
- Prova por **biografia e obra**, nunca por número de alunos/seguidores.
- **Proibido:** "🚀", "mindset", "jornada de transformação", "game-changer",
  "revolucionário", "empoderamento", "disrupção", "sinergia", hype vazio,
  urgência artificial, "!" em excesso.
- QI 176 do fundador: **nunca** no hero/headline/bio curta/palestra — só
  permitido na página `/sobre`, com documentação, formulação neutra. Nunca
  como argumento de venda. Ver `docs/05-brand-strategy.md` §5.
- Claims biográficos sensíveis (ex.: "2+ GW", exit "Caixa Cantada", cases
  nomeados TWS/CMPG, "economia R$ 5M Electrolux") são **⛔ bloqueados até
  documentação/autorização** — ver `docs/research/03-cases-proof.md`. Usar
  placeholder `[PROVA: descrição]` em vez de inventar números.
- Checklist completo de tom (diga/não diga): `docs/05-brand-strategy.md` §2.

## Método proprietário: CARGA

**C**artografar → **A**rquitetar → **R**odar → **G**overnar → **A**mpliar.

Ciclo de engenharia que transforma processos humanos sobrecarregados em
infraestrutura de trabalho executada por IA, com gate de saída objetivo em
cada etapa e camadas transversais de human-in-the-loop, evals e LGPD em todas
as fases. É o ativo intelectual defensável da marca: espinha dorsal do curso
(5 módulos = 5 letras), da consultoria (Diagnóstico/Piloto/Operação CARGA) e
do formato editorial de todo case público.

Métricas nomeadas: **Carga Automatizável** (% do tempo da operação candidato
a IA) e **Carga Assumida** (% efetivamente executado por IA com evals
verdes).

Especificação completa (entregáveis, gates, glossário, diagrama):
[`docs/06-proprietary-method.md`](../docs/06-proprietary-method.md)

## Os 5 ICPs (síntese)

| ICP | Dor central | Canal primário | Ticket âncora |
|---|---|---|---|
| 1 — Empreendedor | Usa IA no chat, nada virou processo | Instagram | R$ 60–15k |
| 2 — Gestor/Head | Diretoria cobrou plano de IA, sem plano | LinkedIn | R$ 3k–120k |
| 3 — Especialista/Consultor | Vende horas, quer escalar conhecimento | Conteúdo técnico | R$ 5–25k |
| 4 — Empresário/CEO | Já pagou consultoria que virou slide | Indicação + LinkedIn | R$ 15–120k |
| 5 — Empresa (300+) | Piloto morreu no PoC | Conteúdo técnico profundo | R$ 30k–250k+ |

Todos compartilham a mesma tese ("já viveram o turismo de prompts") — a
compra acontece quando a frustração com IA-como-chat supera o medo de
investir em IA-como-sistema. Perfis completos com JTBD, objeções e linguagem
literal: [`docs/03-icp-jtbd.md`](../docs/03-icp-jtbd.md)

## Value ladder (escada de ofertas)

| Nível | Oferta | Preço | Rota /solucoes |
|---|---|---|---|
| 0 | Newsletter + **AI Work Audit** (diagnóstico, 14 perguntas) | Grátis | `/diagnostico` |
| 1 | AI Work Starter Kit | R$ 197 | — |
| 2 | Formação IA que Trabalha | R$ 1.997 | `/cursos` |
| 3 | AI Work Lab (comunidade) | R$ 297/mês \| R$ 2.970/ano | `/comunidade` |
| 4 | Imersão IA que Trabalha (2 dias, 40 vagas) | R$ 2.997 | `/imersao` |
| 5 | Mentoria AI Work (12 semanas, grupo) | R$ 9.997 | `/consultoria` |
| 6 | AI Implementation Sprint (90 dias, flagship, 4 empresas/tri) | R$ 45.000 | `/consultoria` |
| 7 | Enterprise AI Transformation (anual) | a partir de R$ 150.000/ano | `/empresas` |

Regra de ascensão: nenhum degrau é terminal, todo desconto é sempre "crédito
do degrau anterior" (nunca cruzamento arbitrário). O AI Work Audit roteia por
score: <2,5 → N1+N2; 2,5–3,2 → N3; ≥3,3 → sessão consultiva → N5/N6.
Detalhe de cada oferta (entregáveis, bônus, CAC, margem, upsell/downsell):
[`docs/07-offer-architecture.md`](../docs/07-offer-architecture.md)
(⚠️ ver nota sobre M.A.P.A. no topo deste arquivo)

## Sitemap

```
INSTITUCIONAL
/                Home — roteador do ecossistema, 5 ICPs, CTA para /diagnostico
/sobre           Biografia/autoridade de Leonardo
/metodo          Método CARGA
/cases           Prova social (cases estruturados C-A-R-G-A)
/solucoes        Hub da value ladder (todos os 7 níveis pagos)
/cursos          Formação IA que Trabalha — R$ 1.997
/imersao         Imersão IA que Trabalha — R$ 2.997
/comunidade      AI Work Lab — R$ 297/mês
/consultoria     Mentoria AI Work (R$ 9.997) + AI Implementation Sprint (R$ 45.000)
/empresas        Enterprise AI Transformation — B2B, a partir de R$ 150k/ano
/diagnostico     AI Work Audit — quiz interativo de maturidade (14 perguntas)
/insights        Blog / hub de SEO (7 clusters)
/newsletter      Newsletter "IA que Trabalha"
/contato         Contato direto (comercial/imprensa/parceria/palestra)
/privacidade     LGPD
/termos          Termos de uso
/obrigado        Thank-you page pós-conversão
/link-bio        Link-in-bio (Instagram)

LANDING PAGES (tráfego pago, sem nav global, message match com anúncio)
/lp/curso, /lp/comunidade, /lp/imersao, /lp/consultoria, /lp/empresas, /lp/diagnostico
```

Todas as rotas acima já estão implementadas em [`src/App.tsx`](../src/App.tsx)
(lazy-loaded, `react-router-dom`). Arquitetura completa (seções por página,
CTAs, eventos de tracking, SEO title/description por rota, jornadas por ICP):
[`docs/13-site-architecture.md`](../docs/13-site-architecture.md)

## Objetivo de negócio

Site funciona como **roteador de ecossistema**: em 5 segundos o visitante
entende o que é, para quem é, e é direcionado ao **AI Work Audit**
(`/diagnostico`) como CTA universal de topo de funil. O Audit qualifica por
score e roteia para o degrau certo da value ladder. Objetivo estrutural do
site: ocupar o "vazio de preço" identificado no mercado brasileiro de IA
(R$ 5k–80k) entre educação/comunidade e consultoria enterprise — nenhum
concorrente mapeado vende "implementação assistida com resultado
mensurável" nessa faixa.

## Stack técnica

- **Vite + React 18 + TypeScript**, roteamento `react-router-dom` (rotas
  lazy-loaded com `Suspense`).
- **UI:** shadcn/ui (Radix primitives) + Tailwind CSS. `components.json`
  configura o shadcn.
- **Estado/dados:** `@tanstack/react-query`; formulários `react-hook-form` +
  `zod`.
- **Backend:** Supabase (`@supabase/supabase-js`) — tabela `leads` recebe
  captura de formulários (`VITE_SUPABASE_URL` / `VITE_SUPABASE_PUBLISHABLE_KEY`).
  Edge function `supabase/functions/notify-lead`. Migrations em
  `supabase/migrations/`.
- **Analytics:** GTM/GA4/Meta Pixel/LinkedIn Partner ID injetados apenas se a
  env var existir (`src/components/Analytics.tsx`) + `ScrollTracker` para
  eventos de scroll. Naming convention de eventos (`snake_case`,
  `diagnostic_start`, `product_view`, `checkout_start` etc.):
  [`docs/16-analytics.md`](../docs/16-analytics.md)
- **Testes:** Vitest + Testing Library (`npm test`).
- **Build/deploy:** projeto é gerenciado via **Lovable** — mudanças feitas no
  editor Lovable sincronizam automaticamente com este repo/`main`, e push
  para `main` sincroniza de volta. `dist/` é build gerado, não editar à mão.

## Design system (o que está implementado — ver `docs/20-design-system.md`)

- **Paleta:** `grafite`/navy `#0E233A` (fundo escuro), `papel` `#F7F5F1`
  (fundo claro), `cobre`/champagne `#C9A962` (**único acento de ação**, CTAs
  e hairlines), `aco` (neutro secundário), `medicao` (verde, dados
  verificados), `risco` (vinho, só para erro em diagrama).
- **Tipografia:** Montserrat em tudo (display 800, corpo 400/500, eyebrow 600
  uppercase); `IBM Plex Mono` **somente** para números/dados/preços/CNPJ.
  Fraunces e Archivo foram removidas — não reintroduzir.
- **Motion:** wrapper `Reveal` (IntersectionObserver, sem framer-motion,
  respeita `prefers-reduced-motion`); curva padrão `ease-luxury`
  (`cubic-bezier(0.22,1,0.36,1)`). Não instalar libs de animação.
- **Padrão de seção:** alternar no máximo 2–3 seções claras antes de um
  bloco navy imersivo (`bg-gradient-navy` + `bg-grid-navy`). Padding vertical
  padrão `py-28 md:py-36`.
- **Proibido:** roxo, gradientes neon, robôs/cérebros/circuitos/hologramas,
  qualquer estética "sci-fi corporativo" de IA genérica.

## Onde encontrar cada coisa em `docs/`

| Doc | Conteúdo |
|---|---|
| `01-market-competitive.md` (em `research/`) | Concorrentes, preços de mercado, fontes |
| `02-benchmark-cro.md` (em `research/`) | Benchmark CRO (Couto, G4, V4), auditoria do site anterior |
| `03-icp-jtbd.md` | 5 ICPs, JTBD, objeções, linguagem literal |
| `03-cases-proof.md` (em `research/`) | Classificação de claims biográficos (o que pode ser dito publicamente) |
| `04-positioning.md` | Território, statement, manifesto, bios, tagline |
| `05-brand-strategy.md` | Personalidade, tom de voz, canais, direção visual original |
| `06-proprietary-method.md` | Método CARGA completo |
| `07-offer-architecture.md` | Value ladder detalhada (⚠️ nota M.A.P.A. no topo) |
| `08-pricing.md` | Justificativa de preços |
| `09-community.md` | AI Work Lab em detalhe |
| `10-acquisition.md` | Estratégia de aquisição |
| `11-funnels.md` | Funis A–D |
| `12-content-strategy.md` | Estratégia de conteúdo |
| `13-site-architecture.md` | Sitemap completo, seções por página, tracking, SEO |
| `14-copy-system.md` | Sistema de copy |
| `15-seo.md` | Clusters de SEO, pilares |
| `16-analytics.md` | Naming convention de eventos de tracking |
| `17-proof-assets.md` | Estrutura de prova social/cases |
| `18-launch-plan.md` | Plano de lançamento |
| `19-red-team-review.md` | Revisão crítica |
| `20-design-system.md` | **Design system implementado (fonte de verdade de UI)** |

## Convenções de trabalho neste repo

- Idioma do conteúdo do site: **português (pt-BR)**.
- Todo case público segue a estrutura editorial C-A-R-G-A (mapa → blueprint →
  piloto → governança → o que escalou).
- Toda página comercial termina com CTA para o **próximo degrau** da value
  ladder — nunca pular dois degraus de uma vez.
- Escassez sempre quantificada quando usada (40 vagas/imersão, 12
  vagas/mentoria, 4 empresas/trimestre no Sprint) — nunca escassez falsa.
- Eventos de analytics em `snake_case`, seguindo `docs/16-analytics.md`.
