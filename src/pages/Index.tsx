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
import leonardoAbout from "@/assets/lvpedrini_ai.jpg";

const credibilityItems = [
  "Engenheiro",
  "Fundador da 4WaTT Bio Engenharia",
  "Fundador e CEO da 4W Energia",
  "Lean/VSM/DMAIC na operação de multinacional",
  "Conselho consultivo APEEL",
];

const empresas = [
  {
    name: "4WaTT Bio Engenharia",
    text: "Deeptech que projeta e constrói usinas que transformam resíduos em energia, com engenharia e automação proprietárias.",
    quote: "Engenharia de resultado. Sem atalhos, sem achismo.",
  },
  {
    name: "4W Energia",
    text: "Cooperativa de energia 100% renovável por assinatura. Software, operação regulada e recorrência: tecnologia a serviço de resultado na fatura do cliente.",
  },
  {
    name: "Traciona AI",
    text: "A empresa onde aplico, todos os dias, a tese que defendo: IA não é para responder. É para executar trabalho.",
  },
];

const carga = [
  {
    letter: "C",
    name: "Cartografar",
    desc: "Mapear o trabalho como ele é: tempos, filas, retrabalho, volume. Sem mapa, automação vira aposta.",
  },
  {
    letter: "A",
    name: "Arquitetar",
    desc: "Desenhar o processo futuro: o que a IA executa, onde o humano decide e qual KPI fica contratado. Escopo fechado antes de qualquer build.",
  },
  {
    letter: "R",
    name: "Rodar",
    desc: "Piloto em produção controlada, com trabalho real, nunca demo. Qualidade medida por evals desde o primeiro dia.",
  },
  {
    letter: "G",
    name: "Governar",
    desc: "Dono interno treinado, manual de operação e de exceções, LGPD e monitoramento. A operação precisa rodar sem mim, ou o projeto falhou.",
  },
  {
    letter: "A",
    name: "Ampliar",
    desc: "O que provou retorno vira roadmap de 12 meses. Um processo resolvido de cada vez, até virar vantagem estrutural.",
  },
];

const solucoes = [
  {
    name: "AI Work Audit",
    price: "gratuito",
    desc: "8 minutos, 14 perguntas. Você recebe seu nível de maturidade, os 3 processos candidatos à automação e o próximo passo recomendado.",
    cta: "Fazer o diagnóstico",
    to: "/diagnostico",
  },
  {
    name: "AI Work Starter Kit",
    price: "R$ 197",
    desc: "Seus primeiros 10 agentes de trabalho prontos, com guia de 15 minutos de instalação cada. Custa menos de 1 hora de consultor.",
    cta: "Instalar meus primeiros agentes",
    to: "/solucoes",
  },
  {
    name: "Formação IA que Trabalha",
    price: "R$ 1.997",
    desc: "6 semanas para sair com um processo real da sua empresa rodando em produção e o método para replicar nos demais.",
    cta: "Ver a formação",
    to: "/cursos",
  },
  {
    name: "AI Work Lab",
    price: "R$ 297/mês",
    desc: "O laboratório de implementação: todo mês uma automação ou agente novo em produção no seu negócio, com rituais, templates e office hours.",
    cta: "Entrar no laboratório",
    to: "/comunidade",
  },
  {
    name: "Imersão IA que Trabalha",
    price: "R$ 2.997",
    desc: "2 dias hands-on. Você sai com backlog priorizado, uma automação construída ao vivo e o plano de 90 dias. Turmas de 40 vagas.",
    cta: "Garantir minha vaga",
    to: "/imersao",
  },
  {
    name: "Mentoria AI Work",
    price: "R$ 9.997",
    desc: "12 semanas de implementação assistida em grupo: 3 processos em produção, com KPI contratado. 12 empresas por turma.",
    cta: "Aplicar para a próxima turma",
    to: "/consultoria",
  },
  {
    name: "AI Implementation Sprint",
    price: "R$ 45.000",
    desc: "90 dias para IA rodando como infraestrutura do seu negócio: de 4 a 6 frentes implantadas, equipe treinada, KPI contratado. 4 empresas por trimestre.",
    cta: "Aplicar para o próximo trimestre",
    to: "/consultoria",
  },
  {
    name: "Enterprise AI Transformation",
    price: "a partir de R$ 150.000/ano",
    desc: "Programa anual multi-área: estratégia, governança, squads e formação in-company.",
    cta: "Solicitar proposta executiva",
    to: "/empresas",
  },
];

const icps = [
  {
    quote: "Uso o ChatGPT todo dia e nada mudou na operação.",
    text: "Você virou o gargalo: tudo depende da sua memória. O diagnóstico mostra a saída, que é transformar uso em processo.",
    cta: "Fazer o AI Work Audit",
    to: "/diagnostico",
  },
  {
    quote: "A diretoria cobrou um plano de IA e eu preciso mostrar resultado.",
    text: "Você precisa de roadmap com pilotos priorizados e ROI estimado, não de mais um curso.",
    cta: "Ver como a mentoria funciona",
    to: "/consultoria",
  },
  {
    quote: "Vendo o que sei, mas só cobro pela hora.",
    text: "Seu método pode virar sistema: agentes treinados no seu acervo, com sigilo e qualidade medida.",
    cta: "Ver as soluções para especialistas",
    to: "/consultoria",
  },
  {
    quote: "Quero resultado na operação sem precisar virar expert em ferramenta.",
    text: "Você não compra tecnologia, compra número: KPI contratado, prazo fechado e equipe treinada.",
    cta: "Ver o Sprint de 90 dias",
    to: "/consultoria",
  },
  {
    quote: "Nossos pilotos de IA morrem no proof of concept.",
    text: "O gap está na integração com legado, nos evals, na LGPD e na governança. Produção, não apresentação.",
    cta: "Ver o programa enterprise",
    to: "/empresas",
  },
];

const insights = [
  { tag: "Custos", title: "Quanto custa implementar IA em 2026, de verdade" },
  { tag: "ROI", title: "ROI de agentes de IA: como calcular antes de investir" },
  { tag: "Implementação", title: "Os 5 motivos pelos quais empresas testam IA e não veem retorno" },
  { tag: "Gestão", title: "O que muda na rotina do gestor quando a IA passa a executar" },
  { tag: "Receita", title: "Agentes comerciais: como recuperar lead que esfria no WhatsApp" },
  { tag: "Estratégia", title: "Diagnóstico antes da ferramenta: o mapa que vem antes da automação" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "L.V. Pedrini | IA que Trabalha",
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leonardo Vieira Pedrini",
    url: SITE_URL,
    jobTitle: "Engenheiro e implementador de IA",
    description:
      "Engenheiro, fundador da 4WaTT Bio Engenharia e da 4W Energia. Implanta IA como infraestrutura de trabalho em empresas reais.",
  },
];

/** Fluxo proprietário: Prompt → Workflow → Agente → Sistema, linha champagne animada. */
const flowNodes = ["Prompt", "Workflow", "Agente", "Sistema"];

const FlowVisual = () => (
  <div className="relative hidden lg:block" aria-hidden>
    <div className="absolute -inset-8 rounded-full bg-cobre/[0.06] blur-3xl" />
    <TiltCard
      strength={5}
      className="relative rounded-xl border border-papel/10 bg-papel/[0.03] p-7 backdrop-blur-md"
      style={{ boxShadow: "inset 0 1px 0 0 hsl(40 27% 96% / 0.08), var(--shadow-premium)" }}
    >
      <div className="eyebrow text-cobre-light/70">Do chat ao sistema</div>
      <div className="relative mt-8">
        <svg className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px overflow-visible" aria-hidden>
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100%"
            stroke="hsl(41 49% 59% / 0.55)"
            strokeWidth="1"
            strokeDasharray="4 24"
            className="animate-flow-dash"
          />
        </svg>
        <ol className="space-y-7">
          {flowNodes.map((node, i) => (
            <Reveal
              key={node}
              delay={i * 100}
              y={10}
              as="li"
              className="relative flex items-center gap-5 pl-0"
            >
              <span
                className="animate-node-pulse relative z-10 h-[15px] w-[15px] rounded-full border border-cobre-light/70 bg-grafite-900"
                style={{ animationDelay: `${i * 0.8}s`, boxShadow: "0 0 0 4px hsl(41 49% 59% / 0.12)" }}
              />
              <span className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-cobre-light/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-bold tracking-[-0.01em] text-papel">{node}</span>
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
      <div className="mt-8 border-t border-papel/10 pt-5">
        <p className="text-xs leading-relaxed text-papel/45">
          Cada degrau tira a IA da sua memória e coloca no processo. No topo, ela vira infraestrutura:
          medida, governada, sua.
        </p>
      </div>
    </TiltCard>
  </div>
);

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
    title="Leonardo Pedrini | IA que trabalha pela sua empresa"
    description="Pare de conversar com a IA. Implementação de IA com resultado mensurável para empresas: diagnóstico, agentes e consultoria. Faça o AI Work Audit."
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
              IA que trabalha
            </div>
          </div>
        </Reveal>
        <div className="grid items-center gap-12 pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-papel sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Pare de conversar com a IA.{" "}
                <span className="text-gradient-gold">Coloque a IA para trabalhar.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-papel/65 md:text-lg">
                Você já testou o ChatGPT, talvez tenha feito curso, e a operação segue igual. O problema
                não é a ferramenta, é a falta de processo. Eu desenho esse processo e construo workflows
                e agentes que executam trabalho de verdade, com retorno medido em horas e em reais. Sou
                engenheiro, fundei a 4WaTT e a 4W Energia, e implanto IA dentro de operações reais.
                Inclusive nas minhas.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAButton
                  to="/diagnostico"
                  size="lg"
                  trackingEvent="diagnostic_start"
                  trackingParams={{ cta_position: "home_hero" }}
                >
                  Fazer o AI Work Audit gratuito
                </CTAButton>
                <CTAButton
                  to="/metodo"
                  size="lg"
                  variant="outline"
                  withArrow={false}
                  className="border-papel/25 text-papel hover:border-cobre-light hover:text-cobre-light"
                  trackingParams={{ cta_position: "home_hero" }}
                >
                  Conhecer o Método CARGA
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={460}>
              <p className="mt-6 text-sm text-papel/45">
                8 minutos. Você sai sabendo seu nível de maturidade e quais processos automatizar primeiro.
              </p>
            </Reveal>
          </div>
          <Reveal delay={500} y={36} className="lg:col-span-5">
            <FlowVisual />
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    {/* Barra de credibilidade */}
    <div className="border-b border-border bg-papel-light">
      <div className="container py-7">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-center">
            {credibilityItems.map((item, i) => (
              <li key={item} className="flex items-center gap-7">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-aco-dark md:text-xs">
                  {item}
                </span>
                {i < credibilityItems.length - 1 && (
                  <span className="hidden text-cobre md:inline" aria-hidden>
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>

    {/* Faixa de logos: onde o método foi aplicado */}
    <LogoStrip />

    {/* 2. Quem assina */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Quem assina"
            title="Eu não ensino IA porque aprendi ferramentas. Uso IA porque passei 15 anos resolvendo problema real de empresa."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {empresas.map((e, i) => (
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
            Antes disso: chão de fábrica na Ford, torno CNC e supply chain na Electrolux com Lean, VSM e
            DMAIC. Foi lá que aprendi a lição que rege tudo aqui: processo se mede, ou não existe.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 3. O problema */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading eyebrow="O problema" title="O ChatGPT aberto o dia todo. A operação igualzinha." />
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground/85">
                <p>
                  Você provavelmente conhece essa cena: o ChatGPT aberto o dia inteiro, e a operação não
                  muda um pixel.
                </p>
                <p>
                  Cada uso é um evento isolado. Nada fica salvo, nada vira rotina, e cada pessoa da equipe
                  usa de um jeito. O ganho depende de você lembrar de usar. E lembrar não é processo, é
                  sorte.
                </p>
                <p>
                  Enquanto isso a operação cobra sua conta: lead esfriando no WhatsApp, proposta travada
                  há dias, financeiro refém de planilha manual. No fim do mês a assinatura de IA aparece
                  como custo, não como investimento.
                </p>
                <p>
                  Isso tem nome: <strong className="text-foreground">turismo de prompts</strong>. Curso de
                  ferramenta sem processo, prompt solto sem dono, automação sem KPI, piloto que nunca
                  chega em produção. Aí a diretoria pergunta de novo: “e a IA, como está?”.
                </p>
                <p>
                  A saída não é conversar melhor com a IA. É tratá-la como infraestrutura: processo
                  desenhado, gente preparada e número no relatório. É engenharia, não inspiração.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-12 font-display text-3xl font-extrabold tracking-[-0.02em] text-cobre-dark md:text-4xl">
                IA que não executa é enfeite.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-5">
            <TiltCard strength={4} className="rounded-xl border border-cobre/25 bg-card p-9 shadow-soft md:p-11">
              <div className="eyebrow text-cobre-dark">O paradoxo da adoção</div>
              <div className="mt-9 grid grid-cols-2 gap-8">
                <div>
                  <div className="font-mono text-6xl font-bold leading-none tracking-[-0.02em] text-foreground md:text-7xl">
                    <CountUp to={88} suffix="%" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    das empresas já usam IA em alguma função
                  </p>
                </div>
                <div className="border-l border-border pl-8">
                  <div className="font-mono text-6xl font-bold leading-none tracking-[-0.02em] text-cobre-dark md:text-7xl">
                    <CountUp to={6} suffix="%" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    capturam valor de forma consistente
                  </p>
                </div>
              </div>
              <p className="mt-9 border-t border-border pt-6 text-xs text-muted-foreground/70">
                Fonte: McKinsey, State of AI 2025.
              </p>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 4. Método CARGA */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <span
        className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-mono text-[7rem] font-bold leading-none tracking-[0.05em] text-papel/[0.035] md:text-[10rem]"
        aria-hidden
      >
        C A R G A
      </span>
      <div className="container relative py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="O método"
            tone="dark"
            title="O Método CARGA"
            description="O ciclo de engenharia que tira o trabalho do colo das pessoas e entrega para a IA executar, com retorno medido em cada etapa."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-papel/15 bg-papel/15 md:grid-cols-5">
          {carga.map((s, i) => (
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

    {/* 5. Carrossel 1: cases */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Cases"
            title="Resultado em campo, não em slide de apresentação"
            description="Planejamento estratégico, RAG, data science e automação dentro de operações reais, nas minhas empresas e em clientes."
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

    {/* 6. Carrossel 2: soluções (navy) */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Soluções"
            tone="dark"
            title="Um caminho para cada momento"
            description="Do diagnóstico gratuito ao programa anual de transformação. Você entra no degrau que faz sentido hoje e sobe no seu ritmo."
          />
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-14">
            <CarouselShell
              dark
              items={solucoes}
              itemClassName="md:basis-1/2 xl:basis-1/3"
              renderItem={(s, i) => (
                <Link
                  to={s.to}
                  onClick={() => trackEvent("product_view", { product_name: s.name, ladder_step: i })}
                  className="group flex h-full flex-col rounded-lg border border-papel/12 bg-papel/[0.03] p-8 backdrop-blur-sm transition-all duration-500 ease-luxury hover:-translate-y-1 hover:border-cobre/50 hover:bg-papel/[0.05]"
                >
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
                </Link>
              )}
            />
          </div>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-papel/55">
            Não sabe qual é o seu degrau? O AI Work Audit responde com um score, não com uma opinião.{" "}
            <Link
              to="/diagnostico"
              onClick={() => trackEvent("diagnostic_start", { cta_position: "home_ladder_footer" })}
              className="font-semibold text-cobre-light underline-offset-4 transition-colors hover:underline"
            >
              Fazer o diagnóstico →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>

    {/* 7. Para quem é */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading eyebrow="Para quem é" title="Se você se reconhece em alguma dessas frases" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {icps.map((icp, i) => (
            <Reveal key={icp.quote} delay={i * 90} className="h-full">
              <article className="card-lux flex h-full flex-col p-9">
                <blockquote className="font-display text-lg font-bold leading-snug tracking-[-0.01em] text-foreground">
                  “{icp.quote}”
                </blockquote>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{icp.text}</p>
                <Link
                  to={icp.to}
                  onClick={() =>
                    trackEvent("cta_click", {
                      cta_label: icp.cta,
                      cta_position: "home_icp",
                      cta_destination: icp.to,
                    })
                  }
                  className="pressable mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark transition-colors duration-300 hover:text-foreground"
                >
                  {icp.cta}{" "}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 8. Leonardo */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl border border-cobre/30" aria-hidden />
              <img
                src={leonardoAbout}
                alt="Leonardo Vieira Pedrini, engenheiro e fundador da 4WaTT Bio Engenharia e da 4W Energia"
                className="relative w-full rounded-lg border border-border object-cover shadow-soft"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-3">
            <Reveal>
              <SectionHeading eyebrow="Quem coloca a IA para trabalhar" title="Leonardo Vieira Pedrini" />
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 space-y-6 text-lg leading-relaxed text-foreground/85">
                <p>
                  Sou engenheiro. Comecei no chão de fábrica, de jovem aprendiz na Ford a torneiro CNC, e
                  aprendi processo onde erro custa caro: supply chain na Electrolux, com Lean, VSM e
                  DMAIC.
                </p>
                <p>
                  Virei fundador porque queria construir, não só aconselhar: co-fundei a 4WaTT Bio
                  Engenharia em 2015 e fundei a 4W Energia em 2020. Hoje também integro o conselho
                  consultivo da APEEL.
                </p>
                <p>
                  A IA generativa chegou para mim como resposta a um problema que venho perseguindo a
                  carreira inteira:{" "}
                  <strong className="text-foreground">
                    como escalar trabalho qualificado sem escalar custo.
                  </strong>
                </p>
                <p>Hoje implanto nas empresas dos outros o que implanto nas minhas.</p>
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

    {/* 9. Carrossel 3: insights para acompanhar */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Para acompanhar"
            title="Conteúdo de quem implementa, não de quem só opina"
            description="Toda semana, um processo real decomposto na newsletter IA que Trabalha. Aqui, uma amostra do que você encontra no Insights."
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
                      Newsletter
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

    {/* 10. Newsletter */}
    <NewsletterSection />

    {/* 11. CTA final */}
    <CTASection
      title="Pronto para parar de conversar com a IA?"
      description="São 8 minutos para descobrir. O AI Work Audit mede sua maturidade em 6 dimensões e devolve um relatório com os 3 processos que vale a pena automatizar primeiro. Sem compromisso e sem enrolação."
      ctaTo="/diagnostico"
      ctaLabel="Fazer o AI Work Audit gratuito"
    />
    <div className="bg-grafite-900 pb-12 pt-2 text-center">
      <p className="font-display text-lg font-semibold italic text-papel/40">IA que não executa é enfeite.</p>
    </div>
  </PageLayout>
);

export default Index;
