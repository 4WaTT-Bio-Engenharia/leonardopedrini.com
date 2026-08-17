# 07 — Arquitetura de Ofertas (Value Ladder Completa)
## Leonardo Vieira Pedrini — "Pare de conversar com a IA. Coloque a IA para trabalhar."

**Autor:** Offer, Pricing & Community Lead
**Data:** 2026-08-16
**Base factual:** `docs/research/01-market-competitive.md`, `02-benchmark-cro.md`, `03-cases-proof.md`
**Convenção:** preços de mercado citados são **[FATO]** (fontes na pesquisa 01). Projeções de CAC, margem, LTV e conversão são **[HIPÓTESE]** e devem ser validadas com dados reais de operação.

---

## 0. Princípios da arquitetura

1. **Cada degrau conduz ao próximo.** Nenhuma oferta é terminal: toda entrega termina com o "próximo problema" que o degrau seguinte resolve.
2. **Escada de valor explícita** (ausência crítica apontada na auditoria do site, pesquisa 02, seção 2.3): o visitante deve enxergar a jornada completa — do diagnóstico gratuito à transformação enterprise.
3. **Ocupar o vazio de preço do meio (R$ 5k–80k)** — oportunidade central da pesquisa 01 (seção 4 e 6): entre a educação/comunidade (até ~R$ 6k/ano) e a consultoria enterprise (R$ 100k+), quase ninguém vende **implementação assistida com resultado mensurável**. Os degraus 5, 6 e 7 ocupam esse espaço.
4. **Posicionamento premium com transparência de preço** — ninguém no grupo de creators de IA publica preço de fundo de funil (pesquisa 01, seção 5). Transparência = diferencial de SEO e de confiança.
5. **Implementador, não guru** — toda oferta entrega *trabalho implementado*, não apenas conhecimento. Métrica de sucesso de qualquer degrau: **algo rodando em produção** no negócio do cliente.

### Mapa da Value Ladder

| Nível | Oferta | Tipo | Preço recomendado | Função no funil |
|---|---|---|---|---|
| 0 | Newsletter "IA que Trabalha" + **AI Work Audit** (diagnóstico) | Gratuito | R$ 0 | Captura, segmentação e roteamento |
| 1 | **AI Work Starter Kit** | Produto digital | R$ 197 | Tripwire: converter lead em comprador |
| 2 | **Formação IA que Trabalha** | Curso estruturado | R$ 1.997 | Core de educação; prepara para implementar |
| 3 | **AI Work Lab** (comunidade) | Assinatura | R$ 297/mês ou R$ 2.970/ano | Recorrência, implementação assistida contínua |
| 4 | **Imersão IA que Trabalha** (2 dias ao vivo) | Evento presencial | R$ 2.997 | Aceleração + conversão para high ticket |
| 5 | **Mentoria AI Work** (grupo, 12 semanas) | Mentoria | R$ 9.997 | Implementação assistida (entra no vazio R$ 5k–80k) |
| 6 | **AI Implementation Sprint** (90 dias) | Projeto de implantação | R$ 45.000 | Flagship: transformação com KPI contratado |
| 7 | **Enterprise AI Transformation** | Customizado | a partir de R$ 150.000/ano | B2B enterprise / in-company |

**Lógica de ascensão:**
- Audit → score baixo → Nível 1+2 ("você precisa de base estruturada")
- Audit → score médio → Nível 3 ("você sabe o que fazer, falta fazer toda semana")
- Audit → score alto → Nível 5/6 ("você precisa de implantação com KPI, não de curso")
- Nível 2 → Nível 3 (continuidade) | Nível 3 → Nível 4/5 | Nível 4 → Nível 5/6 | Nível 5 → Nível 6 | Nível 6 → Nível 7

---

## NÍVEL 0 — Gratuito: Newsletter "IA que Trabalha" + AI Work Audit

### 0.1 Newsletter "IA que Trabalha"
- **ICP:** todos os 5 ICPs (topo de funil).
- **Problema:** excesso de conteúdo de IA "modismo" (prompts, ferramentas da semana) e escassez de conteúdo de *implementação real*.
- **Resultado prometido:** toda semana, um processo de negócio real decomposto e automatizado — com o que funcionou, o que falhou e quanto valeu.
- **Mecanismo:** 1 edição semanal com estrutura fixa: (1) um caso de implementação desmontado, (2) um template/aplicação prática, (3) um número de ROI.
- **Função:** ativo de autoridade + máquina de indicação para o Audit (CTA permanente: "Descubra seu nível de maturidade em 8 minutos").
- **CTA:** "Fazer o AI Work Audit →"

### 0.2 AI Work Audit — diagnóstico interativo de maturidade

**Promessa:** em 8 minutos, o respondente recebe seu **Nível de Maturidade em IA aplicada ao trabalho**, os processos candidatos à automação, uma estimativa de potencial de ganho e recomendações priorizadas.

**Formato:** quiz web interativo (14 perguntas, ~30s cada), resultado imediato na tela + relatório em PDF por e-mail (captura de lead no meio do fluxo: responde → informa e-mail → recebe resultado completo).

#### As 14 perguntas (por dimensão)

**Dimensão 1 — Estratégia (peso 20%)**
1. Sua empresa tem uma decisão formal sobre onde a IA deve (e não deve) ser usada? *(0 = nunca discutido / 1 = ideias soltas / 2 = prioridades definidas informalmente / 3 = roadmap documentado com responsáveis / 4 = roadmap revisado trimestralmente com metas)*
2. Você consegue citar hoje os 3 processos em que IA geraria mais retorno no seu negócio? *(0 = não / 1 = vagamente / 2 = sim, sem priorização / 3 = sim, priorizados / 4 = sim, priorizados e quantificados em R$)*
3. Existe um orçamento ou dono designado para iniciativas de IA? *(0 = não / 1 = "eu mesmo, quando sobra tempo" / 2 = dono informal / 3 = dono + orçamento / 4 = dono, orçamento e meta vinculada)*

**Dimensão 2 — Processos (peso 20%)**
4. Os processos-chave do seu negócio (vendas, atendimento, financeiro, operação) estão documentados? *(0 = só na cabeça das pessoas / 1 = alguns / 2 = maioria documentada / 3 = documentados e atualizados / 4 = documentados com métricas de ciclo e gargalo)*
5. Quanto tempo por semana sua equipe gasta em tarefas repetitivas que seguem regra clara (copiar/colar, preencher, responder o mesmo tipo de pergunta)? *(0 = não sei / 1 = muito, mas nunca medimos / 2 = medimos informalmente / 3 = medido e mapeado / 4 = medido, mapeado e já em automação)*

**Dimensão 3 — Dados (peso 15%)**
6. Os dados necessários para operar (clientes, pedidos, histórico de atendimento, financeiro) estão centralizados e acessíveis digitalmente? *(0 = planilhas soltas e papel / 1 = sistemas isolados sem integração / 2 = CRM/ERP central / 3 = integrados / 4 = integrados, limpos e consultáveis por linguagem natural)*
7. Você tomaria uma decisão importante hoje confiando na qualidade dos seus dados? *(0 = não / 1 = com ressalvas grandes / 2 = na maioria dos casos / 3 = sim / 4 = sim, com auditoria de qualidade periódica)*

**Dimensão 4 — Ferramentas (peso 15%)**
8. Quais ferramentas de IA sua equipe usa hoje no trabalho real? *(0 = nenhuma / 1 = uso pessoal e informal / 2 = algumas licenças pagas sem padrão / 3 = stack definido com padrões de uso / 4 = stack + automações/agentes integrados aos sistemas)*
9. Você já tem alguma automação ou agente de IA rodando em produção (não em teste)? *(0 = não / 1 = testes abandonados / 2 = 1 automação simples / 3 = algumas rodando / 4 = várias, com monitoramento e responsável)*

**Dimensão 5 — Pessoas (peso 15%)**
10. Sua equipe sabe usar IA no trabalho do dia a dia? *(0 = não / 1 = cada um por si / 2 = alguns "fazedores" informais / 3 = treinamento feito / 4 = treinamento + rituais de uso + campeões internos)*
11. Existe resistência ou medo de IA na equipe? *(0 = resistência forte não tratada / 1 = medo difuso / 2 = curiosidade sem direção / 3 = engajamento / 4 = equipe propõe ativamente novos usos)*
12. Quem implementaria uma automação se você decidisse hoje? *(0 = ninguém / 1 = eu, sem tempo / 2 = alguém da equipe aprenderia / 3 = temos quem faça / 4 = temos quem faça e já fez)*

**Dimensão 6 — Governança (peso 15%)**
13. Sua empresa tem regras sobre o que pode ser enviado a ferramentas de IA (dados de clientes, LGPD, confidencialidade)? *(0 = não / 1 = preocupação sem política / 2 = orientação informal / 3 = política escrita / 4 = política + controle técnico + revisão)*
14. Como você mediria o retorno de uma iniciativa de IA? *(0 = não mediria / 1 = sensação de economia / 2 = horas economizadas estimadas / 3 = KPI definido antes de iniciar / 4 = KPI + baseline + revisão de ROI recorrente)*

#### Lógica de scoring

- Cada resposta vale 0–4 pontos. **Score da dimensão** = média ponderada das perguntas da dimensão (0–4). **Score geral** = soma ponderada pelos pesos das dimensões (0–4).
- **Níveis de maturidade:**
  - **Nível 1 — Espectador** (0,0–1,4): consome conteúdo de IA, nada implementado.
  - **Nível 2 — Experimentador** (1,5–2,4): testes individuais, sem método nem ROI.
  - **Nível 3 — Estruturante** (2,5–3,2): processos mapeados, primeiras automações, falta consistência.
  - **Nível 4 — Integrado** (3,3–3,8): automações em produção, falta escala/governança.
  - **Nível 5 — Orquestrado** (3,9–4,0): IA como infraestrutura; candidato a projetos avançados.

#### Roteamento por score (a máquina de ascensão)

| Resultado | Diagnóstico entregue | Oferta roteada | Argumento |
|---|---|---|---|
| Score **< 2,5** (Níveis 1–2) | "Falta base: processo, método e primeira implementação guiada" | **Starter Kit (N1) + Formação (N2)** | "Antes de contratar qualquer consultoria, estruture a base em 6 semanas" |
| Score **2,5–3,2** (Nível 3) | "Você sabe o que fazer — falta cadência, templates e revisão de especialista" | **AI Work Lab / Comunidade (N3)** | "Implementação é um hábito semanal, não um evento" |
| Score **≥ 3,3** (Níveis 4–5) | "Você está pronto para implantação com KPI e retorno contratado" | **Sessão de Diagnóstico Consultivo** (call de 45 min, paga a R$ 497 e revertida como crédito, ou gratuita mediante aplicação qualificada) → **Mentoria (N5) ou Sprint (N6)** | "Seu gargalo não é conhecimento, é execução assistida" |

**Cross-sell universal:** todo relatório termina com a lista "3 processos candidatos à automação no seu caso" — gerada a partir das respostas das dimensões 2 e 4 — e o convite para a newsletter.

**Economia do Nível 0 [HIPÓTESE]:** custo marginal por lead ≈ R$ 0; função é reduzir o CAC de todos os degraus pagos (rotação por score = lead pré-qualificado). Meta de conversão Audit → compra de algum degrau em 90 dias: 8–15% **[HIPÓTESE — validar]**.

---

## NÍVEL 1 — AI Work Starter Kit (produto de entrada)

| Campo | Especificação |
|---|---|
| **Nome** | AI Work Starter Kit — "Seus primeiros 10 agentes de trabalho" |
| **ICP** | Empreendedor e especialista/consultor no início da jornada (Níveis 1–2 do Audit) |
| **Problema** | "Eu uso o ChatGPT como chat, mas nada mudou no meu trabalho" — a dor exata do posicionamento |
| **Resultado** | 10 agentes/assistentes pré-configurados instalados e em uso nas tarefas mais comuns (e-mail, proposta, reunião, relatório, atendimento) em até 7 dias |
| **Mecanismo** | Biblioteca de prompts-agente prontos + templates de processo + guias de instalação de 15 min cada — *copiar, colar, trabalhar* |
| **Formato** | Digital, auto-servido (área de membros + download) |
| **Duração** | Acesso vitalício; implementação estimada 7 dias |
| **Entregáveis** | 10 kits de agente (prompt de sistema + template de entrada/saída + checklist de uso); 5 templates de processo (seguindo os processos mais comuns de PMEs de serviço); guia "LGPD básico para usar IA sem risco" |
| **Bônus** | Planilha "Calculadora de horas economizadas" (baseline para medir ROI — planta a semente dos degraus superiores); 1 aula gravada "Como medir o retorno da IA" |
| **Suporte** | FAQ + e-mail assíncrono (72h); sem suporte ao vivo |
| **Preço** | **R$ 197** (âncora: "menos que 1 hora de qualquer consultor") |
| **Parcelamento** | À vista / PIX com 10% off (R$ 177) |
| **CAC máximo** | R$ 60 (~30% do preço) **[HIPÓTESE]** |
| **Margem estimada** | ~85% (digital, hospedagem + gateway) **[HIPÓTESE]** |
| **LTV** | R$ 197 direto; LTV real está no degrau seguinte: compradores de tripwire convertem a produtos maiores em taxa historicamente maior que leads frios **[HIPÓTESE — validar]** |
| **Upsell** | Order bump no checkout: "Pacote de 20 templates de processo adicionais" (+R$ 97); pós-compra dia 7: convite para a Formação com crédito de R$ 197 |
| **Downsell** | Versão "5 agentes" por R$ 97 (página de saída / carrinho abandonado) |
| **Cross-sell** | Newsletter → Audit (quem comprou o Kit refaz o Audit e tende a pontuar como Nível 3 → roteado à comunidade) |
| **CTA** | "Instalar meus primeiros 10 agentes →" |

**Função estratégica:** transformar lead em *comprador* (mudança de relacionamento) e financiar parte do CAC do funil. Referência de padrão: SmartBook da Couto Performance (produto de entrada que também qualifica lead — pesquisa 02, seção 1.3a).

---

## NÍVEL 2 — Formação IA que Trabalha (curso estruturado)

| Campo | Especificação |
|---|---|
| **Nome** | Formação IA que Trabalha — Processos, Agentes e Automação para Negócios |
| **ICP** | Empreendedor, gestor/diretor e especialista/consultor que querem *fazer sozinhos* (Níveis 1–2 do Audit) |
| **Problema** | Cursos de IA do mercado ensinam ferramenta (n8n, prompts) sem conectar a processo e ROI de negócio — fragilidade central dos concorrentes (pesquisa 01, seção 6) |
| **Resultado** | Aluno sai com 1 processo real do próprio negócio automatizado em produção + método para replicar nos demais |
| **Mecanismo** | Método proprietário **M.A.P.A.** — **M**apear (processo e baseline) → **A**rquitetar (solução: prompt, agente ou automação) → **P**roduzir (implementar com templates) → **A**ferir (medir ROI e iterar). Método nomeado = ativo defensável (padrão UCD/5Ps da Couto, pesquisa 02, seção 1.3b) |
| **Formato** | Assíncrono gravado + 6 encontros ao vivo de tira-dúvidas (1 por módulo) + projeto final obrigatório |
| **Duração** | 6 semanas (1 módulo/semana); acesso 12 meses |
| **Módulos** | **M1 — Diagnóstico:** mapear processos e escolher o primeiro candidato (matriz impacto × esforço); **M2 — Fundamentos de trabalho com IA:** modelos, contexto, prompts de sistema, limites e LGPD; **M3 — Agentes assistidos:** construir agentes sem código para atendimento, conteúdo e administrativo; **M4 — Automação de processos:** integrações (WhatsApp, e-mail, planilhas, CRM) com ferramentas no-code; **M5 — Dados e conhecimento:** organizar base de conhecimento e RAG simplificado para a empresa "responder com os próprios documentos"; **M6 — ROI e escala:** medir retorno, criar o backlog de automação dos próximos 12 meses; **Projeto final:** 1 processo em produção, apresentado com baseline e resultado |
| **Entregáveis** | 30+ aulas, 15 templates, 10 blueprints de automação, certificado mediante projeto aprovado |
| **Bônus** | (1) AI Work Starter Kit completo; (2) 2 meses de AI Work Lab (comunidade) incluídos — ponte direta para o Nível 3; (3) Biblioteca de políticas de IA/LGPD prontas |
| **Suporte** | Comunidade de alunos + tira-dúvidas ao vivo semanal durante as 6 semanas; suporte por e-mail nos 12 meses |
| **Preço** | **R$ 1.997** (ver justificativa no doc 08; faixa de mercado de cursos: R$ 571–1.497 **[FATO]** — posicionamos acima por entregar projeto em produção, não só conteúdo) |
| **Parcelamento** | 12x R$ 197 (~R$ 2.364 no cartão) ou R$ 1.797 no PIX |
| **CAC máximo** | R$ 500 (25% do preço) **[HIPÓTESE]** |
| **Margem estimada** | ~80% **[HIPÓTESE]** |
| **LTV** | R$ 1.997 + 40% de conversão para o Lab (LTV combinado ~R$ 3.400 em 12 meses) **[HIPÓTESE — validar]** |
| **Upsell** | Pós-formação (dia 30): Mentoria AI Work (N5) com desconto de R$ 1.000 para alunos |
| **Downsell** | Starter Kit (R$ 197) para quem abandona o checkout; parcela em 12x como objeção de preço |
| **Cross-sell** | Imersão (N4) para alunos-destaque; Lab (N3) via bônus de 2 meses |
| **CTA** | "Quero implementar meu primeiro processo em 6 semanas →" |

---

## NÍVEL 3 — AI Work Lab (comunidade por assinatura)

> Detalhamento completo no documento `09-community.md`. Resumo da oferta:

| Campo | Especificação |
|---|---|
| **Nome** | AI Work Lab — o laboratório de implementação de IA para negócios |
| **ICP** | Gestor/diretor, empreendedor e especialista/consultor que já passaram da fase de curiosidade (Nível 3 do Audit) |
| **Problema** | "Fiz curso, sei o que fazer, mas não implemento sozinho com consistência" — a dor do 99%: 88% das organizações usam IA, só 1% atinge maturidade (McKinsey, **[FATO]** pesquisa 01) |
| **Resultado** | 1 implementação real por mês em produção no negócio do membro |
| **Mecanismo** | Rituais semanais + desafios de implementação + office hours + biblioteca viva de templates + accountability |
| **Formato** | Plataforma dedicada (ver doc 09) + ao vivo semanal |
| **Duração** | Assinatura contínua |
| **Preço** | **R$ 297/mês** ou **R$ 2.970/ano** (2 meses grátis); trial de 7 dias com cartão |
| **Parcelamento** | Mensal recorrente ou anual à vista/12x |
| **CAC máximo** | R$ 300 (~1 mensalidade) **[HIPÓTESE]** |
| **Margem estimada** | ~70% (plataforma + horas ao vivo) **[HIPÓTESE]** |
| **LTV** | Retenção média alvo de 14 meses → LTV ~R$ 4.150 **[HIPÓTESE — validar]** |
| **Upsell** | Imersão (N4) e Mentoria (N5) com condição de membro |
| **Downsell** | Pausa de assinatura (até 2 meses) em vez de cancelamento; plano "Essencial" (async, sem ao vivo) a R$ 147/mês |
| **Cross-sell** | Formação (N2) para membros que entram pelo Audit sem base |
| **CTA** | "Entrar no laboratório →" |

---

## NÍVEL 4 — Imersão IA que Trabalha (intensivo ao vivo)

| Campo | Especificação |
|---|---|
| **Nome** | Imersão IA que Trabalha — 2 dias para sair com seu plano de implementação rodando |
| **ICP** | Empresário/CEO e gestor/diretor que aprendem melhor ao vivo e querem velocidade |
| **Problema** | Falta de tempo e de bloco dedicado para desenhar a implementação de IA do negócio |
| **Resultado** | Cada participante sai com: (1) mapa de processos e backlog de automação priorizado, (2) 1 agente/automação construído ao vivo no próprio negócio, (3) plano de 90 dias com responsáveis e metas |
| **Mecanismo** | 2 dias hands-on com o método M.A.P.A. aplicado ao negócio de cada participante; turma limitada a 40 (escassez quantificada — padrão dos benchmarks, pesquisa 02, seção 4) |
| **Formato** | Presencial (Curitiba/SP, rotativo) ou híbrido; 2 dias, 9h–18h |
| **Duração** | 2 dias + 30 dias de follow-up (2 calls de revisão em grupo) |
| **Entregáveis** | Mapa de processos individual, backlog priorizado, 1 implementação ao vivo, plano de 90 dias, apostila + acesso às gravações |
| **Bônus** | (1) 3 meses de AI Work Lab incluídos (a imersão alimenta a recorrência); (2) Starter Kit; (3) sessão de networking estruturado com matching por segmento |
| **Suporte** | 30 dias de follow-up em grupo |
| **Preço** | **R$ 2.997** — alinhado aos benchmarks reais: StartSe R$ 3.000, Couto R$ 2.970, Viver de IA Experience R$ 1.297 **[FATO — pesquisa 01]** |
| **Parcelamento** | 12x R$ 297; PIX R$ 2.697; grupos de 3+ a R$ 2.797/vaga |
| **CAC máximo** | R$ 800 (~27%) **[HIPÓTESE]** |
| **Margem estimada** | ~55% (venue, catering, logística) **[HIPÓTESE]** |
| **LTV** | R$ 2.997 + conversão alvo de 20% para Mentoria/Sprint **[HIPÓTESE]** |
| **Upsell** | Oferta exclusiva no palco (dia 2): Mentoria AI Work com R$ 2.000 de desconto para participantes |
| **Downsell** | Imersão online compacta (1 dia, R$ 997) para quem não pode viajar |
| **Cross-sell** | Lab (3 meses inclusos → conversão para assinatura) |
| **CTA** | "Garantir minha vaga (40 por turma) →" |

---

## NÍVEL 5 — Mentoria AI Work (acompanhada, em grupo)

| Campo | Especificação |
|---|---|
| **Nome** | Mentoria AI Work — Implementação Assistida (12 semanas) |
| **ICP** | Empresário/CEO e gestor/diretor de PME (R$ 30 mil–500 mil/mês) que sabem o que fazer e precisam de execução assistida; especialistas/consultores que querem replicar o modelo |
| **Problema** | O dono de PME "já passou do curso e não tem orçamento de consultoria grande" — o vazio de produto/preço identificado na pesquisa 01 (seção 4) |
| **Resultado** | 3 processos implementados em produção em 12 semanas, com KPI e baseline contratados no início |
| **Mecanismo** | Grupo de até 12 empresas; encontro semanal ao vivo (2h) alternando: sprint de implementação (todos implementam juntos), revisão de KPI e hot seats; Leonardo + 1 mentor técnico; canal direto entre encontros |
| **Formato** | Ao vivo online, 12 semanas + sessão individual de diagnóstico de entrada (1:1, 60 min) |
| **Duração** | 12 semanas; turmas trimestrais (escassez real: 12 vagas/turma) |
| **Entregáveis** | Diagnóstico consultivo individual, plano de implementação de 12 semanas, 3 processos em produção, dashboard de ROI, 12 encontros + gravações, acesso vitalício ao material da turma |
| **Bônus** | (1) 12 meses de AI Work Lab incluídos; (2) 2 sessões 1:1 de emergência (30 min) para destravar; (3) revisão de contrato/política de IA e LGPD |
| **Suporte** | Canal direto com a equipe (resposta em 1 dia útil) + encontros semanais |
| **Preço** | **R$ 9.997** — posicionado deliberadamente no vazio (R$ 5k–80k) entre comunidade e consultoria **[FATO da oportunidade; preço é HIPÓTESE a validar]** |
| **Parcelamento** | 12x R$ 997 (~R$ 11.964) ou R$ 8.997 à vista |
| **CAC máximo** | R$ 2.000 (20%; venda por aplicação + call) **[HIPÓTESE]** |
| **Margem estimada** | ~65% **[HIPÓTESE]** |
| **LTV** | R$ 9.997 + 30% de ascensão para Sprint (N6) **[HIPÓTESE]** |
| **Upsell** | AI Implementation Sprint (N6) — mentoria prova o método, sprint escala para a empresa inteira |
| **Downsell** | 12 meses de Lab + Imersão (R$ 2.970 + R$ 2.997) para quem não qualifica ou não tem budget |
| **Cross-sell** | Imersão como preparação; Lab como continuidade pós-mentoria |
| **CTA** | "Aplicar para a próxima turma (12 vagas) →" |

---

## NÍVEL 6 — AI Implementation Sprint (projeto de implantação — FLAGSHIP)

> Refinamento da "Sprint Traciona · 90 Dias" que já existe no site atual (pesquisa 02, seção 2.1). Mantém a estrutura de LP que funciona (aderência bilateral, entregáveis, fases, comparativo, aplicação com garantias) e corrige as fragilidades: método nomeado, escassez quantificada, prova social e posição na escada de valor.

| Campo | Especificação |
|---|---|
| **Nome** | AI Implementation Sprint — 90 dias para IA rodando como infraestrutura do seu negócio |
| **ICP** | Empresário/CEO de empresa de serviços B2B, R$ 50 mil–500 mil/mês de faturamento, 5–50 pessoas (mantém a segmentação explícita do site atual, um dos pontos fortes da auditoria) |
| **Problema** | A empresa tentou ferramentas de IA e não viu retorno; falta implantação ponta a ponta com alguém que já construiu empresas — dor recorrente mapeada na pesquisa 01 (seção 1.4) |
| **Resultado** | Sistema de IA implantado em 90 dias: processos mapeados, automações e agentes em produção nas frentes escolhidas, equipe treinada, cockpit de indicadores — com KPI contratado |
| **Mecanismo** | Projeto em 4 fases (mantém estrutura atual): **F1 Diagnóstico & Desenho** (semanas 1–2: mapeamento, baseline, escolha das frentes) → **F2 Fundação** (semanas 3–5: dados, integrações, governança/LGPD) → **F3 Implementação** (semanas 6–10: agentes e automações em produção, por sprints semanais) → **F4 Transferência** (semanas 11–12: treinamento da equipe, documentação, rituais de operação, handover). Leonardo lidera + squad técnico |
| **Formato** | Projeto (não consultoria aberta, não mentoria genérica — manter definição por exclusão do site atual) |
| **Duração** | 90 dias + 60 dias de suporte de estabilização |
| **Entregáveis** | 8 frentes implantáveis (escolher 4–6 por projeto): atendimento com agente, funil/CRM com IA, cockpit de indicadores, automação financeira, base de conhecimento/RAG, geração de propostas/conteúdo, automação de backoffice, política de IA/LGPD; documentação completa; equipe treinada; dashboard de ROI |
| **Bônus** | (1) 12 meses de AI Work Lab para 2 pessoas da equipe (continuidade pós-projeto); (2) auditoria trimestral de 1 ano (4 revisões de 1h); (3) garantia condicional: se ao final de 90 dias os KPIs acordados não forem atingidos por falha de execução nossa, estendemos o trabalho sem custo até atingir **[HIPÓTESE — estruturar juridicamente]** |
| **Suporte** | Canal direto com o squad durante o projeto; 60 dias de estabilização; auditorias trimestrais |
| **Preço** | **R$ 45.000** (ver doc 08). Referências de mercado **[FATO]**: diagnósticos/PoV R$ 15k–60k; pilotos R$ 30k–120k; automação de processos R$ 5k–15k; consultorias desde R$ 3k. O Sprint entrega implantação completa a preço de piloto — posição central do vazio R$ 5k–80k |
| **Parcelamento** | 3x R$ 15.000 (entrada + 30 + 60 dias); à vista R$ 40.500 |
| **CAC máximo** | R$ 9.000 (20%; venda consultiva via aplicação) **[HIPÓTESE]** |
| **Margem estimada** | ~55% (squad técnico + horas do fundador) **[HIPÓTESE]** |
| **LTV** | R$ 45.000 + 25% de conversão para contrato anual de evolução (N7 ou plano de continuidade R$ 5k/mês) **[HIPÓTESE]** |
| **Capacidade / escassez** | **Máximo 4 empresas por trimestre** (quantificada — corrige fragilidade apontada na auditoria) |
| **Upsell** | Enterprise AI Transformation (N7) ou Plano de Evolução Contínua (R$ 4.997/mês: novas frentes a cada trimestre) |
| **Downsell** | Mentoria AI Work (N5) para quem não tem budget ou maturidade de processos |
| **Cross-sell** | Imersão executiva para o board da empresa cliente (in-company) |
| **CTA** | "Aplicar para o próximo trimestre (4 vagas) →" |

---

## NÍVEL 7 — Enterprise AI Transformation (customizado)

| Campo | Especificação |
|---|---|
| **Nome** | Enterprise AI Transformation — programa anual de transformação com IA |
| **ICP** | Empresas (ICP "empresa") R$ 1M+/mês ou grupos com múltiplas unidades; boards que querem IA como infraestrutura corporativa |
| **Problema** | Transformação multi-área exige estratégia, governança, implantação e capacitação simultâneas — além do escopo de qualquer produto padronizado |
| **Resultado** | Programa anual: estratégia de IA + governança/LGPD + roadmap multi-área + implantação por squads + formação in-company de líderes e equipes |
| **Mecanismo** | Combinação customizada: diagnóstico executivo → Sprints sucessivos por área → formação in-company (trilhas da Formação adaptadas) → conselho/acompanhamento mensal com Leonardo |
| **Formato** | Contrato anual, escopo sob medida, squad dedicado |
| **Duração** | 12 meses (renovável) |
| **Entregáveis** | Conforme escopo: estratégia e roadmap, N sprints de implantação, trilhas in-company, política de governança, comitê mensal de IA, relatório trimestral de ROI ao board |
| **Bônus** | Assentos ilimitados no AI Work Lab para a equipe; imersão executiva in-company anual |
| **Suporte** | Dedicado (canal direto com Leonardo + squad); SLA contratual |
| **Preço** | **A partir de R$ 150.000/ano** — coerente com referências **[FATO]**: plataformas multiagente a partir de R$ 250k; transformação com equipe dedicada "centenas de milhares/ano" (pesquisa 01, seção 4) |
| **Parcelamento** | Mensal (12x) ou trimestral conforme contrato |
| **CAC máximo** | R$ 25.000 (~15%; ciclo de venda B2B longo) **[HIPÓTESE]** |
| **Margem estimada** | ~45% (squads dedicados) **[HIPÓTESE]** |
| **LTV** | R$ 150k–500k+ (renovação multi-ano é a norma-alvo) **[HIPÓTESE]** |
| **Upsell** | Expansão por unidade/área; renovação anual ampliada |
| **Downsell** | AI Implementation Sprint (N6) escopado para uma área-piloto — porta de entrada enterprise |
| **Cross-sell** | Formação in-company; palestras de Leonardo para board/convenções |
| **CTA** | "Solicitar proposta executiva →" |

---

## 1. Matriz de ascensão (quem sobe para onde)

| De → Para | Gatilho de ascensão | Oferta feita |
|---|---|---|
| Audit → N1/N2 | Score < 2,5 | Automático no resultado do diagnóstico |
| Audit → N3 | Score 2,5–3,2 | Automático no resultado + e-mail D+3 |
| Audit → N5/N6 | Score ≥ 3,3 | Convite para sessão de diagnóstico consultivo (R$ 497, revertida em crédito) |
| N1 → N2 | Dia 7 pós-compra: "10 agentes instalados, agora automatize o processo inteiro" | Crédito de R$ 197 |
| N2 → N3 | Bônus de 2 meses de Lab embutido na Formação | Conversão ao final do bônus |
| N3 → N4 | Membros ativos recebem condição de membro na Imersão | R$ 500 off |
| N4 → N5/N6 | Oferta no dia 2 da imersão | R$ 2.000 off na Mentoria |
| N5 → N6 | Semana 10 da mentoria: "você provou o método em 3 processos; agora a empresa inteira" | Crédito de R$ 5.000 no Sprint |
| N6 → N7 | Auditoria trimestral identifica expansão multi-área | Proposta executiva |

## 2. Regras de coerência da escada

1. **Nenhum desconto cruza degraus de forma arbitrária** — descontos são sempre "crédito do degrau anterior" (reforça a jornada).
2. **Preço público em todos os degraus até N5**; N6 com faixa pública ("projetos a partir de R$ 45k"); N7 sob proposta — padrão de transparência que nenhum concorrente creator pratica (pesquisa 01, seção 5).
3. **Todo degrau pago inclui acesso a algum degrau anterior** (bônus), nunca o contrário — protege a percepção de valor e o posicionamento premium.
4. **A Comunidade (R$ 19,90/mês) atual do site é descontinuada e substituída pelo AI Work Lab** — o preço de "menos que um almoço" rebaixa a percepção do flagship (fragilidade apontada na auditoria, pesquisa 02, seção 2.3.4).

---

*Fim do documento 07.*
