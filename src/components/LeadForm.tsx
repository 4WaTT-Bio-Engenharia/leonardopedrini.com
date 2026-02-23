import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const leadSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
});

const LeadForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = leadSchema.safeParse({ nome, email, telefone });
    if (!parsed.success) {
      toast({
        title: "Erro",
        description: parsed.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Save to database
      const { error } = await supabase.from("leads").insert({
        nome: parsed.data.nome,
        email: parsed.data.email,
        telefone: parsed.data.telefone,
      });

      if (error) throw error;

      // TODO: Send to Google Apps Script when URL is provided
      // try {
      //   await fetch(GOOGLE_SCRIPT_URL, {
      //     method: "POST",
      //     mode: "no-cors",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(parsed.data),
      //   });
      // } catch {}

      navigate("/obrigado");
    } catch (err) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-foreground">
            Receba acesso <span className="text-primary">imediato e gratuito</span>.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Seu Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                maxLength={100}
                className="w-full px-5 py-4 rounded-lg bg-secondary text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Seu Melhor E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="w-full px-5 py-4 rounded-lg bg-secondary text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Seu WhatsApp"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                maxLength={20}
                className="w-full px-5 py-4 rounded-lg bg-secondary text-foreground border border-border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-bold text-lg py-5 rounded-lg animate-glow-pulse hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:animate-none cursor-pointer"
            >
              {loading ? "ENVIANDO..." : "ENVIAR MINHA BIBLIOTECA GRATUITA"}
            </button>

            <p className="text-center text-muted-foreground text-sm">
              Seus dados estão 100% seguros. Odeio spam tanto quanto você.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
