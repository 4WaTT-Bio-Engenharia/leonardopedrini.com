import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import LeadCaptureForm from "@/components/conversion/LeadCaptureForm";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import { ArrowUpRight } from "lucide-react";

const empresas = [
  {
    name: "4WaTT Bio Engenharia",
    papel: "Empresa principal",
    text: "Engenharia de resíduos, biogás e biometano. Projetos complexos de alto valor, para quem entende que o risco de um projeto é técnico antes de ser financeiro. Estudo de viabilidade sério, projeto executivo sério, construção séria.",
    link: "https://www.4watt.tech",
    linkLabel: "Visitar www.4watt.tech",
  },
  {
    name: "4W Energia",
    papel: "Energia",
    text: "Energia renovável com modelo recorrente. Software próprio, operação regulada e resultado que o cliente vê na fatura, mês após mês.",
  },
  {
    name: "BESS4YOU",
    papel: "Armazenamento",
    text: "Armazenamento de energia em baterias. A peça que falta na matriz renovável: gerar energia limpa é metade do problema. Entregar na hora certa é a outra.",
  },
  {
    name: "Carbon4you",
    papel: "Carbono",
    text: "Créditos de carbono com lastro real de projeto. Nada de papel sem operação por trás: cada crédito nasce de engenharia executada.",
  },
  {
    name: "Traciona AI",
    papel: "Tecnologia e IA",
    text: "Inteligência artificial, software e automação aplicados à operação real do ecossistema. Uso IA e programação na minha rotina de gestão como ferramenta do líder: relatórios de comercial, marketing e financeiro toda semana, sem retrabalho.",
  },
];

const principios = [
  {
    name: "Uma tese só",
    desc: "Engenharia é a garantia técnica que dá segurança ao investidor. Todas as empresas nascem dessa mesma convicção.",
  },
  {
    name: "Gente acima da média",
    desc: "Nenhuma empresa do ecossistema roda em cima de uma pessoa só. O time constrói, eu lidero a estratégia e respondo pelo resultado.",
  },
  {
    name: "Dado antes de opinião",
    desc: "Cada empresa opera com indicadores semanais. O que não é medido, não é gerenciado. O que não é gerenciado, vira surpresa.",
  },
];

const numeros = [
  { valor: 200, prefix: "+", suffix: "", label: "projetos de engenharia entregues" },
  { valor: 2, prefix: "+", suffix: " GW", label: "de potência somada em projetos" },
  { valor: 5, prefix: "+R$ ", suffix: " bi", label: "em CAPEX conduzidos" },
  { valor: 5, prefix: "", suffix: "", label: "empresas em operação" },
];

const Empresas = () => (
  <PageLayout
    title="Ecossistema de empresas — 4WaTT, 4W Energia, BESS4YOU, Carbon4you, Traciona AI"
    description="Cinco empresas, uma tese: engenharia é a garantia técnica do investidor. Resíduos, biogás, biometano, energia, armazenamento, carbono e tecnologia."
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
              Ecossistema
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.02em] md:text-6xl">
              Cinco empresas.{" "}
              <span className="text-gradient-gold">Uma tese só.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-papel/65">
              Resíduos, biogás, biometano, energia, armazenamento em baterias e carbono. Cada empresa
              nasceu de um problema real que eu vi de perto, e todas respondem à mesma convicção: a
              engenharia é a garantia técnica que dá segurança ao investidor.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-11">
              <CTAButton
                href="https://www.4watt.tech"
                size="lg"
                trackingParams={{ cta_position: "hero", page: "/empresas" }}
              >
                Conhecer a 4WaTT
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    {/* As empresas */}
    <section className="border-b border-border bg-papel-light">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="As empresas"
            title="Nenhuma nasceu de planilha de pitch"
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {empresas.map((e, i) => (
            <Reveal key={e.name} delay={Math.min(i * 90, 360)} className="h-full">
              <article className="flex h-full flex-col bg-card p-9 transition-colors duration-500 ease-luxury hover:bg-papel-light">
                <div className="eyebrow text-cobre-dark">{e.papel}</div>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-foreground">
                  {e.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{e.text}</p>
                {e.link && (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark transition-colors duration-300 hover:text-foreground"
                  >
                    {e.linkLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Números */}
    <section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="container relative py-20 md:py-24">
        <Reveal>
          <div className="eyebrow text-cobre-light">
            <span className="h-px w-10 bg-cobre-light/70" />
            O ecossistema, em número
          </div>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {numeros.map((n, i) => (
            <Reveal key={n.label} delay={i * 100}>
              <div className="border-l border-papel/15 pl-6">
                <div className="font-mono text-5xl font-bold leading-none tracking-[-0.02em] text-papel md:text-6xl">
                  {n.prefix}
                  <CountUp to={n.valor} suffix={n.suffix} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-papel/55">{n.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Princípios de operação */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Como o ecossistema opera"
            title="O que cinco empresas me ensinaram sobre gerir qualquer negócio"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {principios.map((p, i) => (
            <Reveal key={p.name} delay={i * 110} className="h-full">
              <div className="card-lux h-full p-9">
                <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-foreground">{p.name}</h3>
                <p className="mt-3.5 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Esses princípios não ficam trancados nas minhas empresas. É exatamente esse padrão que eu
            levo para a mesa de fundadores e empresas que me procuram para pensar estratégia.
          </p>
        </Reveal>
      </div>
    </section>

    {/* CTA — conversar */}
    <section id="conversar" className="relative overflow-hidden bg-gradient-navy text-papel">
      <div className="absolute inset-0 bg-grid-navy" aria-hidden />
      <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
      <div className="container relative py-24 md:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="text-center">
              <div className="eyebrow justify-center text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                Vamos conversar
                <span className="h-px w-10 bg-cobre-light/70" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-papel md:text-5xl">
                Projeto de energia, resíduos ou biometano na mesa?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-papel/65">
                Conte o contexto. Se for para a 4WaTT, eu encaminho direto para o time de engenharia.
                Se for para pensar estratégia comigo, a gente já marca. Resposta em até 48h úteis.
              </p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-12 rounded-lg bg-papel p-6 text-foreground shadow-premium md:p-9">
              <LeadCaptureForm
                source="empresas_conversa"
                submitLabel="Enviar contexto"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Empresas;
