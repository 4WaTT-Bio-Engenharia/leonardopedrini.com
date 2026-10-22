import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTASection from "@/components/conversion/CTASection";
import Reveal from "@/components/motion/Reveal";
import LogoStrip from "@/components/sections/LogoStrip";
import CaseCard from "@/components/sections/CaseCard";
import { cases } from "@/data/cases";

const casesProprios = cases.filter((c) => c.owned);
const casesClientes = cases.filter((c) => !c.owned);

const estruturaCase = ["Contexto", "Diagnóstico", "Desenho", "Execução", "Medição", "Resultado"];


const Cases = () => (
  <PageLayout
    title="Cases — projetos com resultado em número"
    description="Projetos de engenharia, estratégia e tecnologia nas empresas de Leonardo Pedrini e em clientes. Antes, depois e número."
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
              governança e o resultado medido. Publicamos apenas o que podemos provar. Por isso esta
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
              Todo case publicado segue o mesmo funil: do contexto ao resultado medido
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

    {/* Faixa de logos */}
    <LogoStrip label="Empresas e operações onde o método foi aplicado" />

    {/* Empresas próprias */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Onde o método nasceu"
            title="O que está rodando nas minhas próprias empresas"
            description="Aplico na 4WaTT e na 4W Energia o mesmo padrão que levo para clientes: problema mapeado, decisão com dado, execução medida."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {casesProprios.map((c, i) => (
            <Reveal key={c.id} delay={i * 140} className="h-full">
              <CaseCard item={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Projetos em clientes */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos executados"
            title="Onde apliquei o método fora de casa"
            description="Escopo do trabalho executado em operações de terceiros — jurídico em setores regulados e indústria. Números auditados são publicados apenas com evidência e autorização."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {casesClientes.map((c, i) => (
            <Reveal key={c.id} delay={i * 140} className="h-full">
              <CaseCard item={c} />
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
              entra aqui, com os seus números auditados.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <CTASection
      title="Quero esse padrão no meu projeto"
      description="Conte o contexto. Se for engenharia de energia, a conversa vai para a 4WaTT. Se for estratégia, a gente começa pela Sessão Estratégica."
      ctaTo="/consultoria"
      ctaLabel="Agendar sessão estratégica"
      secondaryTo="/empresas"
      secondaryLabel="Conhecer o ecossistema"
    />
  </PageLayout>
);

export default Cases;
