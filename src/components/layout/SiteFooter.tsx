import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import useUTM from "@/hooks/useUTM";
import { trackEvent } from "@/lib/analytics";
import logoBranca from "@/assets/logo-branca.png";

const columns: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Trabalhe comigo",
    links: [
      { to: "/consultoria", label: "Sessão Estratégica" },
      { to: "/consultoria", label: "Consultoria de estratégia" },
      { to: "/consultoria", label: "Conselho e advisory" },
      { to: "/empresas", label: "Ecossistema de empresas" },
    ],
  },
  {
    title: "Empresas",
    links: [
      { to: "https://www.4watt.tech", label: "4WaTT Bio Engenharia" },
      { to: "/empresas", label: "4W Energia" },
      { to: "/empresas", label: "BESS4YOU e Carbon4you" },
    ],
  },
  {
    title: "Conteúdo",
    links: [
      { to: "/sobre", label: "Sobre" },
      { to: "/metodo", label: "Método" },
      { to: "/empresas", label: "Empresas" },
      { to: "/insights", label: "Insights" },
      { to: "/newsletter", label: "Newsletter" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/contato", label: "Contato" },
      { to: "/privacidade", label: "Privacidade" },
      { to: "/termos", label: "Termos de uso" },
    ],
  },
];

const SiteFooter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();
  const { hiddenFields } = useUTM();

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      toast({ title: "E-mail inválido", variant: "destructive" });
      return;
    }
    setLoading(true);
    trackEvent("newsletter_submit", { form_location: "footer" });
    try {
      const { error } = await supabase.from("leads").insert({
        nome: value,
        email: value,
        telefone: "-",
        objetivo: "Newsletter",
        segmento: hiddenFields.utm_source ? `origem: ${hiddenFields.utm_source}` : null,
      });
      if (error) throw error;
      setDone(true);
      setEmail("");
    } catch {
      toast({ title: "Não foi possível cadastrar", description: "Tente novamente em instantes.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-grafite-900 text-papel">
      <div className="hairline-gold absolute inset-x-0 top-0" aria-hidden />
      <div className="container py-20 md:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Marca + newsletter */}
          <div className="lg:col-span-4">
            <img
              src={logoBranca}
              alt="L.V. Pedrini"
              className="h-12 w-12"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-papel/55">
              Engenheiro, fundador e CEO da 4WaTT. Transformo problema difícil em negócio que dá
              resultado, e ajudo outros líderes a fazer o mesmo.
            </p>

            <form onSubmit={handleNewsletter} className="mt-10">
              <label htmlFor="footer-newsletter" className="eyebrow text-cobre-light/80">
                Newsletter semanal
              </label>
              {done ? (
                <p className="mt-4 text-sm text-medicao-light">Inscrição confirmada. Até a próxima edição.</p>
              ) : (
                <div className="mt-4 flex max-w-sm items-stretch gap-2">
                  <input
                    id="footer-newsletter"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full rounded-md border border-papel/15 bg-papel/[0.04] px-4 py-3 text-sm text-papel transition-colors duration-300 placeholder:text-papel/35 focus:border-cobre/60 focus:outline-none focus:ring-1 focus:ring-cobre/50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    aria-label="Assinar newsletter"
                    className="inline-flex items-center justify-center rounded-md bg-cobre px-4 text-grafite-900 transition-all duration-300 ease-luxury hover:bg-cobre-light disabled:opacity-60"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
              {!done && (
                <p className="mt-3 max-w-sm text-[11px] leading-relaxed text-papel/35">
                  Ao assinar, você concorda com a{" "}
                  <Link to="/privacidade" className="underline underline-offset-2 hover:text-papel/70">
                    Política de Privacidade
                  </Link>
                  .
                </p>
              )}
            </form>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="https://instagram.com/lvpedrini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => trackEvent("social_click", { network: "instagram", location: "footer" })}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-papel/15 text-papel/60 transition-all duration-300 ease-luxury hover:border-cobre hover:text-cobre"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/lvpedrini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={() => trackEvent("social_click", { network: "linkedin", location: "footer" })}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-papel/15 text-papel/60 transition-all duration-300 ease-luxury hover:border-cobre hover:text-cobre"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Colunas de links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="eyebrow text-cobre-light/70">{col.title}</div>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.to.startsWith("http") ? (
                        <a
                          href={l.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-papel/60 transition-colors duration-300 hover:text-papel"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          to={l.to}
                          className="text-sm text-papel/60 transition-colors duration-300 hover:text-papel"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-papel/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-papel/35">
            © {new Date().getFullYear()} L.V. Pedrini — Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-papel/35">CNPJ 00.000.000/0001-00 {/* placeholder */}</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
