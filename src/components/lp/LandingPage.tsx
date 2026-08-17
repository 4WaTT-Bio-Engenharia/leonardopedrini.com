import { useEffect, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import LPLayout from "@/components/lp/LPLayout";
import SectionHeading from "@/components/conversion/SectionHeading";
import FAQAccordion, { type FAQItem } from "@/components/conversion/FAQAccordion";
import LeadCaptureForm from "@/components/conversion/LeadCaptureForm";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export interface HeroCopy {
  headline: string;
  sub: string;
  cta: string;
  note?: string;
}

export interface Objection {
  objection: string;
  response: string;
}

export interface ComparisonTable {
  /** Cabeçalhos; a última coluna é sempre o produto (destacada). */
  columns: string[];
  rows: string[][];
}

export interface LPCTA {
  /** checkout = intenção de compra (checkout_start) — sem gateway configurado, vira lista de espera (rola p/ o form); form = âncora p/ LeadCaptureForm; route = Link interno. */
  mode: "checkout" | "form" | "route";
  /** Rota interna (mode route). */
  to?: string;
  /** URL real de checkout (Hotmart/Kiwify). Ausente => lista de espera. */
  checkoutUrl?: string;
  /** Valor para o evento checkout_start. */
  value?: number;
  /** source do LeadCaptureForm (modes form e checkout-em-lista-de-espera). */
  formSource?: string;
  submitLabel?: string;
}

export interface LPConfig {
  productId: string;
  productName: string;
  priceRange: string;
  funnel: "a" | "b" | "c" | "d";
  seo: { title: string; description: string; path: string };
  heroA: HeroCopy;
  heroB: HeroCopy;
  painTitle: string;
  pain: string[];
  mechanismTitle: string;
  mechanism: string;
  benefits: string[];
  deliverablesTitle?: string;
  deliverables: string[];
  authority: string;
  objections: Objection[];
  comparison?: ComparisonTable;
  offerEyebrow?: string;
  offer: ReactNode;
  guarantee: string;
  faq: FAQItem[];
  finalTitle: string;
  finalCta: string;
  cta: LPCTA;
}

const ctaCls =
  "group inline-flex items-center justify-center gap-3 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobre-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/**
 * Renderer data-driven de LP de campanha (estrutura do doc 14, PARTE 4):
 * hero A/B (?v=b) → dor/PAS → mecanismo → benefícios → entregáveis →
 * autoridade → objeções → comparação → oferta → garantia → FAQ → CTA final.
 *
 * Enquanto não há gateway de pagamento configurado, CTAs em mode "checkout"
 * sem checkoutUrl viram lista de espera: rolam até o formulário da página,
 * mantêm checkout_start como evento de intenção e lead_submit no envio.
 */
const LandingPage = ({ config }: { config: LPConfig }) => {
  const [params] = useSearchParams();
  const variant = params.get("v") === "b" ? "B" : "A";
  const hero = variant === "B" ? config.heroB : config.heroA;
  const { cta } = config;

  useEffect(() => {
    trackEvent("product_view", {
      product_id: config.productId,
      product_name: config.productName,
      price_range: config.priceRange,
      hero_variant: variant,
      funnel: config.funnel,
      page_path: config.seo.path,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  /** checkout sem URL real = lista de espera (rola para o form da página). */
  const isWaitlist = cta.mode === "checkout" && !cta.checkoutUrl;
  const showsForm = (cta.mode === "form" || isWaitlist) && Boolean(cta.formSource);
  const ctaTarget = showsForm ? "#formulario" : cta.mode === "checkout" ? cta.checkoutUrl : undefined;

  const handleCtaClick = (position: string) => {
    if (cta.mode === "checkout") {
      trackEvent("checkout_start", {
        product_id: config.productId,
        value: cta.value,
        currency: "BRL",
        cta_position: position,
        page_path: config.seo.path,
      });
    } else {
      trackEvent("cta_click", {
        cta_label: hero.cta,
        cta_position: position,
        page_path: config.seo.path,
        funnel: config.funnel,
      });
    }
  };

  const renderCta = (label: string, position: string, note?: string, dark = false) => (
    <div className="flex flex-col items-start gap-3">
      {cta.mode === "route" && cta.to ? (
        <Link to={cta.to} className={ctaCls} onClick={() => handleCtaClick(position)}>
          {label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <a href={ctaTarget} className={ctaCls} onClick={() => handleCtaClick(position)}>
          {label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      )}
      {note && <p className={cn("text-sm", dark ? "text-papel/55" : "text-muted-foreground")}>{note}</p>}
    </div>
  );

  return (
    <LPLayout title={config.seo.title} description={config.seo.description} path={config.seo.path}>
      {/* HERO */}
      <section className="bg-navy-hero text-papel">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-cobre-light">
              <span className="h-px w-10 bg-cobre-light" />
              {config.productName}
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.06] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-papel/75 md:text-xl">{hero.sub}</p>
            <div className="mt-12">{renderCta(hero.cta, "hero", hero.note, true)}</div>
          </div>
        </div>
      </section>

      {/* DOR / PAS */}
      <section className="border-b border-border/50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="O problema" title={config.painTitle} />
            <div className="mt-8 space-y-5">
              {config.pain.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MECANISMO */}
      <section className="bg-muted/60 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="O mecanismo" title={config.mechanismTitle} />
            <p className="mt-8 border-l-2 border-primary pl-6 text-lg leading-relaxed text-foreground/85">
              {config.mechanism}
            </p>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="O que muda" title="Benefícios concretos, não promessas" />
          <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {config.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-4 rounded-md border border-border bg-card p-6">
                <span className="mt-0.5 font-mono text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-foreground/90">{b}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ENTREGÁVEIS */}
      <section className="bg-grafite py-16 text-papel md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Dentro da oferta"
            tone="dark"
            title={config.deliverablesTitle || "O que você recebe"}
          />
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
            {config.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-papel/80">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobre-light" />
                <span className="leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-3xl border-t border-papel/10 pt-8 text-sm leading-relaxed text-papel/55">
            {config.authority}
          </p>
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Sem letra miúda" title="As objeções que você já pensou" />
          <div className="mt-10 max-w-3xl space-y-6">
            {config.objections.map((o, i) => (
              <div key={i} className="rounded-md border border-border bg-card p-6">
                <p className="font-display text-lg font-medium text-foreground">“{o.objection}”</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">→ </span>
                  {o.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAÇÃO */}
      {config.comparison && (
        <section className="bg-muted/60 py-16 md:py-24">
          <div className="container">
            <SectionHeading eyebrow="Comparação honesta" title="Onde esta oferta se encaixa" />
            <div className="mt-10 overflow-x-auto rounded-md border border-border bg-card">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground" />
                    {config.comparison.columns.map((c, i) => (
                      <th
                        key={i}
                        className={cn(
                          "px-5 py-4 font-display text-base font-medium",
                          i === config.comparison!.columns.length - 1 ? "bg-accent text-accent-foreground" : "text-foreground",
                        )}
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {config.comparison.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-border/60 last:border-0">
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={cn(
                            "px-5 py-4 leading-relaxed",
                            ci === 0
                              ? "font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                              : ci === row.length - 1
                                ? "bg-accent/70 font-medium text-accent-foreground"
                                : "text-muted-foreground",
                          )}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* OFERTA + GARANTIA (+ FORM quando aplicável) */}
      <section id="formulario" className="border-y border-border/50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow={config.offerEyebrow || "Investimento"}
              title="A oferta, com preço público"
              align="center"
              className="mx-auto"
            />
            <div className="mt-10 rounded-lg border border-border bg-card p-8 text-center shadow-premium md:p-10">
              <div className="text-lg leading-relaxed text-foreground/90">{config.offer}</div>
              <div className="mt-8 flex justify-center">
                {renderCta(hero.cta, "offer")}
              </div>
              <div className="mt-8 flex items-start justify-center gap-3 border-t border-border/60 pt-6 text-left">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{config.guarantee}</p>
              </div>
            </div>
            {showsForm && cta.formSource && (
              <div className="mt-10 rounded-lg border border-border bg-card p-8 shadow-premium md:p-10">
                <h3 className="mb-2 font-display text-2xl font-medium text-foreground">
                  {isWaitlist ? "Entre para a lista de espera" : cta.submitLabel || "Envie seus dados"}
                </h3>
                {isWaitlist && (
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    As inscrições ainda não abriram. Deixe seus dados e seja avisado quando abrirem —
                    sem compromisso.
                  </p>
                )}
                <LeadCaptureForm
                  source={cta.formSource}
                  submitLabel={cta.submitLabel || (isWaitlist ? "Quero ser avisado" : "Enviar")}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Perguntas frequentes" title="Antes de decidir" />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion items={config.faq} />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-grafite py-20 text-papel md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium leading-[1.1] md:text-5xl">{config.finalTitle}</h2>
            <div className="mt-10 flex justify-center">{renderCta(config.finalCta, "final")}</div>
          </div>
        </div>
      </section>
    </LPLayout>
  );
};

export default LandingPage;
