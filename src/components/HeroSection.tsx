import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/75" />
      
      <div className="relative z-10 container mx-auto px-6 py-20 text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
          A Biblioteca Essencial do MEI:{" "}
          <span className="text-primary">3 Livros que Valem um MBA</span> e as
          Ferramentas para Aplicá-los Hoje.
        </h1>

        <h2 className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
          Receba de graça os resumos executivos dos 3 livros que me ajudaram a
          construir um ecossistema de R$ 5 bilhões, junto com planilhas e
          templates prontos para você usar no seu negócio hoje.
        </h2>

        <button
          onClick={scrollToForm}
          className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-5 rounded-lg animate-glow-pulse hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          QUERO MINHA BIBLIOTECA GRATUITA
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
