import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logoBranca from "@/assets/logo-branca.png";

const navLinks = [
  { to: "/", hash: "", label: "Início" },
  { to: "/#atuacao", hash: "#atuacao", label: "Atuação" },
  { to: "/#projetos", hash: "#projetos", label: "Projetos" },
  { to: "/#sobre", hash: "#sobre", label: "Sobre mim" },
  { to: "/#empresas", hash: "#empresas", label: "Empresas" },
  { to: "/blog", hash: "", label: "Blog" },
  { to: "/#contato", hash: "#contato", label: "Contato" },
];

const DARK_HERO_ROUTES = ["/", "/metodo", "/consultoria", "/empresas"];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const overlayRoute = DARK_HERO_ROUTES.includes(location.pathname);
  const solid = scrolled || !overlayRoute;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (link: (typeof navLinks)[number]) => {
    if (link.to === "/blog") return location.pathname.startsWith("/blog");
    if (location.pathname !== "/") return false;
    if (link.to === "/") return !location.hash;
    return location.hash === link.hash;
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxury",
        solid
          ? "border-b border-papel/10 bg-grafite-900/90 shadow-[0_16px_50px_-24px_rgba(4,12,22,0.7)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-5">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Leonardo Pedrini, início">
          <img src={logoBranca} alt="" className="h-9 w-9" />
          <span className="font-display text-sm font-bold tracking-[-0.01em] text-papel sm:text-base">
            Leonardo Pedrini
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              aria-current={isActive(link) ? "page" : undefined}
              className={cn(
                "whitespace-nowrap text-xs font-medium tracking-[0.035em] transition-colors duration-300",
                isActive(link) ? "text-cobre-light" : "text-papel/70 hover:text-papel",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <button className="p-2 text-papel" aria-label="Abrir menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-sm overflow-y-auto border-papel/10 bg-grafite-900 text-papel"
          >
            <SheetTitle className="flex items-center gap-3 text-left">
              <img src={logoBranca} alt="" className="h-8 w-8" />
              <span className="font-display text-base font-bold text-papel">Leonardo Pedrini</span>
            </SheetTitle>
            <nav className="mt-10 flex flex-col" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive(link) ? "page" : undefined}
                  className={cn(
                    "border-b border-papel/10 px-1 py-4 font-display text-xl font-semibold transition-colors duration-300",
                    isActive(link) ? "text-cobre-light" : "text-papel hover:text-cobre-light",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="mt-8 text-sm leading-relaxed text-papel/50">
              Engenharia e gestão para projetos de energia, com atenção aos riscos, aos custos e aos resultados.
            </p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default SiteHeader;
