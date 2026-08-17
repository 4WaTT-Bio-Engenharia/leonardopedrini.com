# 16 — Arquitetura de Analytics & Tracking

**Projeto:** Marca pessoal Leonardo Vieira Pedrini
**Responsável:** Growth Lead (Analytics)
**Princípio central:** sem tracking, nenhuma HIPÓTESE de CAC/CVR dos docs 10 e 11 é validável. Este documento é pré-requisito dos dias 1–30.

---

## 1. Stack

| Camada | Ferramenta | Configuração |
|---|---|---|
| Gerenciador de tags | **Google Tag Manager (GTM)** | Container único para site + LPs; todas as tags via GTM, nenhuma hardcoded |
| Analytics | **GA4** (via GTM) | Property única; Enhanced Measurement ligado; debug via GA4 DebugView |
| Ads — Meta | **Meta Pixel** + Conversions API (CAPI) | Pixel via GTM; CAPI no servidor/backend para eventos críticos (`purchase`, `lead_submit`) |
| Ads — LinkedIn | **LinkedIn Insight Tag** | Via GTM; conversion events mapeados para `lead_submit`, `brief_download`, `calendar_click` |
| Consentimento | Banner de consent (LGPD) | Consent Mode v2 do Google; disparo condicionado a consentimento de marketing |
| Dashboards | Looker Studio (GA4 + planilha de CAC) | 1 dashboard por funil + 1 executivo semanal |

### Placeholders configuráveis via variáveis de ambiente

```env
# .env / variáveis de ambiente do site (NUNCA commitar valores reais)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=0000000
```

- O código lê as variáveis em build/runtime; se vazias, a tag correspondente **não dispara** (ambiente de dev fica limpo).
- GTM recebe os IDs via variáveis de ambiente do container (GTM "Environment Variables") ou via dataLayer de bootstrap.
- Conversions API (Meta): token de acesso fica **somente no servidor** (`META_CAPI_ACCESS_TOKEN`, sem prefixo público).

## 2. Naming convention de eventos

Regras: `snake_case`, verbo no passado ou substantivo de ação, sem espaços, sem acento. Todo evento carrega os parâmetros comuns da seção 4.

### Eventos canônicos

| Evento | Dispara quando | Parâmetros específicos | Destinos |
|---|---|---|---|
| `page_view` | Toda página (automático GA4 via GTM) | `page_path`, `page_title` | GA4 |
| `lead_start` | Foco no 1º campo de qualquer formulário de captura | `form_id`, `form_type` (newsletter / audit / aplicacao / brief) | GA4 |
| `lead_submit` | Envio válido de formulário de captura | `form_id`, `form_type` | GA4, Meta (Lead), LinkedIn |
| `diagnostic_start` | 1ª pergunta do AI Work Audit respondida | `audit_version` | GA4, Meta |
| `diagnostic_complete` | Relatório do AI Work Audit gerado | `audit_version`, `score_range` (0–25/26–50/51–75/76–100) | GA4, Meta (Lead qualificado), LinkedIn |
| `whatsapp_click` | Clique em qualquer link wa.me | `location` (hero, faq, footer…), `page_path` | GA4, Meta |
| `calendar_click` | Clique em link de agendamento (Cal.com/Calendly) | `meeting_type` (diagnostico / call_consultoria / assessment) | GA4, Meta, LinkedIn |
| `product_view` | Visualização de LP de produto (curso, comunidade, imersão, mentoria) | `product_id`, `product_name`, `price_range` | GA4, Meta (ViewContent) |
| `checkout_start` | Clique no botão de compra / início do checkout | `product_id`, `value`, `currency: BRL` | GA4, Meta (InitiateCheckout) |
| `purchase` | Confirmação de compra (webhook Hotmart/Kiwify → servidor → CAPI + dataLayer na thank-you page) | `transaction_id`, `product_id`, `value`, `currency` | GA4, Meta (Purchase via CAPI), LinkedIn |
| `newsletter_signup` | Confirmação de inscrição na newsletter | `source_form` | GA4, Meta |
| `case_view` | Visualização de página de case (com engajamento mínimo 10s) | `case_id`, `sector` | GA4 |
| `video_play` | Play em vídeo embutido | `video_id`, `page_path` | GA4 |
| `scroll_50` | 50% de scroll em LPs/artigos | `page_path` | GA4 |
| `scroll_90` | 90% de scroll | `page_path` | GA4 |

### Eventos secundários (funis B, C, D — registrar mesmo sem tag de ads)

`webinar_register`, `webinar_attend`, `trial_start`, `trial_convert`, `churn`, `brief_download`, `call_held`, `proposal_sent`, `proposal_accepted`, `assessment_held`, `workshop_held`, `contract_signed`, `retainer_start`, `outbound_reply`.

Os que ocorrem fora do site (call, proposta, contrato) entram via **importação offline** (planilha → GA4 Measurement Protocol / Meta Offline Conversions) com `transaction_id` ou e-mail hasheado para fechar o loop de atribuição.

## 3. Captura e persistência de UTMs

**Parâmetros:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`.

### Mecânica

1. **Landing:** script de primeira página lê UTMs da URL + `gclid`/`fbclid` e o referrer.
2. **Persistência:** grava em cookie first-party (`lp_utm`, 90 dias) **e** em `sessionStorage` — cookie sobrevive à navegação entre páginas e subdomínios do mesmo domínio.
3. **Atribuição:**
   - `first_touch` = UTMs da 1ª visita (nunca sobrescrever).
   - `last_touch` = UTMs da visita atual (sobrescreve a cada visita com UTM novo).
   - Ambos viajam em **campos ocultos** de todo formulário e no dataLayer de todo evento de conversão.
4. **Envio:** todo `lead_submit` / `diagnostic_complete` / `purchase` carrega `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `first_utm_source`, `first_utm_medium` como parâmetros de evento (GA4: registrar como custom dimensions) e como propriedades do contato no ESP/CRM.
5. **Checkout externo (Hotmart/Kiwify):** UTMs passados via query string do botão de compra + webhook de compra retorna com os parâmetros → servidor grava e dispara `purchase` via CAPI com os UTMs originais.

### Convenção de valores

| Canal | utm_source | utm_medium | Exemplo utm_campaign |
|---|---|---|---|
| Instagram orgânico | `instagram` | `organic_social` | `audit_lancamento` |
| LinkedIn orgânico | `linkedin` | `organic_social` | `case_4w_energia` |
| Meta Ads | `meta` | `paid_social` | `audit_cold_v1` |
| Google Ads | `google` | `cpc` | `quanto_custa_ia` |
| LinkedIn Ads | `linkedin` | `paid_social` | `abm_brief_v1` |
| Newsletter | `newsletter` | `email` | `ed005_webinar1` |
| Podcast | nome do podcast | `podcast` | `guesting_q3` |
| Parceria | nome do parceiro | `partnership` | `sebrae_immersao` |
| Evento | `evento` | `offline` | `webinar_01` |
| Referral | `referral` | `referral` | `indique_comunidade` |

Regra: tudo minúsculo, sem espaço, sem acento. UTM fora da convenção = alerta no dashboard.

## 4. Parâmetros comuns de todo evento

`page_path`, `funnel` (a/b/c/d — inferido da página), `device_type`, `utm_*` (quando presentes), `user_id` (quando identificado, após consentimento).

## 5. Mapa evento → funil → decisão

| Evento | Funil(s) | KPI que alimenta | Decisão que habilita |
|---|---|---|---|
| `diagnostic_complete` | A, B, C, D | CPL qualificado, taxa LP→lead | Realocar verba para o canal com menor custo por diagnóstico completo |
| `newsletter_signup` | B | Crescimento de lista | Investir em conteúdo vs. ads no topo |
| `purchase` (curso) | A | CVR LP, CAC, ROAS | Escalar/pausar criativos; testar preço |
| `trial_convert` | B | Trial→pago, churn | Manter/mudar oferta de trial e onboarding |
| `lead_submit` (aplicação) | C | Qualificação do tráfego de fundo | Subir verba de fundo ou apertar critério |
| `call_held` → `proposal_accepted` | C | Win rate comercial | Ajustar qualificação pré-call; treinar oferta |
| `assessment_held` → `purchase` (piloto) | D | Viabilidade enterprise | Go/no-go de LinkedIn Ads e ABM em escala |
| `whatsapp_click` | A, C | Intenção quente por página | Onde posicionar CTA de WhatsApp; SLA de resposta <2h |
| `case_view` → `calendar_click` | C, D | Eficácia de cada case | Produzir mais cases do setor que converte |
| `scroll_90` alto + conversão baixa | A, C | Diagnóstico de LP | Problema é oferta/prova, não conteúdo → reescrever proposta de valor antes de comprar tráfego |
| `checkout_start` sem `purchase` | A | Abandono de checkout | Testar meios de pagamento, garantia, parcelamento |

## 6. Implementação em fases

| Fase | Escopo |
|---|---|
| **Semana 1** | GTM + GA4 + Consent Mode; `page_view`, `scroll_50/90`, `video_play`; script de UTMs; placeholders via env |
| **Semana 2** | Meta Pixel + LinkedIn Insight Tag; eventos de lead (`lead_start`, `lead_submit`, `newsletter_signup`); campos ocultos de UTM nos formulários |
| **Semana 3** | AI Work Audit instrumentado (`diagnostic_start/complete` com `score_range`); `whatsapp_click`, `calendar_click`, `case_view` |
| **Semana 4** | E-commerce: `product_view`, `checkout_start`, `purchase` + CAPI + webhook Hotmart/Kiwify; importação offline de eventos de funil C/D; dashboards Looker Studio |
| **Contínuo** | Auditoria mensal: comparar eventos GA4 vs. Meta vs. CRM (tolerância de divergência ≤15%); revisar convenção de UTM |

## 7. LGPD e governança

- Banner de consentimento antes de qualquer tag de marketing; modo "analytics only" sem consentimento.
- E-mail e dados pessoais **nunca** em parâmetros de URL ou dataLayer em claro — apenas hasheado (SHA-256) para CAPI/offline conversions.
- Política de privacidade linkada no rodapé (já previsto no benchmark CRO, research/02 §1.1).
- Documento de registro de tratamento (quem acessa GA4/Meta/CRM, retenção) — responsabilidade do Growth Lead + jurídico.
