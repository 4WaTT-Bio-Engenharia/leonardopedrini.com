import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import Analytics from "@/components/Analytics";
import ScrollTracker from "@/components/ScrollTracker";

const Index = lazy(() => import("./pages/Index"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Metodo = lazy(() => import("./pages/Metodo"));
const Consultoria = lazy(() => import("./pages/Consultoria"));
const Empresas = lazy(() => import("./pages/Empresas"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Insights = lazy(() => import("./pages/Insights"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Contato = lazy(() => import("./pages/Contato"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const Termos = lazy(() => import("./pages/Termos"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const LinkBio = lazy(() => import("./pages/LinkBio"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div
    className="flex min-h-screen items-center justify-center bg-background"
    role="status"
    aria-label="Carregando página"
  >
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
  </div>
);

const RouteScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return undefined;
    }

    let attempts = 0;
    let timer: number | undefined;
    const targetId = decodeURIComponent(hash.slice(1));

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < 40) timer = window.setTimeout(scrollToTarget, 50);
    };

    timer = window.setTimeout(scrollToTarget, 0);
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
};

const RedirectConsultoria = () => <Navigate to="/consultoria" replace />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Analytics />
        <ScrollTracker />
        <RouteScroll />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/metodo" element={<Metodo />} />
            <Route path="/consultoria" element={<Consultoria />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/obrigado" element={<ThankYou />} />
            <Route path="/link-bio" element={<LinkBio />} />

            <Route path="/diagnostico" element={<RedirectConsultoria />} />
            <Route path="/solucoes" element={<RedirectConsultoria />} />
            <Route path="/cursos" element={<RedirectConsultoria />} />
            <Route path="/imersao" element={<RedirectConsultoria />} />
            <Route path="/comunidade" element={<RedirectConsultoria />} />
            <Route path="/lp/*" element={<RedirectConsultoria />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
