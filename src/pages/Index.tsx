import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import CTASection from "@/components/conversion/CTASection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import LogoStrip from "@/components/sections/LogoStrip";
import CaseCard from "@/components/sections/CaseCard";
import { cases } from "@/data/cases";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import TiltCard from "@/components/motion/TiltCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import { trackEvent } from "@/lib/analytics";
import { SITE_URL } from "@/components/SEO";
import leonardoHero from "@/assets/leonardo-terno-preto.jpg";
import leonardoBlazer from "@/assets/leonardo-blazer.jpg";

const credibilityItems = [
  { value: "CEO", label: "da 4WaTT Bio Engenharia", accent: false },
  { value: "Fundador", label: "de 5 empresas em operação", accent: false },
  { value: "+200", label: "projetos de engenharia entregues", accent: true },
  { value: "+2 GW", label: "de potência somada em projetos", accent: true },
  { value: "+R$ 5 bi", label: "em CAPEX conduzidos", accent: true },
];

const trajetoria = [
  {
    name: "Chão de fábrica",
    text: "Comecei como jovem aprendiz na Ford e virei torneiro CNC. Aprendi cedo que processo se mede, ou não existe. Essa lição nunca saiu de mim.",
  },
  {
    name: "Multinacional",
    text: "Supply chain na Electrolux, com Lean, VSM e DMAIC na operação real. Duas menções honrosas internacionais. Foi lá que aprendi método antes de opinião.",
    quote: "Processo se mede, ou não existe.",
  },
  {
    name: "Fundador",
    text: "Sai da engenharia de multinacional para construir o que eu acreditava: primeiro a 4WaTT, depois um ecossistema inteiro de empresas de energia e tecnologia.",
  },
];

const numeros = [
  { valor: 200, prefix: "+", suffix: "", label: "projetos de engenharia entregues" },
  { valor: 2, prefix: "+", suffix: " GW", label: "de potência somada em projetos" },
  { valor: 5, prefix: "+R$ ", suffix: " bi", label: "em CAPEX conduzidos" },
  { valor: 5, prefix: "", suffix: "", label: "empresas fundadas e em operação" },
];

const crencas = [
  "Ser CEO de empresa já iniciada é jogar o jogo com o manual do lado. O mínimo de um bom trabalho é manter a empresa crescendo.",
  "Empresa sem risco não existe. A pergunta certa é se o risco está sendo medido e administrado.",
  "Estudo de viabilidade barato é o projeto mais caro que existe.",
  "O risco de um projeto é técnico antes de ser financeiro.",
  "Dizer não a um projeto ruim também é engenharia.",
  "Não existe projeto de prateleira.",
  "Biogás queimando em flare é dinheiro virando fumaça.",
];

const metodo = [
  {
    letter: "H",
    name: "Hipótese",
    desc: "Toda decisão começa como hipótese explícita, com premissa clara. Se a premissa está errada, o plano inteiro cai. Melhor descobrir isso no papel do que em campo.",
  },
  {
    letter: "D",
    name: "Dado",
    desc: "Antes de decidir, eu meço. Tempo, custo, fila, retrabalho. Opinião disputa espaço em reunião. Dado não disputa, ele decide.",
  },
  {
    letter: "T",
    name: "Teste",
    desc: "Nada escala sem prova. Piloto controlado, critério de aceite objetivo, erro classificado por causa. Escalar por entusiasmo é o jeito mais caro de errar.",
  },
  {
    letter: "D",
    name: "Decisão",
    desc: "Com evidência na mesa, decido rápido e assumo a decisão. Incluindo decidir não avançar, quando o número não fecha.",
  },
];

const ecossistema = [
  {
    name: "4WaTT Bio Engenharia",
    text: "Engenharia de resíduos, biogás e biometano. Projetos complexos de alto valor, onde o risco é técnico antes de ser financeiro. É a empresa principal do ecossistema.",
    link: "https://www.4watt.tech",
    linkLabel: "www.4watt.tech",
  },
  {
    name: "4W Energia",
    text: "Energia renovável com modelo de negócio recorrente. Software, operação regulada e resultado que aparece na fatura do cliente.",
  },
  {
    name: "BESS4YOU",
    text: "Armazenamento de energia em baterias. A resposta técnica para um problema que só vai crescer: energia limpa que precisa chegar na hora certa.",
  },
  {
    name: "Carbon4you",
    text: "Créditos de carbono com lastro real de projeto. Onde engenharia de resíduos encontra mercado de carbono.",
  },
  {
    name: "Traciona AI",
    text: "Inteligência artificial, software e automação aplicados à operação real do ecossistema. Uso IA e programação no meu dia a dia de gestão como ferramenta do líder. Não como promessa.",
  },
];

const caminhos = [
  {
    name: "Sessão Estratégica",
    price: "R$ 2.500",
    desc: "Até 2 horas comigo, online ou presencial em Goiânia. Você traz o problema, eu trago o método. Sai da conversa com um plano objetivo para a sua realidade.",
    cta: "Ver como funciona",
    to: "/consultoria",
  },
  {
    name: "Consultoria de estratégia",
    price: "sob proposta",
    desc: "Projetos com escopo, prazo e número. Estratégia que não para no slide: desenho, execução e medição, do estudo de viabilidade à operação.",
    cta: "Conversar sobre o projeto",
    to: "/consultoria",
  },
  {
    name: "Conselho e advisory",
    price: "mensal",
    desc: "Reuniões mensais de diretoria com alguém que funda e opera empresas de verdade. Perguntas difíceis na mesa antes que virem problema no caixa.",
    cta: "Entender o formato",
    to: "/consultoria",
  },
  {
    name: "Engenharia 4WaTT",
    price: "projetos",
    desc: "Resíduos, biogás e biometano com garantia técnica. Estudo de viabilidade sério, porque estudo barato é o projeto mais caro que existe.",
    cta: "Conhecer a 4WaTT",
    to: "https://www.4watt.tech",
  },
];

const reconhecimentos = [
  {
    quote: "Tenho um projeto grande na mesa e ninguém interno para validar se a engenharia fecha.",
    text: "O risco é técnico antes de ser financeiro. Quem investe sem garantia técnica está apostando, não investindo.",
    cta: "Conhecer a 4WaTT",
    to: "https://www.4watt.tech",
  },
  {
    quote: "Minha empresa cresceu e a estrutura não acompanhou.",
    text: "Crescer sem processo é juntar dívida que cobra juros. A consultoria desenha a estrutura que o tamanho novo exige.",
    cta: "Ver a consultoria de estratégia",
    to: "/consultoria",
  },
  {
    quote: "Sinto que decido no escuro, sem dados.",
    text: "Decisão sem dado é opinião com cargo. A Sessão Estratégica começa medindo o que hoje ninguém mede.",
    cta: "Agendar uma sessão",
    to: "/consultoria",
  },
  {
    quote: "O conselho precisa de alguém que já fundou e operou empresa de verdade.",
    text: "Teoria de sala de aula não sobrevive ao caixa. Advisory com quem responde por resultado todo mês.",
    cta: "Entender o advisory",
    to: "/consultoria",
  },
];

const insights = [
  { tag: "Estratégia", title: "Por que eu digo não para a maioria dos projetos que me procuram" },
  { tag: "Energia", title: "O risco é técnico antes de ser financeiro: o que isso muda no seu investimento" },
  { tag: "Liderança", title: "Como eu decido entre cinco empresas e uma agenda só" },
  { tag: "Negócio", title: "Estudo de viabilidade barato é o projeto mais caro que existe" },
  { tag: "Energia", title: "Biogás queimando em flare é dinheiro virando fumaça" },
  { tag: "Método", title: "Dado bom vale mais que opinião em reunião" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Leonardo Pedrini | Estratégia, engenharia e negócio",
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leonardo Vieira Pedrini",
    url: SITE_URL,
    jobTitle: "Engenheiro, fundador e CEO da 4WaTT",
    description:
      "Engenheiro, fundador e CEO da 4WaTT Bio Engenharia. Fundador da 4W Energia, da BESS4YOU, da Carbon4you e da Traciona AI. Atua como advisor, conselheiro e consultor de estratégia.",
  },
];

interface CarouselShellProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Classes de largura do slide responsivas, ex.: "md:basis-1/2 xl:basis-1/3" */
  itemClassName?: string;
  /** Fundo escuro (navy) ajusta cor dos controles */
  dark?: boolean;
}

/**
 * Carrossel da home: autoplay pausado no hover, setas e contador de posição.
 * O contador engaja mais do que dots genéricos e reforça o tom editorial do site.
 */
function CarouselShell<T>({ items, renderItem, itemClassName, dark }: CarouselShellProps<T>) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const hovering = useRef(false);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };
    sync();
    api.on("reInit", sync);
    api.on("select", sync);
    return () => {
      api.off("reInit", sync);
      api.off("select", sync);
    };
  }, [api]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) api?.scrollNext();
    }, 5500);
    return () => clearInterval(id);
  }, [api]);

  const navClass = cn(
    "static h-11 w-11 rounded-full transition-all duration-300",
    dark
      ? "border-papel/25 bg-transparent text-papel hover:border-cobre-light hover:bg-papel/10 hover:text-cobre-light"
      : "border-border bg-card text-foreground hover:border-cobre/50 hover:text-cobre-dark",
  );

  return (
    <div onPointerEnter={() => (hovering.current = true)} onPointerLeave={() => (hovering.current = false)}>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
        aria-label="Carrossel de conteúdo"
      >
        <CarouselContent className="-ml-6">
          {items.map((item, i) => (
            <CarouselItem key={i} className={cn("pl-6", itemClassName)}>
              <div className="h-full">{renderItem(item, i)}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CarouselPrevious className={navClass} />
            <CarouselNext className={navClass} />
          </div>
          <span
            className={cn(
              "font-mono text-xs tracking-[0.2em]",
              dark ? "text-papel/45" : "text-muted-foreground/70",
            )}
            aria-live="polite"
          >
            {String(current + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>
      </Carousel>
    </div>
  );
}

const Index = () => (
  <PageLayout
    title="Leonardo Pedrini | Estratégia, engenharia e negócio"
    description="Engenheiro, CEO da 4WaTT e fundador da 4W Energia, da BESS4YOU, da Carbon4you e da Traciona AI. Mais de 200 projetos, 2 GW de potência e R$ 5 bilhões em CAPEX. Advisor e consultor de estratégia para empresas e fundadores."
    path="/"
    jsonLd={jsonLd}
    flush
  >
    {/* 1. Hero imersivo navy */}
    <section className="bg-navy-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <span
        className="pointer-events-none absolute -right-6 top-14 select-none font-mono text-[11rem] font-bold leading-none text-papel/[0.035] md:-right-10 md:top-16 md:text-[15rem]"
        aria-hidden
      >
        01
      </span>
      <div className="container relative pb-16 pt-24 md:pb-24 md:pt-32">
        <Reveal>
          <div className="border-b border-papel/10 pb-6">
            <div className="eyebrow text-cobre-light">
              <span className="h-px w-10 bg-cobre-light/70" />
              Engenharia · Estratégia · Execução
            </div>
          </div>
        </Reveal>
        <div className="grid items-center gap-12 pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-papel sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Problema difícil vira negócio{" "}
                <span className="text-gradient-gold">
                  quando estratégia e execução têm o mesmo responsável.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-papel/65 md:text-lg">
                Sou Leonardo Pedrini. Engenheiro, CEO da 4WaTT Bio Engenharia e fundador de um
                ecossistema que inclui 4W Energia, BESS4YOU, Carbon4you e Traciona AI. Já entreguei
                mais de 200 projetos, somei mais de 2 GW de potência e conduzi mais de R$ 5 bilhões
                em CAPEX. Hoje ajudo fundadores e empresas a pensar e decidir com o mesmo rigor que
                uso nas minhas.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton
                  to="/consultoria"
                  size="lg"
                  trackingParams={{ cta_position: "home_hero" }}
                >
                  Agendar sessão estratégica
                </CTAButton>
                <CTAButton
                  to="/metodo"
                  size="lg"
                  variant="outline"
                  withArrow={false}
                  className="border-papel/25 text-papel hover:border-cobre-light hover:text-cobre-light"
                  trackingParams={{ cta_position: "home_hero" }}
                >
                  Conhecer meu método
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={460}>
              <p className="mt-6 text-sm text-papel/45">
                Até 2 horas, online ou presencial. Você sai com um plano objetivo, não com uma lista de
                ideias.
              </p>
            </Reveal>
          </div>
          <Reveal delay={500} y={36} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 rounded-xl border border-cobre/25" aria-hidden />
              <img
                src={leonardoHero}
                alt="Leonardo Vieira Pedrini, engenheiro, fundador e CEO da 4WaTT"
                className="relative w-full rounded-lg border border-papel/15 object-cover shadow-premium"
              />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    {/* Barra de credibilidade */}
    <div className="border-b border-border bg-papel-light">
      <div className="container py-12 md:py-16">
        <Reveal>
          <p className="eyebrow text-cobre-dark">
            <span className="h-px w-10 bg-cobre-dark/50" />
            Autoridade construída em campo
          </p>
        </Reveal>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {credibilityItems.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 90}
              className={cn("lg:px-8", i > 0 && "lg:border-l lg:border-border")}
            >
              <div
                className={cn(
                  "font-display text-4xl font-extrabold tracking-[-0.025em] md:text-5xl",
                  item.accent ? "text-cobre-dark" : "text-foreground",
                )}
              >
                {item.value}
              </div>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-aco-dark md:text-xs">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>

    {/* Faixa de logos: quem confia no trabalho */}
    <LogoStrip />

    {/* 2. Trajetória */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Quem assina"
            title="Eu não falo de estratégia por ter lido sobre estratégia. Falo porque respondo por resultado todo mês."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {trajetoria.map((e, i) => (
            <Reveal key={e.name} delay={i * 120} className="h-full">
              <article className="flex h-full flex-col bg-card p-9 transition-colors duration-500 ease-luxury hover:bg-papel-light md:p-11">
                <div className="font-mono text-[11px] text-cobre-dark">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-foreground">
                  {e.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{e.text}</p>
                {e.quote && (
                  <p className="mt-6 border-l-2 border-cobre pl-4 text-sm font-medium italic text-foreground/80">
                    “{e.quote}”
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Formação dupla em engenharia mecânica e engenharia de energia, dois mestrados, MBA em
            engenharia financeira e gestão de risco pela Columbia University, Six Sigma pela
            University of Georgia e ciência de dados pela University of Michigan. Eu estudo muito,
            sempre. Mas é em campo que método se prova.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 3. O problema */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="O problema" title="Sua empresa não precisa de mais uma opinião. Precisa de método." />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground/85">
              <p>
                Reunião cheia de opinião e vazia de dado. Projeto aprovado no entusiasmo e revisado no
                prejuízo. Crescimento que improvisa estrutura e descobre, tarde, que crescer sem
                processo é juntar dívida.
              </p>
              <p>
                Eu vi esse filme de perto por quinze anos, em multinacional e nas cinco empresas que
                fundei. A saída nunca foi mais gente na sala, nem mais slide. Foi medir antes de decidir,
                testar antes de escalar e assumir a decisão com o número na mesa.
              </p>
              <p>
                É isso que eu faço hoje com empresas e fundadores: aplico o mesmo método que uso nas
                minhas. Engenharia, gestão e tecnologia a serviço de uma coisa só, resultado.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-12 font-display text-3xl font-extrabold tracking-[-0.02em] text-cobre-dark md:text-4xl">
              Opinião é barata. Método é raro.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 4. Prova em números (navy) */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-20 md:py-24">
        <Reveal>
          <div className="eyebrow text-cobre-light">
            <span className="h-px w-10 bg-cobre-light/70" />
            A prova, em número
          </div>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {numeros.map((n, i) => (
            <Reveal key={n.label} delay={i * 100}>
              <div className="border-l border-papel/15 pl-6">
                <div className="font-mono text-5xl font-bold leading-none tracking-[-0.02em] text-papel md:text-6xl">
                  {n.prefix}
                  <CountUp to={n.valor} suffix={n.suffix} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-papel/55">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <p className="mt-12 text-xs text-papel/40">
            Acumulado da carreira de engenharia e fundação das empresas até hoje.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 5. Crenças */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="O que eu acredito"
            title="Algumas pessoas discordam. Tudo bem."
            description="Crenças que sustentam cada decisão que eu tomo como fundador e cada projeto que eu assino como engenheiro."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
          {crencas.map((c, i) => (
            <Reveal key={c} delay={Math.min(i * 80, 320)}>
              <div className="flex items-start gap-6 bg-card px-8 py-7 transition-colors duration-500 ease-luxury hover:bg-papel-light md:px-10">
                <span className="font-mono text-sm font-semibold text-cobre-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl font-bold leading-snug tracking-[-0.01em] text-foreground md:text-2xl">
                  {c}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 6. Método: pensar como cientista */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <span
        className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-mono text-[7rem] font-bold leading-none tracking-[0.05em] text-papel/[0.035] md:text-[10rem]"
        aria-hidden
      >
        MÉTODO
      </span>
      <div className="container relative py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Como eu penso"
            tone="dark"
            title="Pensar como cientista, decidir como empresário"
            description="O elo entre engenharia, gestão e tecnologia nas minhas empresas é um só: hipótese, dado, teste, decisão."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-papel/15 bg-papel/15 md:grid-cols-4">
          {metodo.map((s, i) => (
            <Reveal key={s.name} delay={i * 110} className="h-full">
              <article className="h-full bg-grafite p-8 transition-colors duration-500 ease-luxury hover:bg-grafite-700">
                <div className="font-display text-5xl font-extrabold tracking-[-0.02em] text-cobre">
                  {s.letter}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-papel">{s.name}</h3>
                <p className="mt-3.5 text-sm leading-relaxed text-papel/60">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <div className="mt-12">
            <CTAButton
              to="/metodo"
              variant="outline"
              className="border-papel/25 text-papel hover:border-cobre-light hover:text-cobre-light"
              trackingParams={{ cta_position: "home_metodo" }}
            >
              Ver o método em detalhe
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 7. Ecossistema de empresas */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Ecossistema"
            title="Cinco empresas, uma tese: engenharia é a garantia do investidor"
            description="Cada empresa nasceu de um problema real que eu vi de perto. Nenhuma nasceu de planilha de pitch."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {ecossistema.map((e, i) => (
            <Reveal key={e.name} delay={Math.min(i * 90, 360)} className="h-full">
              <article className="flex h-full flex-col bg-card p-9 transition-colors duration-500 ease-luxury hover:bg-papel-light">
                <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">
                  {e.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{e.text}</p>
                {e.link && (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("cta_click", {
                        cta_label: e.linkLabel,
                        cta_position: "home_ecossistema",
                        cta_destination: e.link,
                      })
                    }
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark transition-colors duration-300 hover:text-foreground"
                  >
                    {e.linkLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Eu não lidero essas empresas de camarote. Estou na operação, na decisão e no resultado.
            É esse padrão que levo para a mesa de quem trabalha comigo.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 8. Caminhos para trabalhar comigo (navy) */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Trabalhe comigo"
            tone="dark"
            title="Quatro formas de colocar esse método no seu negócio"
            description="Do encontro pontual à engenharia completa do seu projeto. Você entra pelo caminho que faz sentido hoje."
          />
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {caminhos.map((s, i) => {
              const inner = (
                <>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-xs text-cobre-light/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-sm text-cobre-light">{s.price}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.015em] text-papel transition-colors duration-300 group-hover:text-cobre-light">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-papel/55">{s.desc}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-light">
                    {s.cta}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </>
              );
              const cls =
                "group flex h-full flex-col rounded-lg border border-papel/12 bg-papel/[0.03] p-8 backdrop-blur-sm transition-all duration-500 ease-luxury hover:-translate-y-1 hover:border-cobre/50 hover:bg-papel/[0.05]";
              return s.to.startsWith("http") ? (
                <a
                  key={s.name}
                  href={s.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("product_view", { product_name: s.name, caminho: i })
                  }
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <Link
                  key={s.name}
                  to={s.to}
                  onClick={() =>
                    trackEvent("product_view", { product_name: s.name, caminho: i })
                  }
                  className={cls}
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-papel/55">
            Não sabe qual caminho é o seu? É exatamente para isso que a Sessão Estratégica existe.{" "}
            <Link
              to="/consultoria"
              onClick={() => trackEvent("cta_click", { cta_label: "sessao_via_caminhos", cta_position: "home_caminhos_footer" })}
              className="font-semibold text-cobre-light underline-offset-4 transition-colors hover:underline"
            >
              Começar por ela →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>

    {/* 9. Carrossel: cases */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Cases"
            title="Resultado em campo, não em slide de apresentação"
            description="Projetos de engenharia, estratégia e tecnologia entregues. Nas minhas empresas e em clientes."
          />
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-14">
            <CarouselShell
              items={cases}
              itemClassName="md:basis-1/2 xl:basis-1/3"
              renderItem={(c) => <CaseCard item={c} />}
            />
          </div>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-12">
            <CTAButton to="/cases" variant="outline" trackingParams={{ cta_position: "home_cases" }}>
              Ver todos os cases
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 10. Reconhecimentos */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading eyebrow="Se você se reconhece" title="Essas frases costumam chegar até mim" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reconhecimentos.map((icp, i) => {
            const cta = (
              <>
                {icp.cta}{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
              </>
            );
            return (
              <Reveal key={icp.quote} delay={i * 90} className="h-full">
                <article className="card-lux flex h-full flex-col p-9">
                  <blockquote className="font-display text-lg font-bold leading-snug tracking-[-0.01em] text-foreground">
                    “{icp.quote}”
                  </blockquote>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{icp.text}</p>
                  {icp.to.startsWith("http") ? (
                    <a
                      href={icp.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent("cta_click", {
                          cta_label: icp.cta,
                          cta_position: "home_reconhecimentos",
                          cta_destination: icp.to,
                        })
                      }
                      className="pressable group mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark transition-colors duration-300 hover:text-foreground"
                    >
                      {cta}
                    </a>
                  ) : (
                    <Link
                      to={icp.to}
                      onClick={() =>
                        trackEvent("cta_click", {
                          cta_label: icp.cta,
                          cta_position: "home_reconhecimentos",
                          cta_destination: icp.to,
                        })
                      }
                      className="pressable group mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark transition-colors duration-300 hover:text-foreground"
                    >
                      {cta}
                    </Link>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* 11. Leonardo */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl border border-cobre/30" aria-hidden />
              <img
                src={leonardoBlazer}
                alt="Leonardo Vieira Pedrini, engenheiro e CEO da 4WaTT"
                className="relative w-full rounded-lg border border-border object-cover shadow-soft"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-3">
            <Reveal>
              <SectionHeading eyebrow="Quem pensa e executa" title="Leonardo Vieira Pedrini" />
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 space-y-6 text-lg leading-relaxed text-foreground/85">
                <p>
                  Meu dia começa com oração, leitura e academia. Depois, operação: cinco empresas, um
                  time de gente acima da média e decisões que não esperam segunda-feira.
                </p>
                <p>
                  Sou autista nível 1. Penso melhor quando a informação é visual, literal e
                  estruturada. Talvez por isso o método tenha virado minha assinatura: tudo o que eu
                  decido passa por hipótese, dado e teste.
                </p>
                <p>
                  Não resolvo tudo sozinho e não finjo que resolvo.{" "}
                  <strong className="text-foreground">
                    Monto a estratégia com as pessoas certas e dou crédito ao time quando o trabalho é
                    dele.
                  </strong>
                </p>
                <p>Se a sua empresa precisa de pensamento assim na mesa, é isso que eu vendo.</p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-11">
                <CTAButton to="/sobre" variant="outline" trackingParams={{ cta_position: "home_sobre" }}>
                  Conhecer minha trajetória
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>

    {/* 12. Carrossel: insights */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Para acompanhar"
            title="Conteúdo de quem opera, não de quem só opina"
            description="Decisões reais, números reais, erros reais. Aqui, uma amostra do que você encontra no Insights."
          />
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-14">
            <CarouselShell
              items={insights}
              itemClassName="sm:basis-1/2 xl:basis-1/3"
              renderItem={(post) => (
                <Link
                  to="/insights"
                  onClick={() =>
                    trackEvent("cta_click", {
                      cta_label: post.title,
                      cta_position: "home_insights",
                      cta_destination: "/insights",
                    })
                  }
                  className="card-lux pressable group flex h-full flex-col p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-cobre-dark">{post.tag}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
                      Insights
                    </span>
                  </div>
                  <h3 className="mt-5 flex-1 font-display text-2xl font-bold leading-snug tracking-[-0.015em] text-foreground transition-colors duration-300 group-hover:text-cobre-dark">
                    {post.title}
                  </h3>
                  <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark">
                    Ler no Insights{" "}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
                  </span>
                </Link>
              )}
            />
          </div>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-12">
            <CTAButton to="/insights" variant="outline" trackingParams={{ cta_position: "home_insights_footer" }}>
              Ler todos os artigos
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 13. Newsletter */}
    <NewsletterSection />

    {/* 14. CTA final */}
    <CTASection
      title="Três meses na mesma dúvida custam mais que duas horas de método."
      description="A Sessão Estratégica é o ponto de entrada: até 2 horas comigo, online ou presencial em Goiânia. Você traz o problema, eu trago o método. Sai com um plano objetivo para a sua realidade."
      ctaTo="/consultoria"
      ctaLabel="Agendar sessão estratégica"
      secondaryTo="/contato"
      secondaryLabel="Prefiro escrever primeiro"
    />
    <div className="bg-grafite-900 pb-12 pt-2 text-center">
      <p className="font-display text-lg font-semibold italic text-papel/40">Opinião é barata. Método é raro.</p>
    </div>
  </PageLayout>
);

export default Index;
