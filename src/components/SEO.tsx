import { useEffect } from "react";

/**
 * SEO por página via document.head — sem dependências externas.
 * Gerencia title, meta description, canonical, OpenGraph, Twitter Card
 * e JSON-LD (Schema.org: Person / Organization / Course / FAQ etc.).
 */

export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) || "https://www.lvpedrini.com.br";
export const SITE_NAME = "L.V. Pedrini";

export interface SEOProps {
  title: string;
  description: string;
  /** Caminho da página, ex.: "/sobre". Gera canonical e og:url. */
  path?: string;
  /** Imagem OG absoluta ou relativa ao domínio. */
  image?: string;
  /** og:type — default "website". */
  type?: string;
  /** Um ou mais objetos JSON-LD (Schema.org). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const upsertMeta = (attr: "name" | "property", key: string, content: string): void => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href: string): void => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/** Injeta blocos JSON-LD marcados com data-seo-jsonld e remove no cleanup. */
export const injectJsonLd = (schemas: Record<string, unknown>[]): (() => void) => {
  const nodes: HTMLScriptElement[] = schemas.map((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld", "true");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return script;
  });
  return () => nodes.forEach((n) => n.remove());
};

const SEO = ({ title, description, path = "/", image, type = "website", jsonLd, noindex }: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} · ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;
    const ogImage = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : `${SITE_URL}/og-image.png`;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertCanonical(url);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      return injectJsonLd(schemas);
    }
    return undefined;
  }, [title, description, path, image, type, jsonLd, noindex]);

  return null;
};

export default SEO;
