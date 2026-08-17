import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Injeta GTM / GA4 / Meta Pixel / LinkedIn Insight Tag somente quando as
 * variáveis de ambiente correspondentes existem. Nenhum script é carregado
 * sem a env configurada (placeholders configuráveis em .env).
 *
 * VITE_GTM_ID=GTM-XXXXXXX
 * VITE_GA4_ID=G-XXXXXXX
 * VITE_META_PIXEL_ID=000000000000000
 * VITE_LINKEDIN_PARTNER_ID=0000000
 */

const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;
const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
const LINKEDIN_PARTNER_ID = import.meta.env.VITE_LINKEDIN_PARTNER_ID as string | undefined;

const appendScript = (id: string, setup: (script: HTMLScriptElement) => void): void => {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  setup(script);
  document.head.appendChild(script);
};

const injectGTM = (id: string): void => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  appendScript("gtm-script", (s) => {
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  });
  // noscript fallback
  if (!document.getElementById("gtm-noscript")) {
    const noscript = document.createElement("noscript");
    noscript.id = "gtm-noscript";
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(
      id,
    )}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.prepend(noscript);
  }
};

const injectGA4 = (id: string): void => {
  appendScript("ga4-script", (s) => {
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  });
  window.dataLayer = window.dataLayer || [];
  // gtag shim padrão
  (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments as unknown as Record<string, unknown>);
  };
  const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
  gtag("js", new Date());
  gtag("config", id, { send_page_view: false }); // pageviews via dataLayer/trackPageView
};

const injectMetaPixel = (id: string): void => {
  const w = window as unknown as {
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string };
  };
  if (!w.fbq) {
    const fbq = function (...args: unknown[]) {
      (fbq.queue = fbq.queue || []).push(args);
    } as NonNullable<typeof w.fbq>;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    w.fbq = fbq;
    appendScript("meta-pixel-script", (s) => {
      s.async = true;
      s.src = "https://connect.facebook.net/en_US/fbevents.js";
    });
  }
  w.fbq?.("init", id);
  w.fbq?.("track", "PageView");
};

const injectLinkedIn = (partnerId: string): void => {
  (window as unknown as { _linkedin_partner_id?: string })._linkedin_partner_id = partnerId;
  const w = window as unknown as { lintrk?: ((...args: unknown[]) => void) & { q?: unknown[] } };
  if (!w.lintrk) {
    const lintrk = function (...args: unknown[]) {
      (lintrk.q = lintrk.q || []).push(args);
    } as NonNullable<typeof w.lintrk>;
    w.lintrk = lintrk;
    appendScript("linkedin-insight-script", (s) => {
      s.async = true;
      s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    });
  }
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (GTM_ID) injectGTM(GTM_ID);
    if (GA4_ID) injectGA4(GA4_ID);
    if (META_PIXEL_ID) injectMetaPixel(META_PIXEL_ID);
    if (LINKEDIN_PARTNER_ID) injectLinkedIn(LINKEDIN_PARTNER_ID);
  }, []);

  // Pageview por mudança de rota (SPA)
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
};

export default Analytics;
