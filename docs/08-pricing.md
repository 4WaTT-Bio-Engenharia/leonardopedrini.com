# 08 — Pesquisa & Estratégia de Precificação
## Leonardo Vieira Pedrini — Value Ladder "IA que Trabalha"

**Autor:** Offer, Pricing & Community Lead
**Data:** 2026-08-16
**Base factual:** `docs/research/01-market-competitive.md` (preços reais com fonte, seção 4) e `02-benchmark-cro.md`
**Convenção:** preços de concorrentes são **[FATO]** (com fonte na pesquisa 01). Custos de entrega, margens, CAC, LTV e conversões são **[HIPÓTESE]** — devem ser revisados após os primeiros 90 dias de operação com dados reais.

---

## 1. Método de precificação

Preços definidos pela combinação de 6 lentes, nesta ordem de peso:

1. **Value-based pricing (valor percebido/criado):** o preço ancora no valor econômico da entrega (horas economizadas, receita recuperada, erro evitado), não no custo. Referência interna: Couto Performance ancora a imersão contra "o custo de um erro estratégico por mês" (pesquisa 02, seção 1.3b).
2. **Willingness to pay (WTP) por ICP:** donos de PME que já pagam R$ 2.580–6.180/mês pelo Viver de IA **[FATO]** demonstraram WTP de dezenas de milhares/ano por resultado com IA; quem paga R$ 571–1.497 em cursos demonstrou WTP de low-ticket para capacitação.
3. **Custo de entrega:** piso de margem por formato (digital >80%, eventos ~50–60%, serviço com squad ~45–65%) **[HIPÓTESE]**.
4. **Posicionamento:** premium "implementador, não guru" — nunca o mais barato da categoria; preço é sinal de seriedade. A auditoria (pesquisa 02, seção 2.3.4) mostrou o efeito contrário: R$ 19,90/mês no mesmo ecossistema de uma Sprint premium destrói a âncora.
5. **CAC e margem:** CAC máximo = 20–30% do preço conforme o modelo de venda (self-service tolera menos; venda consultiva tolera mais em absoluto) **[HIPÓTESE]**.
6. **LTV e ascensão:** degraus baratos são subsidiados pela ascensão (o LTV do cliente não é o ticket do degrau, é o caminho na escada).

### 1.1 O fato estrutural: o vazio de preço do meio

**[FATO — pesquisa 01, seções 4 e 6]** O mercado brasileiro é binário:
- Educação/comunidade: **R$ 60/mês a R$ 6.180/mês** (Clube.ai R$ 59,99; IA Club R$ 697–1.164/ano; Viver de IA R$ 2.580–6.180/mês).
- Consultoria/projeto: **R$ 3.000 (diagnóstico simples) a R$ 250k+** (plataforma multiagente); pilotos R$ 30k–120k.
- **Entre ~R$ 6k/ano e R$ 30k/projeto, quase não há oferta.** Os degraus 5 (R$ 9.997) e 6 (R$ 45.000) ocupam exatamente esse vazio — e a transparência de preço nessa faixa é um diferencial que nenhum creator explora.

---

## 2. Precificação por produto (Conservative / Recommended / Premium)

### Nível 1 — AI Work Starter Kit

| Cenário | Preço | Racional |
|---|---|---|
| Conservative | R$ 97 | Máximo volume; tripwire puro |
| **Recommended** | **R$ 197** | Filtra curiosos sem friccionar; ancora "1 hora de consultor" |
| Premium | R$ 297 | Risco de queda de conversão em audiência fria |

- **Recomendação final: R$ 197.** **Justificativa:** produto de entrada existe para (a) transformar lead em comprador e (b) subsidiar CAC, não para gerar lucro direto. A R$ 197 com margem ~85% e CAC alvo ≤ R$ 60 **[HIPÓTESE]**, cada venda autofinancia aquisição. A R$ 97, o filtro de qualidade cai; a R$ 297, a conversão de topo cai sem ganho proporcional de LTV. **Expectativa de conversão [HIPÓTESE]:** 1–3% de leads do Audit. **Risco:** commoditização (mercado cheio de "pacotes de prompts" gratuitos) — mitigado pelo enquadramento em *processos* e pela calculadora de ROI.

### Nível 2 — Formação IA que Trabalha

| Cenário | Preço | Racional |
|---|---|---|
| Conservative | R$ 1.497 | Teto observado da categoria de cursos (ibe.IA, de R$ 1.497) **[FATO]** |
| **Recommended** | **R$ 1.997** | Premium justificado por projeto em produção + ao vivo + método proprietário |
| Premium | R$ 2.497 | Aproxima de cohort-based internacional (Maven US$ 2.497+ **[FATO]**) |

- **Recomendação final: R$ 1.997 (12x R$ 197).** **Justificativa:** o mercado de cursos de IA/ferramenta fica em R$ 571–1.497 **[FATO]** — cobrar nessa faixa nos colocaria na guerra de commodity contra ibe.IA (+25 mil alunos) e Hora de Codar. A R$ 1.997 nos posicionamos **acima** com justificativa tangível: o aluno sai com um processo em produção e ROI medido, não com certificado de curso de ferramenta. Margem ~80% **[HIPÓTESE]**; CAC máx R$ 500 **[HIPÓTESE]** sustentável com funil orgânico (newsletter + Audit). **Expectativa de conversão [HIPÓTESE]:** 2–5% de quem faz o Audit com score baixo. **Risco:** WTP não comprovada acima de R$ 1.500 no público frio — mitigação: vender primeiro para a base aquecida (Audit + Kit) e validar elasticidade antes de tráfego pago em escala.

### Nível 3 — AI Work Lab (comunidade)

| Cenário | Preço | Racional |
|---|---|---|
| Conservative | R$ 147/mês | Abaixo do Viver de IA, acima do commodity |
| **Recommended** | **R$ 297/mês (R$ 2.970/ano)** | Meio premium: 5x o Clube.ai, ~1/9 do Viver de IA Starter |
| Premium | R$ 497/mês | Exige prova social e retenção já demonstradas |

- **Recomendação final: R$ 297/mês.** **Justificativa:** o mercado se bifurcou: commodity R$ 60/mês (Clube.ai **[FATO]**) e plataforma-empresa R$ 2.580+/mês (Viver de IA **[FATO]**). O meio (R$ 150–500/mês) está vazio para uma comunidade séria de *implementação* — e o Lab não compete com nenhum dos dois extremos: não é grupo de ferramentas nem plataforma plug-and-play, é laboratório com rituais e accountability. Com retenção alvo de 14 meses, LTV ~R$ 4.150 **[HIPÓTESE]** contra CAC máx R$ 300 **[HIPÓTESE]** → LTV/CAC > 13x **[HIPÓTESE]**. O plano anual a R$ 2.970 (2 meses grátis) iguala psicologicamente o preço da imersão e melhora fluxo de caixa. **Expectativa de conversão [HIPÓTESE]:** 5–10% de leads com score médio no Audit; trial de 7 dias com cartão → 40–55% de conversão trial→pago **[HIPÓTESE]**. **Risco:** churn se o membro não implementar nada no primeiro mês — mitigado pelo onboarding de 7 dias com "primeira implementação em produção" (ver doc 09).

### Nível 4 — Imersão IA que Trabalha

| Cenário | Preço | Racional |
|---|---|---|
| Conservative | R$ 1.997 | Abaixo dos benchmarks; enche turma rápido |
| **Recommended** | **R$ 2.997** | Paridade com StartSe (R$ 3.000) e Couto (R$ 2.970) **[FATO]** |
| Premium | R$ 4.997 | VIP com mentoria pós-evento; requer marca consolidada |

- **Recomendação final: R$ 2.997.** **Justificativa:** os dois benchmarks executivos relevantes cobram R$ 2.970–3.000/pessoa **[FATO]**; cobrar perto disso sinaliza categoria equivalente, e a diferenciação vem do conteúdo (sair com implementação ao vivo, não só framework). A R$ 4.997 entramos em território sem benchmark de creator solo e com prova social ainda em construção (pesquisa 03 mostra que os cases precisam de documentação). Margem ~55% com turma de 40 **[HIPÓTESE]** → receita bruta ~R$ 120k/turma **[HIPÓTESE]**. **Expectativa de conversão [HIPÓTESE]:** 10–20% de membros ativos do Lab por turma; 2–4% de lista aquecida. **Risco:** logística e custo fixo de evento — mitigação: primeira turma em Curitiba (base do fundador) com pré-venda mínima de 20 vagas para confirmar data.

### Nível 5 — Mentoria AI Work (12 semanas)

| Cenário | Preço | Racional |
|---|---|---|
| Conservative | R$ 6.997 | Entrada do vazio; volume maior |
| **Recommended** | **R$ 9.997** | Centro do vazio; ancora contra "consultoria começa em R$ 15k" |
| Premium | R$ 14.997 | Grupo menor (8), mais 1:1; segunda turma em diante |

- **Recomendação final: R$ 9.997 (12x R$ 997).** **Justificativa:** a ancora natural do comprador é o custo da alternativa: diagnóstico/PoV de consultoria custa R$ 15k–60k **[FATO]** — a mentoria entrega 3 processos em produção por menos que um diagnóstico de consultoria. É o degrau que materializa a oportunidade do vazio (R$ 5k–80k). Margem ~65% **[HIPÓTESE]** (12 empresas × 24h de encontros + canal direto). CAC máx R$ 2.000 **[HIPÓTESE]** via aplicação + call (venda consultiva, sem tráfego frio). **Expectativa de conversão [HIPÓTESE]:** 20–35% de calls qualificadas; fonte principal = ascensão de Lab/Imersão/Formação. **Risco:** promessa de "3 processos em produção" exige seleção rigorosa na aplicação (anti-ICP: empresa sem processo mapeável) — mitigado pelo diagnóstico 1:1 de entrada.

### Nível 6 — AI Implementation Sprint (flagship, 90 dias)

| Cenário | Preço | Racional |
|---|---|---|
| Conservative | R$ 30.000 | Piso dos pilotos de mercado **[FATO]**; volume primeiro |
| **Recommended** | **R$ 45.000** | Implantação completa a preço de piloto — coração do vazio |
| Premium | R$ 80.000 | Teto do vazio; com prova social de 5+ Sprints entregues |

- **Recomendação final: R$ 45.000 (3x R$ 15.000).** **Justificativa:** referências **[FATO — pesquisa 01, seção 4]**: automação de processos isolada R$ 5k–15k; custo de implantação de solução única R$ 15k–25k; pilotos focados R$ 30k–120k; plataformas R$ 250k+. O Sprint entrega **4–6 frentes implantadas + equipe treinada + KPI contratado** a R$ 45k — posição de valor agressiva dentro da faixa de pilotos, com escopo muito superior. Começar em R$ 30k sinalizaria "consultoria barata" e inviabilizaria a margem com squad (~55% **[HIPÓTESE]**); subir para R$ 80k só faz sentido após cases documentados (a pesquisa 03 mostra que a prova social ainda precisa de autorização/documentação dos clientes). CAC máx R$ 9.000 **[HIPÓTESE]**; com 4 empresas/trimestre → R$ 180k/trimestre de receita potencial nesse degrau **[HIPÓTESE]**. **Expectativa de conversão [HIPÓTESE]:** 25–40% de aplicações qualificadas que chegam à proposta. **Risco:** escopo infinito ("consultoria aberta disfarçada") — mitigado pelas 8 frentes fechadas e pela garantia condicional bem redigida.

### Nível 7 — Enterprise AI Transformation

| Cenário | Preço | Racional |
|---|---|---|
| Conservative | R$ 120.000/ano | Entrada enterprise enxuta |
| **Recommended** | **R$ 150.000–250.000/ano** | Faixa de contratação real do segmento |
| Premium | R$ 400.000+/ano | Multi-unidade, squads dedicados, board advisory |

- **Recomendação final: a partir de R$ 150.000/ano, sob proposta.** **Justificativa:** referências **[FATO]**: transformação com equipe dedicada "centenas de milhares/ano"; plataformas multiagente a partir de R$ 250k. Posicionamos a entrada abaixo das consultorias estruturadas com a vantagem da marca pessoal do implementador. Ciclo de venda B2B longo justifica CAC máx de R$ 25k **[HIPÓTESE]**. **Expectativa de conversão [HIPÓTESE]:** 1–2 contratos no ano 1, vindos de expansão de Sprints (N6→N7). **Risco:** dependência de poucos contratos — mitigado tratando N7 como expansão, não como meta de aquisição do ano 1.

---

## 3. Tabela comparativa com concorrentes reais

Todos os preços de concorrentes são **[FATO]** com fonte na pesquisa 01 (acesso 16/08/2026).

| Categoria | Concorrente | Preço do concorrente | Nossa oferta equivalente | Nosso preço | Diferenciação de preço/valor |
|---|---|---|---|---|---|
| Produto de entrada | SmartBook (Couto Performance) | baixo ticket (não publicado na pesquisa) | AI Work Starter Kit | **R$ 197** | Kit orientado a processos + calculadora de ROI, não só prompts |
| Curso/formação | Hora de Codar (n8n) | ~R$ 571 | Formação IA que Trabalha | **R$ 1.997** | 3,5x mais caro — entrega processo em produção + ao vivo, não curso de ferramenta |
| Curso/formação | ibe.IA Formação Agentes | R$ 1.164 (de R$ 1.497) | Formação IA que Trabalha | **R$ 1.997** | Acima do teto da categoria; método M.A.P.A. + projeto obrigatório |
| Curso (internacional) | Maven (EUA) | US$ 2.497–5.000 | Formação IA que Trabalha | **R$ 1.997** (~US$ 400) | Cohort-based internacional ancora nosso teto premium futuro |
| Comunidade | Clube.ai | R$ 59,99/mês | AI Work Lab | **R$ 297/mês** | 5x mais caro — laboratório de implementação com rituais e office hours, não grupo de ferramentas |
| Comunidade | IA Club | R$ 697–1.164/ano | AI Work Lab | **R$ 2.970/ano** | ~3x mais caro — implementação mensal mensurável vs. comunidade genérica |
| Plataforma+comunidade | Viver de IA | R$ 2.580–6.180/mês | AI Work Lab | **R$ 297/mês** | ~9–20x mais barato — sem plataforma proprietária, mas com implementação assistida por rituais; público PME que não paga R$ 2.580/mês |
| Comunidade (internacional) | The Futur Pro Group | US$ 449/trim. (~US$ 150/mês) | AI Work Lab | **R$ 297/mês** (~US$ 60) | Referência de que comunidade de marca pessoal sustenta ticket recorrente relevante |
| Imersão | Viver de IA Experience | R$ 1.297 | Imersão IA que Trabalha | **R$ 2.997** | 2,3x mais caro — evento regional de 400 vagas vs. turma de 40 com implementação ao vivo |
| Imersão | StartSe AI para Negócios | R$ 3.000 | Imersão IA que Trabalha | **R$ 2.997** | Paridade — StartSe é evento para grandes empresas sem follow-up; o nosso inclui 30 dias de revisão e sai com automação construída |
| Imersão | Couto Performance | R$ 2.970 | Imersão IA que Trabalha | **R$ 2.997** | Paridade de preço, doutrina diferente: implementação vs. modelo de gestão |
| Mentoria em grupo | a2accelerate (4 meses) | sob consulta | Mentoria AI Work | **R$ 9.997 (12 semanas)** | Preço público = diferencial; nenhum concorrente creator publica high ticket |
| Consultoria/diagnóstico | Valor Digital | a partir de R$ 3.000 | AI Work Audit + sessão consultiva | **R$ 0 / R$ 497** | Diagnóstico como máquina de aquisição, não como produto |
| Consultoria/PoV | beAnalytic | R$ 15.000–60.000 | Mentoria AI Work | **R$ 9.997** | Entregamos 3 processos em produção por menos que o diagnóstico deles |
| Piloto de IA | WSS (Fortaleza) | R$ 30.000–120.000 | AI Implementation Sprint | **R$ 45.000** | Preço de piloto, escopo de implantação completa (4–6 frentes) |
| Plataforma enterprise | WSS | a partir de R$ 250.000 | Enterprise AI Transformation | **R$ 150.000+/ano** | Entrada 40% abaixo; marca pessoal do implementador vs. consultoria anônima |

**Leitura estratégica da tabela:** em todas as categorias low-ticket somos mais caros que o commodity e mais baratos que o enterprise; nas categorias high-ticket somos mais baratos que as consultorias com escopo comparável ou superior. O preço, em todos os degraus, reforça a mesma frase: **"implementação real, sem preço de consultoria e sem raso de curso."**

---

## 4. Coerência interna da escada (sanity check de preços)

| Degrau | Preço | Razão vs. degrau anterior |
|---|---|---|
| N1 Starter Kit | R$ 197 | — |
| N2 Formação | R$ 1.997 | ~10x (padrão clássico de value ladder) |
| N3 Lab | R$ 297/mês | recorrente; anual = 1,5x a Formação |
| N4 Imersão | R$ 2.997 | ~1,5x a Formação; paridade com benchmarks |
| N5 Mentoria | R$ 9.997 | ~3,3x a Imersão; entrada do vazio |
| N6 Sprint | R$ 45.000 | ~4,5x a Mentoria; preço de piloto de mercado |
| N7 Enterprise | R$ 150k+/ano | ~3,3x o Sprint |

Saltos entre 1,5x e 5x — dentro do padrão de escadas de valor funcionais; nenhum salto > 5x (que quebraria a ascensão) **[HIPÓTESE baseada em padrão de mercado, validar com conversão real]**.

## 5. Riscos de precificação e mitigações

1. **Prova social ainda em construção** (pesquisa 03: cases dependem de autorização/documentação) → todo preço acima de R$ 3k depende de aplicação + conversa, onde a biografia de implementador (4WaTT, 4W Energia, Traciona AI) substitui temporariamente cases de clientes. **Nunca publicar claims não documentados** (regra da pesquisa 03).
2. **Concorrência gratuita no topo** (Sebrae/Google/SENAI **[FATO]**) → Nível 0 gratuito é deliberadamente superior ao conteúdo gratuito do mercado (diagnóstico com scoring > ebook genérico), transformando a commoditização em aliada.
3. **Elasticidade desconhecida acima de R$ 1.500 em audiência fria** → tráfego pago apenas para N0/N1/N2 até validar; high ticket alimentado por ascensão.
4. **Churn do Lab** se a promessa "1 implementação/mês" não se sustentar → onboarding e rituais desenhados para a primeira implementação acontecer na semana 1 (doc 09).
5. **Revisão de preços:** revisar todos os degraus após 90 dias com dados reais de conversão, CAC e churn; regra: só subir preço com fila de espera ou conversão > 30% acima do alvo.

---

*Fim do documento 08.*
