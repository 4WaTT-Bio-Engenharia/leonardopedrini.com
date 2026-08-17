import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import NewsletterSignupForm from "@/components/sections/NewsletterSignupForm";

const recebe = [
  {
    title: "Um processo real, decomposto e automatizado",
    desc: "O mapa do processo, o desenho da automação e o que mudou na operação — passo a passo.",
  },
  {
    title: "Um template pronto para usar",
    desc: "Blueprint, prompt de sistema, planilha de ROI ou política de IA — algo que você aplica na mesma semana.",
  },
  {
    title: "Um número de ROI",
    desc: "Horas economizadas, reais recuperados ou custo evitado — com a conta aberta.",
  },
];

const amostras = [
  {
    edicao: "Edição #001",
    titulo: "O processo de propostas que levava 2 dias — e passou a levar 40 minutos",
    tag: "Automação comercial",
  },
  {
    edicao: "Edição #002",
    titulo: "Como medir o retorno de um agente de atendimento antes de assinar qualquer contrato",
    tag: "ROI de agentes",
  },
  {
    edicao: "Edição #003",
    titulo: "LGPD para quem implementa: o dossiê mínimo por processo",
    tag: "Governança",
  },
];

const Newsletter = () => (
  <PageLayout
    title="Newsletter IA que Trabalha — 1 implementação real por semana"
    description="Toda semana na sua caixa de entrada: um processo real decomposto e automatizado, um template pronto para usar e um número de ROI. Sem hype, sem ferramenta da semana."
    path="/newsletter"
  >
    {/* Hero + captura */}
    <section className="border-b border-border">
      <div className="container py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Newsletter · Gratuita
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-foreground">
            Toda semana: um processo real decomposto e automatizado, um template prático e um número de ROI
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Nada de "ferramenta da semana" nem thread motivacional. É a newsletter de quem implanta:
            o que funcionou, o que falhou e quanto valeu.
          </p>
          <div className="mx-auto mt-10 max-w-xl">
            <NewsletterSignupForm source="newsletter_page" />
          </div>
          <p className="mt-8 text-sm italic text-muted-foreground">
            Escrita por Leonardo Pedrini — engenheiro, fundador da 4WaTT e da 4W Energia.
            IA que não executa é enfeite.
          </p>
        </div>
      </div>
    </section>

    {/* O que você recebe */}
    <section className="border-b border-border bg-card">
      <div className="container py-16 md:py-24">
        <SectionHeading
          eyebrow="O que você recebe"
          title="Três blocos, um e-mail por semana"
          description="Frequência semanal, direto na sua caixa de entrada. Leitura de 5 minutos, aplicação imediata."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {recebe.map((r, i) => (
            <div key={r.title} className="rounded-lg border border-border bg-background p-6 md:p-8">
              <div className="font-mono text-3xl font-semibold text-primary">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-4 font-display text-xl font-medium text-foreground">{r.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Amostra de edições */}
    <section className="border-b border-border">
      <div className="container py-16 md:py-24">
        <SectionHeading
          eyebrow="Amostra"
          title="As primeiras edições"
          description="Um recorte do formato: sempre um processo real, um template e um número."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {amostras.map((a) => (
            <article key={a.edicao} className="flex flex-col rounded-lg border border-border bg-card p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{a.edicao}</span>
                <span className="rounded-full bg-cobre-soft px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cobre-dark">
                  {a.tag}
                </span>
              </div>
              <h3 className="mt-4 flex-1 font-display text-lg font-medium leading-snug text-foreground">
                {a.titulo}
              </h3>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Disponível para assinantes
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* CTA final */}
    <section className="bg-grafite text-papel">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium leading-[1.1] text-papel">
            1 implementação real por semana. Gratuito.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-papel/65">
            Sem hype, sem ferramenta da semana. O que funcionou, o que falhou e quanto valeu.
          </p>
          <div className="mx-auto mt-10 max-w-xl rounded-lg bg-papel p-6 text-left text-foreground md:p-8">
            <NewsletterSignupForm source="newsletter_footer" />
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Newsletter;
