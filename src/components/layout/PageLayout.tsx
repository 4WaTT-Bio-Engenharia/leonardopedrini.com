import type { ReactNode } from "react";
import SEO, { type SEOProps } from "@/components/SEO";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

interface PageLayoutProps extends SEOProps {
  children: ReactNode;
  /** Remove o padding superior padrão (ex.: páginas com hero próprio). */
  flush?: boolean;
}

/**
 * Estrutura padrão de página: SEO + SiteHeader + conteúdo + SiteFooter.
 */
const PageLayout = ({ children, flush, ...seo }: PageLayoutProps) => (
  <>
    <SEO {...seo} />
    <SiteHeader />
    <main id="conteudo" className={flush ? undefined : "pt-20"}>
      {children}
    </main>
    <SiteFooter />
  </>
);

export default PageLayout;
