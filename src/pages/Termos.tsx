import PageLayout from "@/components/layout/PageLayout";

const sections = [
  {
    title: "1. Objeto",
    body: (
      <p>
        Estes Termos de Uso regulam o acesso e o uso deste site, bem como as condições gerais das
        ofertas digitais aqui apresentadas (diagnósticos, conteúdos, formações, comunidade,
        mentorias e serviços de implantação de IA). Ao navegar ou enviar formulários, você concorda
        com estes termos.
      </p>
    ),
  },
  {
    title: "2. Conteúdo informativo, não consultivo",
    body: (
      <>
        <p>
          Artigos, diagnósticos automatizados, templates e demais materiais deste site têm caráter
          informativo e educacional. Eles não substituem análise específica do seu negócio nem
          constituem aconselhamento jurídico, contábil ou financeiro.
        </p>
        <p className="mt-3">
          Recomendações geradas por ferramentas automatizadas são pontos de partida para
          conversa, não compromissos de resultado.
        </p>
      </>
    ),
  },
  {
    title: "3. Não garantia de resultados",
    body: (
      <p>
        Estimativas de economia de horas, ROI ou ganhos financeiros mencionadas neste site são
        exemplos, metas de projeto ou referências de mercado devidamente identificadas. Resultados
        efetivos dependem de fatores fora do nosso controle — qualidade dos dados, adesão da equipe,
        contexto da operação. Nenhum conteúdo deste site constitui promessa ou garantia de resultado
        financeiro. Garantias contratuais, quando existirem, constarão exclusivamente do contrato ou
        da proposta específica de cada oferta.
      </p>
    ),
  },
  {
    title: "4. Ofertas, preços e condições comerciais",
    body: (
      <p>
        Preços, condições de pagamento, garantias e vagas exibidos no site são válidos no momento da
        consulta e podem ser alterados sem aviso prévio. A contratação de qualquer oferta se
        formaliza por instrumento próprio (checkout, proposta ou contrato), cujas condições prevalecem
        sobre o conteúdo destas páginas.
      </p>
    ),
  },
  {
    title: "5. Propriedade intelectual",
    body: (
      <p>
        Todo o conteúdo deste site — textos, métodos, templates, marcas e
        materiais — é protegido por direitos autorais. É vedada a reprodução, redistribuição ou uso
        comercial sem autorização expressa. Materiais adquiridos (templates, planos e materiais de
        consultoria) são licenciados para uso interno do comprador, não para revenda ou redistribuição.
      </p>
    ),
  },
  {
    title: "6. Conduta do usuário",
    body: (
      <p>
        Ao usar formulários ou áreas interativas, você se compromete a fornecer informações
        verdadeiras e a não utilizar o site para fins ilícitos, envio de spam, tentativas de acesso
        não autorizado ou qualquer uso que prejudique a operação ou terceiros.
      </p>
    ),
  },
  {
    title: "7. Limitação de responsabilidade",
    body: (
      <p>
        Empregamos esforços razoáveis para manter o site disponível e as informações corretas, mas
        não garantimos disponibilidade ininterrupta nem ausência de erros. Não respondemos por danos
        indiretos, lucros cessantes ou decisões tomadas exclusivamente com base no conteúdo
        informativo do site.
      </p>
    ),
  },
  {
    title: "8. Dados pessoais",
    body: (
      <p>
        O tratamento de dados pessoais é regido pela nossa{" "}
        <a href="/privacidade" className="text-primary underline underline-offset-2">
          Política de Privacidade
        </a>
        , em conformidade com a LGPD (Lei nº 13.709/2018).
      </p>
    ),
  },
  {
    title: "9. Legislação e foro",
    body: (
      <p>
        Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de Curitiba/PR
        para dirimir controvérsias, salvo disposição legal em contrário.
      </p>
    ),
  },
  {
    title: "10. Alterações e contato",
    body: (
      <>
        <p>
          Estes termos podem ser atualizados a qualquer momento; a versão vigente é a publicada nesta
          página. Dúvidas sobre estes termos: utilize o formulário de{" "}
          <a href="/contato" className="text-primary underline underline-offset-2">contato</a>.
        </p>
        <p className="mt-3 font-mono text-sm text-muted-foreground">Última atualização: 2025.</p>
      </>
    ),
  },
];

const Termos = () => (
  <PageLayout
    title="Termos de Uso"
    description="Condições de uso do site e das ofertas digitais de Leonardo Vieira Pedrini."
    path="/termos"
    noindex
    flush
  >
    <section>
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Legal
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.1] text-foreground">
            Termos de Uso
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Condições gerais de uso deste site e das ofertas aqui apresentadas. Leia com atenção.
          </p>

          <div className="mt-14 space-y-12">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-display text-2xl font-medium text-foreground">{s.title}</h2>
                <div className="mt-4 text-base leading-relaxed text-foreground/80">{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Termos;
