import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTASection from "@/components/conversion/CTASection";
import Reveal from "@/components/motion/Reveal";

const etapas = [
  {
    letter: "C",
    name: "Cartografar",
    desc: "Observamos o trabalho onde ele acontece e medimos: tempos, filas, retrabalho, volumes.",
    entregaveis: ["Mapa do processo atual", "Inventário de carga automatizável", "Matriz de priorização por impacto × viabilidade"],
    gate: "Existe ao menos um processo cujo custo da fila supera o custo do piloto? Se não existe, eu recomendo não avançar.",
  },
  {
    letter: "A",
    name: "Arquitetar",
    desc: "Desenhamos o processo futuro: o que a IA executa, onde o humano decide, qual padrão técnico (workflow, automação, agente, RAG — técnica que faz a IA responder a partir dos seus documentos, não da internet genérica).",
    entregaveis: ["Blueprint do processo futuro", "KPI contratado", "Plano de evals", "Preço fechado"],
    gate: "Você assina blueprint, KPI e preço. Sem “projeto aberto”.",
  },
  {
    letter: "R",
    name: "Rodar",
    desc: "Piloto em produção controlada executando trabalho real: primeiro em modo sombra (a IA executa, o humano confere tudo), depois assistido. Cada erro é classificado e corrigido na causa.",
    entregaveis: ["Piloto em produção controlada", "Evals desde o dia 1", "Análise de erros por causa"],
    gate: "KPI atingido por ciclos consecutivos — critério objetivo, não sensação.",
  },
  {
    letter: "G",
    name: "Governar",
    desc: "Dono interno treinado, manual de operação e de exceções, dossiê LGPD, painel de monitoramento.",
    entregaveis: ["Dono interno treinado", "Manual de operação e de exceções", "Dossiê LGPD", "Painel de monitoramento"],
    gate: "30 dias de operação sem intervenção minha.",
  },
  {
    letter: "A",
    name: "Ampliar",
    desc: "O inventário da primeira etapa vira roadmap de 12 meses. Processos estáveis sobem de grau de autonomia — por evals, não por entusiasmo.",
    entregaveis: ["Roadmap de 12 meses", "Plano de promoção de graus de autonomia"],
    gate: "Escala somente o que provou retorno.",
  },
];

const transversais = [
  { name: "Human-in-the-loop", desc: "Humano aprova ou corrige nos pontos onde erro custa caro." },
  { name: "Evals contínuos", desc: "Avaliações sistemáticas da saída da IA, do piloto à operação." },
  { name: "LGPD e segurança", desc: "Por desenho, não por remendo — dossiê de dados por processo." },
];

const formatos = [
  { name: "Starter Kit e Formação", desc: "Você aprende a aplicar o CARGA com templates." },
  { name: "AI Work Lab", desc: "Você aplica toda semana, com revisão de especialista." },
  { name: "Mentoria AI Work", desc: "Aplicamos juntos em 3 processos da sua empresa." },
  { name: "AI Implementation Sprint", desc: "Eu e o squad aplicamos por você em 90 dias." },
  { name: "Enterprise AI Transformation", desc: "O CARGA vira o sistema operacional de IA da empresa." },
];

const fundamentos = [
  { name: "DMAIC", desc: "O ciclo de melhoria do Lean Seis Sigma — medir antes de melhorar — aplicado na operação de multinacional." },
  { name: "VSM", desc: "Mapeamento de fluxo de valor: o processo desenhado com tempos, filas e retrabalho, como ele é — não como deveria ser." },
  { name: "JTBD", desc: "Jobs-to-be-done: automatiza-se o trabalho que o cliente precisa ver feito, não a tarefa que parece automatizável." },
  { name: "Evals", desc: "Avaliação sistemática da saída da IA contra casos de teste — a medição de qualidade do método." },
  { name: "HITL", desc: "Human-in-the-loop: pontos de julgamento humano desenhados no processo, não improvisados depois do erro." },
];

const Metodo = () => (
  <PageLayout
    title="Método CARGA — implementação de IA com retorno medido"
    description="Cartografar, Arquitetar, Rodar, Governar, Ampliar: o ciclo de engenharia que coloca IA para trabalhar na sua operação, com KPI em cada etapa."
    path="/metodo"
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
              O método
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Método CARGA: o ciclo que coloca a IA para trabalhar —{" "}
              <span className="text-gradient-gold">com retorno medido em cada etapa</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-papel/65">
              Cartografar. Arquitetar. Rodar. Governar. Ampliar. Cinco etapas, um gate objetivo entre
              cada uma. Sem gate cumprido, o projeto não avança — e você não paga por entusiasmo.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    {/* Por que projetos de IA falham */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="O diagnóstico" title="Por que projetos de IA falham" />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 space-y-7 text-lg leading-relaxed text-foreground/85">
              <p>A maioria dos projetos de IA morre pelo mesmo motivo: começa pela ferramenta.</p>
              <p>
                Alguém viu uma demo, comprou uma licença, rodou um piloto de apresentação — e na
                segunda-feira a operação continuou igual. Sem mapa do processo, sem baseline, sem
                critério de aceite, sem dono interno.
              </p>
              <p>
                O CARGA inverte a ordem:{" "}
                <strong className="text-foreground">
                  processo antes de ferramenta, medição antes de escala, dono interno antes de go-live.
                </strong>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* As 5 etapas */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading eyebrow="As 5 etapas" title="Um gate objetivo entre cada etapa" />
        </Reveal>
        <div className="mt-16 space-y-6">
          {etapas.map((e, i) => (
            <Reveal key={e.name} delay={Math.min(i * 90, 360)}>
              <article className="card-lux grid gap-10 p-9 md:p-12 lg:grid-cols-[7rem_1fr_1fr]">
                <div>
                  <div className="font-display text-6xl font-extrabold tracking-[-0.02em] text-cobre-dark">{e.letter}</div>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{e.name}</h3>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-foreground/85">{e.desc}</p>
                  <div className="mt-6">
                    <div className="eyebrow text-aco-dark">
                      Entregáveis
                    </div>
                    <ul className="mt-3 space-y-2">
                      {e.entregaveis.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cobre-dark" aria-hidden />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rounded-md border border-cobre/40 bg-cobre-soft/40 p-7">
                  <div className="eyebrow text-cobre-dark">Gate</div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/85">{e.gate}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Camadas transversais */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Camadas transversais"
            title="Presentes em todas as etapas"
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {transversais.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="h-full">
              <div className="card-lux h-full p-9">
                <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-foreground">{t.name}</h3>
                <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* O CARGA em cada formato — navy */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-28 md:py-36">
        <Reveal>
          <SectionHeading eyebrow="O CARGA em cada formato" tone="dark" title="O mesmo ciclo, em qualquer degrau da escada" />
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-papel/15 bg-papel/15 sm:grid-cols-2 lg:grid-cols-5">
          {formatos.map((f, i) => (
            <Reveal key={f.name} delay={i * 100} className="h-full">
              <div className="h-full bg-grafite p-8 transition-colors duration-500 ease-luxury hover:bg-grafite-700">
                <h3 className="font-display text-lg font-bold text-papel">{f.name}</h3>
                <p className="mt-3.5 text-sm leading-relaxed text-papel/60">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Métricas proprietárias */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading eyebrow="Métricas proprietárias" title="Os dois números que importam" />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-lux h-full p-9 md:p-11">
              <div className="eyebrow text-cobre-dark">Carga Automatizável</div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85">
                % do tempo da sua operação que é padronizado o suficiente para IA executar com qualidade
                medida.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="card-lux h-full p-9 md:p-11">
              <div className="eyebrow text-cobre-dark">Carga Assumida</div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/85">
                % efetivamente executado por IA em produção, em horas e reais por mês. É o número que
                você vai citar na sua diretoria.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Fundamentação */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Fundamentação"
            title="Engenharia clássica, ciência de IA aplicada"
            description="O CARGA não nasceu de um framework de moda. É a união de métodos de melhoria de processo com as práticas que separam piloto de produção em IA."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {fundamentos.map((f, i) => (
            <Reveal key={f.name} delay={i * 90} className="h-full">
              <div className="card-lux h-full p-7">
                <div className="font-mono text-sm font-semibold text-cobre-dark">{f.name}</div>
                <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <CTASection
      title="Aplicar o CARGA na minha empresa"
      description="O primeiro passo é o AI Work Audit: 8 minutos, 14 perguntas, e você sai sabendo qual processo automatizar primeiro."
      ctaTo="/diagnostico"
      ctaLabel="Aplicar o CARGA na minha empresa"
    />
  </PageLayout>
);

export default Metodo;
