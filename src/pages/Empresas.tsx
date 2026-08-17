import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import FAQAccordion from "@/components/conversion/FAQAccordion";
import LeadCaptureForm from "@/components/conversion/LeadCaptureForm";
import Reveal from "@/components/motion/Reveal";
import { Check } from "lucide-react";

const jornada = [
  {
    step: "01",
    name: "Executive Brief",
    desc: "Conversa executiva de 45 minutos: contexto, restrições e o que o board precisa ver. Sem compromisso.",
  },
  {
    step: "02",
    name: "AI Opportunity Assessment",
    desc: "Diagnóstico executivo de 90 minutos, gratuito: mapa de oportunidades priorizado por ROI.",
  },
  {
    step: "03",
    name: "Workshop Executivo",
    desc: "Alinhamento de liderança: estratégia, critérios de aceite e a escolha do processo do piloto.",
  },
  {
    step: "04",
    name: "Piloto (6–8 semanas)",
    desc: "Um processo em produção com KPI contratado e critérios de aceite formais. Você valida com evidência.",
  },
  {
    step: "05",
    name: "Implantação",
    desc: "Sprints por área com squad dedicado: integração com legado, evals contínuos, formação in-company.",
  },
  {
    step: "06",
    name: "Retainer",
    desc: "Programa anual: comitê mensal de IA, relatório trimestral de ROI ao board, roadmap de 12 meses.",
  },
];

const governanca = [
  "Evals contínuos — avaliação sistemática de qualidade das saídas da IA",
  "Human-in-the-loop nos pontos onde erro custa caro",
  "Dossiê de dados por processo, com política de uso",
  "Monitoramento de drift e de custo",
  "Graus de autonomia promovidos por evidência, não por entusiasmo",
  "Jurídico e segurança participando desde a fase de projeto",
];

const faq = [
  {
    question: "Você é uma pessoa, não uma empresa — como garante continuidade?",
    answer:
      "Método documentado, squad técnico, garantias contratuais e transferência de conhecimento como entregável. A continuidade é desenhada, não prometida.",
  },
  {
    question: "Compliance e segurança aprovam?",
    answer:
      "O dossiê LGPD e a arquitetura de evals são entregáveis de cada processo — seus times jurídico e de segurança participam desde a fase de projeto.",
  },
  {
    question: "Vocês têm referências em projetos deste porte?",
    answer:
      "A porta de entrada recomendada é um piloto de 6–8 semanas com critérios de aceite: você valida com evidência antes de qualquer compromisso anual. Publicamos apenas cases com baseline, resultado e autorização.",
  },
];

const Empresas = () => (
  <PageLayout
    title="Enterprise AI Transformation — IA como infraestrutura corporativa"
    description="Programa anual para empresas com operação complexa: estratégia, governança, implantação por squads e formação in-company, com o Método CARGA. A partir de R$ 150.000/ano."
    path="/empresas"
  >
    {/* Hero — navy imersivo */}
    <section className="bg-navy-hero relative overflow-hidden text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-24 md:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow text-cobre-light">
              <span className="h-px w-10 bg-cobre-light/70" />
              Enterprise · Programa anual
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.02em] md:text-6xl">
              Seus pilotos de IA não precisam de mais apresentação.{" "}
              <span className="text-gradient-gold">Precisam entrar em produção.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-papel/65">
              Programa anual para empresas com operação complexa: estratégia, governança, implantação por
              squads e formação in-company — com o Método CARGA como sistema operacional de IA.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-11">
              <CTAButton href="#executive-brief" size="lg" trackingParams={{ cta_position: "hero", page: "/empresas" }}>
                Solicitar Executive Brief
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    {/* O problema enterprise */}
    <section className="border-b border-border bg-papel-light">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="O problema enterprise"
            title="O piloto funciona no sandbox e morre no ERP"
          />
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              O padrão se repete: o fornecedor some depois do go-live. Ninguém fala de operação e
              manutenção — só de implantação. E o board continua perguntando qual é a estratégia de IA.
            </p>
            <p>
              Empresas brasileiras já testam mais agentes de IA que as americanas (Intel/IDC, 2025). O
              gargalo não é experimentar. É implantar com integração, segurança e governança.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Jornada */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="A jornada"
            title="Do Executive Brief ao retainer — evidência antes de compromisso"
            description="Nenhuma etapa exige confiança cega: cada porta abre com um critério de aceite e um entregável objetivo."
          />
        </Reveal>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jornada.map((j, i) => (
            <li key={j.step} className="h-full">
              <Reveal delay={(i % 3) * 100} className="h-full">
                <div className="card-lux h-full p-8">
                  <div className="font-mono text-3xl font-semibold text-cobre-dark">{j.step}</div>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.01em] text-foreground">{j.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{j.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* O programa */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading eyebrow="O programa — 12 meses" title="Enxergar. Projetar. Operar." />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Enxergar",
              desc: "Diagnóstico executivo e mapa de oportunidades priorizado por ROI.",
            },
            {
              name: "Projetar",
              desc: "Roadmap multi-área, arquitetura e business case por processo.",
            },
            {
              name: "Operar",
              desc: "Sprints de implantação por área, formação in-company de líderes e equipes, comitê mensal de IA e relatório trimestral de ROI ao board.",
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 110} className="h-full">
              <div className="card-lux h-full p-8 md:p-9">
                <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{p.name}</h3>
                <p className="mt-3.5 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Governança */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Governança, evals e LGPD"
              title="Produção com critério — não fé"
              description="Cada processo entra em produção com critérios de aceite, evals contínuos e grau de autonomia promovido por evidência."
            />
          </Reveal>
          <ul className="space-y-3.5 self-center">
            {governanca.map((g, i) => (
              <li key={g}>
                <Reveal delay={Math.min(i * 70, 350)}>
                  <div className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cobre-dark" />
                    {g}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Por que um implementador + investimento */}
    <section className="border-b border-border bg-papel-light">
      <div className="container py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeading eyebrow="Por que um implementador" title="Consultorias entregam slides; ferramentas entregam licenças" />
              <p className="mt-9 text-base leading-relaxed text-muted-foreground">
                Eu entrego sistemas rodando — o mesmo padrão que uso nas empresas que fundei, incluindo
                uma operação regulada de energia, onde "funciona na demo" não é critério de nada. E com
                transferência real: ao final, quem opera é o seu time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="h-full rounded-lg border border-cobre/40 bg-cobre-soft/40 p-8 md:p-11">
              <div className="eyebrow text-cobre-dark">Investimento</div>
              <p className="mt-5 font-mono text-3xl font-semibold text-foreground md:text-4xl">
                A partir de R$ 150.000/ano
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Sob proposta, conforme escopo. Referência de mercado: plataformas multiagente começam em
                R$ 250 mil; transformações com equipe dedicada, em centenas de milhares por ano.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Porta de entrada recomendada: AI Opportunity Assessment (90 min, gratuito) → piloto de
                6–8 semanas com KPI contratado.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* FAQ B2B */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Perguntas de board, jurídico e TI" />
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-12 max-w-3xl">
            <FAQAccordion items={faq} />
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA — Executive Brief (navy) */}
    <section id="executive-brief" className="relative overflow-hidden bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
      <div className="container relative py-24 md:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="text-center">
              <div className="eyebrow justify-center text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                Executive Brief
                <span className="h-px w-10 bg-cobre-light/70" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-papel md:text-5xl">
                O próximo board meeting está marcado. Chegue com arquitetura, não com lista de ferramentas.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-papel/65">
                Solicite o Executive Brief: uma conversa executiva de 45 minutos sobre contexto, restrições
                e o que o seu board precisa ver. Resposta em até 48h úteis.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-12 rounded-lg bg-papel p-6 text-foreground shadow-premium md:p-9">
              <LeadCaptureForm
                source="empresas_executive_brief"
                submitLabel="Solicitar Executive Brief"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Empresas;
