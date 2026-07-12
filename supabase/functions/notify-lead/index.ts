// Edge Function: notify-lead
// Recebe os dados do lead do formulário e dispara dois e-mails:
// 1) Agradecimento ao lead
// 2) Notificação interna para o Leonardo
//
// Requer configuração do domínio de e-mail no Lovable Cloud (Lovable Emails)
// e do secret INTERNAL_LEAD_EMAIL (destinatário interno). Enquanto o domínio
// não estiver configurado, esta função apenas registra o lead nos logs.

import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2.45.0';
import { z } from 'npm:zod@3.23.8';

const BodySchema = z.object({
  nome: z.string().min(1).max(120),
  email: z.string().email().max(255),
  telefone: z.string().min(3).max(30),
  empresa: z.string().max(200).optional().default(''),
  site: z.string().max(300).optional().default(''),
  segmento: z.string().max(200).optional().default(''),
  faturamento: z.string().max(100).optional().default(''),
  tamanho_equipe: z.string().max(100).optional().default(''),
  gargalo: z.string().max(300).optional().default(''),
  usa_crm: z.string().max(50).optional().default(''),
  objetivo: z.string().max(100).optional().default(''),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const lead = parsed.data;
    const internalTo = Deno.env.get('INTERNAL_LEAD_EMAIL');

    // Tenta invocar o send-transactional-email (só existe após scaffold de app emails).
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRole = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !serviceRole) {
      console.log('notify-lead: missing supabase envs, skipping email send', lead);
      return new Response(JSON.stringify({ ok: true, emailed: false }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const admin = createClient(supabaseUrl, serviceRole);

    // 1) e-mail para o lead
    const p1 = admin.functions.invoke('send-transactional-email', {
      body: {
        templateName: 'lead-thank-you',
        recipientEmail: lead.email,
        idempotencyKey: `lead-thanks-${lead.email}-${Date.now()}`,
        templateData: { nome: lead.nome, empresa: lead.empresa },
      },
    });

    // 2) e-mail interno
    const p2 = internalTo
      ? admin.functions.invoke('send-transactional-email', {
          body: {
            templateName: 'lead-internal-notification',
            recipientEmail: internalTo,
            idempotencyKey: `lead-internal-${lead.email}-${Date.now()}`,
            templateData: lead,
          },
        })
      : Promise.resolve({ error: 'no INTERNAL_LEAD_EMAIL configured' });

    const results = await Promise.allSettled([p1, p2]);
    results.forEach((r, i) => {
      if (r.status === 'rejected') console.error(`notify-lead email ${i} failed:`, r.reason);
    });

    return new Response(JSON.stringify({ ok: true, emailed: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('notify-lead error:', e);
    return new Response(JSON.stringify({ error: 'internal_error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
