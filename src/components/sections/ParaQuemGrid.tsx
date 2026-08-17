import { Check, X } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

interface ParaQuemGridProps {
  forItems: string[];
  notForItems: string[];
  forTitle?: string;
  notForTitle?: string;
}

/**
 * Grade "É para você se / Não é para você se" — padrão das páginas de oferta.
 */
const ParaQuemGrid = ({
  forItems,
  notForItems,
  forTitle = "É para você se",
  notForTitle = "Não é para você se",
}: ParaQuemGridProps) => (
  <div className="grid gap-6 md:grid-cols-2">
    <Reveal className="h-full">
      <div className="h-full rounded-lg border border-medicao/30 bg-medicao-soft/40 p-8 transition-all duration-500 ease-luxury hover:-translate-y-1 hover:shadow-soft md:p-10">
        <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{forTitle}</h3>
        <ul className="mt-6 space-y-3.5">
          {forItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
              <Check className="mt-1 h-4 w-4 shrink-0 text-medicao" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
    <Reveal delay={140} className="h-full">
      <div className="h-full rounded-lg border border-risco/25 bg-risco-soft/30 p-8 transition-all duration-500 ease-luxury hover:-translate-y-1 hover:shadow-soft md:p-10">
        <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">{notForTitle}</h3>
        <ul className="mt-6 space-y-3.5">
          {notForItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-foreground/85">
              <X className="mt-1 h-4 w-4 shrink-0 text-risco" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </div>
);

export default ParaQuemGrid;
