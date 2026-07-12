# Plano — Sprint Traciona 90 Dias (MVP)

## Diagnóstico da página atual
- Posicionamento como "consultoria estratégica premium" é amplo demais; não vende a Sprint.
- Copy fala em "3x faturamento em 18 meses", genérico, sem gancho no ICP de serviços.
- Formulário captura só nome/e-mail/WhatsApp — não qualifica lead (sem faturamento, gargalo, segmento).
- Página `/comunidade` (R$19,90/mês) desvia do foco MVP — vou desativar do menu principal (mantida a rota).
- Sem automação de e-mail (agradecimento ao lead + notificação interna).
- Autoridade das 3 empresas é boa, mantida com copy mais curto.

## Nova arquitetura da landing (`/`)
1. **Hero** — Headline: "Organize gestão e vendas para crescer com previsibilidade em 90 dias." Sub: sistema operacional de crescimento para pequenas empresas de serviços, com IA aplicada à gestão e ao comercial. CTA: "Quero meu diagnóstico".
2. **Dores do ICP** — 6 cards: vendas inconsistentes, dependência de indicação, dono apagando incêndio, leads perdidos no WhatsApp, funil desorganizado, falta de clareza sobre números.
3. **Para quem é / para quem não é** — Duas colunas com filtro de ICP (agências, consultorias, contabilidades, software houses, BPOs, engenharia; R$ 30k–300k/mês; 3–25 pessoas).
4. **A Sprint Traciona 90 Dias** — O que é: implantação guiada de um sistema operacional (não consultoria aberta, não mentoria, não projeto de IA genérico).
5. **O que é implantado** — 8 entregáveis: metas, funil, processo comercial, indicadores, financeiro essencial, cockpit Traciona AI, cadência, playbooks.
6. **Antes e depois** — 2 colunas: "Hoje na sua operação" vs. "Depois dos 90 dias".
7. **Como funciona (etapas)** — 4 fases em 90 dias: Diagnóstico → Estruturação → Ativação → Ritmo.
8. **Diferenciais** — Sprint estruturada vs. consultoria genérica vs. curso vs. software solto.
9. **Autoridade** — Leonardo + 3 empresas (4WaTT, 4W Energia, Traciona AI) com copy atual.
10. **FAQ** — 6 perguntas (prazo, formato, garantias, para quem serve, preço/aplicação, próximos passos).
11. **CTA final + Formulário de aplicação qualificada**.

Subpáginas: mantenho MVP com uma página principal. Rota `/obrigado` permanece. Rota `/comunidade` mantida mas removida da navegação principal para não competir com o CTA da Sprint.

## Formulário qualificado
Campos: nome, e-mail, WhatsApp, empresa, site/Instagram, segmento, faixa de faturamento mensal (< R$30k / R$30–100k / R$100–300k / > R$300k), tamanho da equipe (1–2 / 3–10 / 11–25 / 25+), principal gargalo (select), usa CRM (sim/não), objetivo (diagnóstico / aplicar Sprint / falar com especialista).

## Backend
- Migration: expandir `leads` com novas colunas (empresa, site, segmento, faturamento, equipe, gargalo, usa_crm, objetivo). Manter RLS `Anyone can insert`.
- Edge Function `notify-lead` (Lovable Emails via `send-transactional-email`): dispara 2 e-mails após insert (via chamada direta da UI depois do insert, sem trigger DB — mais simples no MVP).

## E-mails (Lovable Emails)
Requer domínio de e-mail configurado. Vou:
1. Rodar `email_domain--check_email_domain_status`; se não houver domínio, mostrar o diálogo de setup e continuar o build do resto sem bloquear.
2. Setup infra + scaffold transactional quando domínio existir.
3. Templates:
   - `lead-thank-you` — para o lead (assunto: "Recebemos sua aplicação para a Sprint Traciona 90 Dias").
   - `lead-internal-notification` — para Leonardo (assunto: "Novo lead — [nome] / [empresa]"), com todos os campos.
4. Endereço interno de destino: solicitar por `add_secret` (`INTERNAL_LEAD_EMAIL`) — na verdade posso pedir no chat; para MVP uso um valor via secret.

## Visual / UX
Manter Montserrat + Inter, paleta midnight/champagne, glass. Nova densidade: mais foco em CTA repetido, hierarquia clara, mobile-first. Sem mudança de design system.

## Detalhes técnicos
- `src/pages/Index.tsx` reordenado com novas seções.
- Novos componentes: `PainPointsSection`, `ForWhomSection`, `SprintOfferSection`, `DeliverablesSection`, `TransformationSection`, `HowItWorksSection`, `DifferentialSection` (reescrito), `FaqSection`, `LeadForm` (reescrito com campos qualificados).
- `Navbar` remove link Comunidade, adiciona âncoras: Sprint, Como funciona, FAQ.
- Migration Supabase para colunas novas em `leads`.
- Edge Function chamada pelo cliente após `insert`, envia 2 e-mails via `send-transactional-email` (ou envia 1 chamada por template).
- Rota `/obrigado` atualizada para refletir Sprint.

## Fora do escopo (pós-MVP)
- Subpáginas dedicadas por tema, quiz de autodiagnóstico interativo, integração com CRM, pagamento da comunidade, cases reais (aguardando conteúdo do cliente).

Confirma que posso executar tudo? Preciso saber **o e-mail interno para notificação de novos leads** (ex: `leonardo@...`) — sem isso não configuro o destinatário do e-mail interno. Se preferir, informe agora e sigo direto.
