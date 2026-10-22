import { cases } from "@/data/cases";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";

type LogoStripProps = {
  label?: string;
};

/** Duas cópias da lista para o loop do marquee ficar contínuo (sem salto). */
const track = [...cases, ...cases];

const LogoStrip = ({ label = "Quem confia no meu trabalho" }: LogoStripProps) => (
  <div className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy py-20 md:py-28">
    <div className="absolute inset-0 bg-grid-navy" aria-hidden />
    <div
      className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-cobre/[0.08] blur-3xl"
      aria-hidden
    />
    <div className="container relative">
      <Reveal>
        <p className="eyebrow justify-center text-center text-cobre-light">
          <span className="h-px w-10 bg-cobre-light/60" aria-hidden />
          Clientes e parceiros
          <span className="h-px w-10 bg-cobre-light/60" aria-hidden />
        </p>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-papel md:text-5xl">
          {label}
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-papel/55">
          Indústria, advocacia, gestão pública e condomínios. Engenharia, energia e estratégia. O
          método é o mesmo em qualquer operação.
        </p>
      </Reveal>

      <p className="sr-only">
        Empresas onde o método foi aplicado: {cases.map((c) => c.name).join(", ")}.
      </p>

      <div className="group/marquee relative mt-14 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="flex w-max animate-marquee items-stretch gap-7 group-hover/marquee:[animation-play-state:paused] md:gap-9">
          {track.map((c, i) => (
            <li
              key={`${c.id}-${i}`}
              aria-hidden={i >= cases.length}
              className="animate-logo-float shrink-0"
              style={{ animationDelay: `${(i % cases.length) * 0.35}s` }}
            >
              <TiltCard
                strength={10}
                className="flex h-32 w-64 items-center justify-center rounded-2xl border border-papel/10 bg-papel/95 px-9 shadow-premium backdrop-blur-sm transition-transform duration-500 ease-luxury hover:scale-[1.04] md:h-36 md:w-80"
              >
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={`Logo ${c.name}`}
                    loading="lazy"
                    className="max-h-16 w-auto max-w-[220px] object-contain md:max-h-20 md:max-w-[260px]"
                  />
                ) : (
                  <span className="font-display text-2xl font-bold tracking-[-0.01em] text-grafite">
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
