import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import Reveal from "@/components/motion/Reveal";
import { SITE_URL } from "@/components/SEO";
import leonardoAbout from "@/assets/leonardo-about.jpg";
import leonardoSentado from "@/assets/leonardo-sentado.png";

const timeline = [
  {
    period: "2011–2014",
    title: "Chão de fábrica",
    text: "Jovem aprendiz na Ford, torneiro CNC. Aprendizado: o trabalho real tem física, fila, retrabalho e custo — e se mede.",
  },
  {
    period: "2015–2019",
    title: "Engenharia e processos",
    text: "Formação em Engenharia (Universidade Positivo), mestrados UTFPR e IFG. Trainee de supply chain na Electrolux, aplicando Lean, VSM e DMAIC. Aprendizado: método antes de opinião; processo antes de ferramenta.",
  },
  {
    period: "2015",
    title: "4WaTT Bio Engenharia",
    text: "Co-fundei uma deeptech que projeta e constrói usinas que transformam resíduos em energia — engenharia, automação e tecnologia proprietárias. Aprendizado: sistema antes de esforço.",
  },
  {
    period: "2020",
    title: "4W Energia",
    text: "Fundei uma cooperativa de energia renovável por assinatura: software, operação regulada (Lei 14.300/22), resultado na fatura do cliente. Aprendizado: quem assina o cheque não compra tecnologia — compra resultado.",
  },
  {
    period: "Hoje",
    title: "Traciona AI + consultoria",
    text: "Levo para dentro das empresas dos clientes o padrão que uso nas minhas: processo desenhado, sistema implantado, operação medida.",
  },
];

const credenciais = [
  "Chão de fábrica na Ford — jovem aprendiz e torneiro CNC",
  "Supply chain na Electrolux — Lean, VSM e DMAIC aplicados na operação de multinacional",
  "Co-fundador da 4WaTT Bio Engenharia",
  "Fundador e CEO da 4W Energia — operação regulada (Lei 14.300/22)",
  "Fundador da Traciona AI",
  "Conselho consultivo APEEL (desde 2020)",
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonardo Vieira Pedrini",
  url: `${SITE_URL}/sobre`,
  jobTitle: "Engenheiro e implementador de IA",
  description:
    "Engenheiro, co-fundador da 4WaTT Bio Engenharia, fundador e CEO da 4W Energia. Implanta IA como infraestrutura de trabalho em empresas reais.",
};

const Sobre = () => (
  <PageLayout
    title="Sobre Leonardo Vieira Pedrini"
    description="Engenheiro e fundador da 4WaTT e da 4W Energia. Implanto IA como infraestrutura de trabalho em empresas reais — inclusive as minhas."
    path="/sobre"
    jsonLd={personJsonLd}
    flush
  >
    {/* Hero pessoal */}
    <section className="border-b border-border">
      <div className="container pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="eyebrow text-cobre-dark">
                <span className="h-px w-10 bg-cobre-dark/70" />
                Sobre
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.06] tracking-[-0.02em] text-foreground md:text-6xl">
                Eu resolvia problemas antes da IA. Agora a IA tornou possível resolver o que era
                inviável de automatizar.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Engenheiro, fundador de três empresas, implementador de IA. Esta é a trajetória — e por
                que ela importa para a sua.
              </p>
            </Reveal>
          </div>
          <Reveal delay={300} y={36} className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl border border-cobre/30" aria-hidden />
              <img
                src={leonardoAbout}
                alt="Retrato de Leonardo Vieira Pedrini, engenheiro e implementador de IA"
                className="relative w-full rounded-lg border border-border object-cover shadow-soft"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Linha do tempo */}
    <section className="border-b border-border bg-secondary/50">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading eyebrow="Trajetória" title="Do torno CNC à IA em produção" />
        </Reveal>
        <ol className="mt-16 space-y-0">
          {timeline.map((t, i) => (
            <li key={t.title}>
              <Reveal delay={Math.min(i * 90, 360)}>
                <div className="relative grid gap-2 border-l-2 border-cobre/40 pb-14 pl-9 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-8">
                  <span
                    className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-cobre-dark bg-background"
                    aria-hidden
                  />
                  <div className="font-mono text-sm font-medium text-cobre-dark">{t.period}</div>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{t.title}</h3>
                    <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-muted-foreground">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* O que eu acredito — navy */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-28 md:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionHeading eyebrow="O que eu acredito" tone="dark" title="IA não é para responder. É para executar trabalho." />
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 space-y-7 text-lg leading-relaxed text-papel/70">
                <p>
                  A inteligência artificial não é nova. Nova é a ilusão de que conversar com ela resolve
                  alguma coisa.
                </p>
                <p>
                  O Brasil não precisa de mais um curso de prompt. Precisa de empresas onde a IA executa
                  trabalho de verdade: responde o cliente, processa o pedido, monta a proposta — com
                  processo desenhado, gente preparada e número no relatório.
                </p>
                <p>
                  Durante quinze anos eu automatizei o que dava para automatizar com engenharia
                  clássica. O que sobrava era inviável de automatizar. A IA generativa removeu o
                  “inviável” — mas só para quem trata IA como infraestrutura, não como enfeite.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={240} y={36} className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl border border-cobre/25" aria-hidden />
              <img
                src={leonardoSentado}
                alt="Leonardo Pedrini em ambiente de trabalho, sentado"
                className="relative w-full rounded-lg border border-papel/15 object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Formação e credenciais */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading eyebrow="Trajetória" title="Marcos da trajetória" />
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {credenciais.map((c, i) => (
            <li key={c}>
              <Reveal delay={Math.min(i * 70, 350)}>
                <div className="h-full bg-card px-7 py-6 text-base text-foreground/85 transition-colors duration-500 ease-luxury hover:bg-papel-light">
                  {c}
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delay={200}>
          <p className="mt-9 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Vínculos empresariais com registro público ativo e currículo na plataforma Lattes/CNPq.
          </p>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-secondary/50">
      <div className="container py-28 md:py-36">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-foreground md:text-5xl">
              Se faz sentido para você, o próximo passo é objetivo
            </h2>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton
                to="/diagnostico"
                size="lg"
                trackingEvent="diagnostic_start"
                trackingParams={{ cta_position: "sobre_cta" }}
              >
                Fazer o AI Work Audit
              </CTAButton>
              <CTAButton
                to="/contato"
                size="lg"
                variant="outline"
                trackingParams={{ cta_position: "sobre_cta" }}
              >
                Falar comigo
              </CTAButton>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Resposta em até 48h úteis.</p>
          </div>
        </Reveal>
      </div>
    </section>
  </PageLayout>
);

export default Sobre;
