
## Objetivo
Elevar a landing para um padrão "Apple-like" (tipografia arredondada, respiração generosa, microinterações sutis, luxo silencioso), atualizar os textos das três empresas fundadas e criar uma subpágina de Comunidade com oferta de assinatura R$ 19,90/mês.

## 1. Sistema de design (Apple-like, luxo silencioso)

- Substituir Fraunces + Manrope por **SF Pro-style**: `Montserrat` para display (arredondada, geométrica) e `Inter` para corpo — via Google Fonts.
- Refinar `src/index.css` e `tailwind.config.ts`:
  - Manter navy profundo, reduzir contraste do dourado para um tom mais champagne/quase off-white metálico.
  - Aumentar raios (`--radius: 1rem`), sombras mais suaves e difusas.
  - Introduzir gradientes sutis de "vidro" (glass) para cards.
  - Tracking mais apertado em display, leading generoso.
- Ajustar todos os componentes existentes para o novo ritmo (padding maior, hierarquia mais silenciosa, menos "gold" saturado).
- Adicionar microanimações discretas (fade/translate no scroll) mantendo o código atual sem libs novas.

## 2. Atualização de textos — Autoridade

Reescrever `src/components/AuthoritySection.tsx` com o novo copy fornecido:

- **4WaTT Tech** — Deeptech · Sustentabilidade
  "Deeptech que transforma qualquer tipo de lixo em biocombustível. Limpa o planeta e garante o futuro das próximas gerações."
- **4W Energia** — Energia por Assinatura
  "Energia com desconto no modelo de assinatura, acessível a qualquer pessoa física ou jurídica."
- **Traciona AI** — IA para PMEs
  "Sistema completo para micro e pequeno empreendedor que quadriplica o crescimento em até 18 meses com IA integrada que não alucina — crescimento com segurança e garantia."

Ajustar também menções em Hero/About (ex.: "triplicar" → alinhar com "quadriplicar" quando referente à Traciona; manter promessa geral coerente).

## 3. Nova subpágina `/comunidade`

Criar `src/pages/Community.tsx` e rota em `App.tsx`. Estrutura:

1. Hero da comunidade — proposta de valor: "Escale seu negócio com IA, mentoria e ferramentas — por menos que um almoço."
2. O que está incluso (grid): 
   - Aulas semanais de gestão, vendas e finanças
   - Ferramentas prontas (planilhas, dashboards, playbooks)
   - IAs treinadas para vendas, financeiro, operações e marketing
   - Comunidade ativa de empreendedores
   - Encontros ao vivo com Leonardo
3. Card de pricing único, destaque premium:
   - **R$ 19,90/mês**
   - Cancelamento a qualquer momento
   - CTA: "Quero fazer parte" → por ora leva a `/obrigado` ou abre WhatsApp (checkout real fica fora de escopo desta iteração — apenas captura de intenção).
4. FAQ curto (4 perguntas).
5. Footer reaproveitado.

Adicionar link "Comunidade" na `Navbar` e um CTA secundário na Hero principal ("Conheça a Comunidade · R$ 19,90/mês").

## 4. SEO

- Atualizar `index.html` com descrição que inclui a comunidade.
- Meta tags específicas ao adicionar `<Helmet>`-equivalente via update direto do `document.title` no `Community.tsx` (padrão já usado no projeto) ou tags estáticas se preferir manter simples.

## Detalhes técnicos

- Fontes: trocar `@import` no topo de `src/index.css` para Montserrat + Inter; atualizar `fontFamily` no Tailwind (`sans: Inter`, `display: Montserrat`).
- Tokens CSS: reduzir saturação de `--primary` (dourado → champagne mais claro), aumentar `--radius`, adicionar `--shadow-soft`.
- Nova rota:
  ```tsx
  <Route path="/comunidade" element={<Community />} />
  ```
- Sem backend novo nesta etapa (sem Stripe/Paddle). Se quiser cobrança real depois, abro fluxo separado recomendando Stripe.

## Fora de escopo (confirmar se quer incluir)

- Processamento de pagamento real (Stripe/Paddle).
- Área logada de membros.
