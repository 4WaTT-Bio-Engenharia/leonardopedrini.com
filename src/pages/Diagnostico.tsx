import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import QuizFlow from "@/components/diagnostico/QuizFlow";
import LeadGate from "@/components/diagnostico/LeadGate";
import ResultReport from "@/components/diagnostico/ResultReport";
import Reveal from "@/components/motion/Reveal";
import { QUESTIONS, computeResult, scoreRange } from "@/components/diagnostico/auditData";
import { trackEvent } from "@/lib/analytics";

type Stage = "intro" | "quiz" | "gate" | "result";

/**
 * /diagnostico — AI Work Audit interativo (doc 07, Nível 0).
 * Fluxo: intro → 14 perguntas → captura de lead → relatório roteado por score.
 * Estado 100% local; único backend é o insert na tabela `leads`.
 */
const Diagnostico = () => {
  const [stage, setStage] = useState<Stage>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(-1));
  const [firstName, setFirstName] = useState<string>("");

  const result = useMemo(
    () => (stage === "result" || stage === "gate" ? computeResult(answers.map((a) => (a < 0 ? 0 : a))) : null),
    [stage, answers],
  );

  const handleAnswer = (idx: number, value: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
    // Auto-avanço com pequeno delay para o feedback visual da seleção.
    window.setTimeout(() => {
      if (idx < QUESTIONS.length - 1) {
        setStep(idx + 1);
      } else {
        setStage("gate");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 220);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      setStage("intro");
    }
  };

  const handleLeadSuccess = (nome: string) => {
    const r = computeResult(answers.map((a) => (a < 0 ? 0 : a)));
    trackEvent("diagnostic_complete", { audit_version: "v1", score_range: scoreRange(r.overall) });
    setFirstName(nome.trim().split(" ")[0] || "");
    setStage("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageLayout
      title="AI Work Audit — diagnóstico gratuito de maturidade em IA"
      description="Em 8 minutos, descubra o nível de maturidade da sua empresa em IA — 14 perguntas, 6 dimensões, relatório personalizado com os processos candidatos à automação."
      path="/diagnostico"
      flush
    >
      {stage === "intro" && (
        <section className="bg-navy-hero relative overflow-hidden text-papel">
          <div className="absolute inset-0 bg-grid-navy" aria-hidden />
          <div className="container relative pb-24 pt-36 md:pb-32 md:pt-44">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <div className="eyebrow text-cobre-light">
                  <span className="h-px w-10 bg-cobre-light/70" />
                  AI Work Audit · gratuito
                </div>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] md:text-6xl">
                  Em 8 minutos, descubra o nível de maturidade da sua empresa em IA —{" "}
                  <span className="text-gradient-gold">e quais processos automatizar primeiro</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-papel/65">
                  14 perguntas, 6 dimensões (estratégia, processos, dados, ferramentas, pessoas,
                  governança). Você recebe na tela o seu nível — de Espectador a Orquestrado — e por
                  e-mail o relatório completo com os 3 processos candidatos à automação e o próximo
                  passo recomendado.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-11">
                  <button
                    type="button"
                    onClick={() => setStage("quiz")}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-cobre px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-grafite-900 shadow-gold transition-all duration-300 ease-luxury hover:-translate-y-0.5 hover:bg-cobre-light"
                  >
                    Começar o diagnóstico
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxury group-hover:translate-x-1" />
                  </button>
                  <p className="mt-5 text-sm text-papel/45">Gratuito. Sem cartão. Sem compromisso.</p>
                </div>
              </Reveal>

              <Reveal delay={460}>
                <div className="mt-16 grid grid-cols-2 gap-3 border-t border-papel/10 pt-10 sm:grid-cols-3">
                  {["Estratégia", "Processos", "Dados", "Ferramentas", "Pessoas", "Governança"].map((d) => (
                    <div
                      key={d}
                      className="rounded-md border border-papel/12 bg-papel/[0.04] px-4 py-3 text-center transition-colors duration-300 hover:border-cobre/40"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-papel/75">{d}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
          <div className="hairline-gold absolute inset-x-0 bottom-0" aria-hidden />
        </section>
      )}

      {stage === "quiz" && (
        <section className="pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="container">
            <QuizFlow step={step} answers={answers} onAnswer={handleAnswer} onBack={handleBack} />
          </div>
        </section>
      )}

      {stage === "gate" && result && (
        <section className="pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="container">
            <LeadGate overall={result.overall} levelName={result.level.name} onSuccess={handleLeadSuccess} />
          </div>
        </section>
      )}

      {stage === "result" && result && (
        <section className="pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="container">
            <ResultReport result={result} answers={answers} firstName={firstName || undefined} />
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default Diagnostico;
