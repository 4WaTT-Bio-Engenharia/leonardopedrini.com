import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/analytics";
import { Globe, Linkedin, Users } from "lucide-react";
import authorPhoto from "@/assets/leonardo-rosto-linkbio.png";

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
    sub: "Ferramentas e conteúdo exclusivo que geram valor na vida real",
    href: "https://www.leonardopedrini.com/comunidade",
    icon: Users,
    internal: false,
    trackingParams: { destination: "comunidade" },
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

        {/* Nome */}
        <h1
          className="mt-6 font-display text-2xl font-extrabold tracking-[-0.02em] motion-reduce:animate-none"
          style={rise(1)}
        >
          L.V. <span className="text-cobre">Pedrini</span>
        </h1>
        <p
          className="mt-2 max-w-xs text-center text-sm leading-relaxed text-papel/55 motion-reduce:animate-none"
          style={rise(2)}
        >
          Engenharia de crescimento para pequenas empresas: método, dados e IA aplicada.
        </p>

        <div className="hairline-gold mt-7 w-24 motion-reduce:animate-none" aria-hidden style={rise(3)} />

        {/* Botões 3D */}
        <nav className="mt-7 flex w-full flex-col gap-3.5" aria-label="Links">
          {links.map((l, i) => {
            const Icon = l.icon;
            const delay = rise(i + 4);
            const cls =
              "group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border border-papel/12 bg-papel/[0.05] px-5 py-4 pb-5 text-left backdrop-blur-sm shadow-[0_5px_0_0_hsl(41_35%_44%)] transition-all duration-300 ease-luxury hover:-translate-y-0.5 hover:border-cobre/55 hover:bg-papel/[0.09] hover:shadow-[0_7px_0_0_hsl(41_49%_59%)] active:translate-y-1 active:shadow-[0_1px_0_0_hsl(41_35%_44%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cobre/50 motion-reduce:animate-none";
            const highlight =
              "pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.10] to-transparent";
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
