import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CTASection from "@/components/conversion/CTASection";
import Reveal from "@/components/motion/Reveal";
import CaseGallery from "@/components/sections/CaseGallery";
import { cases } from "@/data/cases";
import { trackEvent } from "@/lib/analytics";

/** Página de detalhe reutilizável para qualquer case com `photos` — dirigida por src/data/cases.ts. */
const CaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = cases.find((c) => c.id === id);

  useEffect(() => {
    if (item) trackEvent("case_detail_view", { case_id: item.id, sector: item.sector });
  }, [item]);

  if (!item) return <Navigate to="/cases" replace />;

  return (
    <PageLayout
      title={`${item.name} — case de implementação de IA`}
      description={item.text}
      path={`/cases/${item.id}`}
      flush
    >
      {/* Hero */}
      <section className="bg-navy-hero relative overflow-hidden text-papel">
        <div className="absolute inset-0 bg-grid-navy" aria-hidden />
        <div className="container relative pb-20 pt-36 md:pb-28 md:pt-48">
          <Reveal>
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 text-sm font-medium text-papel/70 transition-colors hover:text-cobre-light"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Todos os cases
            </Link>
          </Reveal>

          <div className="mt-8 max-w-3xl">
            <Reveal delay={80}>
              <div className="eyebrow text-cobre-light">
                <span className="h-px w-10 bg-cobre-light/70" />
                {item.sector}
              </div>
            </Reveal>

            {item.logo && (
              <Reveal delay={140}>
                <img
                  src={item.logo}
                  alt={`Logo ${item.name}`}
                  className="mt-7 h-10 w-auto max-w-[200px] object-contain"
                />
              </Reveal>
            )}

            <Reveal delay={200}>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] md:text-6xl">
                {item.name}
              </h1>
            </Reveal>

            <Reveal delay={280}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-papel/65">{item.text}</p>
            </Reveal>

            <Reveal delay={360}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-papel/20 bg-papel/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-papel/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            {item.site && (
              <Reveal delay={420}>
                <a
                  href={item.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-cobre-light transition-colors hover:text-papel"
                >
                  {item.siteLabel ?? item.site}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </Reveal>
            )}
          </div>
        </div>
        <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
      </section>

      {/* Galeria */}
      {item.photos && item.photos.length > 0 && (
        <section className="border-b border-border">
          <div className="container py-24 md:py-32">
            <Reveal>
              <span className="eyebrow text-aco-dark">Registros do projeto</span>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-foreground md:text-4xl">
                O processo em imagens
              </h2>
            </Reveal>
            <Reveal delay={100} className="mt-12">
              <CaseGallery photos={item.photos} />
            </Reveal>
          </div>
        </section>
      )}

      {item.note && (
        <section className="border-b border-border bg-secondary/50">
          <div className="container py-14">
            <Reveal>
              <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
                {item.note}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="Quero um resultado como esse"
        description="O AI Work Audit mede a maturidade da sua empresa em 6 dimensões e devolve os 3 processos que você deveria automatizar primeiro."
        ctaTo="/diagnostico"
        ctaLabel="Quero um diagnóstico gratuito"
        secondaryTo="/cases"
        secondaryLabel="Ver todos os cases"
      />
    </PageLayout>
  );
};

export default CaseDetail;
