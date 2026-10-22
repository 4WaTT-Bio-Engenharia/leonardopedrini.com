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
    name: "Estratégia e método",
    desc: "Como decidir com hipótese, dado e teste, do estudo de viabilidade ao plano de crescimento.",
    articles: ["Como eu decido entre cinco empresas e uma agenda só", "Por que eu digo não para a maioria dos projetos", "Premissa errada mata plano bonito"],
  },
  {
    name: "Energia e engenharia",
    desc: "Resíduos, biogás, biometano e armazenamento: o que a engenharia resolve antes do financeiro.",
    articles: ["O risco é técnico antes de ser financeiro", "Estudo de viabilidade barato é o projeto mais caro", "Biogás queimando em flare é dinheiro virando fumaça"],
  },
  {
    name: "Liderança e operação",
    desc: "Decisões reais de fundador: time, indicadores e o que ninguém conta da rotina.",
    articles: ["O que ninguém conta sobre liderar cinco empresas", "Indicador que não é medido vira surpresa", "Como dou crédito ao time sem perder o comando"],
  },
  {
    name: "IA como ferramenta",
    desc: "Onde a tecnologia entra de verdade na operação: custos, retorno e o fim do piloto eterno.",
    articles: ["Os 5 motivos pelos quais empresas testam IA e não veem retorno", "Quanto custa implementar IA em 2026, de verdade", "ROI: como calcular antes de investir"],
  },
  {
    name: "Finanças e risco",
    desc: "CAPEX, payback e gestão de risco com premissa explícita. Número sem premissa é enfeite.",
    articles: ["Payback sem premissa não é payback", "Como eu leio um estudo de viabilidade em 20 minutos", "O downside que ninguém coloca no pitch"],
  },
  {
    name: "Negócio e crescimento",
    desc: "Estrutura que acompanha o tamanho: processo, gente e receita recorrente.",
    articles: ["Crescer sem processo é juntar dívida", "Receita recorrente muda a engenharia do negócio", "Quando vender mais é o problema errado"],
  },
];

const artigos = [
  {
    id: "quanto-custa-implementar-ia-2026",
    cluster: "IA como ferramenta",
    title: "Quanto custa implementar IA em 2026: faixas reais por tipo de projeto",
    lede: "A pergunta mais feita e menos respondida do mercado. A resposta honesta depende de uma coisa: o que você chama de 'implementar'.",
    body: [
      "A maioria dos orçamentos de IA falha antes de começar porque compara coisas diferentes. Uma automação de um processo, um piloto com integração e uma plataforma corporativa não são três preços do mesmo produto, são três produtos diferentes.",
      "Automação pontual (um processo, sem integração profunda): R$ 5–15 mil. É o caso do atendimento de primeiro nível, da geração de propostas ou do backoffice de um departamento. Retorno típico em semanas, quando o processo foi bem escolhido.",
      "Piloto com integração (2–3 processos, conectado ao seu CRM ou ERP): R$ 30–120 mil. Aqui entram desenho de processo, avaliação de qualidade, LGPD e treinamento do time. É a faixa em que a maioria das PMEs deveria começar quando o objetivo é resultado na operação, não aprendizado.",
      "Plataforma ou transformação multi-área: R$ 250 mil ou mais por ano. Faz sentido quando a tecnologia deixa de ser projeto e vira infraestrutura, com governança, comitê e relatório de retorno ao conselho.",
      "O que ninguém coloca na proposta: o custo de ferramentas e licenças (estimado antes de assinar, nunca depois), o custo do tempo do seu time e o custo de não implementar. Antes de comparar preços, compare o que está incluído: processo desenhado, indicador contratado e transferência para o seu time, ou só a licença.",
    ],
  },
  {
    id: "roi-de-agentes-de-ia",
    cluster: "IA como ferramenta",
    title: "ROI de automação: como calcular antes de investir",
    lede: "Automação não se paga com 'ganho de produtividade'. Se paga com horas devolvidas à operação, e isso se mede antes de contratar.",
    body: [
      "A conta começa no processo, não na ferramenta. Primeiro, o baseline: quantas horas por semana o processo consome hoje, de quantas pessoas, a qual custo-hora. Sem esse número, qualquer retorno é ficção.",
      "Depois, a fração automatizável: nem todo o processo é padronizado o suficiente para executar com qualidade por sistema. Mapeie o que é regra e repetição (automatizável) versus julgamento e exceção (humano). O retorno real vem da fração automatizável, não do processo inteiro.",
      "A fórmula: (horas da fração automatizável × custo-hora × 4,33 semanas) menos (custo mensal de ferramentas + manutenção) = retorno mensal. Divida o investimento de implantação pelo retorno mensal e você tem o payback em meses.",
      "Três erros que inflam o retorno no papel: contar 100% do processo como automatizável; ignorar o custo de supervisão humana; e esquecer o custo de erro. Em processos onde erro custa caro, a avaliação sistemática de qualidade é parte do investimento, não opcional.",
      "Se o payback calculado passa de 6 meses em uma PME, desconfie do escopo. Os melhores primeiros processos pagam a implantação em 4 a 12 semanas, e financiam os próximos.",
    ],
  },
  {
    id: "por-que-empresas-testam-ia-e-nao-veem-retorno",
    cluster: "IA como ferramenta",
    title: "Os 5 motivos pelos quais empresas testam IA e não veem retorno",
    lede: "88% das empresas já usam IA em alguma função. Só 6% capturam valor de forma consistente (McKinsey, State of AI 2025). Os motivos se repetem, e nenhum deles é a ferramenta.",
    body: [
      "1. Começar pela ferramenta. Alguém viu uma demo, comprou licenças e rodou um piloto de apresentação. Sem mapa do processo, não existe automação, existe aposta. Processo antes de ferramenta, sempre.",
      "2. Uso individual que não vira rotina. O ChatGPT aberto o dia todo na tela de uma pessoa não muda a operação. Cada uso é um evento isolado: nada fica salvo, nada vira processo, ninguém mais usa do mesmo jeito. O ganho depende de alguém lembrar de usar.",
      "3. Piloto sem critério de aceite. 'Vamos testar' não é projeto. Sem baseline medido e indicador contratado antes do início, o piloto nunca termina, porque ninguém sabe dizer se funcionou.",
      "4. Ignorar o humano no loop. Tecnologia imposta de fora para dentro não sobrevive ao primeiro mês. Sem dono interno treinado e sem desenho de onde o humano decide, o sistema morre na primeira exceção.",
      "5. Piloto que nunca chega em produção. Demo impressiona; produção exige integração com legado, avaliação de qualidade, LGPD e governança. O abismo entre os dois é onde morrem os projetos.",
      "O padrão por trás dos cinco: tratar IA como enfeite em vez de infraestrutura. Quem mede o trabalho antes de automatizar, pilota com trabalho real e transfere a operação para o time está entre os 6%.",
    ],
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Insights — Leonardo Pedrini",
  description:
    "Artigos sobre estratégia, energia, liderança e tecnologia aplicada a negócio. Sem hype.",
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
    title="Insights — estratégia, energia e negócio, sem hype"
    description="Artigos de Leonardo Pedrini sobre método, engenharia, liderança e tecnologia aplicada a negócio. Decisões reais, números reais."
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
            Estratégia, energia e negócio. Sem hype.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            O que eu aprendi operando cinco empresas e entregando mais de 200 projetos de
            engenharia. Escrito para quem decide, com premissa e número na mesa.
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
          description="Os artigos que respondem o que todo decisor pergunta antes de colocar tecnologia na operação."
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
                Quer aplicar isso no seu negócio?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A Sessão Estratégica é onde a conversa fica específica: até 2 horas comigo, e você sai
                com um plano objetivo para a sua realidade.
              </p>
              <CTAButton
                to="/consultoria"
                size="sm"
                className="mt-5"
                trackingParams={{ cta_position: "article_end", article: a.id }}
              >
                Agendar sessão estratégica
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
          description="Seis trilhas de conteúdo em produção. Novos artigos toda semana na newsletter."
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
                Os artigos saem primeiro na newsletter: uma decisão real de negócio por semana, com o
                que deu certo e o que deu errado depois.
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
            Uma decisão real de negócio, por semana, no seu e-mail
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-papel/65">
            O que eu medi, o que eu decidi e o que aconteceu depois. Escrito por quem funda e opera,
            não por quem só comenta.
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
