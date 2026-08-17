import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { DIMENSIONS, candidateProcesses, routeByScore, type AuditResult } from "@/components/diagnostico/auditData";
import Reveal from "@/components/motion/Reveal";
import { trackEvent } from "@/lib/analytics";

/** Placeholder — substituir pelo número real de WhatsApp no go-live. */
const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Acabei%20de%20fazer%20o%20AI%20Work%20Audit%20e%20quero%20conversar%20sobre%20o%20resultado.";

interface ResultReportProps {
  result: AuditResult;
  answers: number[];
  firstName?: string;
}

/**
 * Relatório personalizado do AI Work Audit: nível de maturidade,
 * barras por dimensão (CSS puro), top oportunidades das dimensões
 * fracas, processos candidatos e CTA roteado por score.
 */
const ResultReport = ({ result, answers, firstName }: ResultReportProps) => {
  const route = routeByScore(result.overall);
  const candidates = candidateProcesses(answers);
  const weakestMeta = result.weakest
    .map((w) => DIMENSIONS.find((d) => d.key === w.key))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));
  // Score exibido na escala 1–5 (internamente 0–4).
  const displayScore = 1 + result.overall;

  return (
    <div className="mx-auto max-w-3xl">
      {/* Nível de maturidade — navy com score champagne */}
      <Reveal>
        <div className="bg-navy-hero relative overflow-hidden rounded-xl border border-grafite-500/40 p-9 text-center text-papel shadow-premium md:p-12">
          <div className="absolute inset-0 bg-grid-navy" aria-hidden />
          <div className="relative">
            <div className="eyebrow justify-center text-cobre-light">
              <span className="h-px w-10 bg-cobre-light/70" />
              Seu resultado{firstName ? `, ${firstName}` : ""}
              <span className="h-px w-10 bg-cobre-light/70" />
            </div>
            <div className="mt-6 font-display text-7xl font-extrabold tracking-[-0.03em] md:text-8xl">
              <span className="text-gradient-gold">{displayScore.toFixed(1).replace(".", ",")}</span>
              <span className="text-2xl font-bold text-papel/40"> / 5</span>
            </div>
            <div className="mt-5 font-display text-2xl font-bold tracking-[-0.015em] text-cobre-light md:text-3xl">
              Nível {result.level.name}
            </div>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-papel/65">{result.level.description}</p>
          </div>
        </div>
      </Reveal>

      {/* Barras por dimensão */}
      <Reveal delay={120}>
        <div className="card-lux mt-10 p-8 md:p-10">
          <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">Score por dimensão</h3>
          <div className="mt-7 space-y-6">
            {result.dimensions.map((d) => {
              const pct = (d.score / 4) * 100;
              const weak = result.weakest.some((w) => w.key === d.key);
              return (
                <div key={d.key}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground">
                      {d.label}
                      {weak && <span className="ml-2 text-cobre-dark">· prioridade</span>}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {(1 + d.score).toFixed(1).replace(".", ",")}/5
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={weak ? "h-full rounded-full bg-cobre" : "h-full rounded-full bg-success"}
                      style={{ width: `${Math.max(pct, 3)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Oportunidades das dimensões mais fracas */}
      <Reveal delay={180}>
        <div className="card-lux mt-10 p-8 md:p-10">
          <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">
            Onde atacar primeiro
          </h3>
          <div className="mt-7 space-y-9">
            {weakestMeta.map((d) => (
              <div key={d.key}>
                <div className="eyebrow mb-3.5 text-cobre-dark">
                  {d.label}
                </div>
                <ul className="space-y-3">
                  {d.opportunities.map((o, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobre-dark" />
                      <span className="leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Processos candidatos */}
      <Reveal delay={240}>
        <div className="card-lux mt-10 p-8 md:p-10">
          <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-foreground">
            3 processos candidatos à automação no seu caso
          </h3>
          <ol className="mt-7 space-y-5">
            {candidates.map((c, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-0.5 font-mono text-sm font-semibold text-cobre-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-foreground/85">{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* Roteamento por score — navy imersivo */}
      <Reveal delay={300}>
        <div className="relative mt-10 overflow-hidden rounded-xl bg-gradient-navy p-9 text-papel md:p-12">
          <div className="absolute inset-0 bg-grid-navy" aria-hidden />
          <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
          <div className="relative">
            <div className="eyebrow text-cobre-light">
              <span className="h-px w-10 bg-cobre-light/70" />
              Próximo passo recomendado
            </div>
            <h3 className="mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] md:text-4xl">{route.headline}</h3>
            <p className="mt-5 leading-relaxed text-papel/65">{route.text}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to={route.primaryTo}
                onClick={() =>
                  trackEvent("cta_click", { cta_label: route.primaryLabel, cta_position: "audit_result", cta_destination: route.primaryTo })
                }
                className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-cobre px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-grafite-900 shadow-gold transition-all duration-300 ease-luxury hover:-translate-y-0.5 hover:bg-cobre-light"
              >
                {route.primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
              </Link>
              {route.secondaryTo && route.secondaryLabel && (
                <Link
                  to={route.secondaryTo}
                  onClick={() =>
                    trackEvent("cta_click", { cta_label: route.secondaryLabel, cta_position: "audit_result", cta_destination: route.secondaryTo })
                  }
                  className="inline-flex items-center justify-center rounded-md border border-papel/25 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-papel transition-all duration-300 ease-luxury hover:border-cobre-light hover:text-cobre-light"
                >
                  {route.secondaryLabel}
                </Link>
              )}
            </div>
            <div className="mt-7 border-t border-papel/10 pt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "diagnostico_resultado", page_path: "/diagnostico" })}
                className="inline-flex items-center gap-2 text-sm font-medium text-papel/65 transition-colors duration-300 hover:text-cobre-light"
              >
                <MessageCircle className="h-4 w-4" />
                Prefere conversar? Chame no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <p className="mt-9 text-center text-sm text-muted-foreground">
        O relatório completo foi enviado para o seu e-mail. Quer acompanhar implementações reais
        toda semana?{" "}
        <Link to="/newsletter" className="font-medium text-cobre-dark transition-colors hover:text-foreground hover:underline">
          Assine a newsletter “IA que Trabalha”
        </Link>
        .
      </p>
    </div>
  );
};

export default ResultReport;
