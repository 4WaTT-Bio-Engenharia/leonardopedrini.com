import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import Reveal from "@/components/motion/Reveal";
import { SITE_URL } from "@/components/SEO";
import leonardoHero from "@/assets/leonardo-terno-preto.jpg";
import leonardoLivro from "@/assets/leonardo-livro.jpg";

const timeline = [
  {
    period: "2011–2014",
    title: "Chão de fábrica",
    text: "Jovem aprendiz na Ford, torneiro CNC. A lição que ficou para sempre: processo se mede, ou não existe.",
  },
  {
    period: "2014–2019",
    title: "Multinacional e formação",
    text: "Engenharia mecânica e engenharia de energia, mestrados pela UTFPR e pelo IFG. Supply chain na Electrolux, com Lean, VSM e DMAIC na operação real, e duas menções honrosas internacionais. MBA em engenharia financeira e gestão de risco pela Columbia University.",
  },
  {
    period: "2015",
    title: "4WaTT Bio Engenharia",
    text: "Co-fundei a empresa que virou minha principal operação: engenharia de resíduos, biogás e biometano, com projetos complexos de alto valor. Hoje sou CEO. Aprendizado: o risco é técnico antes de ser financeiro.",
  },
  {
    period: "2020",
    title: "4W Energia",
    text: "Fundei uma empresa de energia renovável com modelo recorrente: software, operação regulada e resultado na fatura do cliente. Aprendizado: quem assina o cheque não compra tecnologia. Compra resultado.",
  },
  {
    period: "Hoje",
    title: "Ecossistema e advisory",
    text: "Cinco empresas em operação, um time de gente acima da média e, cada vez mais, uma mesa de decisão que não é só a minha: fundadores e empresas que me chamam para pensar junto.",
  },
];

const credenciais = [
  "Dupla titulação: engenharia mecânica e engenharia de energia",
  "Mestrado em engenharia elétrica (UTFPR) e em engenharia, gestão e tecnologia (IFG)",
  "MBA em engenharia financeira e gestão de risco, Columbia University",
  "Direito regulatório do setor elétrico (CEDIN), Six Sigma (University of Georgia), ciência de dados (University of Michigan), arquitetura de redes (Cisco Academy)",
  "+200 projetos de engenharia, +2 GW de potência, +R$ 5 bi em CAPEX",
  "Conselho consultivo APEEL",
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonardo Vieira Pedrini",
  url: `${SITE_URL}/sobre`,
  jobTitle: "Engenheiro, fundador e CEO da 4WaTT",
  description:
    "Engenheiro, fundador e CEO da 4WaTT Bio Engenharia. Fundador de empresas de energia, resíduos e tecnologia. Atua como advisor, conselheiro e consultor de estratégia.",
};

const Sobre = () => (
  <PageLayout
    title="Sobre Leonardo Vieira Pedrini"
    description="Engenheiro, fundador e CEO da 4WaTT. Da fábrica à operação de cinco empresas: a trajetória de quem transforma problema difícil em negócio que dá resultado."
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
                Engenheiro por formação. Fundador por vocação. Estrategista por necessidade.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Eu não escolhi empreender porque era fácil. Escolhi porque queria construir o que eu
                acreditava, e ninguém ia construir por mim. Esta é a trajetória, e o que ela pode
                acrescentar na sua mesa.
              </p>
            </Reveal>
          </div>
          <Reveal delay={300} y={36} className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl border border-cobre/30" aria-hidden />
              <img
                src={leonardoHero}
                alt="Retrato de Leonardo Vieira Pedrini, engenheiro e CEO da 4WaTT"
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
          <SectionHeading eyebrow="Trajetória" title="Do torno CNC à mesa de cinco empresas" />
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

    {/* Como eu penso — navy */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-28 md:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionHeading
                eyebrow="Como eu penso"
                tone="dark"
                title="Um cientista de negócios, com a mão na operação"
              />
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 space-y-7 text-lg leading-relaxed text-papel/70">
                <p>
                  Sou autista nível 1. Penso melhor quando a informação é visual, literal e
                  estruturada. Talvez por isso o método tenha virado minha assinatura: hipótese,
                  dado, teste, decisão. Tudo o que entra na minha mesa passa por esse funil.
                </p>
                <p>
                  Lidero cinco empresas ao mesmo tempo, em setores que a maioria considera difíceis:
                  resíduos, biogás, biometano, energia, armazenamento em baterias e carbono. Difícil
                  é o ponto. Se fosse fácil, qualquer um fazia.
                </p>
                <p>
                  Não resolvo tudo sozinho. Monto a estratégia com as pessoas certas e dou crédito ao
                  time quando o trabalho é dele. Minha ambição convive com o lado humano, nunca no
                  lugar dele.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={240} y={36} className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl border border-cobre/25" aria-hidden />
              <img
                src={leonardoLivro}
                alt="Leonardo Pedrini de terno, segurando um livro"
                className="relative w-full rounded-lg border border-papel/15 object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Credenciais */}
    <section className="border-b border-border">
      <div className="container py-28 md:py-36">
        <Reveal>
          <SectionHeading eyebrow="Formação e marcos" title="Estudo sério, resultado sério" />
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {credenciais.map((c, i) => (
            <li key={c}>
              <Reveal delay={Math.min(i * 70, 350)}>
                <div className="h-full bg-card px-7 py-6 text-base leading-relaxed text-foreground/85 transition-colors duration-500 ease-luxury hover:bg-papel-light">
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
              Trajetória boa é a que vira método na mesa dos outros
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Se algo do que você leu aqui conversa com o momento da sua empresa, o próximo passo é
              simples.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton
                to="/consultoria"
                size="lg"
                trackingParams={{ cta_position: "sobre_cta" }}
              >
                Agendar sessão estratégica
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
