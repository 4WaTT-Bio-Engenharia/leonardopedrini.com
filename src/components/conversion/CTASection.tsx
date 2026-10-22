import type { ReactNode } from "react";
import CTAButton from "@/components/conversion/CTAButton";
import Reveal from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: ReactNode;
  description?: ReactNode;
  /** Rota do CTA principal — default "/consultoria". */
  ctaTo?: string;
  ctaLabel?: string;
  /** CTA secundário opcional (outline). */
  secondaryTo?: string;
  secondaryLabel?: string;
  /** Tema escuro (navy imersivo) é o default — bloco de fechamento. */
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Bloco final de CTA reutilizável para o fechamento de páginas.
 * Versão dark: navy imersivo com brilho champagne, grid fino e hairline dourada.
 */
const CTASection = ({
  title,
  description,
  ctaTo = "/consultoria",
  ctaLabel = "Agendar sessão estratégica",
  secondaryTo,
  secondaryLabel,
  tone = "dark",
  className,
}: CTASectionProps) => (
  <section
    className={cn(
      "relative overflow-hidden",
      tone === "dark" ? "bg-navy-hero text-papel" : "bg-muted",
      className,
    )}
  >
    {tone === "dark" && <div className="absolute inset-0 bg-grid-navy" aria-hidden />}
    <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
    <div className="container relative py-28 md:py-40">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2
          className={cn(
            "font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-[-0.02em]",
            tone === "dark" ? "text-papel" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mx-auto mt-7 max-w-xl text-lg leading-relaxed",
              tone === "dark" ? "text-papel/65" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton to={ctaTo} size="lg" trackingParams={{ cta_position: "closing_section" }}>
            {ctaLabel}
          </CTAButton>
          {secondaryTo && secondaryLabel && (
            <CTAButton
              to={secondaryTo}
              size="lg"
              variant="outline"
              withArrow={false}
              className={tone === "dark" ? "border-papel/30 text-papel hover:border-cobre-light hover:text-cobre-light" : undefined}
              trackingParams={{ cta_position: "closing_section" }}
            >
              {secondaryLabel}
            </CTAButton>
          )}
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
