import { useEffect, useRef, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronDown,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Menu,
  Package,
  Rocket,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import CTAButton from "@/components/conversion/CTAButton";
import { cn } from "@/lib/utils";

type Solucao = { to: string; label: string; desc: string; icon: LucideIcon };
type Grupo = { title: string; items: Solucao[] };

const grupos: Grupo[] = [
  {
    title: "Comece aqui",
    items: [
      {
        to: "/solucoes",
        label: "AI Work Starter Kit",
        desc: "Seus primeiros 10 agentes de trabalho, pré-configurados",
        icon: Package,
      },
    ],
  },
  {
    title: "Aprender e aplicar",
    items: [
      {
        to: "/cursos",
        label: "Formação IA que Trabalha",
        desc: "6 semanas até um processo real em produção",
        icon: GraduationCap,
      },
      {
        to: "/imersao",
        label: "Imersão IA que Trabalha",
        desc: "2 dias hands-on: backlog priorizado e automação ao vivo",
        icon: Zap,
      },
      {
        to: "/comunidade",
        label: "AI Work Lab",
        desc: "Laboratório mensal de implementação, com rituais e templates",
        icon: Users,
      },
    ],
  },
  {
    title: "Implementar comigo",
    items: [
      {
        to: "/consultoria",
        label: "Mentoria AI Work",
        desc: "12 semanas, 3 processos em produção, KPI contratado",
        icon: Compass,
      },
      {
        to: "/consultoria",
        label: "AI Implementation Sprint",
        desc: "90 dias: IA como infraestrutura do seu negócio",
        icon: Rocket,
      },
      {
        to: "/empresas",
        label: "Enterprise AI Transformation",
        desc: "Programa anual multi-área: estratégia, governança e squads",
        icon: Building2,
      },
    ],
  },
];

const navLinks = [
  { to: "/metodo", label: "Método" },
  { to: "/cases", label: "Cases" },
  { to: "/insights", label: "Insights" },
  { to: "/sobre", label: "Sobre" },
];

/** Rotas cujo topo é navy escuro — header pode nascer transparente sobre o hero. */
const DARK_HERO_ROUTES = ["/", "/metodo", "/cases"];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const overlayRoute = DARK_HERO_ROUTES.includes(location.pathname);
  const solid = scrolled || !overlayRoute;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Fecha o mega menu ao trocar de rota */
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const solucoesActive = ["/solucoes", "/cursos", "/imersao", "/comunidade", "/consultoria", "/empresas", "/diagnostico"].some(
    (p) => location.pathname.startsWith(p),
  );

  const linkCls = (isActive: boolean) =>
    cn(
      "text-[13px] font-medium tracking-[0.06em] transition-colors duration-300",
      isActive ? "text-cobre-light" : "text-papel/70 hover:text-papel",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxury",
        solid
          ? "border-b border-papel/10 bg-grafite-900/90 shadow-[0_16px_50px_-24px_rgba(4,12,22,0.7)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-8">
        <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="L.V. Pedrini — início">
          <span className="font-display text-xl font-extrabold tracking-[-0.02em] text-papel">
            L.V. <span className="text-cobre">Pedrini</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          <div onMouseEnter={openMega} onMouseLeave={scheduleClose}>
            <button
              type="button"
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1.5 text-[13px] font-medium tracking-[0.06em] outline-none transition-colors duration-300",
                solucoesActive || megaOpen ? "text-cobre-light" : "text-papel/70 hover:text-papel",
              )}
            >
              Soluções
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform duration-300 ease-luxury", megaOpen && "rotate-180")}
              />
            </button>
          </div>

          {navLinks.map((l) => (
            <RouterNavLink key={l.to} to={l.to} className={({ isActive }) => linkCls(isActive)}>
              {l.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <CTAButton to="/diagnostico" size="sm" trackingParams={{ cta_position: "header" }}>
            Diagnóstico gratuito
          </CTAButton>
        </div>

        {/* Mobile */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className="p-2 text-papel" aria-label="Abrir menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-sm overflow-y-auto border-papel/10 bg-grafite-900 text-papel"
          >
            <SheetTitle className="font-display text-left text-lg font-extrabold tracking-[-0.02em] text-papel">
              L.V. <span className="text-cobre">Pedrini</span>
            </SheetTitle>

            {/* Destaque: AI Work Audit */}
            <Link
              to="/diagnostico"
              onClick={() => setMobileOpen(false)}
              className="mt-8 flex items-start gap-4 rounded-lg border border-cobre/40 bg-cobre/10 p-5 transition-colors duration-300 hover:bg-cobre/15"
            >
              <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-cobre-light" />
              <span>
                <span className="block font-display text-base font-bold text-papel">AI Work Audit</span>
                <span className="mt-1 block text-xs leading-relaxed text-papel/60">
                  Diagnóstico gratuito — seu nível de maturidade em 8 minutos
                </span>
              </span>
            </Link>

            <nav className="mt-8 flex flex-col" aria-label="Menu mobile">
              {grupos.map((g) => (
                <div key={g.title} className="mb-7">
                  <div className="eyebrow px-1 text-cobre-light/80">{g.title}</div>
                  <div className="mt-3 flex flex-col gap-1">
                    {g.items.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-md px-1 py-2.5 text-lg font-semibold text-papel transition-colors duration-300 hover:text-cobre-light"
                      >
                        {s.label}
                        <ArrowUpRight className="h-4 w-4 text-papel/30" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="hairline-gold" />

              <div className="mt-7 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-1 py-2.5 text-lg font-semibold text-papel transition-colors duration-300 hover:text-cobre-light"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-9">
                <CTAButton to="/diagnostico" className="w-full" trackingParams={{ cta_position: "mobile_menu" }}>
                  Diagnóstico gratuito
                </CTAButton>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mega menu — painel amplo navy com grupos + coluna de destaque */}
      {megaOpen && (
        <div
          className="absolute inset-x-0 top-full hidden lg:block"
          onMouseEnter={openMega}
          onMouseLeave={scheduleClose}
        >
          <div className="animate-mega-in border-b border-papel/10 bg-grafite-900/[0.98] shadow-[0_40px_80px_-30px_rgba(4,12,22,0.8)] backdrop-blur-xl">
            <div className="hairline-gold" />
            <div className="container grid grid-cols-4 gap-10 py-10">
              {grupos.map((g) => (
                <div key={g.title}>
                  <div className="eyebrow text-cobre-light/80">{g.title}</div>
                  <ul className="mt-5 space-y-1.5">
                    {g.items.map((s) => (
                      <li key={s.label}>
                        <Link
                          to={s.to}
                          className="group -mx-3 flex items-start gap-3.5 rounded-lg px-3 py-3 transition-colors duration-300 hover:bg-papel/[0.05]"
                        >
                          <s.icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-cobre-light/70 transition-colors duration-300 group-hover:text-cobre-light" />
                          <span>
                            <span className="flex items-center gap-1.5 text-sm font-semibold text-papel transition-colors duration-300 group-hover:text-cobre-light">
                              {s.label}
                              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                            </span>
                            <span className="mt-1 block text-xs leading-relaxed text-papel/50">{s.desc}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Coluna de destaque — AI Work Audit */}
              <div className="rounded-lg border border-cobre/35 bg-gradient-to-b from-cobre/[0.12] to-transparent p-6">
                <div className="eyebrow text-cobre-light">Gratuito</div>
                <ClipboardCheck className="mt-5 h-7 w-7 text-cobre-light" />
                <div className="mt-4 font-display text-lg font-bold leading-snug text-papel">
                  AI Work Audit
                </div>
                <p className="mt-2 text-xs leading-relaxed text-papel/55">
                  8 minutos, 14 perguntas. Seu nível de maturidade e os 3 processos candidatos à
                  automação.
                </p>
                <Link
                  to="/diagnostico"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-cobre-light transition-colors duration-300 hover:text-papel"
                >
                  Fazer o diagnóstico
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
