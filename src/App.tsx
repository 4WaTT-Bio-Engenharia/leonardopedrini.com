import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "@/components/Analytics";
import ScrollTracker from "@/components/ScrollTracker";

const Index = lazy(() => import("./pages/Index"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Metodo = lazy(() => import("./pages/Metodo"));
const Cases = lazy(() => import("./pages/Cases"));
const Solucoes = lazy(() => import("./pages/Solucoes"));
const Cursos = lazy(() => import("./pages/Cursos"));
const Imersao = lazy(() => import("./pages/Imersao"));
const Community = lazy(() => import("./pages/Community"));
const Consultoria = lazy(() => import("./pages/Consultoria"));
const Empresas = lazy(() => import("./pages/Empresas"));
const Diagnostico = lazy(() => import("./pages/Diagnostico"));
const Insights = lazy(() => import("./pages/Insights"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Contato = lazy(() => import("./pages/Contato"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const Termos = lazy(() => import("./pages/Termos"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));

const LPCurso = lazy(() => import("./pages/lp/LPCurso"));
const LPComunidade = lazy(() => import("./pages/lp/LPComunidade"));
const LPImersao = lazy(() => import("./pages/lp/LPImersao"));
const LPConsultoria = lazy(() => import("./pages/lp/LPConsultoria"));
const LPEmpresas = lazy(() => import("./pages/lp/LPEmpresas"));
const LPDiagnostico = lazy(() => import("./pages/lp/LPDiagnostico"));

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
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/imersao" element={<Imersao />} />
            {/* Página completa existente — mantida até a nova versão de conteúdo */}
            <Route path="/comunidade" element={<Community />} />
            <Route path="/consultoria" element={<Consultoria />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/lp/curso" element={<LPCurso />} />
            <Route path="/lp/comunidade" element={<LPComunidade />} />
            <Route path="/lp/imersao" element={<LPImersao />} />
            <Route path="/lp/consultoria" element={<LPConsultoria />} />
            <Route path="/lp/empresas" element={<LPEmpresas />} />
            <Route path="/lp/diagnostico" element={<LPDiagnostico />} />
            <Route path="/obrigado" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
