import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

/**
 * Dispara scroll_50 e scroll_90 uma vez por página visitada.
 */
const ScrollTracker = () => {
  const location = useLocation();
  const fired = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const page = location.pathname;
    const key50 = `${page}:50`;
    const key90 = `${page}:90`;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;

      if (pct >= 50 && !fired.current[key50]) {
        fired.current[key50] = true;
        trackEvent("scroll_50", { page_path: page });
      }
      if (pct >= 90 && !fired.current[key90]) {
        fired.current[key90] = true;
        trackEvent("scroll_90", { page_path: page });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return null;
};

export default ScrollTracker;
