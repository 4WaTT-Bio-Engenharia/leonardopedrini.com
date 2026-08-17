# 06 — Método Proprietário de Implantação de IA
## Marca pessoal Leonardo Vieira Pedrini

**Base factual:** biografia verificada em `docs/research/03-cases-proof.md` (Lean/VSM/DMAIC na Electrolux via Lattes; engenharia EVTE→EPC→O&M da 4WaTT verificada no site; automação proprietária); lacuna de mercado em `docs/research/01-market-competitive.md` (concorrentes sem método de implementação nomeado; benchmark Couto usa método nomeado como ativo defensável — UCD/5Ps, AgenteALFA™).
**Propósito do documento:** criar o ativo intelectual defensável da marca — o método que espinha cursos, consultoria e conteúdo.

---

## 1. Os 4 frameworks candidatos

### Candidato 1 — Método CARGA
**Conceito:** a IA assume a *carga* de trabalho que hoje trava a operação. Nome-objeto, coerente com a tagline "coloque a IA para trabalhar".

**Etapas (5):**
1. **C — Cartografar:** mapear o trabalho real (VSM, gemba, entrevistas, mineração de processos) e priorizar gargalos por impacto × automatizabilidade.
2. **A — Arquitetar:** desenhar a solução — processo futuro, divisão humano/máquina, escolha de padrão (workflow, automação, agente, RAG), critérios de aceite.
3. **R — Rodar:** piloto em produção controlada com human-in-the-loop e evals desde o dia 1; medir baseline vs. piloto.
4. **G — Governar:** critérios de qualidade, segurança/LGPD, monitoramento, dono interno, runbook de exceções.
5. **A — Ampliar:** escalar o que provou retorno; conectar sistemas; evoluir na escada prompt → workflow → agente → organização AI-native.

**Fundamentação:** DMAIC (C≈Define/Measure, A≈Analyze/Design, R≈Improve, G≈Control, A≈escala sustentada) + VSM + JTBD na priorização + evals e HITL da engenharia moderna de IA.

---

### Candidato 2 — Método E.P.O. — Enxergar, Projetar, Operar
**Conceito:** traduz para IA o ciclo de engenharia que Leonardo executa na 4WaTT (EVTE → EPC → O&M): nada entra em operação sem projeto, nada é projetado sem diagnóstico.

**Etapas (6):**
1. Enxergar o trabalho (mapeamento + dados).
2. Estimar o valor (business case por processo — ROI antes de código).
3. Projetar a solução (arquitetura humano+IA).
4. Pilotar com aceite (critérios objetivos, evals).
5. Operar e medir (go-live, monitoramento, dono interno).
6. Expandir (pipeline dos próximos processos).

**Fundamentação:** ciclo EPC/O&M de engenharia + DMAIC + commissioning industrial (aceite formal) + FinOps de IA.

---

### Candidato 3 — Framework G.R.A.U.
**Conceito:** IA tem graus de maturidade, não interruptor liga/desliga. Cada processo sobe de grau conforme prova confiabilidade.

**Etapas (7):**
1. **G0 — Gemba:** observar o trabalho onde ele acontece.
2. **R — Raio-X do processo:** VSM + JTBD + medição de filas e retrabalho.
3. **A — Alavancas:** backlog priorizado de automação (custo da fila × viabilidade).
4. **U — Upgrade em graus:** G1 assistido → G2 semi-autônomo → G3 autônomo com supervisão — promoção por evals, não por entusiasmo.
5. (transversal) **Confiabilidade:** evals, HITL, LGPD, logs.
6. (transversal) **Pessoas:** dono do processo, treinamento, runbook.
7. (transversal) **Escala:** padrões reutilizáveis, arquitetura AI-native.

**Fundamentação:** níveis de autonomia (análogo a SAE de veículos autônomos) + Lean/gemba + evals como "exame de promoção".

---

### Candidato 4 — Método F.O.R.J.A.
**Conceito:** IA se *forja* em operação real — nome com vínculo ao chão de fábrica da biografia.

**Etapas (6):**
1. **F — Fundição (diagnóstico):** mapear processos e derreter suposições com dados.
2. **O — Ordem de trabalho:** priorizar por ROI e risco; especificar entregável.
3. **R — Protótipo em regime:** piloto rodando com trabalho real (não demo), human-in-the-loop.
4. **J — Julgamento de qualidade:** evals + critérios de aceite + auditoria humana.
5. **A — Assentamento:** implantação definitiva, dono interno, documentação, LGPD.
6. (+) **Tempera contínua:** monitoramento, re-treino, expansão.

**Fundamentação:** Lean + DMAIC + processo de comissionamento + evals/HITL.

---

## 2. Avaliação comparativa (0–10)

Critérios: **Clareza** (um CEO entende em 30s?), **Memorabilidade** (nome gruda? sigla funciona?), **Credibilidade** (a biografia de Leonardo sustenta?), **Aplicabilidade** (funciona de PME a enterprise?), **Extensibilidade** (vira curso + consultoria + conteúdo + produto?).

| Critério | CARGA | E.P.O. | G.R.A.U. | F.O.R.J.A. |
|---|---|---|---|---|
| Clareza | 9 — cinco verbos, um por letra | 8 — três fases fortes, mas 6 etapas diluem | 7 — graus são claros; 7 itens não | 8 — metáfora clara, etapas ok |
| Memorabilidade | 9 — palavra real, ligada à tagline | 7 — sigla técnica, pouco gancho | 8 — conceito de "graus" gruda | 8 — palavra forte, liga à origem fabril |
| Credibilidade | 9 — nasce do Lean/DMAIC vivido | 10 — é literalmente o modelo 4WaTT (EVTE/EPC/O&M) | 8 — credível, mas soa importado de AV | 8 — credível; metáfora carrega risco de "marretada" |
| Aplicabilidade | 9 — PME a enterprise sem adaptação | 8 — enterprise perfeito; PME pode achar pesado | 8 — ótimo para maturidade, fraco para venda inicial | 8 — bom em projeto; menos bom em diagnóstico rápido |
| Extensibilidade | 9 — cada letra = módulo de curso, fase de consultoria, série de conteúdo | 8 — forte em consultoria; médio em conteúdo | 7 — ótimo modelo de maturidade (secundário), fraco como espinha comercial | 8 — bom para conteúdo; sigla forçada em "J" e "tempera" |
| **Média** | **8,8** | **8,2** | **7,6** | **8,0** |

### Decisão

**Vencedor: Método CARGA.** Razões: (1) é o único cujo nome carrega a tese de posicionamento — a IA assume a carga de trabalho; a tagline e o método se reforçam mutuamente ("Pare de conversar com a IA. Coloque a IA para trabalhar." → *como?* → "Método CARGA"). (2) Cinco etapas é o limite ideal de memorização e cabe em um diagrama de uma dobra. (3) Cada letra é um verbo de operação, não um conceito abstrato — coerente com "implementador, não professor". (4) Derivados naturais: "Diagnóstico CARGA", "Carga de Trabalho Automatizável" (métrica), "CARGA 1–5" (níveis de maturidade por processo).

**Retidos como ativos secundários:** E.P.O. vira a **linguagem de fases de projeto enterprise** (Enxergar → Projetar → Operar como macrofases de contrato); G.R.A.U. vira o **modelo de maturidade interno do CARGA** (etapa Ampliar promove processos de G1 a G3); F.O.R.J.A. é descontinuado (metáfora redundante com a origem fabril já coberta pela narrativa de marca).

---

## 3. Método CARGA — especificação completa

**Definição pública (1 frase):** o Método CARGA é o ciclo de engenharia que transforma processos humanos sobrecarregados em infraestrutura de trabalho executada por IA — com retorno medido em cada etapa.

**Princípios:**
1. **Processo antes de ferramenta** — não se automatiza o que não está mapeado (Lean).
2. **Eliminar antes de automatizar** — etapa que não deveria existir é desperdício, não candidata (muda muda muda).
3. **Piloto é produção em miniatura** — trabalho real, dados reais, cliente real; nunca demo.
4. **Evals antes de escala** — um processo só sobe de grau quando prova qualidade medida.
5. **Humano nos pontos de julgamento** — HITL onde erro custa caro; autonomia onde erro é reversível.
6. **Dono interno ou não entrega** — dependência eterna de consultor é falha de projeto, não receita.

### Etapa 1 — C · CARTOGRAFAR
**Objetivo:** ver o trabalho como ele é, não como o organograma diz.
**O que se faz:** entrevistas e gemba (observação do trabalho real); mapeamento de fluxo de valor (VSM) dos processos candidatos; medição de tempos, filas, retrabalho e volumes; inventário de sistemas e dados disponíveis; mineração de processos quando houver logs (process mining).
**Entregáveis:**
- Mapa VSM do processo atual (com tempos e filas medidos)
- Inventário de "carga automatizável": lista priorizada de tarefas com volume, custo/hora e grau de padronização
- Matriz de priorização (impacto financeiro × automatizabilidade × risco)
- Relatório de prontidão de dados e integrações
**Base teórica:** VSM/Lean, gemba, JTBD (qual "job" o processo serve), process mining.
**Portão de saída (gate):** existe ao menos um processo com custo da fila > custo do piloto estimado? Se não, recomenda-se não avançar (a marca recusa projeto sem ROI — isso é diferencial e conteúdo).

### Etapa 2 — A · ARQUITETAR
**Objetivo:** desenhar o processo futuro e a divisão de trabalho humano/IA antes de qualquer build.
**O que se faz:** redesenho do processo (eliminar/simplificar primeiro); escolha do padrão por tarefa na escada — prompt assistido → copiloto → workflow → automação → agente; desenho de RAG quando houver conhecimento proprietário (acervo do cliente como fonte, nunca a internet genérica); definição dos pontos de human-in-the-loop; critérios de aceite e KPI contratado; threat-model básico (LGPD, dados sensíveis).
**Entregáveis:**
- Blueprint do processo futuro (diagrama CARGA — peça visual proprietária da marca)
- Especificação funcional: entradas, saídas, exceções, fallback humano
- KPI contratado + baseline medido
- Plano de evals (o que será medido, com quais casos de teste)
- Estimativa fechada de custo de build e de operação (R$/mês)
**Base teórica:** DMAIC (Analyze/Design), arquitetura de agentic workflows, RAG, threat modeling.
**Portão de saída:** cliente assina blueprint, KPI e preço — escopo fechado, sem "projeto aberto".

### Etapa 3 — R · RODAR
**Objetivo:** piloto em produção controlada, executando trabalho real.
**O que se faz:** build do workflow/agente; rodada em sombra (shadow mode: IA executa, humano confere tudo); rodada assistida (IA executa, humano amostra); ajuste de prompts, ferramentas e guardrails com base nos erros; evals contínuos (acurácia, taxa de escalonamento humano, tempo de ciclo).
**Entregáveis:**
- Sistema rodando em produção controlada
- Painel de evals (qualidade × tempo × custo por execução)
- Log de erros classificado (error analysis — prática de referência internacional, ex.: Hamel Husain)
- Relatório piloto vs. baseline (horas, reais, qualidade)
**Base teórica:** DMAIC (Improve), evals/error analysis, HITL, agentic workflows.
**Portão de saída:** KPI do piloto atingido por N ciclos consecutivos (padrão sugerido: 2 semanas ou 200 execuções, o maior) — critério objetivo, não sensação.

### Etapa 4 — G · GOVERNAR
**Objetivo:** transformar piloto bem-sucedido em operação confiável e transferível.
**O que se faz:** formalização do dono interno do processo e treinamento; runbook de operação e de exceções (o que fazer quando a IA erra); política de dados e LGPD; monitoramento contínuo (drift de qualidade, custo, volume); rotina de revisão de evals; definição do grau de autonomia (G1 assistido / G2 semi-autônomo / G3 autônomo supervisionado — modelo G.R.A.U. embutido).
**Entregáveis:**
- Runbook operacional + runbook de exceções
- Dono interno treinado e certificado (internamente)
- Painel de governança (qualidade, custo, incidentes)
- Dossiê LGPD/segurança do processo
- Registro de grau de autonomia e critérios de promoção/rebaixamento
**Base teórica:** DMAIC (Control), HITL, governança de IA, gestão de mudança.
**Portão de saída:** operação roda 30 dias sem intervenção do implementador.

### Etapa 5 — A · AMPLIAR
**Objetivo:** converter um processo resolvido em vantagem estrutural.
**O que se faz:** pipeline dos próximos processos (o inventário da etapa 1 vira roadmap); promoção de grau dos processos estáveis; padronização de componentes reutilizáveis (conectores, avaliadores, guardrails); evolução da arquitetura rumo a sistema e organização AI-native; revisão trimestral de portfólio de automação com ROI consolidado.
**Entregáveis:**
- Roadmap de automação de 12 meses priorizado por ROI
- Biblioteca interna de componentes e padrões
- Relatório trimestral de valor capturado (horas e reais)
- Mapa de maturidade AI-native da empresa (por área)
**Base teórica:** escala Lean, padronização (standard work), arquitetura de sistemas, estratégia.
**Portão de saída:** não há — Ampliar é contínuo; é aqui que nasce o contrato de evolução recorrente.

---

## 4. Diagrama (texto/ASCII)

```
┌─────────────────────────────────────────────────────────────────────┐
│                        M É T O D O   C A R G A                       │
│        "a IA assume a carga de trabalho — com retorno medido"        │
└─────────────────────────────────────────────────────────────────────┘

   C                    A                    R                    G                    A
┌──────────┐ gate  ┌──────────┐ gate  ┌──────────┐ gate  ┌──────────┐ gate  ┌──────────┐
│CARTOGRAF.│─────▶│ARQUITETAR│─────▶│  RODAR   │─────▶│ GOVERNAR │─────▶│ AMPLIAR  │
│          │ ROI? │          │ aceite│          │  KPI  │          │ 30d   │          │
│ VSM      │ existe│ blueprint│assinad│ piloto em│ ating.│ dono     │ autôn.│ roadmap  │
│ gemba    │       │ HITL     │ o     │ produção │ N     │ interno  │       │ 12 meses │
│ dados    │       │ KPI      │       │ evals    │ ciclos│ runbook  │       │ graus G1-│
│ filas    │       │ evals    │       │ shadow→  │       │ LGPD     │       │ G3       │
└──────────┘       └──────────┘       └──────────┘       └──────────┘       └────┬─────┘
                                                                                 │
      ◀────────────── feedback: erros, drift e novos gargalos ───────────────────┘

Camadas transversais (presentes em TODAS as etapas):
┌───────────────────────────────────────────────────────────────────────────────┐
│ HUMAN-IN-THE-LOOP nos pontos de julgamento  │  EVALS contínuos  │  LGPD/seg.  │
└───────────────────────────────────────────────────────────────────────────────┘

Escala de padrões (o que se constrói em cada processo):
  prompt → copiloto → workflow → automação → agente → sistema → org AI-native
```

---

## 5. Como o CARGA vira espinha dorsal comercial

**Cursos / educação:**
- Curso núcleo: 5 módulos = 5 letras. Cada módulo termina com o entregável real da etapa (o aluno sai com o mapa VSM da própria empresa, depois o blueprint, etc.) — diferencial contra cursos de ferramenta (ibe.IA, n8n): aqui a ferramenta é meio, o entregável é processo.
- Produto de entrada: workshop "C — Cartografia da Carga" (diagnóstico guiado, meio dia) — alimenta o funil de consultoria.
- Conteúdo gratuito: série "as 5 letras" em artigos/vídeos; cada letra rende um lead magnet (template de VSM, planilha de priorização, plano de evals, runbook modelo, roadmap modelo).

**Consultoria / implementação:**
- **Diagnóstico CARGA** (C): produto fechado, 2 semanas, preço-âncora na faixa verificada R$ 3.000–15.000 (consultoria Valor Digital a partir de R$ 3k; diagnósticos beAnalytic R$ 15–60k).
- **Piloto CARGA** (C+A+R): 4–8 semanas, faixa verificada R$ 30.000–120.000 (âncora WSS) ou implementação assistida R$ 15–25k (âncora Waxi) para PME — ocupa o vazio de preço identificado na pesquisa.
- **Operação CARGA** (G+A contínuos): contrato recorrente de governança + ampliação — o modelo de receita recorrente enterprise.
- Macrofases de contrato enterprise usam a linguagem E.P.O. (Enxergar → Projetar → Operar) por cima do CARGA, falando a língua de procurement.

**Conteúdo / marca:**
- Todo case público segue a estrutura C-A-R-G-A (vira formato editorial padronizado: "o mapa, o blueprint, o piloto, a governança, o que escalou").
- O diagrama CARGA é o ativo visual proprietário (ver direção visual em `05-brand-strategy.md`).
- Métricas nomeadas da marca: **"Carga Automatizável"** (% do tempo da operação candidato a IA) e **"Carga Assumida"** (% efetivamente executado por IA com evals verdes) — viram o KPI que clientes citam e o número que o marketing reporta.

**Comunidade:**
- Trilha de implementação guiada pelo CARGA; membros sobem de nível ao completar entregáveis de cada letra (gamificação por obra, não por consumo de aula).

---

## 6. Glossário

| Termo | Definição operacional da marca |
|---|---|
| **Carga de trabalho** | volume × tempo × custo de uma tarefa recorrente na operação. É o que a IA vem assumir. |
| **Carga Automatizável** | parcela da carga que é padronizada o suficiente para IA executar com evals verdes. |
| **Carga Assumida** | carga efetivamente executada por IA em produção, medida em horas e reais por período. |
| **CARTOGRAFAR** | etapa C: ver e medir o trabalho real antes de qualquer solução (VSM + gemba + dados). |
| **ARQUITETAR** | etapa A: desenhar processo futuro, divisão humano/IA, padrão técnico e critérios de aceite. |
| **RODAR** | etapa R: piloto em produção controlada executando trabalho real, com evals. |
| **GOVERNAR** | etapa G: dono interno, runbook, LGPD, monitoramento — operação sem consultor. |
| **AMPLIAR** | etapa A: roadmap de escala, promoção de graus, componentes reutilizáveis. |
| **Gate (portão)** | critério objetivo que autoriza passar de etapa; sem gate cumprido, não avança. |
| **Eval** | avaliação sistemática da saída da IA contra casos de teste; a "medição de qualidade" do método. |
| **Error analysis** | classificação dos erros do piloto por tipo, para corrigir causa e não sintoma. |
| **Human-in-the-loop (HITL)** | ponto do processo onde humano aprova/corrige antes de a saída valer. |
| **Shadow mode** | fase do piloto em que a IA executa em paralelo e o humano confere 100% das saídas. |
| **Grau de autonomia (G1–G3)** | G1 assistido, G2 semi-autônomo, G3 autônomo supervisionado; promoção por evals. |
| **RAG** | técnica que faz a IA responder a partir do acervo documental do cliente (não da internet genérica). |
| **VSM** | mapeamento de fluxo de valor: o processo desenhado com tempos, filas e retrabalho. |
| **Gemba** | ir ao lugar onde o trabalho acontece e observar — prática Lean. |
| **Turismo de prompts** | uso de IA como enfeite: curso de ferramenta, prompt solto, piloto sem produção. Inimigo conceitual da marca. |
| **Organização AI-native** | estágio final da escada: processos, papéis e orçamento desenhados assumindo IA como infraestrutura de trabalho. |

---

## 7. Validações e próximos passos

- [ ] Validar nomes "Método CARGA", "Carga Automatizável" e "Carga Assumida" com 5–10 potenciais clientes (compreensão em 30 segundos). **[HIPÓTESE pendente]**
- [ ] Verificar conflitos de marca/sigla (INPI) antes de registrar ™/®.
- [ ] Produzir os 5 templates de entregáveis (VSM, blueprint, plano de evals, runbook, roadmap) como lead magnets.
- [ ] Documentar o primeiro case completo em estrutura C-A-R-G-A assim que houver projeto com autorização do cliente.

*Fim do documento.*
