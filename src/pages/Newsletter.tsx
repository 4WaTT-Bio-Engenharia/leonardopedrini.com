import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import NewsletterSignupForm from "@/components/sections/NewsletterSignupForm";

const recebe = [
  {
    title: "Uma decisão real, decomposta",
    desc: "O contexto, a premissa, o que eu medi e o que eu decidi. O raciocínio inteiro, não só a conclusão.",
  },
  {
    title: "Um método aplicável",
    desc: "O funil que uso nas minhas empresas (hipótese, dado, teste, decisão) traduzido para o seu negócio.",
  },
  {
    title: "Um número com a conta aberta",
    desc: "CAPEX, payback, custo evitado ou hora devolvida. Sempre com premissa, porque número sem premissa é enfeite.",
  },
];

const amostras = [
  {
    edicao: "Edição #001",
    titulo: "Por que eu digo não para a maioria dos projetos que chegam à 4WaTT",
    tag: "Estratégia",
  },
  {
    edicao: "Edição #002",
    titulo: "O risco é técnico antes de ser financeiro: o que isso muda no seu investimento",
    tag: "Energia",
  },
  {
    edicao: "Edição #003",
    titulo: "Como decidir entre cinco empresas e uma agenda só",
    tag: "Liderança",
  },
];

const Newsletter = () => (
  <PageLayout
    title="Newsletter — uma decisão real de negócio por semana"
    description="Toda semana na sua caixa de entrada: o que Leonardo Pedrini medi, decidiu e o que aconteceu depois. Método, energia e liderança sem hype."
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
            Uma decisão real de negócio, por semana, na sua caixa de entrada
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            O que eu medi, o que eu decidi e o que aconteceu depois. Incluindo o que deu errado,
            porque aprendizado só com vitoriosa é propaganda.
          </p>
          <div className="mx-auto mt-10 max-w-xl">
            <NewsletterSignupForm source="newsletter_page" />
          </div>
          <p className="mt-8 text-sm italic text-muted-foreground">
            Escrita por Leonardo Pedrini, engenheiro, fundador e CEO da 4WaTT. Opinião é barata.
            Método é raro.
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
          description="Um recorte do formato: sempre contexto, método e número."
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
            Uma decisão real por semana. Gratuito.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-papel/65">
            Sem hype e sem ferramenta da semana. O que funcionou, o que falhou e quanto valeu.
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
