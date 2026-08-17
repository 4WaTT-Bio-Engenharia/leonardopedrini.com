import { useEffect } from "react";
import { Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import FAQAccordion from "@/components/conversion/FAQAccordion";
import LeadCaptureForm from "@/components/conversion/LeadCaptureForm";
import ParaQuemGrid from "@/components/sections/ParaQuemGrid";
import Reveal from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";
import { SITE_URL } from "@/components/SEO";

const modulos = [
  {
    id: "M1",
    name: "Cartografar",
    desc: "Mapear processos, medir filas e escolher o primeiro candidato com a matriz impacto × automatizabilidade.",
  },
  {
    id: "M2",
    name: "Arquitetar",
    desc: "Desenhar o processo futuro: divisão humano/IA, padrão técnico, critérios de aceite e LGPD.",
  },
  {
    id: "M3",
    name: "Rodar",
    desc: "Construir agentes e automações sem código: atendimento, propostas, administrativo.",
  },
  {
    id: "M4",
    name: "Rodar em escala",
    desc: "Integrações com WhatsApp, e-mail, planilhas e CRM; sua base de conhecimento respondendo com os próprios documentos (RAG simplificado).",
  },
  {
    id: "M5",
    name: "Governar e Ampliar",
    desc: "Medir retorno, criar o backlog de automação dos próximos 12 meses.",
  },
];

const entregaveis = [
  "Um processo real do seu negócio automatizado e em produção — com baseline e resultado medidos.",
  "O mapa dos seus próximos 12 meses de automação, priorizado por ROI.",
  "A calculadora de horas economizadas configurada para o seu caso.",
];

const incluido = [
  "30+ aulas gravadas",
  "6 encontros ao vivo de tira-dúvidas",
  "15 templates",
  "10 blueprints de automação",
  "Bônus: AI Work Starter Kit completo",
  "Bônus: 2 meses de AI Work Lab",
  "Bônus: biblioteca de políticas de IA/LGPD prontas",
];

const faq = [
  {
    question: "Já comprei curso de IA e não terminei. Por que este seria diferente?",
    answer:
      "Porque o curso não termina em aula — termina em projeto. Cada módulo tem um entregável real do seu negócio, e o certificado exige um processo em produção.",
  },
  {
    question: "Preciso saber programar?",
    answer:
      "Não. As implementações usam ferramentas sem código, sempre como meio — o foco é o processo.",
  },
  {
    question: "Quanto tempo por semana?",
    answer: "3–4 horas, incluindo a implementação.",
  },
  {
    question: "E se meu negócio for \"diferente\"?",
    answer:
      "O método começa mapeando o SEU processo. A formação não assume seu negócio — ela parte dele.",
  },
  {
    question: "Tem suporte?",
    answer: "Encontros ao vivo semanais durante as 6 semanas + e-mail por 12 meses.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formação IA que Trabalha",
  description:
    "6 semanas para sair com um processo real da sua empresa rodando com IA em produção — Método CARGA, projeto final obrigatório e ROI medido. Sem código.",
  provider: {
    "@type": "Person",
    name: "Leonardo Vieira Pedrini",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    price: "1997",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/cursos`,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "P6W",
  },
};

const Cursos = () => {
  useEffect(() => {
    trackEvent("product_view", {
      product_id: "formacao-ia-que-trabalha",
      product_name: "Formação IA que Trabalha",
      price_range: "1997",
    });
  }, []);

  return (
    <PageLayout
      title="Formação IA que Trabalha — um processo em produção em 6 semanas"
      description="A formação que termina em projeto, não em aula: 5 módulos do Método CARGA aplicados ao seu negócio, encontros ao vivo e certificado que exige um processo real em produção. R$ 1.997 ou 12x R$ 197, com garantia de 15 dias."
      path="/cursos"
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
                Formação · Nível 2
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.02em] md:text-6xl">
                Em 6 semanas, um processo real da sua empresa rodando com IA —{" "}
                <span className="text-gradient-gold">em produção, não em slide</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-papel/65">
                A Formação IA que Trabalha não ensina ferramenta. Aplica o Método CARGA ao seu negócio:
                você sai com um processo automatizado, o ROI medido e o método para replicar nos próximos.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <CTAButton
                  href="#lista-espera"
                  size="lg"
                  trackingEvent="checkout_start"
                  trackingParams={{ product_id: "formacao-ia-que-trabalha", value: 1997, currency: "BRL", cta_position: "hero", intent: "waitlist" }}
                >
                  Entrar na lista de espera
                </CTAButton>
                <p className="text-sm text-papel/50">
                  Turma com encontros ao vivo · Inscrições abrem em breve — seja avisado · 12x R$ 197
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
                "Usa IA como chat e quer transformar em processo.",
                "Tem um negócio ou área com tarefas repetitivas claras.",
                "Topa entregar o projeto final — um processo real em produção.",
              ]}
              notForItems={[
                "Quer \"prompts secretos\".",
                "Procura curso para assistir sem aplicar.",
                "Espera que IA resolva um processo que não existe no papel.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* O que você sai tendo */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="Resultado" title="O que você sai tendo" />
          </Reveal>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {entregaveis.map((e, i) => (
              <li key={e} className="h-full">
                <Reveal delay={i * 110} className="h-full">
                  <div className="card-lux h-full p-8">
                    <div className="font-mono text-3xl font-semibold text-cobre-dark">{String(i + 1).padStart(2, "0")}</div>
                    <p className="mt-4 text-base leading-relaxed text-foreground/85">{e}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Módulos */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Currículo"
              title="Os 5 módulos — o Método CARGA aplicado"
              description="Cada módulo termina com um entregável real do seu negócio. A ferramenta é meio; o entregável é processo."
            />
          </Reveal>
          <ol className="mt-14 space-y-4">
            {modulos.map((m, i) => (
              <li key={m.id}>
                <Reveal delay={Math.min(i * 80, 320)}>
                  <div className="card-lux flex flex-col gap-3 p-7 sm:flex-row sm:items-start sm:gap-7 md:p-9">
                    <div className="font-mono text-sm font-semibold text-cobre-dark sm:w-12 sm:shrink-0 sm:pt-1.5">{m.id}</div>
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{m.name}</h3>
                      <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={200}>
            <div className="mt-9 rounded-lg border border-cobre/40 bg-cobre-soft/40 p-7 md:p-9">
              <p className="font-display text-xl font-bold tracking-[-0.01em] text-foreground">Projeto final obrigatório</p>
              <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">
                1 processo em produção, apresentado com baseline e resultado. Sem projeto, não há certificado.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Incluído + Instrutor */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <SectionHeading eyebrow="Incluído" title="Tudo que acompanha a formação" />
                <ul className="mt-9 space-y-3.5">
                  {incluido.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-cobre-dark" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <SectionHeading eyebrow="Instrutor" title="Quem ensina é quem implanta" />
                <p className="mt-9 text-base leading-relaxed text-muted-foreground">
                  Engenheiro, fundador da 4WaTT e da 4W Energia, com Lean, VSM e DMAIC na operação de
                  multinacional. Nenhum conteúdo aqui foi aprendido em curso de IA — foi aprendido em operação.
                </p>
                <CTAButton to="/sobre" variant="outline" className="mt-9" trackingParams={{ cta_position: "instructor" }}>
                  Conhecer a trajetória
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Starter Kit */}
      <section className="border-b border-border bg-papel-light">
        <div className="container py-24 md:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Prefere começar menor?"
                  title="AI Work Starter Kit — R$ 197"
                  description="Seus primeiros 10 agentes de trabalho, pré-configurados, com guia de instalação de 15 minutos cada. Menos que 1 hora de qualquer consultor — e o ponto de partida ideal se você ainda está nos Níveis 1–2 do Audit."
                />
                <CTAButton
                  href="#lista-espera"
                  className="mt-9"
                  trackingEvent="checkout_start"
                  trackingParams={{ product_id: "ai-work-starter-kit", value: 197, currency: "BRL", cta_position: "starter_kit", intent: "waitlist" }}
                >
                  Quero ser avisado
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <ul className="card-lux space-y-3.5 p-7 md:p-9">
                {[
                  "10 agentes pré-configurados",
                  "Guia de instalação de 15 minutos cada",
                  "Atendimento, propostas, administrativo e mais",
                  "Sem código, sem assinatura",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cobre-dark" />
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investimento — navy */}
      <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="container relative py-24 md:py-32">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="eyebrow justify-center text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                Investimento
                <span className="h-px w-10 bg-cobre-light/70" />
              </div>
              <p className="mt-8 font-mono text-5xl font-semibold md:text-6xl">
                <span className="text-gradient-gold">R$ 1.997</span>
              </p>
              <p className="mt-5 text-lg text-papel/70">
                em até 12x R$ 197 · ou R$ 1.797 no PIX
              </p>
              <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-papel/65">
                <span className="font-semibold text-papel">Garantia de 15 dias, incondicional.</span>{" "}
                Entre, assista, aplique — se não for para você, devolvo 100%.
              </p>
              <div className="mt-11">
                <CTAButton
                  href="#lista-espera"
                  size="lg"
                  trackingEvent="checkout_start"
                  trackingParams={{ product_id: "formacao-ia-que-trabalha", value: 1997, currency: "BRL", cta_position: "pricing", intent: "waitlist" }}
                >
                  Entrar na lista de espera
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lista de espera */}
      <section id="lista-espera" className="border-b border-border bg-papel-light">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <SectionHeading
                eyebrow="Lista de espera"
                title="As inscrições da próxima turma ainda não abriram."
                description="Entre para a lista e seja avisado quando as inscrições abrirem — com data da turma, garantia de 15 dias e condição de lançamento. Sem compromisso."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-12 rounded-lg border border-border bg-card p-7 shadow-premium md:p-9">
                <LeadCaptureForm
                  source="cursos_waitlist"
                  submitLabel="Entrar na lista de espera"
                  showCargo={false}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
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

      {/* CTA final — navy */}
      <section className="bg-navy-hero relative overflow-hidden text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
        <div className="container relative py-24 md:py-36">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-extrabold leading-[1.06] tracking-[-0.02em] text-papel md:text-5xl">
                Daqui a 6 semanas, você pode ter lido mais 30 posts sobre IA — ou ter um processo rodando.
              </h2>
              <div className="mt-12">
                <CTAButton
                  href="#lista-espera"
                  size="lg"
                  trackingEvent="checkout_start"
                  trackingParams={{ product_id: "formacao-ia-que-trabalha", value: 1997, currency: "BRL", cta_position: "closing_section", intent: "waitlist" }}
                >
                  Entrar na lista de espera
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Cursos;
