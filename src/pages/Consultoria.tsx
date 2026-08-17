import { useEffect } from "react";
import { Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import CTAButton from "@/components/conversion/CTAButton";
import FAQAccordion from "@/components/conversion/FAQAccordion";
import LeadCaptureForm from "@/components/conversion/LeadCaptureForm";
import Reveal from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";

const comparativo = [
  { label: "Formato", mentoria: "Grupo de até 12 empresas, 12 semanas", sprint: "Projeto com squad, 90 dias" },
  { label: "Resultado", mentoria: "3 processos em produção", sprint: "4–6 frentes implantadas, equipe treinada" },
  { label: "Encontros", mentoria: "Semanal, ao vivo, 2h + canal direto", sprint: "Sprints semanais + canal direto com o squad" },
  { label: "Investimento", mentoria: "R$ 9.997 (12x R$ 997)", sprint: "R$ 45.000 (3x R$ 15.000)" },
  { label: "Vagas", mentoria: "12 por turma", sprint: "4 empresas por trimestre" },
  { label: "Indicado para", mentoria: "Dono/gestor que executa com o time", sprint: "Empresa que quer a transformação entregue" },
];

const fases = [
  {
    id: "F1",
    periodo: "Semanas 1–2",
    name: "Diagnóstico e Desenho",
    desc: "Cartografia dos processos, baseline e escolha das frentes.",
  },
  {
    id: "F2",
    periodo: "Semanas 3–5",
    name: "Fundação",
    desc: "Dados, integrações, governança e LGPD.",
  },
  {
    id: "F3",
    periodo: "Semanas 6–10",
    name: "Implementação",
    desc: "Agentes e automações em produção, sprint a sprint.",
  },
  {
    id: "F4",
    periodo: "Semanas 11–12",
    name: "Transferência",
    desc: "Treinamento da equipe, documentação, rituais de operação, handover.",
  },
];

const frentes = [
  "Atendimento com agente",
  "Funil e CRM com IA",
  "Cockpit de indicadores",
  "Automação financeira",
  "Base de conhecimento respondendo com seus documentos",
  "Geração de propostas",
  "Backoffice automatizado",
  "Política de IA e LGPD",
];

const faq = [
  {
    question: "Quem opera isso depois que você sair?",
    answer:
      "A fase de Transferência existe para isso: dono interno treinado, documentação e rituais. Dependência eterna de consultor é falha de projeto, não modelo de receita.",
  },
  {
    question: "Quanto custa no total, com tudo?",
    answer:
      "O preço é fechado e público. Custos de ferramentas e licenças são estimados no blueprint, antes de você assinar.",
  },
  {
    question: "Meu time vai resistir.",
    answer:
      "Por isso o método inclui dono interno e treinamento — IA imposta de fora para dentro não sobrevive ao primeiro mês.",
  },
  {
    question: "E a LGPD?",
    answer:
      "Dossiê de dados por processo, política de uso e human-in-the-loop onde erro custa caro. Incluído, não opcional.",
  },
];

const Consultoria = () => {
  useEffect(() => {
    trackEvent("product_view", {
      product_id: "mentoria-ai-work",
      product_name: "Mentoria AI Work",
      price_range: "9997",
    });
    trackEvent("product_view", {
      product_id: "ai-implementation-sprint",
      product_name: "AI Implementation Sprint",
      price_range: "45000",
    });
  }, []);

  return (
    <PageLayout
      title="Consultoria — Mentoria AI Work e AI Implementation Sprint"
      description="Implementação assistida com KPI contratado: Mentoria AI Work (12 semanas, 3 processos em produção, R$ 9.997) ou AI Implementation Sprint (90 dias, 4–6 frentes implantadas, R$ 45.000). Aplicação com retorno em 48h."
      path="/consultoria"
    >
      {/* Hero — navy imersivo */}
      <section className="bg-navy-hero relative overflow-hidden text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                Implementação assistida
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-[-0.02em] md:text-6xl">
                Implementação assistida,{" "}
                <span className="text-gradient-gold">com KPI contratado</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-papel/65">
                Você já passou da fase do curso. O que falta não é conhecimento — é execução com alguém
                que já construiu empresas. Duas modalidades, um mesmo padrão: processo desenhado, sistema
                em produção, número no relatório.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-11 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <CTAButton
                  href="#aplicacao"
                  size="lg"
                  trackingParams={{ cta_position: "hero", page: "/consultoria" }}
                >
                  Aplicar para a próxima turma
                </CTAButton>
                <p className="text-sm text-papel/50">
                  Aplicação não é compromisso de compra. Respondemos em até 48h.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
      </section>

      {/* As duas modalidades */}
      <section className="border-b border-border bg-papel-light">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="As duas modalidades"
              title="Você executa com o time — ou a gente entrega com o squad"
            />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 overflow-x-auto rounded-lg border border-border bg-card shadow-soft">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-5 py-4"> </th>
                    <th className="px-5 py-4 font-display text-lg font-bold text-foreground">Mentoria AI Work</th>
                    <th className="px-5 py-4 font-display text-lg font-bold text-foreground">AI Implementation Sprint</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {comparativo.map((row) => (
                    <tr key={row.label} className="border-b border-border transition-colors duration-300 last:border-0 hover:bg-secondary/40">
                      <td className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.15em]">{row.label}</td>
                      <td className="px-5 py-4">{row.mentoria}</td>
                      <td className="px-5 py-4">{row.sprint}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#aplicacao" trackingParams={{ cta_position: "comparison", offer: "mentoria" }}>
                Aplicar para a Mentoria
              </CTAButton>
              <CTAButton href="#aplicacao" variant="outline" trackingParams={{ cta_position: "comparison", offer: "sprint" }}>
                Aplicar para o Sprint
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Como funciona — CARGA em 4 fases */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Como funciona"
              title="O Método CARGA em 4 fases de Sprint"
            />
          </Reveal>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fases.map((f, i) => (
              <li key={f.id} className="h-full">
                <Reveal delay={i * 100} className="h-full">
                  <div className="card-lux h-full p-7">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-2xl font-semibold text-cobre-dark">{f.id}</span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">{f.periodo}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold tracking-[-0.01em] text-foreground">{f.name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8 frentes */}
      <section className="border-b border-border bg-secondary/50">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Escopo"
              title="O que sai funcionando — 8 frentes, escolhemos 4–6 por projeto"
            />
          </Reveal>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {frentes.map((f, i) => (
              <li key={f}>
                <Reveal delay={Math.min(i * 60, 300)}>
                  <div className="flex items-start gap-3 rounded-md border border-border bg-card px-5 py-4 text-base text-foreground/85 transition-colors duration-300 hover:border-cobre/50">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cobre-dark" />
                    {f}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Investimento e garantias */}
      <section className="border-b border-border">
        <div className="container py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <SectionHeading eyebrow="Investimento" title="Preços públicos porque você merece comparar" />
                <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                  Como referência típica observada em propostas que avaliamos, diagnósticos custam
                  R$ 15–60 mil e pilotos, R$ 30–120 mil. O Sprint entrega
                  implantação completa a preço de piloto — e a Mentoria entrega 3 processos em produção
                  por menos que um único diagnóstico tradicional.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-start gap-3 text-base text-foreground/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cobre-dark" />
                    <span><strong>Mentoria AI Work — R$ 9.997</strong> (12x R$ 997) · 12 vagas por turma</span>
                  </li>
                  <li className="flex items-start gap-3 text-base text-foreground/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cobre-dark" />
                    <span><strong>AI Implementation Sprint — R$ 45.000</strong> (3x R$ 15.000) · 4 empresas por trimestre</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="h-full rounded-lg border border-cobre/40 bg-cobre-soft/40 p-8 md:p-11">
                <div className="eyebrow text-cobre-dark">Garantias</div>
                <ul className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Da aplicação:</strong> aplicar não é comprar ·
                    retorno em até 48h · seus dados protegidos.
                  </li>
                  <li>
                    <strong className="text-foreground">Do Sprint:</strong> se ao fim de 90 dias os KPIs
                    contratados não forem atingidos por falha de execução nossa, estendemos o trabalho
                    sem custo até atingir — conforme termo contratual assinado, que define KPIs e o que
                    caracteriza falha de execução nossa.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-papel-light">
        <div className="container py-24 md:py-32">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Objeções honestas, respostas diretas" />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 max-w-3xl">
              <FAQAccordion items={faq} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Aplicação — navy imersivo */}
      <section id="aplicacao" className="relative overflow-hidden bg-gradient-navy text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="text-center">
                <div className="eyebrow justify-center text-cobre-light">
                  <span className="h-px w-10 bg-cobre-light/70" />
                  Aplicação
                  <span className="h-px w-10 bg-cobre-light/70" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-papel md:text-5xl">
                  O custo de mais 3 meses sem decidir é maior que o da aplicação. E a aplicação não custa nada.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-papel/65">
                  Conte sobre a empresa e o processo que mais dói. Respondemos em até 48h úteis com o
                  encaixe — Mentoria, Sprint ou outro degrau da escada.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-12 rounded-lg bg-papel p-6 text-foreground shadow-premium md:p-9">
                <LeadCaptureForm
                  source="consultoria_aplicacao"
                  submitLabel="Aplicar agora"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Consultoria;
