const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-display text-xl font-semibold tracking-tight">
            <span className="text-primary">LP</span>
            <span className="text-foreground/60 mx-1.5">·</span>
            <span className="text-foreground">Pedrini</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("autoridade")} className="hover:text-foreground transition-colors">
            Autoridade
          </button>
          <button onClick={() => scrollTo("problemas")} className="hover:text-foreground transition-colors">
            Diagnóstico
          </button>
          <button onClick={() => scrollTo("metodo")} className="hover:text-foreground transition-colors">
            Método
          </button>
          <button onClick={() => scrollTo("sobre")} className="hover:text-foreground transition-colors">
            Sobre
          </button>
        </nav>

        <button
          onClick={() => scrollTo("lead-form")}
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
        >
          Diagnóstico Gratuito
        </button>
      </div>
    </header>
  );
};

export default Navbar;
