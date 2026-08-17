import { useEffect } from "react";
import { Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import FAQAccordion from "@/components/conversion/FAQAccordion";
import LeadCaptureForm from "@/components/conversion/LeadCaptureForm";
import ParaQuemGrid from "@/components/sections/ParaQuemGrid";
import Reveal from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";
import { SITE_URL } from "@/components/SEO";

const leva = [
  {
    title: "Mapa de processos",
    desc: "Da sua empresa, com o backlog de automação priorizado por ROI.",
  },
  {
    title: "Uma automação construída ao vivo",
    desc: "Um agente ou automação construído no seu negócio, durante a imersão.",
  },
  {
    title: "Plano de 90 dias",
    desc: "Com responsáveis, metas e o critério de sucesso de cada frente.",
  },
  {
    title: "30 dias de follow-up",
    desc: "2 calls de revisão em grupo para destravar a execução.",
  },
];

const programacao = [
  {
    dia: "Dia 1",
    title: "Cartografar e Arquitetar",
    items: [
      "Manhã: mapeamento do trabalho real da sua empresa — você mede, não opina.",
      "Tarde: priorização por ROI e desenho do processo futuro — divisão humano/IA, padrões técnicos, LGPD.",
    ],
  },
  {
    dia: "Dia 2",
    title: "Rodar e planejar",
    items: [
      "Manhã: construção ao vivo da sua primeira automação, com templates do Método CARGA.",
      "Tarde: plano de 90 dias, governança mínima e networking estruturado com matching por segmento.",
    ],
  },
];

const bonus = [
  "3 meses de AI Work Lab — a imersão termina, a implementação continua",
  "AI Work Starter Kit completo",
  "Apostila e gravações",
];

const faq = [
  {
    question: "Preciso levar notebook?",
    answer: "Sim — o dia 2 é mão na massa.",
  },
  {
    question: "Emite certificado?",
    answer: "Sim.",
  },
  {
    question: "E se eu não puder viajar?",
    answer:
      "Existe uma versão online compacta de 1 dia (R$ 997) — entre na lista de espera e escreva para saber a próxima data.",
  },
  {
    question: "Qual é a política de cancelamento?",
    answer:
      "Reembolso integral até 15 dias antes do evento; depois, crédito total para a próxima turma.",
  },
  {
    question: "Almoço está incluído?",
    answer: "Sim, nos dois dias.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Imersão IA que Trabalha",
  description:
    "Imersão presencial de 2 dias: backlog de automação priorizado, uma automação construída ao vivo no seu negócio e o plano de 90 dias com responsáveis e metas. Turma limitada a 40 participantes.",
  provider: {
    "@type": "Person",
    name: "Leonardo Vieira Pedrini",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "2997",
    priceCurrency: "BRL",
    availability: "https://schema.org/PreOrder",
    url: `${SITE_URL}/imersao`,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    courseWorkload: "P2D",
  },
};

const Imersao = () => {
  useEffect(() => {
    trackEvent("product_view", {
      product_id: "imersao-ia-que-trabalha",
      product_name: "Imersão IA que Trabalha",
      price_range: "2997",
    });
  }, []);

  return (
    <PageLayout
      title="Imersão IA que Trabalha — 2 dias, automação construída e plano de 90 dias"
      description="Imersão hands-on para empresários e gestores: backlog priorizado por ROI, uma automação construída ao vivo no seu negócio e o plano de 90 dias. R$ 2.997, turmas de 40 vagas."
      path="/imersao"
      jsonLd={courseJsonLd}
    >
      {/* Hero — navy imersivo */}
      <section className="bg-navy-hero relative overflow-hidden text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                Imersão presencial · Turma de 40
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.02em] md:text-6xl">
                2 dias. Você entra com a operação travada no chat e{" "}
                <span className="text-gradient-gold">sai com uma automação rodando no seu negócio.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-papel/65">
                Imersão hands-on para empresários e gestores: backlog de automação priorizado, uma
                implementação construída ao vivo e o plano de 90 dias com responsáveis e metas.
              </p>
              <p className="mt-6 font-mono text-sm text-papel/50">
                Próxima turma: data e cidade a confirmar — lista de espera aberta.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <CTAButtonWaitlist />
                <p className="text-sm text-papel/50">
                  12x R$ 297 · Grupos de 3+: R$ 2.797/vaga
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
      </section>

      {/* Para quem é */}
      <section className="border-b border-border bg-papel-light">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="Fit" title="Para quem é — e para quem não é" />
          </Reveal>
          <div className="mt-12">
            <ParaQuemGrid
              forItems={[
                "Donos e gestores que sabem que IA é prioridade e não tiveram um bloco de tempo para desenhar a implementação.",
                "Equipes de 2–3 pessoas da mesma empresa (desconto de grupo).",
              ]}
              notForItems={[
                "Quem quer assistir palestra inspiracional.",
                "Quem não tem autoridade ou time para executar o plano depois.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* O que você leva */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="Entregáveis" title="O que você leva" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {leva.map((l, i) => (
              <Reveal key={l.title} delay={(i % 2) * 120} className="h-full">
                <div className="card-lux h-full p-8 md:p-9">
                  <div className="font-mono text-3xl font-semibold text-cobre-dark">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{l.title}</h3>
                  <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">{l.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programação */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="Programação" title="Dois dias de Método CARGA aplicado ao seu negócio" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {programacao.map((d, i) => (
              <Reveal key={d.dia} delay={i * 140} className="h-full">
                <div className="card-lux h-full p-8 md:p-10">
                  <div className="eyebrow text-cobre-dark">{d.dia}</div>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{d.title}</h3>
                  <ul className="mt-6 space-y-3.5">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobre-dark" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-9 rounded-lg border border-cobre/40 bg-cobre-soft/40 p-7 md:p-9">
              <p className="font-display text-xl font-bold tracking-[-0.01em] text-foreground">Bônus incluídos</p>
              <ul className="mt-5 space-y-2.5">
                {bonus.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cobre-dark" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facilitador + Investimento */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <SectionHeading eyebrow="Facilitador" title="Leonardo Pedrini" />
                <p className="mt-9 text-base leading-relaxed text-muted-foreground">
                  Engenheiro, fundador da 4WaTT Bio Engenharia e da 4W Energia, implementador de IA em
                  operação real. A imersão aplica nas empresas dos participantes o mesmo padrão que ele
                  usa nas próprias operações.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="h-full rounded-lg border border-cobre/40 bg-cobre-soft/40 p-8 md:p-11">
                <div className="eyebrow text-cobre-dark">Investimento</div>
                <p className="mt-5 font-mono text-4xl font-semibold text-foreground">R$ 2.997</p>
                <p className="mt-4 text-base text-muted-foreground">
                  em 12x R$ 297 ou R$ 2.697 no PIX. Grupos de 3 ou mais: R$ 2.797 por vaga.
                </p>
                <p className="mt-3.5 text-sm text-muted-foreground">
                  40 vagas por turma — quando fecha, abre lista de espera.
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
            <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 max-w-3xl">
              <FAQAccordion items={faq} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lista de espera — navy */}
      <section id="lista-de-espera" className="relative overflow-hidden bg-gradient-navy text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="text-center">
                <div className="eyebrow justify-center text-cobre-light">
                  <span className="h-px w-10 bg-cobre-light/70" />
                  Lista de espera
                  <span className="h-px w-10 bg-cobre-light/70" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-papel md:text-5xl">
                  Daqui a 90 dias, ou sua operação mudou — ou você ainda está "pesquisando IA".
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-papel/65">
                  Entre na lista de espera e seja avisado quando a próxima turma abrir — com data,
                  cidade e condição de grupo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-12 rounded-lg bg-papel p-6 text-foreground shadow-premium md:p-9">
                <LeadCaptureForm
                  source="imersao_lista_espera"
                  submitLabel="Entrar na lista de espera"
                  showCargo={false}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

/** CTA do hero — rola até a lista de espera e registra intenção de compra. */
const CTAButtonWaitlist = () => (
  <a
    href="#lista-de-espera"
    onClick={() =>
      trackEvent("checkout_start", {
        product_id: "imersao-ia-que-trabalha",
        value: 2997,
        currency: "BRL",
        cta_position: "hero",
      })
    }
    className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-cobre px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-grafite-900 shadow-gold transition-all duration-300 ease-luxury hover:-translate-y-0.5 hover:bg-cobre-light focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  >
    Entrar na lista de espera
  </a>
);

export default Imersao;
