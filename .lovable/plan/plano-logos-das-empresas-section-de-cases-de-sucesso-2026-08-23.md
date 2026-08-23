# Plano — Logos das empresas + Section de Cases de Sucesso

## O que vou fazer

### 1. Logos das empresas
- Baixar os logos informados (4WaTT, 4W Energia, Traciona AI, Electrolux) e salvá-los em `src/assets/logos/` como arquivos locais (import ES6), evitando hotlink de terceiros — mais rápido, estável e sem quebrar se o site de origem mudar.
- TWS e CMPG não têm logo informado: entram com marca tipográfica (nome em Montserrat 700 dentro de um bloco champagne/hairline), coerente com o design system.
- Tratamento visual único no manual da marca: logos em altura fixa, contidos, em cartões `card-lux` sobre off-white, com `grayscale` suave e cor no hover — evita colagem de logos coloridos brigando com a paleta navy/champagne.

### 2. Nova section "Cases de sucesso"
- Nova faixa de logos (strip de credibilidade) logo abaixo do hero na home (`/`), com os 6 logos/marcas e o rótulo "Onde o método foi aplicado".
- Reescrita da página `/cases` com uma grade de 6 cards, um por empresa, cada um com: logo, nome, setor, escopo do trabalho (texto que você enviou, editado para leitura), tags de capacidade (Planejamento estratégico, RAG, Data Science, Automação, Agentes, Lean/VSM) e link para o site quando existir.
- A estrutura C-A-R-G-A e a nota de integridade da página atual são mantidas, com a seção "cases em documentação" substituída pelos cases nomeados.
- CTA final permanece apontando para `/diagnostico`.

### 3. Conteúdo por case
- **4WaTT Bio Engenharia** — deeptech + planejamento estratégico, RAG, automação de processos, agentes virtuais para gestão, implantação e controladoria de projetos. `4watt.tech`
- **4W Energia** — IA para leitura de dados e data science no setor de energia; RAG anti-alucinação com analisador de faturas e dados. `4wenergia.com.br`
- **TWS Sociedade de Advogados** — automações para o jurídico; IA generativa e RAG para validação de planejamento estratégico; skill customizada para peças jurídicas em setores regulados.
- **Traciona AI** — IA generativa e data science em grandes volumes para análise de mercado, plano de negócio, modelo financeiro e automação gerencial. `tracionaai.com.br`
- **CMPG Advocacia** — soluções personalizadas para o jurídico; RAG para planejamento estratégico e comercial; peças jurídicas nichadas em setores regulados. Instagram como link.
- **Electrolux do Brasil** — mapeamento de processos com VSM/Lean, engenharia de ligas metálicas especiais, máquina especial para mangueiras hidráulicas, data science e automação digital para redução de custos. `electrolux.com.br`

## Ponto de atenção (importante)
O documento interno `docs/17-proof-assets.md` classifica como bloqueados até validação: uso de **nome e logo de TWS e CMPG** (sem autorização escrita) e o claim **"mais de R$ 5 milhões economizados" na Electrolux** (sem carta de referência). Vou publicar como você pediu, mas com duas salvaguardas de risco:
- Os cards de TWS, CMPG e Electrolux ganham a nota "trabalho realizado por Leonardo Pedrini; marcas citadas apenas como referência de atuação" e o logo Electrolux fica sem sugerir parceria comercial atual.
- O número dos R$ 5 milhões entra como "redução de custos superior a R$ 5 milhões (projetos de engenharia e supply chain)". Se preferir, removo o número ou removo TWS/CMPG até você ter a autorização — é só dizer.

## Detalhes técnicos
- Assets: `src/assets/logos/4watt.png`, `4w-energia.png`, `traciona-ai.png`, `electrolux.png` (baixados via curl, importados com ES6).
- Novo componente `src/components/sections/LogoStrip.tsx` (faixa de logos reutilizável) e `src/components/sections/CaseCard.tsx`.
- `src/pages/Cases.tsx` reescrito com os dados dos 6 cases; `src/pages/Index.tsx` recebe a `LogoStrip` abaixo do hero.
- `trackEvent("case_view", ...)` mantido por card.
- Sem mudança de design system: apenas tokens existentes (`card-lux`, `.eyebrow`, `cobre-dark`, `papel-light`).
