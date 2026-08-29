import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { CasePhoto } from "@/data/cases";

/**
 * Grade de miniaturas + lightbox (Radix Dialog) com navegação por teclado.
 * Reutilizável por qualquer CaseItem que tenha `photos`.
 */
const CaseGallery = ({ photos }: { photos: CasePhoto[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, showPrev, showNext]);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-papel-light"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 ease-luxury group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-grafite/0 opacity-0 transition duration-500 ease-luxury group-hover:bg-grafite/50 group-hover:opacity-100">
              <ZoomIn className="h-6 w-6 text-papel" aria-hidden />
            </span>
          </button>
        ))}
      </div>

      <Dialog open={activeIndex !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-3xl gap-0 border-cobre/20 bg-papel-light p-4 sm:rounded-lg">
          <DialogTitle className="sr-only">{active?.alt ?? "Foto do case"}</DialogTitle>
          {active && (
            <div className="relative">
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[70vh] w-full rounded-md bg-grafite-900 object-contain"
              />
              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-papel/90 p-2 text-grafite shadow-soft transition hover:bg-papel"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Próxima foto"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-papel/90 p-2 text-grafite shadow-soft transition hover:bg-papel"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden />
                  </button>
                </>
              )}
              {active.caption && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.caption}</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseGallery;
