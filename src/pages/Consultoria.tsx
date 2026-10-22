import { useEffect } from "react";
import { Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import FAQAccordion from "@/components/conversion/FAQAccordion";
import LeadCaptureForm from "@/components/conversion/LeadCaptureForm";
import Reveal from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";

const formatos = [
  {
    nome: "Sessão Estratégica",
    investimento: "R$ 2.500",
    ritmo: "Encontro único, até 2 horas",
    entrega: "Você sai com um plano objetivo para a sua realidade",
    detalhes: [
      "Online ou presencial em Goiânia",
      "10 vagas por mês, porque atenção não escala",
      "6 meses de acompanhamento na minha comunidade",
    ],
  },
  {
    nome: "Consultoria de estratégia",
    investimento: "Sob proposta",
    ritmo: "Projeto com escopo e prazo",
    entrega: "Estratégia desenhada, executada e medida ao seu lado",
    detalhes: [
      "Estudo de viabilidade, reposicionamento, plano de crescimento",
      "Escopo fechado antes de começar, número definido antes de escalar",
      "Para empresas e fundadores com decisão real na mesa",
    ],
  },
  {
    nome: "Conselho e advisory",
    investimento: "Mensal",
    ritmo: "Reuniões mensais de diretoria",
    entrega: "Perguntas difíceis na mesa antes que virem problema no caixa",
    detalhes: [
      "Para empresas que querem alguém que já fundou e operou",
      "Análise de números, decisões e riscos, todo mês",
      "Formato contínuo, sem depender de consultor para sempre",
    ],
  },
];

const comoFunciona = [
  {
    step: "01",
    name: "Antes",
    desc: "Você responde uma aplicação curta. Eu leio com atenção e só aceito se houver problema real na mesa. Se não for para eu agregar, eu digo e indico o caminho certo.",
  },
  {
    step: "02",
    name: "Durante",
    desc: "Até 2 horas de conversa dura e boa. Eu pergunto muito, porque a premissa errada mata plano bonito. No fim, você tem um plano objetivo: o que fazer, em que ordem e o que medir.",
  },
  {
    step: "03",
    name: "Depois",
    desc: "Você executa com o plano na mão e 6 meses de comunidade comigo: atualização de ferramentas, dicas e acessos exclusivos. Quem quiser ir além, a consultoria e o advisory existem para isso.",
  },
];

const paraQuem = [
  "Fundador que sente que decidiu no escuro por tempo demais",
  "Empresa que cresceu e precisa de estrutura para o tamanho novo",
  "Investidor ou sócio que quer uma leitura técnica antes de aportar",
  "Diretoria que precisa de alguém que já fundou e operou, não só estudou",
];

const naoParaQuem = [
  "Quem procura motivação em vez de método",
  "Quem quer terceirizar a decisão que é sua",
  "Quem busca fórmula pronta, sem contexto do próprio negócio",
];

const faq = [
  {
    question: "Dois mil e quinhentos reais por duas horas. Por que esse valor?",
    answer:
      "Você não está pagando por duas horas. Está pagando por quinze anos de engenharia, processo e operação de cinco empresas comprimidos num plano que serve para a sua realidade. E comparando: uma decisão errada de CAPEX custa muito mais que isso.",
  },
  {
    question: "E se o meu problema não for energia?",
    answer:
      "A maioria dos problemas de empresa não é de setor, é de método. Premissa, dado, decisão. Eu opero no setor de energia, mas o funil que eu uso serve para qualquer negócio com número na mesa.",
  },
  {
    question: "A sessão é gravada?",
    answer:
      "Sim, você recebe o registro da conversa junto com o plano. Anotação boa é a que você revisita.",
  },
  {
    question: "Como funcionam os 6 meses de comunidade?",
    answer:
      "Acesso a um grupo comigo e com quem também passou pela sessão: atualização de ferramentas que eu uso na gestão, dicas de operação e acessos exclusivos. É acompanhamento, não é dependência.",
  },
  {
    question: "E se eu quiser continuar depois?",
    answer:
      "Aí conversamos sobre consultoria de estratégia ou advisory, conforme o tamanho do desafio. Mas a sessão não é isca: muita gente executa bem só com o plano.",
  },
];

const Consultoria = () => {
  useEffect(() => {
    trackEvent("product_view", {
      product_id: "sessao-estrategica",
      product_name: "Sessão Estratégica",
      price_range: "2500",
    });
  }, []);

  return (
    <PageLayout
      title="Sessão Estratégica, consultoria e advisory — Leonardo Pedrini"
      description="Até 2 horas com Leonardo Pedrini, online ou presencial em Goiânia. Você traz o problema, ele traz o método. Sai com um plano objetivo para o seu negócio."
      path="/consultoria"
    >
      {/* Hero — navy imersivo */}
      <section className="bg-navy-hero relative overflow-hidden text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                Trabalhe comigo
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.02em] md:text-6xl">
                Você traz o problema.{" "}
                <span className="text-gradient-gold">Eu trago o método.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-papel/65">
                Três formas de colocar quinze anos de engenharia e cinco empresas na mesa do seu
                negócio. Começando pela Sessão Estratégica: até 2 horas, e você sai com um plano
                objetivo, não com uma lista de ideias.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <CTAButton
                  href="#aplicacao"
                  size="lg"
                  trackingParams={{ cta_position: "hero", page: "/consultoria" }}
                >
                  Aplicar para a Sessão Estratégica
                </CTAButton>
                <p className="text-sm text-papel/50">
                  10 vagas por mês. Aplicação não é compra, e respondemos em até 48h.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
      </section>

      {/* Os três formatos */}
      <section className="border-b border-border bg-papel-light">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Os formatos"
              title="Do encontro pontual ao conselho permanente"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {formatos.map((f, i) => (
              <Reveal key={f.nome} delay={i * 110} className="h-full">
                <article
                  className={
                    i === 0
                      ? "card-lux flex h-full flex-col border-cobre/50 p-9"
                      : "card-lux flex h-full flex-col p-9"
                  }
                >
                  {i === 0 && (
                    <div className="eyebrow mb-4 text-cobre-dark">Ponto de partida</div>
                  )}
                  <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">
                    {f.nome}
                  </h3>
                  <div className="mt-3 font-mono text-sm font-semibold text-cobre-dark">
                    {f.investimento}
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground/70">{f.ritmo}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{f.entrega}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                    {f.detalhes.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cobre-dark" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <CTAButton
                      href="#aplicacao"
                      variant={i === 0 ? "primary" : "outline"}
                      trackingParams={{ cta_position: "formatos", formato: f.nome }}
                    >
                      {i === 0 ? "Aplicar agora" : "Conversar sobre esse formato"}
                    </CTAButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona a sessão */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="A Sessão Estratégica"
              title="Como funcionam as duas horas"
              description="Estrutura simples, conversa dura. Eu pergunto até entender o problema de verdade, porque plano bonito sobre premissa errada é dinheiro jogado fora."
            />
          </Reveal>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {comoFunciona.map((f, i) => (
              <li key={f.step} className="h-full">
                <Reveal delay={i * 100} className="h-full">
                  <div className="card-lux h-full p-8">
                    <div className="font-mono text-3xl font-semibold text-cobre-dark">{f.step}</div>
                    <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.01em] text-foreground">{f.name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Para quem é / não é */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <SectionHeading eyebrow="É para você se" title="Essas frases soam familiares" />
                <ul className="mt-9 space-y-3.5">
                  {paraQuem.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-cobre-dark" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div>
                <SectionHeading eyebrow="Não é para você se" title="Também digo não, e rápido" />
                <ul className="mt-9 space-y-3.5">
                  {naoParaQuem.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-aco" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  Dizer não a projeto ruim também é engenharia. E também é gestão.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-papel-light">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Perguntas diretas, respostas diretas" />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 max-w-3xl">
              <FAQAccordion items={faq} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Aplicação — navy imersivo */}
      <section id="aplicacao" className="relative overflow-hidden bg-gradient-navy text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="text-center">
                <div className="eyebrow justify-center text-cobre-light">
                  <span className="h-px w-10 bg-cobre-light/70" />
                  Aplicação
                  <span className="h-px w-10 bg-cobre-light/70" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-papel md:text-5xl">
                  Três meses na mesma dúvida custam mais que duas horas de método
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-papel/65">
                  Conte sobre o seu negócio e o momento que você está vivendo. Se a sessão fizer
                  sentido, a gente marca. Se não fizer, eu digo o que eu faria no seu lugar.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-12 rounded-lg bg-papel p-6 text-foreground shadow-premium md:p-9">
                <LeadCaptureForm
                  source="consultoria_aplicacao"
                  submitLabel="Aplicar agora"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Consultoria;
