import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface OfferCardProps {
  /** Rótulo do degrau, ex.: "Nível 0 · Gratuito". */
  level: string;
  name: string;
  /** Preço em destaque, ex.: "R$ 1.997" ou "Gratuito". */
  price: string;
  priceNote?: string;
  /** Para quem é (ICP resumido). */
  icp: string;
  /** Promessa principal da oferta. */
  promise: string;
  to: string;
  ctaLabel: string;
  /** Destaque visual (ex.: flagship). */
  featured?: boolean;
  trackingEvent?: string;
  trackingParams?: Record<string, string | number | boolean | null | undefined>;
}

/**
 * Card de oferta da value ladder — usado em /solucoes e páginas de produto.
 */
const OfferCard = ({
  level,
  name,
  price,
  priceNote,
  icp,
  promise,
  to,
  ctaLabel,
  featured,
  trackingEvent = "cta_click",
  trackingParams,
}: OfferCardProps) => (
  <article
    className={cn(
      "flex h-full flex-col rounded-lg border bg-card p-7 transition-all duration-500 ease-luxury hover:-translate-y-1 md:p-9",
      featured
        ? "border-cobre/60 shadow-gold hover:border-cobre"
        : "border-border hover:border-cobre/50 hover:shadow-soft",
    )}
  >
    <div className="eyebrow text-cobre-dark">
      <span className="h-px w-6 bg-cobre-dark/70" />
      {level}
    </div>
    <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.015em] text-foreground">{name}</h3>
    <div className="mt-3.5 flex items-baseline gap-2">
      <span className="font-mono text-xl font-semibold text-foreground">{price}</span>
      {priceNote && <span className="text-sm text-muted-foreground">{priceNote}</span>}
    </div>
    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
      <span className="font-semibold text-foreground/80">Para quem: </span>
      {icp}
    </p>
    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{promise}</p>
    <Link
      to={to}
      onClick={() =>
        trackEvent(trackingEvent, {
          cta_label: ctaLabel,
          cta_destination: to,
          cta_position: "offer_card",
          offer: name,
          ...trackingParams,
        })
      }
      className="group mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cobre-dark transition-colors duration-300 hover:text-foreground"
    >
      {ctaLabel}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
    </Link>
  </article>
);

export default OfferCard;
