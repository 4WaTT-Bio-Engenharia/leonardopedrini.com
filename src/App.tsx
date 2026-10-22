import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Analytics from "@/components/Analytics";
import ScrollTracker from "@/components/ScrollTracker";

const Index = lazy(() => import("./pages/Index"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Metodo = lazy(() => import("./pages/Metodo"));
const Cases = lazy(() => import("./pages/Cases"));
const CaseDetail = lazy(() => import("./pages/CaseDetail"));
const Consultoria = lazy(() => import("./pages/Consultoria"));
const Empresas = lazy(() => import("./pages/Empresas"));
const Insights = lazy(() => import("./pages/Insights"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Contato = lazy(() => import("./pages/Contato"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const Termos = lazy(() => import("./pages/Termos"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const LinkBio = lazy(() => import("./pages/LinkBio"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

/** Fallback discreto com tokens do design system enquanto o chunk da rota carrega. */
const PageFallback = () => (
  <div
    className="flex min-h-screen items-center justify-center bg-background"
    role="status"
    aria-label="Carregando página"
  >
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
  </div>
);

/** Rotas antigas do funil de IA descontinuado levam ao caminho atual: consultoria. */
const RedirectConsultoria = () => <Navigate to="/consultoria" replace />;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Analytics />
        <ScrollTracker />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/metodo" element={<Metodo />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/:id" element={<CaseDetail />} />
            <Route path="/consultoria" element={<Consultoria />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/obrigado" element={<ThankYou />} />
            <Route path="/link-bio" element={<LinkBio />} />

            {/* Legado: funil de IA descontinuado */}
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
