import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/#" + id);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight">
          <span className="text-primary">LP</span>
          <span className="text-foreground/50 mx-1.5">·</span>
          <span className="text-foreground">Traciona</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("dores")} className="hover:text-foreground transition-colors">Dores</button>
          <button onClick={() => scrollTo("sprint")} className="hover:text-foreground transition-colors">A Sprint</button>
          <button onClick={() => scrollTo("como-funciona")} className="hover:text-foreground transition-colors">Como funciona</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-foreground transition-colors">FAQ</button>
        </nav>

        <button
          onClick={() => scrollTo("lead-form")}
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
        >
          Quero meu diagnóstico
        </button>
      </div>
    </header>
  );
};

export default Navbar;
