import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/analytics";
import { Building2, CalendarClock, Globe, Instagram, Linkedin } from "lucide-react";
import authorPhoto from "@/assets/leonardo-blazer.jpg";
import logoAzul from "@/assets/logo-azul.png";

const links = [
  {
    label: "Agendar Sessão Estratégica",
    sub: "Até 2 horas comigo. Você sai com um plano",
    href: "/consultoria",
    icon: CalendarClock,
    internal: true,
    trackingParams: { destination: "sessao" },
  },
  {
    label: "4WaTT Bio Engenharia",
    sub: "Resíduos, biogás e biometano · www.4watt.tech",
    href: "https://www.4watt.tech",
    icon: Building2,
    internal: false,
    trackingParams: { destination: "4watt" },
  },
  {
    label: "Site oficial",
    sub: "Estratégia, engenharia e negócio",
    href: "/",
    icon: Globe,
    internal: true,
    trackingParams: { destination: "site" },
  },
  {
    label: "LinkedIn",
    sub: "leonardo-vieira-pedrini",
    href: "https://www.linkedin.com/in/leonardo-vieira-pedrini-712b0b105/",
    icon: Linkedin,
    internal: false,
    trackingParams: { destination: "linkedin" },
  },
  {
    label: "Instagram",
    sub: "@lvpedrini",
    href: "https://instagram.com/lvpedrini",
    icon: Instagram,
    internal: false,
    trackingParams: { destination: "instagram" },
  },
];

// Delays escalonados para o efeito de "surgir de baixo para cima" no carregamento.
const delays = ["0ms", "120ms", "220ms", "320ms", "420ms", "520ms", "620ms", "720ms"];

const rise = (i: number) => ({
  animation: "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
  animationDelay: delays[i] ?? `${i * 90}ms`,
});

const LinkBio = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-navy px-6 py-16 text-papel">
      <SEO
        title="Leonardo Pedrini — Links"
        description="Engenheiro, fundador e CEO da 4WaTT. Sessão Estratégica, ecossistema de empresas e redes oficiais de Leonardo Pedrini."
        path="/link-bio"
        noindex
      />

      {/* Textura de grid */}
      <div className="absolute inset-0 bg-grid-navy opacity-60" aria-hidden />
      {/* Brilho champagne radial */}
      <div
        className="absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 50% at 50% 18%, hsl(41 49% 59% / 0.16), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center motion-reduce:animate-none">
        {/* Foto */}
        <div
          className="relative motion-reduce:animate-none"
          style={rise(0)}
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cobre-light/40 via-cobre/20 to-transparent blur-sm" aria-hidden />
          <img
            src={authorPhoto}
            alt="Leonardo Pedrini"
            className="relative h-28 w-28 rounded-full border border-cobre/40 object-cover shadow-premium"
          />
        </div>

        {/* Marca */}
        <img
          src={logoAzul}
          alt="L.V. Pedrini"
          className="mx-auto mt-6 h-14 w-14 rounded-lg border border-papel/15 motion-reduce:animate-none"
          style={rise(1)}
        />
        <p
          className="mt-2 max-w-xs text-center text-sm leading-relaxed text-papel/55 motion-reduce:animate-none"
          style={rise(2)}
        >
          Engenheiro, fundador e CEO da 4WaTT. Transformo problema difícil em negócio que dá
          resultado.
        </p>

        <div className="hairline-gold mt-7 w-24 motion-reduce:animate-none" aria-hidden style={rise(3)} />

        {/* Botões 3D */}
        <nav className="mt-7 flex w-full flex-col gap-3.5" aria-label="Links">
          {links.map((l, i) => {
            const Icon = l.icon;
            const delay = rise(i + 4);
            const cls =
              "group relative flex w-full items-center gap-4 rounded-xl border border-papel/12 bg-papel/[0.05] px-5 py-4 pb-5 text-left backdrop-blur-sm shadow-[0_5px_0_0_hsl(41_35%_44%)] transition-all duration-300 ease-luxury hover:-translate-y-0.5 hover:border-cobre/55 hover:bg-papel/[0.09] hover:shadow-[0_7px_0_0_hsl(41_49%_59%)] active:translate-y-[5px] active:shadow-[0_0_0_0_hsl(41_35%_44%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cobre/50 motion-reduce:animate-none";
            const highlight =
              "pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/[0.12] to-transparent";
            const inner = (
              <>
                <span className={highlight} aria-hidden />
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cobre/30 bg-cobre/10 text-cobre-light transition-colors duration-300 group-hover:bg-cobre/20">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="relative flex flex-1 flex-col">
                  <span className="text-sm font-semibold tracking-tight text-papel">
                    {l.label}
                  </span>
                  <span className="text-xs text-papel/45">{l.sub}</span>
                </span>
                <span className="relative font-mono text-[11px] text-cobre-light/50 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </>
            );

            if (l.internal) {
              return (
                <a
                  key={l.label}
                  href={l.href}
                  style={delay}
                  onClick={() =>
                    trackEvent("link_bio_click", {
                      form_location: "link-bio",
                      ...l.trackingParams,
                    })
                  }
                  className={`${cls} motion-reduce:animate-none`}
                >
                  {inner}
                </a>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                style={delay}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("link_bio_click", {
                    form_location: "link-bio",
                    ...l.trackingParams,
                  })
                }
                className={`${cls} motion-reduce:animate-none`}
              >
                {inner}
              </a>
            );
          })}
        </nav>

        <p
          className="mt-10 font-mono text-[11px] text-papel/30 motion-reduce:animate-none"
          style={rise(7)}
        >
          © {new Date().getFullYear()} L.V. Pedrini
        </p>
      </div>
    </div>
  );
};

export default LinkBio;
