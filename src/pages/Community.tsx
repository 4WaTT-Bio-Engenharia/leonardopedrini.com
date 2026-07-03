import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, GraduationCap, Wrench, Bot, Users, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const includes = [
  { icon: GraduationCap, title: "Aulas semanais", text: "Gestão, vendas, finanças e IA aplicada ao seu negócio." },
  { icon: Wrench, title: "Ferramentas prontas", text: "Planilhas, dashboards e playbooks usados nas minhas empresas." },
  { icon: Bot, title: "IAs treinadas", text: "Agentes de vendas, financeiro, operação e marketing que não alucinam." },
  { icon: Users, title: "Comunidade ativa", text: "Empreendedores em crescimento trocando cases, dados e conexões." },
  { icon: Video, title: "Encontros ao vivo", text: "Sessões mensais com Leonardo para tirar dúvidas e destravar decisões." },
  { icon: Sparkles, title: "Novos conteúdos", text: "Biblioteca em expansão constante — sem custo adicional." },
];

const faqs = [
  { q: "Posso cancelar quando quiser?", a: "Sim. Cancelamento em 1 clique, sem multa, sem fidelidade." },
  { q: "Para quem é a comunidade?", a: "Micro e pequenos empreendedores que faturam entre R$ 5 mil e R$ 500 mil/mês e querem escalar com método." },
  { q: "As IAs funcionam no meu negócio?", a: "Sim. Elas são treinadas para atendimento, vendas, financeiro e operação — plugáveis em qualquer PME." },
  { q: "Como acesso o conteúdo?", a: "Plataforma web dedicada, disponível 24/7 assim que sua assinatura for confirmada." },
];

const Community = () => {
  const scrollToPricing = () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_60%)]" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-8 text-xs uppercase tracking-[0.25em] text-primary font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Comunidade Pedrini
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground mb-8">
                Escale seu negócio com{" "}
                <span className="text-gradient-gold">IA, método e mentoria.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                Por menos que um almoço, tenha acesso ao mesmo arsenal que uso
                para quadriplicar o crescimento de pequenas empresas em 18
                meses.
              </p>
              <button
                onClick={scrollToPricing}
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold text-base px-8 py-4 rounded-full shadow-gold hover:-translate-y-0.5 transition-all duration-300"
              >
                Ver plano de assinatura
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Includes */}
        <section className="py-20 md:py-28 border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl leading-tight text-foreground mb-4">
                Tudo o que você precisa em um só lugar.
              </h2>
              <p className="text-muted-foreground text-lg">
                Conteúdo, ferramentas e IA — atualizado toda semana.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {includes.map((i) => (
                <div key={i.title} className="glass rounded-3xl p-8 border border-border/60 hover:border-primary/40 transition-all duration-500 shadow-soft">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <i.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{i.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{i.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 md:py-32 bg-secondary/40 border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
                  <span className="h-px w-8 bg-primary" />
                  Assinatura
                </div>
                <h2 className="font-display text-3xl md:text-5xl leading-tight text-foreground">
                  Um plano. <span className="text-gradient-gold">Tudo incluso.</span>
                </h2>
              </div>

              <div className="relative rounded-3xl p-10 md:p-12 glass border border-primary/30 shadow-premium overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Membro Pedrini</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-6xl md:text-7xl text-foreground">R$ 19</span>
                    <span className="font-display text-4xl text-muted-foreground">,90</span>
                    <span className="text-muted-foreground ml-1">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8">Cancelamento a qualquer momento. Sem fidelidade.</p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Acesso a todas as aulas e trilhas",
                      "Ferramentas, planilhas e playbooks",
                      "IAs treinadas para vendas, financeiro e operação",
                      "Comunidade privada de empreendedores",
                      "Encontros mensais ao vivo com Leonardo",
                      "Novos conteúdos toda semana",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/#lead-form"
                    className="group w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-semibold text-base py-4 rounded-full shadow-gold hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Quero fazer parte
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    Pagamento seguro · Acesso imediato após confirmação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-28 border-t border-border/40">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-foreground text-center mb-12">
                Perguntas frequentes
              </h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <details key={f.q} className="group glass rounded-2xl border border-border/60 p-6 open:border-primary/40 transition-colors">
                    <summary className="cursor-pointer list-none flex items-center justify-between font-display text-lg text-foreground">
                      {f.q}
                      <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Community;
