# 15 — Estratégia SEO Brasil

**Projeto:** Marca pessoal Leonardo Vieira Pedrini — lvpedrini (site/institucional + blog)
**Responsável:** Growth Lead (SEO)
**Base:** research/01 §5 (clusters e lacuna de fundo de funil), research/02 §2.2 (SEO atual: nota 2/10 — single page, sem blog, sem conteúdo indexável)
**Convenção:** volumes de busca NÃO foram verificados (research/01 §5: "não há dados públicos gratuitos confiáveis; validar no Keyword Planner"). Toda priorização por volume é **HIPÓTESE** baseada em intenção inferida.

---

## 1. Princípios

1. **Fundo de funil primeiro** — a lacuna de mercado é conteúdo comercial ("quanto custa", "como implementar", "ROI"). Concorrência de marca pessoal ≈ zero (research/01 §5). Não disputar "curso de IA" contra Alura/FIAP/Coursera no início.
2. **Pessoa + Organização** — a marca é pessoal: schema `Person` + `Organization` em todo o site, com `sameAs` para Instagram/LinkedIn/empresas (4WaTT, 4W Energia — verificadas, research/03).
3. **Sem keyword stuffing** — um termo principal por página, variações naturais, escrita para humanos. Densidade forçada é anti-alvo.
4. **E-E-A-T real** — autor nomeado com biografia verificável, data de publicação/atualização, fontes citadas. É a defesa contra a maré de conteúdo genérico de IA.

## 2. Arquitetura de clusters (pilar + supporting)

### Cluster 1 — Implementação de IA (pilar central; alinhado ao posicionamento)
- **Pilar:** `/implementacao-de-ia/` — "Implementação de IA em empresas: o guia completo (2026)"
- Supporting:
  - `/blog/como-implementar-ia-na-empresa/`
  - `/blog/piloto-de-ia-como-estruturar/`
  - `/blog/roadmap-de-implementacao-de-ia-90-dias/`
  - `/blog/erros-implementacao-ia/`
  - `/blog/diagnostico-de-ia-o-que-esperar/`

### Cluster 2 — Quanto custa IA (maior intenção comercial; lacuna #1)
- **Pilar:** `/quanto-custa-implementar-ia/` — com tabela de faixas reais (preços verificados research/01 §4: automação R$ 5–15k; piloto R$ 30–120k; plataforma R$ 250k+)
- Supporting:
  - `/blog/quanto-custa-agente-de-ia-whatsapp/`
  - `/blog/quanto-custa-consultoria-de-ia/`
  - `/blog/roi-de-agentes-de-ia-como-calcular/`
  - `/blog/quanto-custa-nao-implementar-ia/`
  - `/ferramentas/calculadora-roi-ia/` (página-ferramenta, isca de link)

### Cluster 3 — Consultoria de IA
- **Pilar:** `/consultoria-de-ia/` (página de serviço + conteúdo)
- Supporting:
  - `/blog/consultoria-de-ia-como-escolher/`
  - `/blog/consultoria-de-ia-vs-curso/`
  - `/blog/7-erros-contratar-consultoria-ia/`
  - `/blog/mentoria-de-implementacao-de-ia/`

### Cluster 4 — Agentes de IA
- **Pilar:** `/agentes-de-ia/` — "Agentes de IA para empresas: o que são, quanto custam, como sair do piloto"
- Supporting:
  - `/blog/agentes-de-ia-vs-automacao-rpa/`
  - `/blog/funcionario-digital-custo-producao/`
  - `/blog/agentes-de-ia-lgpd/`
  - `/blog/agentes-de-ia-para-atendimento/`

### Cluster 5 — Automação com IA
- **Pilar:** `/automacao-com-ia/`
- Supporting:
  - `/blog/automacao-de-processos-com-ia/`
  - `/blog/integracao-ia-erp-crm-legado/`
  - `/blog/automacao-com-ia-para-pequenas-empresas/`

### Cluster 6 — IA para gestores (persona ICP-B/C)
- **Pilar:** `/ia-para-gestores/`
- Supporting:
  - `/blog/ia-para-gestores-por-onde-comecar/`
  - `/blog/modelo-de-gestao-para-ia/`
  - `/blog/como-justificar-investimento-em-ia-para-a-diretoria/`

### Cluster 7 — IA para pequenas empresas (persona-dor, ICP-A)
- **Pilar:** `/ia-para-pequenas-empresas/`
- Supporting:
  - `/blog/ia-para-pequenas-empresas-menos-de-5-mil/`
  - `/blog/checklist-empresa-pronta-para-ia/`
  - `/blog/por-que-empresas-testam-ia-e-nao-veem-retorno/`

## 3. Internal linking

- **Regra hub-and-spoke:** todo supporting linka para o pilar no primeiro terço do texto (âncora natural, ex.: "ver o guia completo de implementação de IA"); o pilar linka para todos os supportings em seção "Aprofunde por tema".
- **Cross-cluster comercial:** artigos de "quanto custa" linkam para `/consultoria-de-ia/` e `/diagnostico/` (AI Work Audit) — trilha de conversão.
- **Todo artigo termina com:** CTA para AI Work Audit + 3 links relacionados (1 mesmo cluster, 1 fundo de funil, 1 case).
- **Cases** (`/cases/`) linkam para o serviço correspondente e para o pilar do setor.

## 4. Titles & descriptions por página (sugestões)

| Página | Title (≤60c) | Meta description (≤155c) |
|---|---|---|
| Home | Leonardo Pedrini — IA que trabalha pela sua empresa | Pare de conversar com a IA. Implementação de IA com resultado mensurável para empresas: diagnóstico, agentes e consultoria. Faça o AI Work Audit. |
| /implementacao-de-ia/ | Implementação de IA em empresas: guia completo 2026 | Do diagnóstico ao piloto com KPI contratado: como implementar IA na sua empresa em 90 dias, com faixas reais de investimento. |
| /quanto-custa-implementar-ia/ | Quanto custa implementar IA? Preços reais (2026) | Automação a partir de R$ 5 mil, pilotos de R$ 30–120 mil, plataformas R$ 250 mil+. Tabela completa e como calcular o ROI antes de investir. |
| /consultoria-de-ia/ | Consultoria de IA com resultado mensurável | Diagnóstico, piloto de 6–8 semanas e implantação de agentes de IA com KPI contratado. Conheça o método e as faixas de investimento. |
| /agentes-de-ia/ | Agentes de IA para empresas: guia + custos | O que são agentes de IA, quanto custam (de R$ 2 mil/mês) e como sair do piloto para produção. Guia para gestores. |
| /automacao-com-ia/ | Automação com IA: processos, custos e ROI | Como automatizar processos com IA sem trocar seus sistemas: casos, faixas de preço e calculadora de ROI. |
| /ia-para-gestores/ | IA para gestores: do hype ao resultado | O que líderes precisam saber para implementar IA com retorno: priorização por ROI, erros comuns e plano de 90 dias. |
| /ia-para-pequenas-empresas/ | IA para pequenas empresas: por onde começar | Implementação de IA com menos de R$ 5 mil: checklist de prontidão, primeiros processos a automatizar e erros a evitar. |
| /diagnostico/ (AI Work Audit) | AI Work Audit — diagnóstico gratuito de IA | Descubra em 4 minutos o score de prontidão da sua empresa para IA e receba um relatório personalizado com os primeiros passos. |
| /cases/ | Cases de implementação de IA — resultados em R$ | Implementações reais de IA com antes/depois e números auditáveis. Veja o que funciona em empresas brasileiras. |
| /comunidade/ | Comunidade de implementação de IA | Implemente IA na sua empresa com acompanhamento semanal: aulas, agentes prontos e suporte. Teste 14 dias. |
| /curso/ | Curso de IA aplicada a negócios | Aprenda a implementar IA que trabalha pela sua empresa — método passo a passo, sem hype. Garantia de 15 dias. |
| /mentoria/ | Mentoria de implementação de IA | Implementação assistida de IA para empresas: mentoria + agentes entregues com KPI contratado. Aplicação com retorno em 48h. |
| /sobre/ | Sobre Leonardo Vieira Pedrini | Engenheiro e fundador de 4WaTT, 4W Energia e Traciona AI. Implemento IA que trabalha dentro de empresas reais — inclusive as minhas. |

**Regra:** titles com termo principal à esquerda; descriptions com número ou promessa concreta + CTA. Nunca repetir o termo mais de 1x no title.

## 5. Schemas (JSON-LD)

```json
// Global (todas as páginas) — Organization
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Leonardo Vieira Pedrini",
  "url": "https://DOMINIO",
  "sameAs": ["https://instagram.com/lvpedrini", "https://linkedin.com/in/leonardo-vieira-pedrini-712b0b105/", "https://www.4watt.tech/", "https://www.4wenergia.com.br/"]
}
```
- **Person** — `/sobre/` e author de todo artigo: `name`, `jobTitle` ("Engenheiro e consultor de implementação de IA"), `alumniOf`, `sameAs` (idêntico ao acima; só usar URLs verificadas — research/03).
- **Article** — todos os posts de blog: `headline`, `datePublished`, `dateModified`, `author` (Person), `image`.
- **Course** — `/curso/`: `name`, `description`, `provider` (Organization), `offers` (preço, moeda BRL) — só com preço público real.
- **FAQPage** — páginas com FAQ real visível (home, /curso/, /mentoria/, /comunidade/): 4–8 perguntas, texto idêntico ao exibido.
- **BreadcrumbList** — todo o site.
- **Service** — `/consultoria-de-ia/` e `/mentoria/`: `provider`, `areaServed: BR`, `offers` com faixa de preço quando pública.
- ⚠️ **Não usar** Review/AggregateRating até haver avaliações reais e coletáveis — risco de penalização.

## 6. Plano de execução 90 dias

| Fase | Ação |
|---|---|
| Dias 1–15 | Migração técnica: site deixa de ser single page → estrutura /blog, sitemap, Search Console, schemas base, /sobre com Person. Publicar pilares 1 e 2. |
| Dias 16–45 | 2–4 supportings/semana (clusters 1–3 primeiro). Página-ferramenta calculadora ROI. |
| Dias 46–75 | Pilares 4–7 + supportings. Página /cases/ com 2 cases (autorizados ou anonimizados). |
| Dias 76–90 | Auditoria Search Console: reescrever titles com CTR <2%, atualizar artigos posição 8–20, primeiro ciclo de link building (podcasts e parcerias do doc 10 geram backlinks). |

**Validação pendente:** rodar Google Keyword Planner nos 7 clusters antes de fechar prioridades de produção do mês 2 (ação herdada de research/01 §7).

**KPIs:** impressões e cliques (GSC), posição média por cluster, leads orgânicos (`diagnostic_start` com UTM organic), artigos no top 20 (meta: 3–5 ao dia 90 — HIPÓTESE).
