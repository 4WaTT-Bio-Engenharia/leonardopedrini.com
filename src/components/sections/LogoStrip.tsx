import { cases } from "@/data/cases";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";

type LogoStripProps = {
  label?: string;
};

/** Duas cópias da lista para o loop do marquee ficar contínuo (sem salto). */
const track = [...cases, ...cases];

const LogoStrip = ({ label = "Quem confia no meu trabalho" }: LogoStripProps) => (
  <div className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy py-16 md:py-20">
    <div className="absolute inset-0 bg-grid-navy" aria-hidden />
    <div
      className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-cobre/[0.08] blur-3xl"
      aria-hidden
    />
    <div className="container relative">
      <Reveal>
        <p className="eyebrow justify-center text-center text-cobre-light">
          <span className="h-px w-10 bg-cobre-light/60" aria-hidden />
          {label}
          <span className="h-px w-10 bg-cobre-light/60" aria-hidden />
        </p>
      </Reveal>

      <p className="sr-only">
        Empresas onde o método foi aplicado: {cases.map((c) => c.name).join(", ")}.
      </p>

      <div className="group/marquee relative mt-12 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-marquee items-stretch gap-6 group-hover/marquee:[animation-play-state:paused] md:gap-8">
          {track.map((c, i) => (
            <li
              key={`${c.id}-${i}`}
              aria-hidden={i >= cases.length}
              className="animate-logo-float shrink-0"
              style={{ animationDelay: `${(i % cases.length) * 0.35}s` }}
            >
              <TiltCard
                strength={10}
                className="flex h-24 w-52 items-center justify-center rounded-2xl border border-papel/10 bg-papel/95 px-8 shadow-premium backdrop-blur-sm transition-transform duration-500 ease-luxury hover:scale-[1.04] md:h-28 md:w-60"
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`Logo ${c.name}`}
                    loading="lazy"
                    className="max-h-12 w-auto max-w-[160px] object-contain md:max-h-14"
                  />
                ) : (
                  <span className="font-display text-xl font-bold tracking-[-0.01em] text-grafite">
                    {c.short}
                  </span>
                )}
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LogoStrip;
