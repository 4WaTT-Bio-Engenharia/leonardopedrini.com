
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public lead capture form)
CREATE POLICY "Anyone can insert leads"
  ON public.leads
  FOR INSERT
  WITH CHECK (true);
