import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { DIMENSIONS, QUESTIONS } from "@/components/diagnostico/auditData";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface QuizFlowProps {
  /** Índice da pergunta atual (0–13). */
  step: number;
  answers: number[];
  onAnswer: (questionIndex: number, value: number) => void;
  onBack: () => void;
}

const dimensionLabel = (key: string) => DIMENSIONS.find((d) => d.key === key)?.label || key;

/**
 * Fluxo de perguntas do AI Work Audit: barra de progresso,
 * escala 0–4 com auto-avanço e navegação de volta.
 * Dispara diagnostic_start na primeira resposta.
 */
const QuizFlow = ({ step, answers, onAnswer, onBack }: QuizFlowProps) => {
  const started = useRef(false);
  const q = QUESTIONS[step];
  const progress = Math.round(((step + 1) / QUESTIONS.length) * 100);
  const selected = answers[step];

  const handleSelect = (value: number) => {
    if (!started.current) {
      started.current = true;
      trackEvent("diagnostic_start", { audit_version: "v1" });
    }
    onAnswer(step, value);
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progresso */}
      <div className="mb-8">
        <div className="mb-2.5 flex items-baseline justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span>
            Pergunta {step + 1} de {QUESTIONS.length}
          </span>
          <span className="font-mono">{progress}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-cobre transition-all duration-500 ease-luxury" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Pergunta */}
      <div className="rounded-lg border border-border bg-card p-7 shadow-premium md:p-10">
        <div className="eyebrow mb-5 text-cobre-dark">
          {dimensionLabel(q.dimension)}
        </div>
        <h2 className="font-display text-2xl font-bold leading-snug tracking-[-0.015em] text-foreground md:text-3xl">
          {q.text}
        </h2>

        <div className="mt-8 space-y-3" role="radiogroup" aria-label={q.text}>
          {q.options.map((opt, value) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={selected === value}
              onClick={() => handleSelect(value)}
              className={cn(
                "flex w-full items-center gap-4 rounded-md border px-5 py-4 text-left transition-all duration-300 ease-luxury",
                selected === value
                  ? "border-cobre bg-cobre-soft/50 text-foreground"
                  : "border-border bg-background text-foreground/85 hover:-translate-y-0.5 hover:border-cobre/60 hover:bg-cobre-soft/30",
              )}
            >
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold",
                  selected === value ? "bg-cobre text-grafite-900" : "bg-muted text-muted-foreground",
                )}
              >
                {value}
              </span>
              <span className="leading-snug">{opt}</span>
            </button>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
            0 = nada iniciado · 4 = avançado
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizFlow;
