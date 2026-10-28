import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ClipboardCheck,
  CircleDollarSign,
  FileCheck2,
  HardHat,
  Recycle,
  Settings,
  Sun,
  type LucideIcon,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import LeadCaptureForm from "@/components/conversion/LeadCaptureForm";
import Reveal from "@/components/motion/Reveal";
import { SITE_URL } from "@/components/SEO";
import { posts } from "@/data/posts";
import leonardoAbout from "@/assets/leonardo-about.jpg";
import leonardoSentado from "@/assets/leonardo-sentado.png";

const numeros = [
  { valor: "200+", label: "projetos de engenharia" },
  { valor: "2 GW+", label: "de potência somada em projetos" },
  { valor: "R$ 5 bi+", label: "em investimentos relacionados a projetos" },
];

type Area = {
  title: string;
  problema: string;
  contribuicao: string;
  icon: LucideIcon;
};

const areas: Area[] = [
  {
    title: "Energia e investimentos",
    problema: "Investir em energia sem entender consumo, custos e riscos pode comprometer o caixa.",
    contribuicao:
      "Ajudo a comparar alternativas, avaliar a viabilidade e planejar o investimento com dados da sua operação.",
    icon: CircleDollarSign,
  },
  {
    title: "Construção e implantação de usinas",
    problema: "Construir uma usina exige coordenar engenharia, prazos, fornecedores e investimento.",
    contribuicao:
      "Participo do planejamento e da coordenação para acompanhar as decisões técnicas, os custos e cada etapa da implantação.",
    icon: HardHat,
  },
  {
    title: "Energia solar e baterias",
    problema: "Gerar a própria energia pode parecer simples, mas o dimensionamento errado limita o resultado.",
    contribuicao:
      "Avalio sistemas solares e armazenamento de energia em baterias (BESS), considerando consumo, operação e investimento.",
    icon: Sun,
  },
  {
    title: "Biogás, biometano e resíduos",
    problema: "Dejetos e resíduos podem ter valor energético, mas cada propriedade exige uma análise diferente.",
    contribuicao:
      "Estudo o aproveitamento para biogás e biometano, da avaliação inicial ao planejamento do projeto.",
    icon: Recycle,
  },
  {
    title: "Otimização de processos",
    problema: "Retrabalho, paradas e desperdícios aumentam custos sem aparecerem com clareza na rotina.",
    contribuicao:
      "Ajudo a identificar gargalos, organizar atividades e acompanhar melhorias com indicadores.",
    icon: Settings,
  },
  {
    title: "Gestão de projetos",
    problema: "Projetos com muitos fornecedores e decisões podem perder prazo e controle de custos.",
    contribuicao:
      "Ajudo a planejar etapas, acompanhar riscos e coordenar o trabalho das equipes.",
    icon: ClipboardCheck,
  },
];

const estruturaCases = [
  { title: "Problema", text: "O contexto e a necessidade que deram origem ao trabalho." },
  { title: "Decisão", text: "As alternativas avaliadas e o caminho escolhido." },
  { title: "Participação", text: "O papel de Leonardo e das equipes envolvidas." },
  { title: "Condução", text: "As etapas do trabalho e as decisões de execução." },
  { title: "Resultados", text: "Somente dados e evidências autorizados para publicação." },
];

const etapas = [
  {
    title: "Entender o problema",
    text: "Converso sobre a necessidade, o momento da operação e o que precisa ser decidido.",
  },
  {
    title: "Analisar dados e condições reais",
    text: "Levanto informações de consumo, processo, local, custos e restrições.",
  },
  {
    title: "Avaliar alternativas e riscos",
    text: "Comparo caminhos possíveis, investimento, prazos e riscos.",
  },
  {
    title: "Planejar e acompanhar a execução",
    text: "Defino escopo, responsáveis e indicadores, e acompanho a execução contratada.",
  },
  {
    title: "Verificar os resultados",
    text: "Confiro o que foi entregue e os dados disponíveis para orientar próximos passos.",
  },
];

const empresas = [
  {
    name: "4WaTT",
    description: "Engenharia e projetos relacionados a resíduos, biogás, biometano e energia.",
    role: "Fundador e CEO",
    url: "https://www.4watt.tech",
  },
  {
    name: "4W Energia",
    description: "Atuação empresarial no setor de energia.",
    role: "Fundador",
    url: "https://www.4wenergia.com.br",
  },
  {
    name: "BESS4YOU",
    description: "Iniciativa relacionada ao armazenamento de energia em baterias.",
  },
  {
    name: "Carbon4you",
    description: "Iniciativa relacionada ao mercado de carbono.",
  },
  {
    name: "Traciona AI",
    description: "SaaS de gestão para pequenos negócios, com CRM, financeiro e marketing com IA integrada.",
    role: "Fundador",
    url: "https://www.tracionaai.com.br",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Leonardo Pedrini",
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leonardo Pedrini",
    url: SITE_URL,
    jobTitle: "Fundador e CEO da 4WaTT",
    description:
      "Engenheiro e empreendedor com atuação em projetos de energia, gestão e desenvolvimento de negócios.",
    worksFor: { "@type": "Organization", name: "4WaTT", url: "https://www.4watt.tech" },
    knowsAbout: [
      "Consultoria em energia",
      "Biogás e biometano",
      "Energia solar",
      "Armazenamento de energia em baterias",
      "Gestão de projetos",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "4WaTT",
    url: "https://www.4watt.tech",
    founder: { "@type": "Person", name: "Leonardo Pedrini", url: SITE_URL },
    description: "Engenharia e projetos relacionados a resíduos, biogás, biometano e energia.",
  },
];

const Index = () => (
  <PageLayout
    title="Leonardo Pedrini | Consultoria e projetos de energia"
    description="Consultoria em energia, biogás, biometano, usinas, energia solar e BESS para empresas e produtores rurais. Avaliação de investimentos e gestão de projetos."
    path="/"
    jsonLd={jsonLd}
    flush
  >
    <section className="relative overflow-hidden bg-navy-hero" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative pb-20 pt-28 md:pb-28 md:pt-36 lg:pb-32 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                Leonardo Pedrini
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1
                id="hero-title"
                className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.06] tracking-[-0.035em] text-papel sm:text-5xl lg:text-6xl xl:text-[4.35rem]"
              >
                Engenharia e gestão para decisões mais seguras em projetos de energia.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-papel/70 md:text-lg">
                Ajudo empresas, investidores e produtores rurais a avaliar, planejar e conduzir projetos de energia, com atenção aos riscos, aos custos e aos resultados.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton to="/#contato" size="lg" trackingParams={{ cta_position: "home_hero" }}>
                  Conversar sobre um projeto
                </CTAButton>
                <CTAButton
                  to="/#empresas"
                  size="lg"
                  variant="outline"
                  withArrow={false}
                  className="border-papel/25 text-papel hover:border-cobre-light hover:text-cobre-light"
                  trackingParams={{ cta_position: "home_hero" }}
                >
                  Conhecer minhas empresas
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={460}>
              <p className="mt-9 border-t border-papel/10 pt-6 text-sm leading-relaxed text-papel/50">
                Energia e investimentos · Usinas · Solar e baterias · Biogás e biometano · Gestão de projetos
              </p>
            </Reveal>
          </div>
          <Reveal delay={300} y={36} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:ml-auto">
              <div className="absolute -inset-3 rounded-xl border border-cobre/25" aria-hidden />
              <div className="absolute -bottom-5 -left-5 h-28 w-28 border-b border-l border-cobre/45" aria-hidden />
              <img
                src={leonardoAbout}
                alt="Leonardo Pedrini, engenheiro e fundador da 4WaTT"
                className="relative aspect-[4/5] w-full rounded-lg border border-papel/15 object-cover object-center shadow-premium"
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    <section className="border-b border-border bg-papel-light" aria-labelledby="numeros-title">
      <div className="container py-16 md:py-20">
        <Reveal>
          <h2 id="numeros-title" className="eyebrow text-cobre-dark">
            <span className="h-px w-10 bg-cobre-dark/60" />
            Experiência em números
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0">
          {numeros.map((numero, index) => (
            <Reveal
              key={numero.label}
              delay={index * 100}
              className={index > 0 ? "md:border-l md:border-border md:pl-10" : undefined}
            >
              <div className="font-mono text-4xl font-semibold tracking-[-0.035em] text-foreground md:text-5xl">
                {numero.valor}
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{numero.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={240}>
          <p className="mt-10 max-w-4xl border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            Estes indicadores se referem a projetos conduzidos por equipes e empresas das quais Leonardo participou. Não representam realizações exclusivamente pessoais e estão sujeitos à validação final de escopo antes da publicação.
          </p>
        </Reveal>
      </div>
    </section>

    <section id="atuacao" className="scroll-mt-20 border-b border-border" aria-labelledby="atuacao-title">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Como posso ajudar"
            title="Onde posso ajudar no seu projeto"
            description="Antes de investir em uma usina ou em um sistema de energia, é importante entender quanto custa, como funciona e se faz sentido para sua operação."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={Math.min(index * 90, 360)} className="h-full">
              <article className="card-lux flex h-full flex-col p-8">
                <area.icon className="h-7 w-7 text-cobre-dark" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-6 font-display text-xl font-bold leading-snug tracking-[-0.015em] text-foreground">
                  {area.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-foreground/80">{area.problema}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                  {area.contribuicao}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section
      id="projetos"
      className="relative scroll-mt-20 overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel"
      aria-labelledby="projetos-title"
    >
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Portfólio"
            tone="dark"
            title="Projetos e experiências"
            description="Estou preparando estudos de caso com informações autorizadas e resultados que possam ser comprovados. Nenhum projeto será publicado sem essa validação."
          />
        </Reveal>
        <Reveal delay={140}>
          <article className="mt-14 rounded-lg border border-papel/15 bg-papel/[0.035] p-8 backdrop-blur-sm md:p-10">
            <div className="flex items-start gap-4">
              <FileCheck2 className="mt-1 h-6 w-6 shrink-0 text-cobre-light" strokeWidth={1.5} aria-hidden />
              <div>
                <h3 className="font-display text-2xl font-bold text-papel">Estudos de caso em preparação</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-papel/60">
                  Cada publicação seguirá esta estrutura para deixar claro o problema, as decisões e a participação de todos os envolvidos.
                </p>
              </div>
            </div>
            <div className="mt-9 grid gap-px overflow-hidden rounded-md border border-papel/10 bg-papel/10 sm:grid-cols-2 lg:grid-cols-5">
              {estruturaCases.map((item, index) => (
                <div key={item.title} className="bg-grafite p-5">
                  <span className="font-mono text-xs text-cobre-light">{String(index + 1).padStart(2, "0")}</span>
                  <h4 className="mt-4 font-display text-base font-bold text-papel">{item.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-papel/50">{item.text}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>

    <section className="border-b border-border" aria-labelledby="metodo-title">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Minha forma de trabalhar"
            title="Como trabalho"
            description="Um processo simples para entender o contexto, comparar caminhos e acompanhar o trabalho com responsabilidade."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {etapas.map((etapa, index) => (
            <Reveal key={etapa.title} delay={index * 90} className="h-full">
              <article className="h-full bg-card p-7">
                <span className="font-mono text-sm font-semibold text-cobre-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">{etapa.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{etapa.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            As etapas e a profundidade de cada análise dependem do tipo de projeto contratado.
          </p>
        </Reveal>
      </div>
    </section>

    <section id="sobre" className="scroll-mt-20 border-b border-border bg-secondary/40" aria-labelledby="sobre-title">
      <div className="container py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rounded-xl border border-cobre/30" aria-hidden />
              <img
                src={leonardoSentado}
                alt="Leonardo Pedrini em um ambiente de trabalho"
                className="relative aspect-[4/5] w-full rounded-lg border border-border object-cover object-center shadow-soft"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow="Sobre mim"
                title="Engenharia com visão de negócio e trabalho em equipe"
              />
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/80 md:text-lg">
                <p>
                  Minha formação é em engenharia mecânica e engenharia de energia. Ao longo da minha trajetória, trabalhei com projetos industriais, energia e gestão. Essas experiências me ensinaram a olhar para a engenharia também pelo lado do negócio.
                </p>
                <p>
                  Hoje, além de atuar tecnicamente, participo da gestão de empresas e de projetos que exigem planejamento, boas decisões e trabalho em equipe.
                </p>
                <p>
                  Gosto de entender o problema antes de propor uma solução. É dessa forma que procuro conduzir meu trabalho, com dados, conversa franca e responsabilidade sobre cada etapa.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    <section id="empresas" className="scroll-mt-20 border-b border-border" aria-labelledby="empresas-title">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Minhas empresas"
            title="Empresas que fundei e negócios dos quais participo"
            description="Minha atuação empreendedora reúne energia, engenharia, tecnologia e gestão. Cada negócio tem seu próprio escopo e equipe."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {empresas.map((empresa, index) => (
            <Reveal key={empresa.name} delay={Math.min(index * 90, 360)} className="h-full">
              <article className="card-lux flex h-full flex-col p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{empresa.name}</h3>
                  {empresa.url && <ArrowUpRight className="h-5 w-5 shrink-0 text-cobre-dark" aria-hidden />}
                </div>
                {empresa.role && (
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-cobre-dark">
                    {empresa.role}
                  </p>
                )}
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{empresa.description}</p>
                {empresa.url && (
                  <a
                    href={empresa.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark transition-colors hover:text-foreground"
                    aria-label={`Visitar site da ${empresa.name} em nova aba`}
                  >
                    Visitar site
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
          <Reveal delay={360} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-lg border border-cobre/35 bg-cobre-soft/45 p-8">
              <div>
                <p className="eyebrow text-cobre-dark">Conversa inicial</p>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">Não sabe por onde começar?</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Conte o momento da sua operação e o que precisa decidir. Assim, conseguimos avaliar o caminho mais adequado.
                </p>
              </div>
              <Link
                to="/#contato"
                className="group mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark hover:text-foreground"
              >
                Falar sobre meu projeto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="border-b border-border bg-secondary/40" aria-labelledby="blog-title">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Blog"
            title="Experiências e análises para decisões melhores"
            description="Um espaço para explicar temas de energia e gestão com exemplos, dados e linguagem simples."
          />
        </Reveal>
        {posts.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post, index) => (
              <Reveal key={post.slug} delay={index * 100} className="h-full">
                <Link to={`/blog/${post.slug}`} className="card-lux group flex h-full flex-col p-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cobre-dark">
                    {post.category}
                  </span>
                  <h3 className="mt-5 flex-1 font-display text-xl font-bold leading-snug text-foreground group-hover:text-cobre-dark">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark">
                    Ler artigo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={140}>
            <div className="mt-12 flex flex-col items-start gap-7 rounded-lg border border-border bg-card p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="flex max-w-3xl items-start gap-5">
                <BookOpen className="mt-1 h-7 w-7 shrink-0 text-cobre-dark" strokeWidth={1.5} aria-hidden />
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Conteúdo em preparação</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Em breve, artigos sobre energia, biogás, solar e gestão de projetos.
                  </p>
                </div>
              </div>
              <CTAButton to="/blog" variant="outline" className="shrink-0" trackingParams={{ cta_position: "home_blog" }}>
                Visitar o blog
              </CTAButton>
            </div>
          </Reveal>
        )}
      </div>
    </section>

    <section
      id="contato"
      className="relative scroll-mt-20 overflow-hidden bg-navy-hero text-papel"
      aria-labelledby="contato-title"
    >
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-24 md:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="eyebrow text-cobre-light">
              <span className="h-px w-10 bg-cobre-light/70" />
              Contato
            </div>
            <h2
              id="contato-title"
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.025em] text-papel md:text-5xl"
            >
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-papel/65 md:text-lg">
              Se você está pensando em investir em energia, construir uma usina ou melhorar um processo, pode me contar um pouco sobre o que precisa. Assim, conseguimos entender se posso ajudar e qual seria o melhor caminho.
            </p>
            <p className="mt-8 max-w-xl border-l border-cobre/60 pl-5 text-sm leading-relaxed text-papel/55">
              Preencha apenas seus dados de contato. O primeiro passo é entender o contexto, sem compromisso e sem promessas antes da análise.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="rounded-lg border border-papel/15 bg-papel-light p-7 text-foreground shadow-premium md:p-9">
              <h3 className="font-display text-xl font-bold">Conte como posso ajudar</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Deixe seus dados para iniciarmos a conversa sobre o projeto.
              </p>
              <LeadCaptureForm
                source="home_contato"
                submitLabel="Quero conversar sobre meu projeto"
                objective="Conversa sobre projeto de energia"
                showCargo={false}
                showEmpresa={false}
                className="mt-7"
              />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
    </section>
  </PageLayout>
);

export default Index;
