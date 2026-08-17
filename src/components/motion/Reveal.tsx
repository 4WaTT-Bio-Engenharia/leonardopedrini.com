import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms — use para escalonar grids/listas (ex.: index * 90). */
  delay?: number;
  /** Deslocamento vertical inicial em px (default 28). */
  y?: number;
  className?: string;
}

/**
 * Reveal — fade + translate disparado por IntersectionObserver.
 * Sem dependências: CSS transition + IO. Respeita prefers-reduced-motion
 * (renderiza visível imediatamente, sem animação).
 *
 * Uso:
 *   <Reveal>…</Reveal>
 *   <Reveal delay={120} y={20}>…</Reveal>
 */
const Reveal = ({ children, delay = 0, y = 28, className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-[900ms] ease-luxury will-change-transform",
        visible ? "opacity-100" : "opacity-0",
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
