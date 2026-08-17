import { useMemo } from "react";

/**
 * Captura UTMs da URL e persiste em cookies de 90 dias.
 * - first-touch: gravado uma única vez (nunca sobrescrito)
 * - last-touch: sobrescrito sempre que a URL trouxer UTMs novas
 *
 * Uso: const { first, last, current, hiddenFields } = useUTM();
 */

export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
export type UTMKey = (typeof UTM_KEYS)[number];
export type UTMParams = Record<UTMKey, string>;

const FIRST_COOKIE = "lvp_utm_first";
const LAST_COOKIE = "lvp_utm_last";
const COOKIE_DAYS = 90;

const emptyUTM = (): UTMParams => ({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
});

const setCookie = (name: string, value: string, days: number): void => {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
};

const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

const readUTMFromURL = (): UTMParams => {
  const out = emptyUTM();
  if (typeof window === "undefined") return out;
  const params = new URLSearchParams(window.location.search);
  UTM_KEYS.forEach((k) => {
    out[k] = params.get(k) ?? "";
  });
  return out;
};

const hasAny = (utm: UTMParams): boolean => UTM_KEYS.some((k) => utm[k] !== "");

const readUTMFromCookie = (name: string): UTMParams => {
  const raw = getCookie(name);
  if (!raw) return emptyUTM();
  try {
    return { ...emptyUTM(), ...(JSON.parse(raw) as Partial<UTMParams>) };
  } catch {
    return emptyUTM();
  }
};

export interface UTMState {
  /** UTMs da visita atual (da URL), se houver. */
  current: UTMParams;
  /** Primeira origem conhecida do visitante. */
  first: UTMParams;
  /** Origem mais recente do visitante. */
  last: UTMParams;
  /** Pares chave/valor prontos para campos ocultos de formulário. */
  hiddenFields: Record<string, string>;
}

export const useUTM = (): UTMState => {
  return useMemo(() => {
    const current = readUTMFromURL();

    if (hasAny(current)) {
      // Last-touch: sempre atualiza. First-touch: só se ainda não existir.
      setCookie(LAST_COOKIE, JSON.stringify(current), COOKIE_DAYS);
      if (!getCookie(FIRST_COOKIE)) {
        setCookie(FIRST_COOKIE, JSON.stringify(current), COOKIE_DAYS);
      }
    }

    const first = readUTMFromCookie(FIRST_COOKIE);
    const last = readUTMFromCookie(LAST_COOKIE);

    const hiddenFields: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      hiddenFields[k] = last[k] || current[k] || "";
      hiddenFields[`first_${k}`] = first[k] || "";
    });

    return { current, first, last, hiddenFields };
  }, []);
};

export default useUTM;
