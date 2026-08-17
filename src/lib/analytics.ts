/**
 * Analytics layer — GTM-compatible.
 * Todos os eventos passam por window.dataLayer; se o GTM não estiver
 * carregado (ou em dev), os eventos caem no console.debug.
 */

export type EventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const ensureDataLayer = (): Record<string, unknown>[] | null => {
  if (typeof window === "undefined") return null;
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
};

/** Envia um evento para o dataLayer (GTM) com fallback em console.debug. */
export const trackEvent = (name: string, params?: EventParams): void => {
  const payload = { event: name, ...(params || {}) };
  const dl = ensureDataLayer();
  if (dl) {
    dl.push(payload);
  }
  if (import.meta.env.DEV || !dl) {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", name, params ?? {});
  }
};

/** Page view explícito — usado pelo ScrollTracker/router. */
export const trackPageView = (path: string): void => {
  trackEvent("page_view", {
    page_path: path,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
};
