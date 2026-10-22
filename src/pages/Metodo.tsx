import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTASection from "@/components/conversion/CTASection";
import Reveal from "@/components/motion/Reveal";

const etapas = [
  {
    letter: "M",
    name: "Mapear",
    desc: "Antes de qualquer solução, eu quero entender o problema como ele é, não como ele deveria ser. Vou onde o trabalho acontece e observo: tempo, fila, custo, retrabalho.",
    entregaveis: ["Mapa do problema real", "Premissas explícitas", "O que se sabe e o que é achismo"],
    gate: "Se o problema não está claro, não avançamos. Resolver o problema errado com eficiência é o pior resultado possível.",
  },
  {
    letter: "H",
    name: "Hipotetizar",
    desc: "Toda decisão vira hipótese explícita: se fizermos X, esperamos Y, medido por Z. Premissa errada em papel custa uma caneta. Em campo, custa um projeto.",
    entregaveis: ["Hipótese com premissa", "Indicador de sucesso definido", "Cenário de risco"],
    gate: "Hipótese sem premissa clara não é hipótese. É desejo.",
  },
  {
    letter: "D",
    name: "Medir",
    desc: "Opinião disputa espaço em reunião. Dado não disputa, ele decide. Levanto a baseline antes de mexer em qualquer coisa, porque sem antes não existe depois.",
    entregaveis: ["Baseline medida", "Fontes de dado confiáveis", "Número que importa, isolado"],
    gate: "Se não dá para medir o depois, o projeto não começa.",
  },
  {
    letter: "T",
    name: "Testar",
    desc: "Piloto controlado, com escopo pequeno e critério de aceite objetivo. Erro é classificado por causa, não por culpado. O teste existe para barato errar.",
    entregaveis: ["Piloto com escopo fechado", "Critérios de aceite", "Registro de erros por causa"],
    gate: "Resultado do piloto abaixo do critério? Paramos e revisamos a hipótese. Não escalamos esperança.",
  },
  {
    letter: "D",
    name: "Decidir",
    desc: "Com evidência na mesa, decido rápido e assumo a decisão. Incluindo a decisão de não avançar, que é a mais difícil e a mais valiosa.",
    entregaveis: ["Decisão registrada com fundamento", "Plano de escala, se for o caso", "Aprendizado documentado"],
    gate: "Dizer não a um projeto ruim também é engenharia. E também é gestão.",
  },
];

const ondeApliquei = [
  { name: "4WaTT Bio Engenharia", desc: "Estudos de viabilidade e projetos de biogás e biometano onde o risco técnico é tratado antes do financeiro." },
  { name: "4W Energia", desc: "Modelo de negócio recorrente desenhado a partir da fatura do cliente, não da tecnologia disponível." },
  { name: "BESS4YOU e Carbon4you", desc: "Novos mercados entrados com piloto pequeno e premissa clara, antes de qualquer escala." },
  { name: "Gestão do ecossistema", desc: "Indicadores de operação, comercial e financeiro medidos toda semana nas cinco empresas." },
  { name: "Advisory", desc: "O mesmo funil aplicado na mesa de fundadores e empresas que me chamam para pensar junto." },
];

const fundamentos = [
  { name: "DMAIC", desc: "O ciclo de melhoria do Lean Seis Sigma, aplicado anos na operação de multinacional. Medir antes de melhorar." },
  { name: "VSM", desc: "Mapeamento de fluxo de valor: o processo como ele é, com tempos, filas e retrabalho, não como deveria ser." },
  { name: "Gestão de risco", desc: "MBA em engenharia financeira e gestão de risco pela Columbia University. Todo número com premissa, todo cenário com downside." },
  { name: "Ciência de dados", desc: "Formação pela University of Michigan. Dado bom vale mais que opinião em reunião." },
  { name: "JTBD", desc: "Jobs-to-be-done: resolve-se o problema que o cliente precisa ver resolvido, não o que parece bonito resolver." },
];

const Metodo = () => (
  <PageLayout
    title="Método — pensar como cientista, decidir como empresário"
    description="Hipótese, dado, teste, decisão. O funil que uso para conduzir cinco empresas e que aplico na mesa de quem trabalha comigo."
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
              Pensar como cientista,{" "}
              <span className="text-gradient-gold">decidir como empresário</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-papel/65">
              Não é framework de moda e não nasceu em livro de autoajuda. É a junção de quinze anos
              de engenharia, processo e operação real, destilada em cinco etapas com um gate objetivo
              entre cada uma. É assim que eu conduzo minhas empresas. É assim que eu trabalho na sua.
            </p>
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    {/* Por que método */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="O diagnóstico" title="Por que a maioria das decisões dá errado" />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 space-y-7 text-lg leading-relaxed text-foreground/85">
              <p>Pela mesma razão que a maioria dos projetos: começa pela solução, não pelo problema.</p>
              <p>
                Alguém viu uma referência, comprou uma ideia, apostou no entusiasmo. Sem mapa do
                problema, sem baseline, sem critério de aceite. Na primeira dificuldade, não há o que
                revisar, porque nunca houve premissa explícita. Só opinião.
              </p>
              <p>
                O método inverte a ordem:{" "}
                <strong className="text-foreground">
                  problema antes de solução, dado antes de decisão, teste antes de escala.
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
                      O que sai dessa etapa
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

    {/* Onde o método já rodou — navy */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Onde o método já rodou"
            tone="dark"
            title="Testado em operação própria, antes de chegar na sua mesa"
          />
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-papel/15 bg-papel/15 sm:grid-cols-2 lg:grid-cols-5">
          {ondeApliquei.map((f, i) => (
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

    {/* Fundamentação */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading
            eyebrow="Fundamentação"
            title="Engenharia clássica, gestão e ciência de dados"
            description="O método não nasceu de framework de moda. É a união de ferramentas que separam operação amadora de operação profissional."
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
      title="Ver o método aplicado ao seu problema"
      description="A Sessão Estratégica é onde o funil começa a rodar com o seu problema: até 2 horas, online ou presencial, e você sai com um plano objetivo."
      ctaTo="/consultoria"
      ctaLabel="Agendar sessão estratégica"
      secondaryTo="/cases"
      secondaryLabel="Ver os cases primeiro"
    />
  </PageLayout>
);

export default Metodo;
