import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import NewsletterSignupForm from "@/components/sections/NewsletterSignupForm";
import { trackEvent } from "@/lib/analytics";
import { SITE_URL } from "@/components/SEO";

const clusters = [
  {
    name: "Implementação de IA",
    desc: "Como tirar IA do piloto e colocar em produção: mapa, blueprint, evals e governança.",
    articles: ["Como implementar IA na empresa", "Piloto de IA: como estruturar", "Erros de implementação de IA"],
  },
  {
    name: "Custos de IA",
    desc: "Faixas reais de investimento por tipo de projeto — e o custo de não implementar.",
    articles: ["Quanto custa um agente de IA no WhatsApp", "Quanto custa consultoria de IA", "Calculadora de ROI de IA"],
  },
  {
    name: "Consultoria de IA",
    desc: "Como escolher, o que cobrar, o que exigir — e quando consultoria é o formato errado.",
    articles: ["Consultoria de IA: como escolher", "Consultoria de IA vs. curso", "7 erros ao contratar consultoria de IA"],
  },
  {
    name: "Agentes de IA",
    desc: "O que são, quanto custam e como sair do piloto com qualidade medida.",
    articles: ["Agentes de IA vs. automação RPA", "Agentes de IA e LGPD", "Agentes de IA para atendimento"],
  },
  {
    name: "Automação com IA",
    desc: "Processos, integrações com ERP/CRM e legado, e automação para pequenas empresas.",
    articles: ["Automação de processos com IA", "Integração de IA com ERP, CRM e legado", "Automação com IA para pequenas empresas"],
  },
  {
    name: "IA para gestores",
    desc: "Por onde começar, como justificar o investimento e qual modelo de gestão adotar.",
    articles: ["IA para gestores: por onde começar", "Modelo de gestão para IA", "Como justificar IA para a diretoria"],
  },
  {
    name: "IA para empresas",
    desc: "A jornada da empresa que quer IA executando trabalho — do checklist de prontidão ao retorno.",
    articles: ["Checklist: sua empresa está pronta para IA?", "IA para empresas com orçamento limitado", "Da experimentação à infraestrutura"],
  },
];

const artigos = [
  {
    id: "quanto-custa-implementar-ia-2026",
    cluster: "Custos de IA",
    title: "Quanto custa implementar IA em 2026: faixas reais por tipo de projeto",
    lede: "A pergunta mais feita e menos respondida do mercado. A resposta honesta depende de uma coisa: o que você chama de 'implementar'.",
    body: [
      "A maioria dos orçamentos de IA falha antes de começar porque compara coisas diferentes. Uma automação de um processo, um piloto com integração e uma plataforma corporativa não são três preços do mesmo produto — são três produtos diferentes.",
      "Automação pontual (um processo, sem integração profunda): R$ 5–15 mil. É o caso do atendimento de primeiro nível, da geração de propostas ou do backoffice de um departamento. Retorno típico em semanas, quando o processo foi bem escolhido.",
      "Piloto com integração (2–3 processos, conectado ao seu CRM ou ERP): R$ 30–120 mil. Aqui entram desenho de processo, evals, LGPD e treinamento do time. É a faixa em que a maioria das PMEs deveria começar quando o objetivo é resultado na operação, não aprendizado.",
      "Plataforma ou transformação multi-área: R$ 250 mil ou mais por ano. Faz sentido quando IA deixa de ser projeto e vira infraestrutura — com governança, comitê e relatório de ROI ao board.",
      "O que ninguém coloca na proposta: o custo de ferramentas e licenças (estimado antes de assinar, nunca depois), o custo do tempo do seu time e o custo de não implementar — as horas que a operação continua queimando enquanto você decide. Antes de comparar preços, compare o que está incluído: processo desenhado, KPI contratado e transferência para o seu time — ou só a licença.",
    ],
  },
  {
    id: "roi-de-agentes-de-ia",
    cluster: "Custos de IA",
    title: "ROI de agentes de IA: como calcular antes de investir",
    lede: "Agente de IA não se paga com 'ganho de produtividade'. Se paga com horas devolvidas à operação — e isso se mede antes de contratar.",
    body: [
      "A conta começa no processo, não na ferramenta. Primeiro, o baseline: quantas horas por semana o processo consome hoje, de quantas pessoas, a qual custo-hora. Sem esse número, qualquer ROI é ficção.",
      "Depois, a fração automatizável: nem todo o processo é padronizado o suficiente para a IA executar com qualidade. Mapeie o que é regra e repetição (automatizável) versus julgamento e exceção (humano). O ROI real vem da fração automatizável — não do processo inteiro.",
      "A fórmula: (horas da fração automatizável × custo-hora × 4,33 semanas) − (custo mensal de ferramentas + manutenção) = retorno mensal. Divida o investimento de implantação pelo retorno mensal e você tem o payback em meses.",
      "Três erros que inflam o ROI no papel: contar 100% do processo como automatizável; ignorar o custo de supervisão humana (o human-in-the-loop tem custo e deve ter); e esquecer o custo de erro — em processos onde erro custa caro, a avaliação sistemática (evals) é parte do investimento, não opcional.",
      "Se o payback calculado passa de 6 meses em uma PME, desconfie do escopo. Os melhores primeiros processos pagam a implantação em 4 a 12 semanas — e financiam os próximos.",
    ],
  },
  {
    id: "por-que-empresas-testam-ia-e-nao-veem-retorno",
    cluster: "Implementação de IA",
    title: "Os 5 motivos pelos quais empresas testam IA e não veem retorno",
    lede: "88% das empresas já usam IA em alguma função. Só 6% capturam valor de forma consistente (McKinsey, State of AI 2025). Os motivos se repetem — e nenhum deles é a ferramenta.",
    body: [
      "1. Começar pela ferramenta. Alguém viu uma demo, comprou licenças e rodou um piloto de apresentação. Sem mapa do processo, não existe automação — existe aposta. Processo antes de ferramenta, sempre.",
      "2. Uso individual que não vira rotina. O ChatGPT aberto o dia todo na tela de uma pessoa não muda a operação. Cada uso é um evento isolado: nada fica salvo, nada vira processo, ninguém mais usa do mesmo jeito. O ganho depende de alguém lembrar de usar.",
      "3. Piloto sem critério de aceite. 'Vamos testar' não é projeto. Sem baseline medido e KPI contratado antes do início, o piloto nunca termina — porque ninguém sabe dizer se funcionou.",
      "4. Ignorar o humano no loop. IA imposta de fora para dentro não sobrevive ao primeiro mês. Sem dono interno treinado e sem desenho de onde o humano decide, o sistema morre na primeira exceção.",
      "5. Piloto que nunca chega em produção. Demo impressiona; produção exige integração com legado, evals, LGPD e governança. O abismo entre os dois é onde morrem os projetos — e é exatamente o que um método de implementação existe para atravessar.",
      "O padrão por trás dos cinco: tratar IA como enfeite em vez de infraestrutura. Quem mede o trabalho antes de automatizar, pilota com trabalho real e transfere a operação para o time está entre os 6%.",
    ],
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Insights — IA que Trabalha",
  description:
    "Artigos de fundo de funil sobre implementação de IA, custos e ROI — sem hype.",
  url: `${SITE_URL}/insights`,
  author: { "@type": "Person", name: "Leonardo Vieira Pedrini", url: SITE_URL },
  blogPost: artigos.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.lede,
    url: `${SITE_URL}/insights#${a.id}`,
    author: { "@type": "Person", name: "Leonardo Vieira Pedrini" },
  })),
};

const Insights = () => (
  <PageLayout
    title="Insights — implementação de IA, custos e ROI, sem hype"
    description="Artigos de fundo de funil para quem decide: quanto custa implementar IA, como sair do piloto, onde a LGPD entra e como calcular retorno antes de investir."
    path="/insights"
    jsonLd={blogJsonLd}
  >
    {/* Hero */}
    <section className="border-b border-border">
      <div className="container py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Insights
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-foreground">
            IA que trabalha: implementação, custos e ROI — sem hype
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Artigos de fundo de funil para quem decide: quanto custa implementar, como sair do piloto,
            onde a LGPD entra, como calcular retorno antes de investir.
          </p>
        </div>
      </div>
    </section>

    {/* Artigos iniciais */}
    <section className="border-b border-border bg-card">
      <div className="container py-16 md:py-24">
        <SectionHeading
          eyebrow="Leituras essenciais"
          title="Comece por estes três"
          description="Os artigos que respondem o que todo decisor pergunta antes de investir em IA."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {artigos.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              onClick={() => trackEvent("cta_click", { cta_label: a.title, cta_destination: `#${a.id}`, cta_position: "featured_articles" })}
              className="group flex flex-col rounded-lg border border-border bg-background p-6 transition-shadow duration-200 hover:shadow-lg md:p-8"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{a.cluster}</span>
              <h3 className="mt-3 flex-1 font-display text-xl font-medium leading-snug text-foreground group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.lede}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Ler o artigo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Artigos na íntegra */}
    {artigos.map((a, idx) => (
      <article
        key={a.id}
        id={a.id}
        className={idx % 2 === 0 ? "border-b border-border" : "border-b border-border bg-card"}
      >
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{a.cluster}</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-medium leading-[1.1] text-foreground">
              {a.title}
            </h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-foreground/80">{a.lede}</p>
            <div className="mt-8 space-y-5">
              {a.body.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10 rounded-lg border border-primary/40 bg-cobre-soft/40 p-6">
              <p className="font-display text-lg font-medium text-foreground">
                Quer saber onde a sua empresa está nessa história?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                O AI Work Audit mede sua maturidade em 6 dimensões e devolve os 3 processos que você
                deveria automatizar primeiro. 8 minutos, gratuito.
              </p>
              <CTAButton
                to="/diagnostico"
                size="sm"
                className="mt-5"
                trackingParams={{ cta_position: "article_end", article: a.id }}
              >
                Fazer o AI Work Audit
              </CTAButton>
            </div>
          </div>
        </div>
      </article>
    ))}

    {/* Clusters */}
    <section className="border-b border-border">
      <div className="container py-16 md:py-24">
        <SectionHeading
          eyebrow="Temas"
          title="Aprofunde por tema"
          description="Sete trilhas de conteúdo em produção — novos artigos toda semana."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clusters.map((c) => (
            <div key={c.name} className="flex flex-col rounded-lg border border-border bg-card p-6 md:p-8">
              <h3 className="font-display text-xl font-medium text-foreground">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {c.articles.map((art) => (
                  <li key={art} className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                    <span className="leading-snug">{art}</span>
                    <span className="shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      em breve
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Card CTA no grid */}
          <div className="flex flex-col justify-between rounded-lg border border-primary/50 bg-cobre-soft/40 p-6 md:p-8">
            <div>
              <h3 className="font-display text-xl font-medium text-foreground">Receba antes de publicar</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Os artigos saem primeiro na newsletter IA que Trabalha — junto com um template e um
                número de ROI por semana.
              </p>
            </div>
            <Link
              to="/newsletter"
              onClick={() => trackEvent("cta_click", { cta_label: "Assinar a newsletter", cta_destination: "/newsletter", cta_position: "clusters_grid" })}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-cobre-dark"
            >
              Assinar gratuitamente
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* CTA newsletter */}
    <section className="bg-grafite text-papel">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium leading-[1.1] text-papel">
            O que ninguém te conta sobre implementar IA — toda semana, no seu e-mail.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-papel/65">
            Um processo real decomposto e automatizado, um template pronto e um número de ROI.
            Sem hype, sem ferramenta da semana.
          </p>
          <div className="mx-auto mt-10 max-w-xl rounded-lg bg-papel p-6 text-left text-foreground md:p-8">
            <NewsletterSignupForm source="insights_footer" />
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Insights;
