import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTASection from "@/components/conversion/CTASection";
import Reveal from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";

const casesProprios = [
  {
    id: "4watt",
    tag: "Empresa própria · verificado",
    title: "4WaTT Bio Engenharia",
    sector: "Bioenergia / engenharia",
    text: "Deeptech que projeta e constrói usinas que transformam resíduos em energia, com engenharia, automação e tecnologia proprietárias. É onde o padrão de processo desenhado e operação medida foi forjado — antes de virar método para clientes.",
  },
  {
    id: "4w-energia",
    tag: "Empresa própria · verificado",
    title: "4W Energia",
    sector: "Energia renovável por assinatura",
    text: "Cooperativa de energia 100% renovável por assinatura, com software próprio e operação regulada (Lei 14.300/22). Aplico nela o mesmo padrão que implanto em clientes: processo desenhado, sistema em produção, operação medida. Números internos serão publicados com metodologia e auditoria.",
  },
];

const casesDocumentacao = [
  {
    id: "juridico",
    tag: "Case em documentação",
    title: "Escritório de advocacia — setor elétrico",
    text: "Boutique jurídica com processos repetitivos de análise e elaboração de documentos. Projeto em estrutura C-A-R-G-A, em processo de autorização do cliente e auditoria de números. Publicação prevista com baseline, resultado em horas e R$, e evidência.",
  },
  {
    id: "servicos",
    tag: "Case em documentação",
    title: "Empresa de serviços — atendimento e backoffice",
    text: "Operação de serviços com alto volume de atendimento e rotinas administrativas manuais. Mesma estrutura: contexto, mapa do processo, blueprint, piloto, governança e resultado medido. Publicamos quando houver autorização e números auditados.",
  },
];

const estruturaCase = ["Contexto", "Mapa do processo", "Blueprint", "Piloto", "Governança", "Resultado medido"];

const Cases = () => (
  <PageLayout
    title="Cases de implementação de IA — resultados em R$"
    description="Implementações reais de IA com antes/depois e números auditáveis. Veja o que funciona em empresas brasileiras."
    path="/cases"
    flush
  >
    {/* Hero */}
    <section className="bg-navy-hero relative overflow-hidden text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative pb-24 pt-36 md:pb-32 md:pt-48">
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow text-cobre-light">
              <span className="h-px w-10 bg-cobre-light/70" />
              Cases
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Resultado com recibo: <span className="text-gradient-gold">o antes, o depois e o número</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-papel/65">
              Todo case aqui segue a mesma estrutura: o mapa do processo, o blueprint, o piloto, a
              governança e o resultado medido. Publicamos apenas o que podemos provar — por isso esta
              página cresce devagar e vale muito.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    {/* Estrutura padrão de case */}
    <section className="border-b border-border bg-papel-light">
      <div className="container py-16 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="eyebrow max-w-md text-aco-dark">
              Todo case publicado segue a estrutura C-A-R-G-A
            </p>
            <ol className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {estruturaCase.map((s, i) => (
                <li key={s} className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground/80">{s}</span>
                  {i < estruturaCase.length - 1 && <span className="text-cobre-dark" aria-hidden>→</span>}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Empresas próprias */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Onde o método nasceu"
            title="O que está rodando nas minhas próprias empresas"
            description="Aplico na 4WaTT e na 4W Energia o mesmo padrão que implanto em clientes: processo desenhado, sistema em produção, operação medida."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {casesProprios.map((c, i) => (
            <Reveal key={c.id} delay={i * 140} className="h-full">
              <article
                className="card-lux h-full p-9 md:p-11"
                onClick={() => trackEvent("case_view", { case_id: c.id, sector: c.sector })}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow text-medicao">{c.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-foreground">{c.title}</h3>
                <div className="mt-2 font-mono text-xs text-muted-foreground">{c.sector}</div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Cases em documentação */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Em documentação"
            title="Cases de clientes em processo de autorização e auditoria"
            description="Anonimizados por setor até que os números possam ser publicados com evidência. Sem nome, sem número não validado."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {casesDocumentacao.map((c, i) => (
            <Reveal key={c.id} delay={i * 140} className="h-full">
              <article
                className="h-full rounded-lg border border-dashed border-border bg-card p-9 transition-colors duration-500 ease-luxury hover:border-cobre/40 md:p-11"
                onClick={() => trackEvent("case_view", { case_id: c.id, sector: "anonimizado" })}
              >
                <span className="eyebrow text-aco-dark">{c.tag}</span>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{c.title}</h3>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Nota de integridade */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-lg border border-cobre/40 bg-cobre-soft/40 p-9 md:p-14">
            <div className="eyebrow text-cobre-dark">
              Padrão de evidência da marca
            </div>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground md:text-4xl">
              Por que não há dezenas de cases aqui?
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-foreground/85">
              Porque depoimento sem número é decoração, e número sem evidência é ficção. Cada case
              entra quando tem baseline, resultado e autorização. Se o seu projeto for o próximo, ele
              entra aqui — com os seus números auditados.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <CTASection
      title="Quero um diagnóstico como o destes cases"
      description="O AI Work Audit mede a maturidade da sua empresa em 6 dimensões e devolve os 3 processos que você deveria automatizar primeiro."
      ctaTo="/diagnostico"
      ctaLabel="Quero um diagnóstico como o destes cases"
      secondaryTo="/consultoria"
      secondaryLabel="Aplicar para consultoria"
    />
  </PageLayout>
);

export default Cases;
