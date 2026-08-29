import { cases } from "@/data/cases";
import Reveal from "@/components/motion/Reveal";

type LogoStripProps = {
  label?: string;
};

const LogoStrip = ({ label = "Onde o método foi aplicado" }: LogoStripProps) => (
  <div className="border-b border-border bg-papel-light">
    <div className="container py-12 md:py-14">
      <Reveal>
        <p className="eyebrow justify-center text-center text-aco-dark">
          {label}
        </p>
      </Reveal>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
        {cases.map((c, i) => (
          <Reveal key={c.id} as="li" delay={i * 60} y={12} className="flex items-center">
            {c.logo ? (
              <img
                src={c.logo}
                alt={`Logo ${c.name}`}
                loading="lazy"
                className="h-7 w-auto max-w-[150px] object-contain opacity-70 grayscale transition duration-500 ease-luxury hover:opacity-100 hover:grayscale-0 md:h-8"
              />
            ) : (
              <span className="font-display text-lg font-bold tracking-[-0.01em] text-foreground/55 transition-colors duration-500 ease-luxury hover:text-foreground md:text-xl">
                {c.short}
              </span>
            )}
          </Reveal>
        ))}
      </ul>
    </div>
  </div>
);

export default LogoStrip;
