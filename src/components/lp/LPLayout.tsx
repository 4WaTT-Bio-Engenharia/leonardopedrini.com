import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import SEO, { type SEOProps } from "@/components/SEO";
import logoAzul from "@/assets/logo-azul.png";

interface LPLayoutProps extends SEOProps {
  children: ReactNode;
}

/**
 * Layout minimalista de landing page de campanha — sem navegação global
 * e sem footer de links, para foco total de conversão.
 * Contém apenas: logo (volta à home), conteúdo e mini-footer legal.
 */
const LPLayout = ({ children, ...seo }: LPLayoutProps) => (
  <>
    {/* LPs de campanha não devem ser indexadas (canibalização/duplicidade). */}
    <SEO {...seo} noindex />
    <header className="hairline-gold w-full border-b border-papel/10 bg-grafite-900/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="L.V. Pedrini — início">
          <img src={logoAzul} alt="L.V. Pedrini" className="h-9 w-9 rounded-[4px] border border-papel/15" />
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-papel/40">
          IA que trabalha
        </span>
      </div>
    </header>
    <main id="conteudo">{children}</main>
    <footer className="border-t border-papel/10 bg-grafite">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-papel/40">
          © {new Date().getFullYear()} Leonardo Vieira Pedrini. Todos os direitos reservados.
        </p>
        <nav className="flex items-center gap-5" aria-label="Links legais">
          <Link to="/privacidade" className="text-xs text-papel/50 transition-colors hover:text-papel">
            Privacidade
          </Link>
          <Link to="/termos" className="text-xs text-papel/50 transition-colors hover:text-papel">
            Termos
          </Link>
          <Link to="/" className="text-xs text-papel/50 transition-colors hover:text-papel">
            Site principal
          </Link>
        </nav>
      </div>
    </footer>
  </>
);

export default LPLayout;
