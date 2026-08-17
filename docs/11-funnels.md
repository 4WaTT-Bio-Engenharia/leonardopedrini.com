# 11 — Funis de Conversão (4 funis completos)

**Projeto:** Marca pessoal Leonardo Vieira Pedrini
**Responsável:** Growth Lead (Funis)
**Base:** research/01 (preços e funis típicos do mercado), research/02 (padrões de conversão dos benchmarks), research/03 (restrições de prova)
**Convenção:** todas as taxas de conversão são **HIPÓTESE** fundamentadas nos benchmarks citados; não existe dado histórico do projeto. Cada taxa tem meta de validação em 90 dias.
**Eventos de tracking:** nomes seguem a convenção do doc 16-analytics.md.

---

## 0. Estrutura comum

- **Lead magnet central:** AI Work Audit — diagnóstico interativo com scoring e relatório personalizado. É a conversão padrão de topo em todos os funis (research/02 §4.9: "um diagnóstico gratuito com resultado imediato tende a converter melhor no topo" que produto pago de entrada).
- **Regra de transição:** nenhuma etapa pula degrau do value ladder. Cada CTA leva ao próximo degrau, nunca dois acima (benchmark Couto: escada completa com LP por produto — research/02 §1.3a).
- **Regra de prova:** etapas de fundo (call, proposta) exigem case documentado; até lá, usar cases anonimizados ou números internos auditáveis (research/03).

---

## FUNIL A — Curso (receita de educação + porta para comunidade/immersão)

**Fluxo:** Ads/Conteúdo → Lead Magnet (AI Work Audit) → Nutrição → Página de vendas → Compra → Comunidade → Imersão

### Etapas

| # | Etapa | O que acontece | CTA / transição (copy) |
|---|---|---|---|
| A1 | Alcance | Meta Ads / Instagram / YouTube / SEO | "Sua empresa está pronta para IA que trabalha de verdade? Descubra em 4 minutos." |
| A2 | Lead magnet | AI Work Audit (quiz 8–12 perguntas → scoring → relatório) | "Receba seu relatório personalizado com o score de prontidão da sua empresa." |
| A3 | Nutrição | 5 e-mails em 10 dias: relatório → 1 erro comum → 1 case → framework → oferta | E-mail 5: "Você já sabe ONDE está travado. O curso mostra COMO destravar — turma aberta." |
| A4 | Página de vendas | LP do curso (estrutura clássica do benchmark: prova → pra quem é/não é → transformação → bônus → método nomeado → FAQ — research/02 §1.3b) | "Garantir minha vaga" (garantia 15 dias, 12x — padrão Hotmart dos benchmarks) |
| A5 | Compra | Checkout (Hotmart/Kiwify) | Order bump: mês 1 da comunidade por R$ 19,90 |
| A6 | Onboarding → Comunidade | Aluno entra com trial de 30 dias | "Quem implementa junto, implementa mais rápido — continue na comunidade." |
| A7 | Upsell Imersão | Após 30–60 dias na comunidade, convite para imersão presencial | "O próximo nível é presencial: 2 dias para sair com seu plano de implementação pronto." |

### Métricas e taxas-alvo por etapa (HIPÓTESE)

| Transição | Taxa-alvo | Fundamentação |
|---|---|---|
| A1→A2 (visitante LP → início do diagnóstico) | 25–40% | Diagnósticos interativos superam ebooks; benchmark research/02 §4.9 |
| A2→A2′ (início → conclusão do diagnóstico) | 50–70% | Quizzes curtos com resultado imediato |
| A2→A3 (lead → abre sequência) | abertura ≥45% | Lista recém-captada com relatório personalizado |
| A3→A4 (lead → visita página de vendas) | 8–15% | Nutrição de 10 dias com case |
| A4→A5 (página → compra) | 1–3% frio / 3–8% quente | Padrão LP de curso R$ 500–1.500 (faixa de mercado, research/01 §1.3) |
| A5→A6 (comprador → comunidade trial) | 30–50% | Order bump + onboarding |
| A6→A7 (membro ativo → imersão) | 5–15% | Referência: upsell de evento em comunidades (Viver de IA Experience) |

### Tracking (eventos doc 16)
- A1: `page_view` (LP diagnóstico) com UTM
- A2: `lead_start`, `diagnostic_start`, `diagnostic_complete`, `lead_submit`
- A3: `newsletter_open`/`email_click` (via ESP)
- A4: `product_view`, `scroll_50`, `scroll_90`
- A5: `checkout_start`, `purchase`
- A6: `trial_start` (comunidade)
- A7: `product_view` (imersão), `purchase` (imersão)

---

## FUNIL B — Comunidade (receita recorrente + reservatório de consultoria)

**Fluxo:** Conteúdo → Newsletter/Diagnóstico → Evento/Trial → Comunidade → Consultoria

### Etapas

| # | Etapa | O que acontece | CTA / transição (copy) |
|---|---|---|---|
| B1 | Conteúdo | Instagram/LinkedIn/SEO | "Entre para a lista: 1 implementação real de IA por semana, sem hype." |
| B2 | Newsletter/Diagnóstico | Captura dupla: newsletter (baixa fricção) + AI Work Audit (alta qualificação) | "Faça o diagnóstico e receba seu score + plano de primeiros passos." |
| B3 | Evento/Trial | Webinar mensal "implementação ao vivo" + oferta de trial 14 dias da comunidade | "Veja um agente sendo construído ao vivo — e continue dentro da comunidade por 14 dias grátis." |
| B4 | Comunidade | Conversão trial → pago; rotina de implementação assistida | "Sua primeira automação em produção em 30 dias — ou devolvemos o valor." (HIPÓTESE de garantia — validar capacidade de entrega) |
| B5 | Consultoria | Membros com dor acima do self-service recebem convite para diagnóstico 1:1 | "Seu caso passou do ponto de self-service. Vamos olhar juntos? Diagnóstico executivo de 45 min." |

### Métricas e taxas-alvo por etapa (HIPÓTESE)

| Transição | Taxa-alvo | Fundamentação |
|---|---|---|
| B1→B2 (perfil/site → inscrito) | 2–5% | Captura em múltiplos níveis de intenção (benchmark Couto, research/02 §1.3d) |
| B2→B3 (inscrito → inscrito webinar) | 15–25% da lista ativa/mês | Convite mensal recorrente |
| B3 (show rate webinar) | ≥40% | Padrão de mercado para webinar com lembretes |
| B3→B4 (participante → trial) | 8–15% | Oferta feita ao vivo com prazo |
| B4 (trial → pago) | 25–40% | Comunidades com onboarding ativo; benchmark de assinaturas low-ticket (Clube.ai R$ 59,99; IA Club R$ 697/ano — research/01 §2) |
| B4 (churn mensal) | ≤6% | Meta de retenção para recorrência saudável |
| B4→B5 (membro → diagnóstico consultoria) | 2–5% de membros ativos/trimestre | Ascensão natural dos casos complexos |

### Tracking
- B1: `page_view` + UTM
- B2: `newsletter_signup`, `diagnostic_start`, `diagnostic_complete`
- B3: `webinar_register`, `webinar_attend`
- B4: `trial_start`, `trial_convert` (purchase recorrente), `churn`
- B5: `lead_start` (diagnóstico 1:1), `calendar_click`

---

## FUNIL C — Consultoria / Mentoria (high ticket, ciclo de 2–6 semanas)

**Fluxo:** Thought Leadership → Case → Diagnóstico → Aplicação → Call → Proposta

### Etapas

| # | Etapa | O que acontece | CTA / transição (copy) |
|---|---|---|---|
| C1 | Thought leadership | LinkedIn (posts de doutrina + bastidores de implementação) + podcast + SEO fundo de funil | "Escrevi o caso completo de como [empresa do setor] colocou IA para trabalhar — link nos comentários." |
| C2 | Case | Página de case com antes/depois, números auditáveis, método | "Quer o mesmo diagnóstico que gerou esse resultado? Comece pelo AI Work Audit." |
| C3 | Diagnóstico | AI Work Audit (versão executiva) | "Seu score indica potencial de R$ X/ano em eficiência. Aplique para uma sessão de diagnóstico." |
| C4 | Aplicação | Formulário qualificatório (faturamento, time, dor, urgência) com garantias: aplicação ≠ venda, retorno em 48h (padrão já existente no site — research/02 §2.1; benchmark V4 promete resposta em 12h) | "Aplicação não é compromisso de compra. Respondemos em até 48h." |
| C5 | Call | 45 min: diagnóstico ao vivo + hipótese de solução + fit bilateral | "Se fizer sentido, te mando proposta em 5 dias úteis. Se não fizer, te digo o que fazer sozinho." |
| C6 | Proposta | Documento com escopo, KPI contratado, cronograma, investimento | Aceite → contrato (mentoria ou AI Implementation Sprint) |

### Métricas e taxas-alvo por etapa (HIPÓTESE)

| Transição | Taxa-alvo | Fundamentação |
|---|---|---|
| C1→C2 (post → leitura de case) | CTR 2–5% | LinkedIn orgânico com case concreto |
| C2→C3 (case → diagnóstico) | 10–20% | Case é o conteúdo de maior intenção |
| C3→C4 (diagnóstico completo → aplicação) | 15–30% | Quem completa scoring executivo tem dor real |
| C4→C5 (aplicação → call agendada) | 40–60% | Qualificação bilateral filtra antes |
| C5→C6 (call → proposta) | 50–70% | Só se faz proposta com fit confirmado |
| C6→fechamento | 25–40% | High ticket B2B com diagnóstico prévio |
| **Ciclo completo lead→cliente** | **1–3%** | Compatível com tickets R$ 5k–80k (vazio de preço, research/01 §4) |

### Tracking
- C1: `post_view`/engajamento (plataforma)
- C2: `case_view`, `scroll_90`
- C3: `diagnostic_start`, `diagnostic_complete`
- C4: `lead_start`, `lead_submit` (aplicação)
- C5: `calendar_click`, `call_held`
- C6: `proposal_sent`, `proposal_accepted`

### Bloqueio de prova (research/03)
Cases nomeados (TWS, CMPG) só entram em C2 **após autorização escrita**. Até lá: cases anonimizados por setor ("boutique jurídica do setor elétrico") ou números internos das empresas próprias (4W Energia — verificada publicamente).

---

## FUNIL D — Enterprise (ABM, ciclo de 2–6 meses)

**Fluxo:** LinkedIn/ABM/Referral → Case → Executive Brief → AI Opportunity Assessment → Workshop Executivo → Piloto → Implantação → Retainer

### Etapas

| # | Etapa | O que acontece | CTA / transição (copy) |
|---|---|---|---|
| D1 | Prospecção | LinkedIn (orgânico + Sales Navigator), ABM em 20–50 contas nomeadas, referral de clientes | Mensagem: "Empresas do seu setor estão travando na mesma etapa de IA. Escrevi um brief de 6 páginas sobre isso — posso te mandar?" |
| D2 | Case | Case do setor da conta (ou setor adjacente) | "O brief detalha o modelo que gerou esse resultado." |
| D3 | Executive Brief | PDF executivo: tese + números de mercado + mapa de oportunidades por função + faixas de investimento (transparência de preço = diferencial, research/01 §5) | "O próximo passo é um assessment gratuito de 90 min com seus dados reais." |
| D4 | AI Opportunity Assessment | Sessão com dados da empresa → mapa de oportunidades priorizado por ROI | "Das 12 oportunidades, 3 pagam o investimento em <6 meses. O workshop executivo alinha a liderança sobre qual atacar primeiro." |
| D5 | Workshop Executivo | Meio dia com C-level; entrega: roadmap priorizado + business case | "O piloto de 6–8 semanas prova o ROI antes de qualquer compromisso maior." |
| D6 | Piloto | Projeto fechado, KPI contratado (faixa de mercado R$ 30–120 mil / 4–8 semanas — verificado em research/01 §4, WSS) | "Piloto atingiu o KPI? A implantação completa já está desenhada." |
| D7 | Implantação | AI Implementation Sprint / projeto completo | Transição para operação contínua |
| D8 | Retainer | Acompanhamento mensal + roadmap evolutivo | Renovação anual |

### Métricas e taxas-alvo por etapa (HIPÓTESE)

| Transição | Taxa-alvo | Fundamentação |
|---|---|---|
| D1→D3 (contato → brief solicitado) | 5–15% | ABM com personalização real |
| D3→D4 (brief → assessment) | 20–35% | Assessment gratuito de alto valor |
| D4→D5 (assessment → workshop) | 30–50% | Assessment já entrega roadmap — workshop é o passo natural |
| D5→D6 (workshop → piloto) | 25–40% | Compra por comitê após alinhamento executivo |
| D6→D7 (piloto → implantação) | 50–70% | Piloto com KPI contratado = decisão por evidência |
| D7→D8 (implantação → retainer) | 60–80% | Continuidade operacional |
| **Ciclo conta-fria→piloto** | **2–5%** | Compatível com ticket e ciclo enterprise |

### Tracking
- D1: `outbound_reply` (planilha/CRM), `profile_view`
- D3: `brief_download` (form com e-mail corporativo), `lead_submit`
- D4: `calendar_click`, `assessment_held`
- D5: `workshop_held`
- D6: `proposal_sent`, `purchase` (piloto)
- D7/D8: `contract_signed`, `retainer_start`

### Nota de timing
Funil D fica em modo "preparação" nos primeiros 60 dias (lista de contas + brief + 1 case). Ativação com cadência real a partir do dia 60 — decisão registrada no doc 10 (Tier 3).

---

## 7. Mapa consolidado: evento → funil → decisão

| Evento | Funis | Decisão que alimenta |
|---|---|---|
| `diagnostic_complete` | A, B, C, D | Qual canal gera lead qualificado mais barato? (alocação de verba) |
| `newsletter_signup` | B | Crescimento do ativo de nutrição |
| `product_view` → `purchase` | A | CVR da LP de curso; copy/preço |
| `trial_start` → `trial_convert` | B | Saúde da oferta de comunidade |
| `lead_submit` (aplicação) | C | Qualidade do tráfego de fundo |
| `call_held` → `proposal_accepted` | C | Eficácia comercial; win rate |
| `assessment_held` → piloto | D | Viabilidade do funil enterprise |
| `whatsapp_click` | A, C | Intenção quente — acionar follow-up humano em <2h |
| `case_view` | C, D | Quais cases convertem (produzir mais do setor vencedor) |
| `scroll_90` em LP | A, C | Se alto scroll + baixa conversão = problema de oferta, não de conteúdo |

Detalhamento técnico (naming, UTMs, implementação) no doc 16-analytics.md.
