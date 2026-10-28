import PageLayout from "@/components/layout/PageLayout";

const sections = [
  {
    title: "1. Controlador e encarregado de dados",
    body: (
      <>
        <p>
          O controlador dos dados pessoais coletados neste site é Leonardo Vieira Pedrini
          (pessoa jurídica em regularização — razão social e CNPJ serão publicados nesta página).
          Para exercer qualquer direito ou tirar dúvidas sobre tratamento de dados, escreva para o
          encarregado pelo canal: <strong>privacidade@leonardopedrini.com</strong> (endereço em
          configuração — até sua ativação, use o formulário de <a href="/contato" className="text-primary underline underline-offset-2">contato</a>).
        </p>
      </>
    ),
  },
  {
    title: "2. Dados que coletamos",
    body: (
      <>
        <p>Coletamos apenas o necessário para responder ao seu contato ou entregar o que você pediu:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Formulários (diagnóstico, contato, aplicações):</strong> nome, e-mail, telefone/WhatsApp, cargo, empresa e a mensagem ou respostas que você enviar.</li>
          <li><strong>Newsletter:</strong> apenas o seu e-mail.</li>
          <li><strong>Navegação:</strong> dados de uso do site (páginas visitadas, origem do tráfego, parâmetros UTM de campanhas), coletados por ferramentas de analytics.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Finalidade e base legal",
    body: (
      <>
        <p>Usamos seus dados para:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Responder ao seu contato ou aplicação (execução de procedimento preliminar a contrato — art. 7º, V, LGPD);</li>
          <li>Enviar a newsletter e conteúdos que você assinou (consentimento — art. 7º, I, LGPD), com descadastro a qualquer momento;</li>
          <li>Medir audiência e melhorar o site (legítimo interesse — art. 7º, IX, LGPD), de forma agregada e não identificável sempre que possível.</li>
        </ul>
        <p className="mt-3">Não vendemos dados pessoais. Não usamos seus dados para nenhuma finalidade além das listadas acima.</p>
      </>
    ),
  },
  {
    title: "4. Cookies e analytics",
    body: (
      <>
        <p>
          Usamos cookies e tecnologias semelhantes para funcionamento do site e mensuração de
          audiência (incluindo parâmetros de campanha — UTM). Você pode bloquear cookies no seu
          navegador; o site continua utilizável, mas parte da mensuração deixa de ocorrer.
        </p>
      </>
    ),
  },
  {
    title: "5. Compartilhamento",
    body: (
      <>
        <p>
          Seus dados são processados por provedores de infraestrutura estritamente necessários à
          operação (hospedagem, banco de dados, e-mail e analytics), sempre sob contrato e medidas de
          segurança. Não compartilhamos dados com terceiros para fins de marketing deles.
        </p>
      </>
    ),
  },
  {
    title: "6. Seus direitos (LGPD)",
    body: (
      <>
        <p>Como titular, você pode, a qualquer momento e gratuitamente:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Confirmar a existência de tratamento e acessar seus dados;</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Revogar o consentimento (ex.: descadastrar a newsletter);</li>
          <li>Solicitar a portabilidade e a eliminação dos dados, ressalvadas as hipóteses legais de retenção.</li>
        </ul>
        <p className="mt-3">
          Para exercer seus direitos, escreva para o canal do encarregado indicado na seção 1.
          Respondemos nos prazos da LGPD. Você também pode reclamar à Autoridade Nacional de
          Proteção de Dados (ANPD).
        </p>
      </>
    ),
  },
  {
    title: "7. Segurança e retenção",
    body: (
      <>
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra
          acesso não autorizado, perda ou alteração. Mantemos os dados apenas pelo tempo necessário
          às finalidades descritas ou enquanto houver obrigação legal de retenção.
        </p>
      </>
    ),
  },
  {
    title: "8. Alterações desta política",
    body: (
      <>
        <p>
          Esta política pode ser atualizada para refletir mudanças na operação ou na legislação. A
          versão vigente é sempre a publicada nesta página, com a data de atualização abaixo.
        </p>
        <p className="mt-3 font-mono text-sm text-muted-foreground">Última atualização: 2025.</p>
      </>
    ),
  },
];

const Privacidade = () => (
  <PageLayout
    title="Política de Privacidade"
    description="Como coletamos, usamos e protegemos seus dados pessoais, conforme a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/18)."
    path="/privacidade"
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
            Política de Privacidade
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Esta política descreve como tratamos dados pessoais neste site, em conformidade com a
            Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
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

export default Privacidade;
