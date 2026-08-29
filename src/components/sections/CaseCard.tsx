import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CaseItem } from "@/data/cases";
import { trackEvent } from "@/lib/analytics";

const CaseCard = ({ item }: { item: CaseItem }) => (
  <article
    className="card-lux flex h-full flex-col p-9 md:p-11"
    onClick={() => trackEvent("case_view", { case_id: item.id, sector: item.sector })}
  >
    <div className="flex h-10 items-center">
      {item.logo ? (
        <img
          src={item.logo}
          alt={`Logo ${item.name}`}
          loading="lazy"
          className="h-8 w-auto max-w-[170px] object-contain opacity-80 grayscale transition duration-500 ease-luxury hover:opacity-100 hover:grayscale-0"
        />
      ) : (
        <span className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground/70">
          {item.short}
        </span>
      )}
    </div>

    <div className="mt-6">
      <span className="eyebrow text-cobre-dark">
        {item.owned ? "Empresa própria" : "Projeto executado"}
      </span>
      <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-foreground">
        {item.name}
      </h3>
      <div className="mt-2 font-mono text-xs text-muted-foreground">{item.sector}</div>
    </div>

    <p className="mt-6 flex-1 text-base leading-relaxed text-muted-foreground">{item.text}</p>

    <ul className="mt-7 flex flex-wrap gap-2">
      {item.tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border bg-papel-light px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-aco-dark"
        >
          {t}
        </li>
      ))}
    </ul>

    {item.photos && item.photos.length > 0 && (
      <Link
        to={`/cases/${item.id}`}
        onClick={() => trackEvent("case_detail_click", { case_id: item.id })}
        className="pressable mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-cobre-dark transition-colors hover:text-foreground"
      >
        Ver case completo
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    )}

    {item.site && (
      <a
        href={item.site}
        target="_blank"
        rel="noopener noreferrer"
        className={`pressable inline-flex items-center gap-1.5 text-sm font-semibold text-cobre-dark transition-colors hover:text-foreground ${item.photos && item.photos.length > 0 ? "mt-2" : "mt-7"}`}
      >
        {item.siteLabel ?? item.site}
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </a>
    )}

    {item.note && (
      <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground/80">
        {item.note}
      </p>
    )}
  </article>
);

export default CaseCard;
