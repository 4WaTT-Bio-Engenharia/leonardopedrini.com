import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/analytics";
import { Globe, Linkedin, Users } from "lucide-react";

const links = [
  {
    label: "Site oficial",
    sub: "leonardopedrini.com",
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
    label: "Comunidade",
    sub: "Acesso a aulas, ferramentas e IAs",
    href: "https://www.leonardopedrini.com/comunidade",
    icon: Users,
    internal: false,
    trackingParams: { destination: "comunidade" },
  },
];

const LinkBio = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-navy px-6 py-16 text-papel">
      <SEO
        title="Leonardo Pedrini — Links"
        description="Acesse o site oficial, LinkedIn e a comunidade de Leonardo Pedrini: engenharia de crescimento, método, dados e IA aplicada para pequenas empresas."
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

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        {/* Foto */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cobre-light/40 via-cobre/20 to-transparent blur-sm" aria-hidden />
          <img
            src="/leonardo-de-pe-fundo-branco.png"
            alt="Leonardo Pedrini"
            className="relative h-28 w-28 rounded-full border border-cobre/40 object-cover shadow-premium"
          />
        </div>

        {/* Nome */}
        <h1 className="mt-6 font-display text-2xl font-extrabold tracking-[-0.02em]">
          L.V. <span className="text-cobre">Pedrini</span>
        </h1>
        <p className="mt-2 max-w-xs text-center text-sm leading-relaxed text-papel/55">
          Engenharia de crescimento para pequenas empresas: método, dados e IA aplicada.
        </p>

        <div className="hairline-gold mt-7 w-24" aria-hidden />

        {/* Botões */}
        <nav className="mt-7 flex w-full flex-col gap-3.5" aria-label="Links">
          {links.map((l) => {
            const Icon = l.icon;
            const cls =
              "group flex w-full items-center gap-4 rounded-lg border border-papel/12 bg-papel/[0.04] px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 ease-luxury hover:-translate-y-0.5 hover:border-cobre/50 hover:bg-papel/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-cobre/50";
            const inner = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cobre/30 bg-cobre/10 text-cobre-light transition-colors duration-300 group-hover:bg-cobre/20">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold tracking-tight text-papel">
                    {l.label}
                  </span>
                  <span className="text-xs text-papel/45">{l.sub}</span>
                </span>
                <span className="font-mono text-[11px] text-cobre-light/50 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </>
            );

            if (l.internal) {
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() =>
                    trackEvent("link_bio_click", {
                      form_location: "link-bio",
                      ...l.trackingParams,
                    })
                  }
                  className={cls}
                >
                  {inner}
                </a>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("link_bio_click", {
                    form_location: "link-bio",
                    ...l.trackingParams,
                  })
                }
                className={cls}
              >
                {inner}
              </a>
            );
          })}
        </nav>

        <p className="mt-10 font-mono text-[11px] text-papel/30">
          © {new Date().getFullYear()} L.V. Pedrini
        </p>
      </div>
    </div>
  );
};

export default LinkBio;
