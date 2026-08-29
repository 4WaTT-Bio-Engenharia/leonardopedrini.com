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

import { trackEvent } from "@/lib/analytics";
import { SITE_URL } from "@/components/SEO";
import leonardoAbout from "@/assets/leonardo-about.jpg";

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

const escada = [
  { step: "Prompt", desc: "Uso isolado, depende de lembrar" },
  { step: "Copiloto", desc: "IA ao lado do humano, caso a caso" },
  { step: "Workflow", desc: "Sequência de passos com IA embutida" },
  { step: "Automação", desc: "Executa sozinha, com gatilho e regra" },
  { step: "Agente", desc: "Decide e executa dentro de limites" },
  { step: "Sistema", desc: "Agentes orquestrados, medidos, governados" },
  { step: "Organização AI-native", desc: "Processos e papéis desenhados com IA como infraestrutura" },
];

const carga = [
  { letter: "C", name: "Cartografar", desc: "Mapear o trabalho como ele é: tempos, filas, retrabalho, volumes. Sem mapa, não existe automação — existe aposta." },
  { letter: "A", name: "Arquitetar", desc: "Desenhar o processo futuro: o que a IA executa, onde o humano decide, qual o KPI contratado. Escopo fechado, assinado, antes de qualquer build." },
  { letter: "R", name: "Rodar", desc: "Piloto em produção controlada, executando trabalho real — nunca demo. Qualidade medida por evals desde o dia 1." },
  { letter: "G", name: "Governar", desc: "Dono interno treinado, manual de operação e de exceções, LGPD, monitoramento. A operação roda sem consultor — ou o projeto falhou." },
  { letter: "A", name: "Ampliar", desc: "O que provou retorno vira roadmap de 12 meses. Um processo resolvido vira vantagem estrutural." },
];

const solucoes = [
  { name: "AI Work Audit", price: "gratuito", desc: "8 minutos, 14 perguntas. Você recebe seu nível de maturidade, os 3 processos candidatos à automação e o próximo passo recomendado.", cta: "Fazer o diagnóstico", to: "/diagnostico" },
  { name: "AI Work Starter Kit", price: "R$ 197", desc: "Seus primeiros 10 agentes de trabalho, pré-configurados, com guia de instalação de 15 minutos cada. Menos que 1 hora de qualquer consultor.", cta: "Instalar meus primeiros agentes", to: "/solucoes" },
  { name: "Formação IA que Trabalha", price: "R$ 1.997", desc: "6 semanas para sair com um processo real da sua empresa rodando em produção — e o método para replicar nos demais.", cta: "Ver a formação", to: "/cursos" },
  { name: "AI Work Lab", price: "R$ 297/mês", desc: "O laboratório de implementação: todo mês, uma automação ou agente em produção no seu negócio, com rituais, templates e office hours.", cta: "Entrar no laboratório", to: "/comunidade" },
  { name: "Imersão IA que Trabalha", price: "R$ 2.997", desc: "2 dias hands-on. Você sai com backlog priorizado, uma automação construída ao vivo e o plano de 90 dias. Turmas de 40 vagas.", cta: "Garantir minha vaga", to: "/imersao" },
  { name: "Mentoria AI Work", price: "R$ 9.997", desc: "12 semanas de implementação assistida em grupo: 3 processos em produção, com KPI contratado. 12 empresas por turma.", cta: "Aplicar para a próxima turma", to: "/consultoria" },
  { name: "AI Implementation Sprint", price: "R$ 45.000", desc: "90 dias para IA rodando como infraestrutura do seu negócio: 4–6 frentes implantadas, equipe treinada, KPI contratado. 4 empresas por trimestre.", cta: "Aplicar para o próximo trimestre", to: "/consultoria" },
  { name: "Enterprise AI Transformation", price: "a partir de R$ 150.000/ano", desc: "Programa anual multi-área: estratégia, governança, squads e formação in-company.", cta: "Solicitar proposta executiva", to: "/empresas" },
];

const icps = [
  { quote: "Uso o ChatGPT todo dia e nada mudou na operação.", text: "Você é o gargalo: tudo depende de você lembrar de usar. Comece pelo diagnóstico — a saída é transformar uso em processo.", cta: "Fazer o AI Work Audit", to: "/diagnostico" },
  { quote: "A diretoria cobrou um plano de IA e eu preciso apresentar resultado.", text: "Você precisa de roadmap com pilotos priorizados e ROI estimado — não de mais um curso.", cta: "Ver como a mentoria funciona", to: "/consultoria" },
  { quote: "Vendo o que eu sei, mas só cobro pela hora.", text: "Seu método pode virar sistema: agentes treinados no seu acervo, com sigilo e qualidade medida.", cta: "Ver as soluções para especialistas", to: "/consultoria" },
  { quote: "Quero resultado na operação sem aprender ferramenta.", text: "Você não compra tecnologia, compra número: KPI contratado, prazo fechado, equipe treinada.", cta: "Ver o Sprint de 90 dias", to: "/consultoria" },
  { quote: "Nossos pilotos de IA morrem no proof of concept.", text: "Integração com legado, evals, LGPD e governança — produção, não apresentação.", cta: "Ver o programa enterprise", to: "/empresas" },
];

const insights = [
  { tag: "Custos", title: "Quanto custa implementar IA em 2026" },
  { tag: "ROI", title: "ROI de agentes de IA: como calcular antes de investir" },
  { tag: "Implementação", title: "Os 5 motivos pelos quais empresas testam IA e não veem retorno" },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "L.V. Pedrini — IA que Trabalha",
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leonardo Vieira Pedrini",
    url: SITE_URL,
    jobTitle: "Engenheiro e implementador de IA",
    description: "Engenheiro, fundador da 4WaTT Bio Engenharia e da 4W Energia. Implanta IA como infraestrutura de trabalho em empresas reais.",
  },
];

/** Fluxo proprietário: Prompt → Workflow → Agente → Sistema, linha champagne animada. */
const flowNodes = ["Prompt", "Workflow", "Agente", "Sistema"];

const FlowVisual = () => (
  <div className="relative hidden lg:block" aria-hidden>
    <div className="absolute -inset-8 rounded-full bg-cobre/[0.06] blur-3xl" />
    <div
      className="relative rounded-xl border border-papel/10 bg-papel/[0.03] p-8 backdrop-blur-md"
      style={{ boxShadow: "inset 0 1px 0 0 hsl(40 27% 96% / 0.08), var(--shadow-premium)" }}
    >
      <div className="eyebrow text-cobre-light/70">Do chat ao sistema</div>
      <div className="relative mt-10">
        {/* Linha de fluxo */}
        <svg className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px overflow-visible" aria-hidden>
          <line
            x1="0.5" y1="0" x2="0.5" y2="100%"
            stroke="hsl(41 49% 59% / 0.55)"
            strokeWidth="1"
            strokeDasharray="4 24"
            className="animate-flow-dash"
          />
        </svg>
        <ol className="space-y-9">
          {flowNodes.map((node, i) => (
            <Reveal key={node} delay={i * 100} y={10} as="li" className="relative flex items-center gap-5 pl-0">
              <span
                className="animate-node-pulse relative z-10 h-[15px] w-[15px] rounded-full border border-cobre-light/70 bg-grafite-900"
                style={{ animationDelay: `${i * 0.8}s`, boxShadow: "0 0 0 4px hsl(41 49% 59% / 0.12)" }}
              />
              <span className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-cobre-light/60">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl font-bold tracking-[-0.01em] text-papel">{node}</span>
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
      <div className="mt-10 border-t border-papel/10 pt-6">
        <p className="text-xs leading-relaxed text-papel/45">
          Cada degrau elimina dependência de memória e boa vontade. No topo, a IA é infraestrutura —
          medida, governada, sua.
        </p>
      </div>
    </div>
  </div>
);

const Index = () => (
  <PageLayout
    title="Leonardo Pedrini — IA que trabalha pela sua empresa"
    description="Pare de conversar com a IA. Implementação de IA com resultado mensurável para empresas: diagnóstico, agentes e consultoria. Faça o AI Work Audit."
    path="/"
    jsonLd={jsonLd}
    flush
  >
    {/* 1 — Hero imersivo navy */}
    <section className="bg-navy-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative pb-28 pt-40 md:pb-40 md:pt-52">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                IA que trabalha
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.025em] text-papel md:text-7xl">
                Pare de conversar com a IA.{" "}
                <span className="text-gradient-gold">Coloque a IA para trabalhar.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-papel/65 md:text-xl">
                Sua empresa não precisa de mais um curso de prompt. Precisa de processos, workflows e
                agentes que executam trabalho de verdade — com retorno medido em horas e em reais. Eu sou
                engenheiro, fundei a 4WaTT e a 4W Energia, e implanto IA dentro de operações reais.
                Inclusive nas minhas.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
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
                  <span className="hidden text-cobre md:inline" aria-hidden>·</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>

    {/* Faixa de logos — onde o método foi aplicado */}
    <LogoStrip />



    {/* 2 — Credibilidade (empresas fundadas) */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Quem assina"
            title="Eu não ensino IA porque aprendi ferramentas. Uso IA porque passei 15 anos resolvendo problemas reais de empresas."
          />
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {empresas.map((e, i) => (
            <Reveal key={e.name} delay={i * 120} className="h-full">
              <article className="flex h-full flex-col bg-card p-9 transition-colors duration-500 ease-luxury hover:bg-papel-light md:p-11">
                <div className="font-mono text-[11px] text-cobre-dark">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{e.name}</h3>
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
          <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Antes disso: chão de fábrica na Ford, torno CNC, e supply chain na Electrolux com Lean, VSM
            e DMAIC — onde aprendi que processo se mede, ou não existe.
          </p>
        </Reveal>
      </div>
    </section>

    {/* 3 — O problema (PAS) */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-28 md:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="O problema"
              title={
                <>
                  <CountUp to={88} suffix="%" /> das empresas já usam IA em alguma função. Só{" "}
                  <CountUp to={6} suffix="%" /> capturam valor de forma consistente.
                </>
              }
              description="Fonte: McKinsey, State of AI 2025."
            />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground/85">
              <p>
                O sintoma é sempre o mesmo: o ChatGPT aberto o dia todo, e nada mudou na operação.
              </p>
              <p>
                Cada uso é um evento isolado. Nada fica salvo. Nada vira rotina. Ninguém mais na equipe
                usa do mesmo jeito. O ganho depende de você lembrar de usar.
              </p>
              <p>
                Enquanto isso: leads esfriam no WhatsApp, propostas levam dias, o financeiro vive de
                planilha manual — e a assinatura de IA vira custo, não investimento.
              </p>
              <p>
                Isso tem nome: <strong className="text-foreground">turismo de prompts</strong>. Curso de
                ferramenta sem processo. Prompt solto sem dono. Automação sem KPI. Piloto que nunca
                chega em produção.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-14 font-display text-3xl font-extrabold tracking-[-0.02em] text-cobre-dark md:text-4xl">
              IA que não executa é enfeite.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 4 — A nova forma (BAB) + escada */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="A nova forma"
            title="Do chat para a infraestrutura de trabalho"
          />
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <Reveal>
            <div className="card-lux h-full p-9">
              <div className="eyebrow text-aco-dark">Antes</div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85">
                Você conversa com a IA. Ela responde. O trabalho continua seu.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-lg border border-cobre/50 bg-cobre-soft/50 p-9 shadow-gold transition-all duration-500 ease-luxury hover:-translate-y-1">
              <div className="eyebrow text-cobre-dark">Depois</div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85">
                A IA responde o cliente, processa o pedido, monta a proposta, audita o contrato — com
                processo desenhado, gente preparada e número no relatório.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="card-lux h-full p-9">
              <div className="eyebrow text-aco-dark">A ponte</div>
              <p className="mt-5 text-base leading-relaxed text-foreground/85">
                Tratar IA como infraestrutura, não como enfeite: mapear o trabalho real antes de
                automatizar, eliminar o que não deveria existir, pilotar em produção, medir qualidade
                com avaliações sistemáticas (evals) e manter humanos nos pontos de julgamento.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="mt-12 font-display text-2xl font-bold italic tracking-[-0.01em] text-foreground/80">
            É engenharia. Não é inspiração.
          </p>
        </Reveal>

        {/* Escada de maturidade */}
        <ol className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {escada.map((s, i) => (
            <li key={s.step} className="relative">
              <Reveal delay={i * 90} y={20} className="h-full">
                <div className="card-lux h-full p-5">
                  <div className="font-mono text-[11px] text-cobre-dark">{String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-3 font-display text-base font-bold leading-tight tracking-[-0.01em] text-foreground">
                    {s.step}
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
              {i < escada.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-cobre lg:block" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* 5 — Método CARGA (navy imersivo) */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="O método"
            tone="dark"
            title="O Método CARGA"
            description="O ciclo de engenharia que transforma processos sobrecarregados em infraestrutura de trabalho executada por IA — com retorno medido em cada etapa."
          />
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-papel/15 bg-papel/15 md:grid-cols-5">
          {carga.map((s, i) => (
            <Reveal key={s.name} delay={i * 110} className="h-full">
              <article className="h-full bg-grafite p-8 transition-colors duration-500 ease-luxury hover:bg-grafite-700">
                <div className="font-display text-5xl font-extrabold tracking-[-0.02em] text-cobre">{s.letter}</div>
                <h3 className="mt-5 font-display text-lg font-bold text-papel">{s.name}</h3>
                <p className="mt-3.5 text-sm leading-relaxed text-papel/60">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <div className="mt-14">
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

    {/* 6 — Cases */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Cases de sucesso"
            title="Trabalho executado em deeptech, energia, jurídico e indústria"
            description="Planejamento estratégico, sistemas RAG, data science e automação aplicados dentro de operações reais — nas minhas empresas e em clientes."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.id} delay={i * 100} className="h-full">
              <CaseCard item={c} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <div className="mt-14">
            <CTAButton to="/cases" variant="outline" trackingParams={{ cta_position: "home_cases" }}>
              Ver todos os cases
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>


    {/* 7 — Soluções (value ladder) — navy, o catálogo de luxo */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Soluções"
            tone="dark"
            title="Por onde começar — do diagnóstico à transformação"
          />
        </Reveal>
        <ol className="mt-16 space-y-4">
          {solucoes.map((s, i) => (
            <li key={s.name}>
              <Reveal delay={Math.min(i * 70, 350)} y={20}>
                <Link
                  to={s.to}
                  onClick={() => trackEvent("product_view", { product_name: s.name, ladder_step: i })}
                  className="pressable group grid gap-5 rounded-lg border border-papel/12 bg-papel/[0.03] p-7 backdrop-blur-sm transition-all duration-500 ease-luxury hover:-translate-y-0.5 hover:border-cobre/50 hover:bg-papel/[0.05] md:grid-cols-[3.5rem_1fr_auto] md:items-center md:p-9"
                >
                  <div className="font-mono text-sm text-cobre-light/70">{String(i).padStart(2, "0")}</div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4">
                      <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-papel transition-colors duration-300 group-hover:text-cobre-light">
                        {s.name}
                      </h3>
                      <span className="font-mono text-sm text-papel/45">{s.price}</span>
                    </div>
                    <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-papel/55">{s.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-light">
                    {s.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal delay={200}>
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

    {/* 8 — Para quem é (ICPs) */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading eyebrow="Para quem é" title="Encontre a sua situação" />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {icps.map((icp, i) => (
            <Reveal key={icp.quote} delay={i * 90} className="h-full">
              <article className="card-lux flex h-full flex-col p-9">
                <blockquote className="font-display text-lg font-bold leading-snug tracking-[-0.01em] text-foreground">
                  “{icp.quote}”
                </blockquote>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{icp.text}</p>
                <Link
                  to={icp.to}
                  onClick={() => trackEvent("cta_click", { cta_label: icp.cta, cta_position: "home_icp", cta_destination: icp.to })}
                  className="pressable mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark transition-colors duration-300 hover:text-foreground"
                >
                  {icp.cta} <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* 9 — Leonardo */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-28 md:py-36">
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
                  Sou engenheiro. Comecei no chão de fábrica — de jovem aprendiz na Ford a torneiro
                  CNC — e aprendi processos onde erro custa caro: supply chain na Electrolux, com Lean,
                  VSM e DMAIC.
                </p>
                <p>
                  Virei fundador porque queria construir, não aconselhar: co-fundei a 4WaTT Bio
                  Engenharia em 2015 e fundei a 4W Energia em 2020. Sou membro do conselho consultivo
                  da APEEL.
                </p>
                <p>
                  A IA generativa não me chegou como moda. Chegou como resposta para o problema que
                  persegui a carreira inteira:{" "}
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

    {/* 10 — Insights */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="O que ninguém te conta sobre implementar IA"
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={i * 110} className="h-full">
              <Link
                to="/insights"
                onClick={() => trackEvent("cta_click", { cta_label: post.title, cta_position: "home_insights", cta_destination: "/insights" })}
                className="card-lux pressable group flex h-full flex-col p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-cobre-dark">{post.tag}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
                    Em produção
                  </span>
                </div>
                <h3 className="mt-5 flex-1 font-display text-2xl font-bold leading-snug tracking-[-0.015em] text-foreground transition-colors duration-300 group-hover:text-cobre-dark">
                  {post.title}
                </h3>
                <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark">
                  Ler no Insights <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <div className="mt-14">
            <CTAButton to="/insights" variant="outline" trackingParams={{ cta_position: "home_insights_footer" }}>
              Ler todos os artigos
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>

    {/* 11 — Newsletter */}
    <NewsletterSection />

    {/* 12 — CTA final */}
    <CTASection
      title="Sua empresa está pronta para IA que trabalha?"
      description="Descubra em 8 minutos. O AI Work Audit mede sua maturidade em 6 dimensões e devolve um relatório com os 3 processos que você deveria automatizar primeiro."
      ctaTo="/diagnostico"
      ctaLabel="Fazer o AI Work Audit gratuito"
    />
    <div className="bg-grafite-900 pb-12 pt-2 text-center">
      <p className="font-display text-lg font-semibold italic text-papel/40">IA que não executa é enfeite.</p>
    </div>
  </PageLayout>
);

export default Index;
