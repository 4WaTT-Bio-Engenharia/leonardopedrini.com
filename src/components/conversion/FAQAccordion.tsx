import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { trackEvent } from "@/lib/analytics";
import { injectJsonLd } from "@/components/SEO";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** Injeta FAQPage JSON-LD automaticamente (default true). */
  withSchema?: boolean;
  className?: string;
}

const FAQAccordion = ({ items, withSchema = true, className }: FAQAccordionProps) => {
  useEffect(() => {
    if (!withSchema || items.length === 0) return;
    return injectJsonLd([
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((i) => ({
          "@type": "Question",
          name: i.question,
          acceptedAnswer: { "@type": "Answer", text: i.answer },
        })),
      },
    ]);
  }, [items, withSchema]);

  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full", className)}
      onValueChange={(value) => {
        if (value) {
          const item = items[Number(value.replace("item-", ""))];
          trackEvent("faq_open", { faq_question: item?.question });
        }
      }}
    >
      {items.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
          <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-primary hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
