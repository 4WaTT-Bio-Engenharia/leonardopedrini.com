import leonardoImg from "@/assets/leonardo-about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-2xl" />
            <img
              src={leonardoImg}
              alt="Leonardo Pedrini — Founder e Consultor Estratégico"
              className="relative w-full max-w-md mx-auto rounded-lg shadow-premium object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-card border border-border rounded-md p-4 shadow-premium max-w-[220px]">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-1">
                Founder & CEO
              </div>
              <div className="font-display text-lg text-foreground leading-tight">
                4Watt Tech · 4W Energia · TracionaAI
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.25em] text-primary font-medium">
              <span className="h-px w-8 bg-primary" />
              Leonardo Pedrini
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight text-foreground mb-8">
              De projetos de{" "}
              <span className="text-gradient-gold italic">R$ 5 bilhões</span>{" "}
              para a realidade do seu negócio.
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Engenheiro, empreendedor e founder de um ecossistema de
                infraestrutura, energia e tecnologia. Construí tudo do zero —
                sem herança e sem network — validando mercados, estruturando
                operações e liderando áreas comerciais e financeiras.
              </p>
              <p>
                A mesma disciplina de gestão que aplico em projetos bilionários
                é o que trago para a mesa de pequenos e médios empresários.
                Traduzo o complexo em simples e implemento{" "}
                <span className="text-foreground font-medium">
                  estratégia + IA
                </span>{" "}
                no dia a dia do seu negócio.
              </p>
              <p>
                Meu compromisso não é dar palpite. É construir com você um
                sistema operacional de crescimento que sobreviva à sua
                ausência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
