import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import CTASection from "@/components/conversion/CTASection";
import OfferCard from "@/components/sections/OfferCard";
import Reveal from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";

const offers = [
  {
    level: "Nível 0 · Gratuito",
    name: "AI Work Audit",
    price: "Gratuito",
    priceNote: "8 minutos",
    icp: "qualquer empresa em dúvida sobre por onde começar.",
    promise:
      "14 perguntas, 6 dimensões. Você recebe seu nível de maturidade, os 3 processos candidatos à automação e o próximo passo recomendado.",
    to: "/diagnostico",
    ctaLabel: "Fazer o diagnóstico",
  },
  {
    level: "Nível 1 · Entrada",
    name: "AI Work Starter Kit",
    price: "R$ 197",
    icp: "empreendedores e especialistas no início da jornada (Níveis 1–2 do Audit).",
    promise:
      "Seus primeiros 10 agentes de trabalho, pré-configurados, com guia de instalação de 15 minutos cada. Menos que 1 hora de qualquer consultor.",
    to: "/cursos",
    ctaLabel: "Instalar meus primeiros agentes",
  },
  {
    level: "Nível 2 · Formação",
    name: "Formação IA que Trabalha",
    price: "R$ 1.997",
    priceNote: "ou 12x R$ 197",
    icp: "quem quer fazer sozinho, com método (Níveis 1–2 do Audit).",
    promise:
      "6 semanas para sair com um processo real da sua empresa rodando em produção — e o método para replicar nos demais.",
    to: "/cursos",
    ctaLabel: "Ver a formação",
  },
  {
    level: "Nível 3 · Cadência",
    name: "AI Work Lab",
    price: "R$ 297/mês",
    priceNote: "7 dias de teste",
    icp: "quem sabe o que fazer e falta cadência e revisão (Nível 3 do Audit).",
    promise:
      "O laboratório de implementação: todo mês, uma automação ou agente em produção no seu negócio, com rituais, templates e office hours.",
    to: "/comunidade",
    ctaLabel: "Entrar no laboratório",
  },
  {
    level: "Nível 4 · Intensivo",
    name: "Imersão IA que Trabalha",
    price: "R$ 2.997",
    priceNote: "ou 12x R$ 297",
    icp: "empresários e gestores que aprendem melhor ao vivo e querem velocidade.",
    promise:
      "2 dias hands-on. Você sai com backlog priorizado, uma automação construída ao vivo e o plano de 90 dias. Turmas de 40 vagas.",
    to: "/imersao",
    ctaLabel: "Garantir minha vaga",
  },
  {
    level: "Nível 5 · Assistido",
    name: "Mentoria AI Work",
    price: "R$ 9.997",
    priceNote: "ou 12x R$ 997",
    icp: "dono ou gestor que executa com o próprio time e precisa de execução assistida.",
    promise:
      "12 semanas de implementação assistida em grupo: 3 processos em produção, com KPI contratado. 12 empresas por turma.",
    to: "/consultoria",
    ctaLabel: "Aplicar para a próxima turma",
  },
  {
    level: "Nível 6 · Implantação",
    name: "AI Implementation Sprint",
    price: "R$ 45.000",
    priceNote: "ou 3x R$ 15.000",
    icp: "empresas de serviços B2B que querem a transformação entregue.",
    promise:
      "90 dias para IA rodando como infraestrutura do seu negócio: 4–6 frentes implantadas, equipe treinada, KPI contratado. 4 empresas por trimestre.",
    to: "/consultoria",
    ctaLabel: "Aplicar para o próximo trimestre",
    featured: true,
  },
  {
    level: "Nível 7 · Programa anual",
    name: "Enterprise AI Transformation",
    price: "A partir de R$ 150.000/ano",
    icp: "operações complexas, múltiplas áreas ou unidades; boards que querem IA como infraestrutura.",
    promise:
      "Programa anual multi-área: estratégia, governança, squads de implantação e formação in-company.",
    to: "/empresas",
    ctaLabel: "Solicitar proposta executiva",
  },
];

const niveis = [
  { n: "N1", name: "Espectador", desc: "consome conteúdo de IA, nada implementado." },
  { n: "N2", name: "Experimentador", desc: "testes individuais, sem método nem ROI." },
  { n: "N3", name: "Estruturante", desc: "processos mapeados, primeiras automações, falta consistência." },
  { n: "N4", name: "Integrado", desc: "automações em produção, falta escala e governança." },
  { n: "N5", name: "Orquestrado", desc: "IA como infraestrutura do negócio." },
];

const situacoes = [
  {
    quote: "Uso o ChatGPT todo dia e nada mudou na operação.",
    answer:
      "Você é o gargalo: tudo depende de você lembrar de usar. Comece pelo diagnóstico — a saída é transformar uso em processo.",
    to: "/diagnostico",
    label: "Fazer o AI Work Audit",
  },
  {
    quote: "A diretoria cobrou um plano de IA e eu preciso apresentar resultado.",
    answer:
      "Você precisa de roadmap com pilotos priorizados e ROI estimado — não de mais um curso.",
    to: "/consultoria",
    label: "Ver como a mentoria funciona",
  },
  {
    quote: "Vendo o que eu sei, mas só cobro pela hora.",
    answer:
      "Seu método pode virar sistema: agentes treinados no seu acervo, com sigilo e qualidade medida.",
    to: "/consultoria",
    label: "Ver as soluções para especialistas",
  },
  {
    quote: "Quero resultado na operação sem aprender ferramenta.",
    answer:
      "Você não compra tecnologia, compra número: KPI contratado, prazo fechado, equipe treinada.",
    to: "/consultoria",
    label: "Ver o Sprint de 90 dias",
  },
  {
    quote: "Nossos pilotos de IA morrem no proof of concept.",
    answer:
      "Integração com legado, evals, LGPD e governança — produção, não apresentação.",
    to: "/empresas",
    label: "Ver o programa enterprise",
  },
];

const formatos = [
  { modo: "Fazer sozinho", ofertas: "Starter Kit, Formação", investimento: "R$ 197–1.997", tempo: "alto", velocidade: "semanas a meses" },
  { modo: "Fazer junto", ofertas: "Lab, Imersão, Mentoria", investimento: "R$ 297/mês–9.997", tempo: "médio", velocidade: "semanas" },
  { modo: "Fazer por você", ofertas: "Sprint, Enterprise", investimento: "R$ 45.000+", tempo: "baixo", velocidade: "90 dias" },
];

const Solucoes = () => (
  <PageLayout
    title="Soluções — do diagnóstico gratuito à transformação enterprise"
    description="Uma escada de valor com 8 degraus: AI Work Audit gratuito, Starter Kit, Formação, AI Work Lab, Imersão, Mentoria, Implementation Sprint e Enterprise. Entre onde está, suba quando fizer sentido."
    path="/solucoes"
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
              Uma escada, seis degraus pagos,{" "}
              <span className="text-gradient-gold">um ponto de partida gratuito</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-papel/65">
              Cada oferta existe para um nível de maturidade — e cada entrega termina indicando o próximo
              problema a resolver. Você entra onde está, sobe quando faz sentido.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-11">
              <CTAButton to="/diagnostico" size="lg" trackingParams={{ cta_position: "hero", page: "/solucoes" }}>
                Descobrir meu nível
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
    </section>

    {/* Níveis de maturidade */}
    <section className="border-b border-border bg-papel-light">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Os 5 níveis de maturidade"
            title="Antes de escolher o degrau, saiba em qual nível você está"
          />
        </Reveal>
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {niveis.map((n, i) => (
            <li key={n.n} className="h-full">
              <Reveal delay={i * 90} className="h-full">
                <div className="card-lux h-full p-6">
                  <div className="font-mono text-sm font-semibold text-cobre-dark">{n.n}</div>
                  <div className="mt-2 font-display text-lg font-bold tracking-[-0.01em] text-foreground">{n.name}</div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{n.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal delay={200}>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
            O AI Work Audit mede o seu nível em 8 minutos.{" "}
            <Link
              to="/diagnostico"
              onClick={() => trackEvent("cta_click", { cta_label: "Descobrir meu nível", cta_destination: "/diagnostico", cta_position: "maturity_levels" })}
              className="font-semibold text-cobre-dark underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Descobrir meu nível →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>

    {/* Value ladder */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="A value ladder"
            title="Os 8 degraus do ecossistema"
            description="Do diagnóstico gratuito ao programa anual enterprise — cada entrega termina indicando o próximo problema a resolver."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.name} delay={(i % 3) * 100} className="h-full">
              <OfferCard {...o} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Comparativo de formatos */}
    <section className="border-b border-border bg-papel-light">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Comparativo de formatos"
            title="Sozinho, junto ou por você"
          />
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-12 overflow-x-auto rounded-lg border border-border bg-card shadow-soft">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-4"> </th>
                  {formatos.map((f) => (
                    <th key={f.modo} className="px-5 py-4 font-display text-base font-bold text-foreground">{f.modo}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.15em]">Ofertas</td>
                  {formatos.map((f) => <td key={f.modo} className="px-5 py-4">{f.ofertas}</td>)}
                </tr>
                <tr className="border-b border-border">
                  <td className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.15em]">Investimento</td>
                  {formatos.map((f) => <td key={f.modo} className="px-5 py-4">{f.investimento}</td>)}
                </tr>
                <tr className="border-b border-border">
                  <td className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.15em]">Seu tempo</td>
                  {formatos.map((f) => <td key={f.modo} className="px-5 py-4">{f.tempo}</td>)}
                </tr>
                <tr>
                  <td className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.15em]">Velocidade de resultado</td>
                  {formatos.map((f) => <td key={f.modo} className="px-5 py-4">{f.velocidade}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Como escolher */}
    <section className="border-b border-border">
      <div className="container py-24 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Como escolher"
            title="Encontre a sua situação"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {situacoes.map((s, i) => (
            <Reveal key={s.quote} delay={(i % 2) * 120} className="h-full">
              <div className="card-lux h-full p-8 md:p-10">
                <p className="font-display text-xl font-bold leading-snug tracking-[-0.01em] text-foreground">“{s.quote}”</p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.answer}</p>
                <CTAButton
                  to={s.to}
                  variant="outline"
                  size="sm"
                  className="mt-7"
                  trackingParams={{ cta_position: "situation_card" }}
                >
                  {s.label}
                </CTAButton>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Não sabe qual é o seu degrau? O AI Work Audit responde com um score, não com uma opinião.
          </p>
        </Reveal>
      </div>
    </section>

    <CTASection
      title="Sua empresa está pronta para IA que trabalha?"
      description="Descubra em 8 minutos. O AI Work Audit mede sua maturidade em 6 dimensões e devolve um relatório com os 3 processos que você deveria automatizar primeiro."
      ctaTo="/diagnostico"
      ctaLabel="Fazer o AI Work Audit gratuito"
    />
  </PageLayout>
);

export default Solucoes;
