import type { ReactNode, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { trackEvent, type EventParams } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  /** Rota interna (react-router). */
  to?: string;
  /** Link externo. */
  href?: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  /** Nome do evento — default "cta_click". */
  trackingEvent?: string;
  trackingParams?: EventParams;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-md font-semibold uppercase transition-all duration-300 ease-luxury focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const variants = {
  /* Dourado champagne sólido, texto navy — o CTA de luxo */
  primary:
    "bg-cobre text-grafite-900 shadow-gold hover:bg-cobre-light hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-14px_hsl(40_45%_50%/0.5)] active:translate-y-0",
  /* Ghost refinado — hairline + texto, herda a cor do contexto */
  outline:
    "border border-foreground/25 bg-transparent text-foreground hover:border-cobre-dark hover:text-cobre-dark hover:-translate-y-0.5",
};

const sizes = {
  sm: "px-5 py-2.5 text-[11px] tracking-[0.14em]",
  md: "px-7 py-3.5 text-xs tracking-[0.14em]",
  lg: "px-9 py-4 text-[13px] tracking-[0.16em]",
};

const CTAButton = ({
  to,
  href,
  variant = "primary",
  size = "md",
  trackingEvent = "cta_click",
  trackingParams,
  withArrow = true,
  className,
  children,
  onClick,
}: CTAButtonProps) => {
  const cls = cn(base, variants[variant], sizes[size], className);

  const handleClick = (e: MouseEvent) => {
    trackEvent(trackingEvent, {
      cta_label: typeof children === "string" ? children : undefined,
      cta_destination: to || href,
      ...trackingParams,
    });
    onClick?.(e);
  };

  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} onClick={handleClick}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href || "#"} className={cls} onClick={handleClick}>
      {inner}
    </a>
  );
};

export default CTAButton;
