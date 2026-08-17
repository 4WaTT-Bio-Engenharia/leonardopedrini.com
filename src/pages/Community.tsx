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

const rituales = [
  {
    when: "Segunda, 8h",
    name: "Plano da Semana",
    desc: "Você declara o que coloca em produção até sexta.",
  },
  {
    when: "Quarta, 12h",
    name: "Office Hours",
    desc: "3–4 membros trazem um problema real e saem com a solução arquitetada — ao vivo, comigo.",
  },
  {
    when: "Sexta, 16h",
    name: "Demo & Wins",
    desc: "Membros mostram o que entrou em produção. Evidência, não intenção.",
  },
];

const mensais = [
  {
    name: "Desafio de Implementação",
    desc: "Tema único, template base, prazo fechado. Todo mês, uma frente nova em produção.",
  },
  {
    name: "Masterclass",
    desc: "Um caso real desmontado do zero ao ROI.",
  },
  {
    name: "Case Review",
    desc: "Os números de um membro, revisados em grupo.",
  },
];

const biblioteca = [
  "Blueprints de automação",
  "Prompts de sistema",
  "Templates de processo",
  "Políticas de IA/LGPD",
  "Planilhas de ROI",
  "Toda implementação concluída por um membro vira um template novo",
];

const faq = [
  {
    question: "Para quem é?",
    answer:
      "Para quem já passou da curiosidade: sabe que precisa implementar e falta cadência e revisão. Se você está no zero absoluto, comece pelo Starter Kit ou pela Formação.",
  },
  {
    question: "Quanto tempo exige?",
    answer:
      "Os rituais somam ~2h/semana. A implementação, você faria de qualquer jeito — aqui ela acontece com método e prazo.",
  },
  {
    question: "E se eu não implementar nada?",
    answer:
      "Nossa métrica interna é justamente essa: membros implementando toda semana. Se você travar, o onboarding e o office hours existem para destravar — e, se mesmo assim não for para você, o cancelamento é imediato.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim. E pausar por até 2 meses mantendo o preço.",
  },
];

const Community = () => {
  useEffect(() => {
    trackEvent("product_view", {
      product_id: "ai-work-lab",
      product_name: "AI Work Lab",
      price_range: "297_mes",
    });
  }, []);

  return (
    <PageLayout
      title="AI Work Lab — o laboratório de implementação de IA"
      description="Todo mês, uma automação ou agente em produção no seu negócio: rituais semanais, desafios mensais, office hours e biblioteca viva na plataforma Circle. R$ 297/mês ou R$ 2.970/ano, com 7 dias de teste."
      path="/comunidade"
    >
      {/* Hero — navy imersivo */}
      <section className="bg-navy-hero relative overflow-hidden text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                AI Work Lab · Assinatura
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.02em] md:text-6xl">
                Todo mês, uma automação ou agente{" "}
                <span className="text-gradient-gold">em produção no seu negócio.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-papel/65">
                O AI Work Lab não é grupo de WhatsApp nem biblioteca de aulas. É um laboratório de
                implementação: rituais semanais, desafios mensais, revisão de especialista e accountability.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <CTAButton
                  href="#lista-espera"
                  size="lg"
                  trackingEvent="checkout_start"
                  trackingParams={{ product_id: "ai-work-lab", value: 297, currency: "BRL", cta_position: "hero", intent: "waitlist" }}
                >
                  Entrar na lista de espera
                </CTAButton>
                <p className="text-sm text-papel/50">
                  Inscrições abrem em breve — entre na lista e seja avisado · R$ 297/mês ou R$ 2.970/ano (2 meses grátis)
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
      </section>

      {/* Anti-promessa + North Star */}
      <section className="relative overflow-hidden border-b border-grafite-500/30 bg-grafite-900 text-papel">
        <div className="container py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <div className="eyebrow text-cobre-light">
                  <span className="h-px w-10 bg-cobre-light/70" />
                  Anti-promessa
                </div>
                <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-papel md:text-5xl">
                  Aqui não tem "ferramenta da semana".
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-papel/65">
                  Não tem aula por aula. Não tem grupo com 400 mensagens. Tem implementação com data,
                  dono e resultado medido.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="h-full rounded-lg border border-cobre/35 bg-gradient-to-b from-cobre/[0.10] to-transparent p-8 md:p-11">
                <div className="eyebrow text-cobre-light">
                  North Star do laboratório
                </div>
                <p className="mt-5 font-display text-2xl font-bold leading-snug tracking-[-0.015em] text-papel md:text-3xl">
                  Implementações em produção — toda semana, por membro.
                </p>
                <p className="mt-5 text-base leading-relaxed text-papel/65">
                  A métrica que norteia o Lab não é aula assistida nem mensagem postada: é a % de membros
                  com evidência de implementação nos últimos 7 dias. Se você implementa, o Lab funciona.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-b border-border bg-papel-light">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Como funciona"
              title="Rituais fixos — ritual previsível vira hábito"
              description="Na plataforma Circle: espaços, eventos ao vivo, biblioteca e diretório de membros, com app mobile. Um canal de avisos no WhatsApp lembra os rituais — sem virar grupo aberto."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {rituales.map((r, i) => (
              <Reveal key={r.name} delay={i * 110} className="h-full">
                <div className="card-lux h-full p-8">
                  <div className="eyebrow text-cobre-dark">{r.when}</div>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.01em] text-foreground">{r.name}</h3>
                  <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {mensais.map((m, i) => (
              <Reveal key={m.name} delay={i * 110} className="h-full">
                <div className="h-full rounded-lg border border-dashed border-border bg-card/60 p-8 transition-colors duration-500 ease-luxury hover:border-cobre/40">
                  <div className="eyebrow text-aco-dark">Todo mês</div>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.01em] text-foreground">{m.name}</h3>
                  <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Biblioteca viva */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="A biblioteca viva"
                title="Templates que nascem de implementações reais"
                description="A biblioteca cresce com o laboratório, não só comigo: toda implementação concluída por um membro vira um template novo, revisado e documentado."
              />
            </Reveal>
            <ul className="space-y-3.5 self-center">
              {biblioteca.map((b, i) => (
                <li key={b}>
                  <Reveal delay={Math.min(i * 70, 350)}>
                    <div className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-cobre-dark" />
                      {b}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Para quem é / não é */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="Fit" title="Para quem é — e para quem não é" />
          </Reveal>
          <div className="mt-12">
            <ParaQuemGrid
              forTitle="É para você se"
              notForTitle="Não é para você se"
              forItems={[
                "Já passou da curiosidade: sabe que precisa implementar e faltam cadência e revisão.",
                "Quer um especialista olhando o que você construiu antes de ir para produção.",
                "Valoriza um grupo que cobra entrega — accountability com prazo e evidência.",
              ]}
              notForItems={[
                "Está no zero absoluto — nesse caso, comece pelo Starter Kit ou pela Formação.",
                "Procura conteúdo para consumir, não trabalho para entregar.",
                "Quer um grupo de networking com 400 mensagens por dia.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Planos"
              title="Escolha o ritmo — o teste é o mesmo"
              description="Ambos com 7 dias de teste. Sem fidelidade; cancele quando quiser — e, se faltar tempo, pause por até 2 meses em vez de cancelar."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="card-lux flex h-full flex-col p-8 md:p-11">
                <div className="eyebrow text-aco-dark">Mensal</div>
                <p className="mt-5 font-mono text-4xl font-semibold text-foreground">
                  R$ 297<span className="text-lg text-muted-foreground">/mês</span>
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  Flexibilidade total: cancele ou pause quando quiser.
                </p>
                <CTAButton
                  href="#lista-espera"
                  className="mt-9 self-start"
                  trackingEvent="checkout_start"
                  trackingParams={{ product_id: "ai-work-lab", plan: "mensal", value: 297, currency: "BRL", cta_position: "pricing", intent: "waitlist" }}
                >
                  Quero ser avisado
                </CTAButton>
              </div>
            </Reveal>
            <Reveal delay={140} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-cobre/60 bg-card p-8 shadow-gold transition-all duration-500 ease-luxury hover:-translate-y-1 md:p-11">
                <div className="flex items-center justify-between">
                  <div className="eyebrow text-cobre-dark">Anual</div>
                  <span className="rounded-full bg-cobre-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cobre-dark">
                    2 meses grátis
                  </span>
                </div>
                <p className="mt-5 font-mono text-4xl font-semibold text-foreground">
                  R$ 2.970<span className="text-lg text-muted-foreground">/ano</span>
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                  Para quem já sabe que implementação é hábito, não evento.
                </p>
                <CTAButton
                  href="#lista-espera"
                  className="mt-9 self-start"
                  trackingEvent="checkout_start"
                  trackingParams={{ product_id: "ai-work-lab", plan: "anual", value: 2970, currency: "BRL", cta_position: "pricing", intent: "waitlist" }}
                >
                  Quero ser avisado
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lista de espera — navy */}
      <section id="lista-espera" className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
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
                  As inscrições do AI Work Lab ainda não abriram.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-papel/65">
                  Entre para a lista e seja avisado quando as inscrições abrirem — com 7 dias de
                  teste e a condição de lançamento. Sem compromisso.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-12 rounded-lg bg-papel p-6 text-foreground shadow-premium md:p-9">
                <LeadCaptureForm
                  source="comunidade_waitlist"
                  submitLabel="Entrar na lista de espera"
                  showCargo={false}
                />
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

      {/* CTA final — navy imersivo */}
      <section className="bg-navy-hero relative overflow-hidden text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
        <div className="container relative py-24 md:py-36">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-extrabold leading-[1.06] tracking-[-0.02em] text-papel md:text-5xl">
                O próximo mês vai passar de qualquer jeito. A questão é se ele termina com algo em produção.
              </h2>
              <div className="mt-12">
                <CTAButton
                  href="#lista-espera"
                  size="lg"
                  trackingEvent="checkout_start"
                  trackingParams={{ product_id: "ai-work-lab", value: 297, currency: "BRL", cta_position: "closing_section", intent: "waitlist" }}
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

export default Community;
