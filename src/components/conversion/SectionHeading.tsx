import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Eyebrow em Montserrat uppercase, ex.: "O MÉTODO". */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Tema claro (off-white) ou escuro (navy) — para uso sobre fundos escuros. */
  tone?: "light" | "dark";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, description, align = "left", tone = "light", className }: SectionHeadingProps) => (
  <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
    {eyebrow && (
      <div
        className={cn(
          "eyebrow mb-5",
          align === "center" && "justify-center",
          tone === "light" ? "text-cobre-dark" : "text-cobre-light",
        )}
      >
        <span className={cn("h-px w-10", tone === "light" ? "bg-cobre-dark/70" : "bg-cobre-light/70")} />
        {eyebrow}
        {align === "center" && (
          <span className={cn("h-px w-10", tone === "light" ? "bg-cobre-dark/70" : "bg-cobre-light/70")} />
        )}
      </div>
    )}
    <h2
      className={cn(
        "font-display text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.06] tracking-[-0.02em]",
        tone === "light" ? "text-foreground" : "text-papel",
      )}
    >
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "mt-6 max-w-2xl text-lg leading-relaxed",
          align === "center" && "mx-auto",
          tone === "light" ? "text-muted-foreground" : "text-papel/65",
        )}
      >
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
