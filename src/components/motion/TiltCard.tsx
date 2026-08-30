import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Intensidade da inclinação em graus (default 7). */
  strength?: number;
  /** Brilho direcional que segue o cursor (default true). */
  glare?: boolean;
}

/**
 * TiltCard — inclinação 3D via cursor (perspective + rotateX/Y) com brilho
 * direcional, no estilo dos cards de produto da Apple. Sem dependências:
 * apenas CSS custom properties atualizadas via pointermove. Respeita
 * prefers-reduced-motion (ver .tilt-card em index.css).
 */
const TiltCard = ({ children, className, style, strength = 7, glare = true }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--tilt-x", `${(0.5 - py) * strength}deg`);
    el.style.setProperty("--tilt-y", `${(px - 0.5) * strength}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn("tilt-card group relative", className)}
      style={style}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="tilt-glare pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 ease-luxury group-hover:opacity-100"
        />
      )}
    </div>
  );
};

export default TiltCard;
