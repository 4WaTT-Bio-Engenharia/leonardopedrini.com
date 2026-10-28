# 21. Reformulação da homepage de Leonardo Pedrini

## 1. Diagnóstico da home anterior

### Conteúdo e posicionamento

- A home estava centrada em estratégia, IA e consultoria para fundadores. O visitante não encontrava uma apresentação clara de Leonardo como profissional de engenharia e energia.
- A abertura usava uma promessa genérica e dava mais espaço ao discurso comercial do que à explicação dos problemas que Leonardo ajuda a resolver.
- Os indicadores de 200 projetos, 2 GW e R$ 5 bilhões apareciam como realizações pessoais, sem uma nota adequada sobre a participação de equipes e empresas.
- Havia termos como CAPEX e frases de efeito que afastavam o conteúdo da linguagem simples pedida para produtores rurais.
- A apresentação pessoal tinha formato de currículo e discurso institucional, com excesso de títulos e afirmações difíceis de verificar.
- A seção de conteúdos exibia títulos como se fossem artigos publicados. Isso foi substituído por uma chamada editorial honesta, sem publicações fictícias.
- A navegação não tinha um blog pessoal separado e usava um mega menu de soluções que desviava da arquitetura da nova home.

### Base técnica aproveitada

- A aplicação Vite, React, TypeScript, Tailwind e shadcn foi preservada.
- O sistema Navy & Champagne, Montserrat e IBM Plex Mono foi mantido.
- `PageLayout`, `SectionHeading`, `CTAButton`, `Reveal`, `LeadCaptureForm` e os formulários de newsletter foram reutilizados.
- As rotas antigas continuam disponíveis. O mega menu foi retirado apenas da navegação principal.
- O domínio canônico passou a ser `https://www.leonardopedrini.com` nos metadados, sitemap, robots e configuração de ambiente.

## 2. Posicionamento

Leonardo Pedrini é apresentado como engenheiro, empreendedor e gestor que conecta conhecimento técnico, avaliação econômica e coordenação de projetos.

A mensagem central é simples: a engenharia ajuda a tomar decisões mais seguras, entender riscos, planejar investimentos e conduzir projetos com responsabilidade. Não há promessa de economia, retorno financeiro ou ausência de riscos.

A comunicação atende primeiro ao problema do visitante. Produtores rurais, empresas, investidores e desenvolvedores devem compreender o que está em jogo antes de ler sobre tecnologias ou serviços.

## 3. Opções de headline

### Implementada

**Engenharia e gestão para decisões mais seguras em projetos de energia.**

Motivo: resume a proposta de valor sem exagero e reúne os dois pilares da atuação de Leonardo.

### Alternativa 1

**Projetos de energia avaliados com critério técnico e visão de negócio.**

Uso possível: uma abordagem mais direta para investidores e empresas.

### Alternativa 2

**Da análise inicial à execução, engenharia para conduzir projetos de energia.**

Uso possível: uma comunicação mais voltada ao acompanhamento do projeto.

## 4. Arquitetura da homepage

1. Hero com nome, proposta de valor, foto real e dois CTAs.
2. Experiência em números com três indicadores e nota de atribuição.
3. Como posso ajudar, com seis áreas organizadas pelo problema do cliente.
4. Projetos e experiências, com estrutura editorial e aviso de estudos de caso em preparação.
5. Como trabalho, com cinco etapas e nota sobre a variação conforme o escopo.
6. Sobre mim, com apresentação em primeira pessoa e fotografia real.
7. Minhas empresas, com cinco iniciativas, vínculos confirmados e links oficiais disponíveis.
8. Blog, com chamada honesta para conteúdos futuros e acesso à listagem.
9. Contato, com formulário curto e texto que convida o visitante a apresentar seu contexto.

## 5. Textos finais das seções

### 5.1 Hero

**Nome:** Leonardo Pedrini

**Headline:** Engenharia e gestão para decisões mais seguras em projetos de energia.

**Subtítulo:** Ajudo empresas, investidores e produtores rurais a avaliar, planejar e conduzir projetos de energia, com atenção aos riscos, aos custos e aos resultados.

**CTA principal:** Conversar sobre um projeto

**CTA secundário:** Conhecer minhas empresas

**Linha de áreas:** Energia e investimentos · Usinas · Solar e baterias · Biogás e biometano · Gestão de projetos

### 5.2 Experiência em números

- **200+** projetos de engenharia.
- **2 GW+** de potência somada em projetos.
- **R$ 5 bi+** em investimentos relacionados a projetos.

**Nota de atribuição:** Estes indicadores se referem a projetos conduzidos por equipes e empresas das quais Leonardo participou. Não representam realizações exclusivamente pessoais e estão sujeitos à validação final de escopo antes da publicação.

### 5.3 Como posso ajudar

**Título:** Onde posso ajudar no seu projeto

**Introdução:** Antes de investir em uma usina ou em um sistema de energia, é importante entender quanto custa, como funciona e se faz sentido para sua operação.

#### Energia e investimentos

Investir em energia sem entender consumo, custos e riscos pode comprometer o caixa.

Ajudo a comparar alternativas, avaliar a viabilidade e planejar o investimento com dados da sua operação.

#### Construção e implantação de usinas

Construir uma usina exige coordenar engenharia, prazos, fornecedores e investimento.

Participo do planejamento e da coordenação para acompanhar as decisões técnicas, os custos e cada etapa da implantação.

#### Energia solar e baterias

Gerar a própria energia pode parecer simples, mas o dimensionamento errado limita o resultado.

Avalio sistemas solares e armazenamento de energia em baterias (BESS), considerando consumo, operação e investimento.

#### Biogás, biometano e resíduos

Dejetos e resíduos podem ter valor energético, mas cada propriedade exige uma análise diferente.

Estudo o aproveitamento para biogás e biometano, da avaliação inicial ao planejamento do projeto.

#### Otimização de processos

Retrabalho, paradas e desperdícios aumentam custos sem aparecerem com clareza na rotina.

Ajudo a identificar gargalos, organizar atividades e acompanhar melhorias com indicadores.

#### Gestão de projetos

Projetos com muitos fornecedores e decisões podem perder prazo e controle de custos.

Ajudo a planejar etapas, acompanhar riscos e coordenar o trabalho das equipes.

### 5.4 Projetos e experiências

**Introdução:** Estou preparando estudos de caso com informações autorizadas e resultados que possam ser comprovados. Nenhum projeto será publicado sem essa validação.

**Chamada:** Estudos de caso em preparação

**Explicação:** Cada publicação seguirá esta estrutura para deixar claro o problema, as decisões e a participação de todos os envolvidos.

**Estrutura prevista:**

1. Problema: o contexto e a necessidade que deram origem ao trabalho.
2. Decisão: as alternativas avaliadas e o caminho escolhido.
3. Participação: o papel de Leonardo e das equipes envolvidas.
4. Condução: as etapas do trabalho e as decisões de execução.
5. Resultados: somente dados e evidências autorizados para publicação.

Nenhum estudo de caso fictício foi criado.

### 5.5 Como trabalho

**Introdução:** Um processo simples para entender o contexto, comparar caminhos e acompanhar o trabalho com responsabilidade.

1. **Entender o problema:** converso sobre a necessidade, o momento da operação e o que precisa ser decidido.
2. **Analisar dados e condições reais:** levanto informações de consumo, processo, local, custos e restrições.
3. **Avaliar alternativas e riscos:** comparo caminhos possíveis, investimento, prazos e riscos.
4. **Planejar e acompanhar a execução:** defino escopo, responsáveis e indicadores, e acompanho a execução contratada.
5. **Verificar os resultados:** confiro o que foi entregue e os dados disponíveis para orientar próximos passos.

**Nota:** As etapas e a profundidade de cada análise dependem do tipo de projeto contratado.

### 5.6 Sobre mim

**Título:** Engenharia com visão de negócio e trabalho em equipe

Minha formação é em engenharia mecânica e engenharia de energia. Ao longo da minha trajetória, trabalhei com projetos industriais, energia e gestão. Essas experiências me ensinaram a olhar para a engenharia também pelo lado do negócio.

Hoje, além de atuar tecnicamente, participo da gestão de empresas e de projetos que exigem planejamento, boas decisões e trabalho em equipe.

Gosto de entender o problema antes de propor uma solução. É dessa forma que procuro conduzir meu trabalho, com dados, conversa franca e responsabilidade sobre cada etapa.

### 5.7 Minhas empresas

**Título:** Empresas que fundei e negócios dos quais participo

**Introdução:** Minha atuação empreendedora reúne energia, engenharia, tecnologia e gestão. Cada negócio tem seu próprio escopo e equipe.

#### 4WaTT

Engenharia e projetos relacionados a resíduos, biogás, biometano e energia.

Papel confirmado: fundador e CEO.

Site: `https://www.4watt.tech`

#### 4W Energia

Atuação empresarial no setor de energia.

Papel confirmado: fundador.

Site: `https://www.4wenergia.com.br`

#### BESS4YOU

Iniciativa relacionada ao armazenamento de energia em baterias.

Nenhum papel societário adicional ou link não confirmado foi publicado.

#### Carbon4you

Iniciativa relacionada ao mercado de carbono.

Nenhum papel societário adicional ou link não confirmado foi publicado.

#### Traciona AI

SaaS de gestão para pequenos negócios, com CRM, financeiro e marketing com IA integrada.

Papel confirmado: fundador.

Site: `https://www.tracionaai.com.br`

A Traciona AI é apresentada como empresa de tecnologia e gestão, sem associação indevida a engenharia ou energia.

### 5.8 Blog

**Título:** Experiências e análises para decisões melhores

**Introdução:** Um espaço para explicar temas de energia e gestão com exemplos, dados e linguagem simples.

**Estado atual:** Conteúdo em preparação

**Chamada:** Em breve, artigos sobre energia, biogás, solar e gestão de projetos.

**CTA:** Visitar o blog

A listagem em `/blog` apresenta o mesmo estado editorial honesto e oferece captura de newsletter. A fonte `src/data/posts.ts` começa vazia. A rota `/blog/:slug` está preparada para artigos reais, com metadados e schema Article.

### 5.9 Contato

**Título:** Vamos conversar sobre seu projeto?

**Texto principal:** Se você está pensando em investir em energia, construir uma usina ou melhorar um processo, pode me contar um pouco sobre o que precisa. Assim, conseguimos entender se posso ajudar e qual seria o melhor caminho.

**Texto de apoio:** Preencha apenas seus dados de contato. O primeiro passo é entender o contexto, sem compromisso e sem promessas antes da análise.

**Formulário:** nome, e-mail e WhatsApp do visitante, usando o componente existente `LeadCaptureForm`.

**Botão:** Quero conversar sobre meu projeto

Nenhum telefone, endereço de e-mail ou canal profissional novo foi inventado.

## 6. Navegação e direção visual

### Navbar

**Leonardo Pedrini | Início | Atuação | Projetos | Sobre mim | Empresas | Blog | Contato**

- A marca leva à home.
- Início retorna ao topo.
- As âncoras usam `/#atuacao`, `/#projetos`, `/#sobre`, `/#empresas` e `/#contato` para funcionar em qualquer rota.
- O carregamento e a mudança de rota tratam o hash e aguardam o conteúdo lazy antes de rolar.
- O menu mobile contém todos os itens, inclusive Blog.
- O mega menu Soluções foi removido da navegação principal.
- O footer também possui link para Blog.

### Interface

- Hero navy com textura de grid discreta, foto real e enquadramento champagne.
- Seções claras com amplo espaço em branco e blocos navy para portfólio e contato.
- Montserrat em títulos, textos e labels.
- IBM Plex Mono apenas em números e índices.
- Cards com bordas finas e movimento moderado.
- Layout responsivo, navegação por teclado e estados de foco preservados.

### SEO da home

**Title:** Leonardo Pedrini | Consultoria e projetos de energia

**Description:** Consultoria em energia, biogás, biometano, usinas, energia solar e BESS para empresas e produtores rurais. Avaliação de investimentos e gestão de projetos.

Foram incluídos dados estruturados de WebSite, Person e Organization, sem listas artificiais de palavras-chave no conteúdo visível.

## 7. Checklist de pendências para publicação

### Evidências e conteúdo

- [ ] Validar com Leonardo e com as empresas o escopo dos indicadores 200+, 2 GW+ e R$ 5 bi+.
- [ ] Confirmar o período, os critérios de contagem e a participação das equipes em cada indicador.
- [ ] Revisar e aprovar a biografia em primeira pessoa.
- [ ] Reunir estudos de caso reais com autorização de clientes e parceiros.
- [ ] Comprovar os resultados antes de publicar qualquer estudo de caso.
- [ ] Produzir e revisar os primeiros artigos de energia para o blog.

### Imagens e empresas

- [ ] Aprovar as fotografias profissionais usadas no hero e na biografia.
- [ ] Obter os logotipos oficiais das cinco empresas e autorização de uso.
- [ ] Confirmar os escopos atuais de 4W Energia, BESS4YOU e Carbon4you.
- [ ] Confirmar se existem URLs oficiais de BESS4YOU e Carbon4you antes de adicionar links.
- [ ] Revisar os vínculos e funções apresentados em todos os cards de empresas.

### Contato e operação

- [ ] Confirmar os canais profissionais oficiais que devem aparecer além do formulário.
- [ ] Testar o envio do formulário e a notificação de leads no ambiente de produção.
- [ ] Substituir o CNPJ placeholder do footer ou remover esse dado antes da publicação.
- [ ] Revisar a página de agradecimento para alinhar a mensagem ao novo contato de projetos de energia.

### Domínio e SEO

- [ ] Configurar redirecionamento permanente 301 de `www.lvpedrini.com.br` para `https://www.leonardopedrini.com`.
- [ ] Confirmar o certificado, o DNS e a canonical do domínio oficial no ambiente de hospedagem.
- [ ] Atualizar a imagem Open Graph para refletir o novo posicionamento.
- [ ] Enviar o novo sitemap ao Google Search Console e ao Bing Webmaster Tools.
- [ ] Testar canonical, Open Graph, JSON-LD e indexabilidade após o deploy.

### Validação final

- [ ] Revisar a home em celular, tablet e desktop.
- [ ] Testar todas as âncoras a partir da home e de páginas internas.
- [ ] Testar o menu mobile e o acesso ao blog por teclado.
- [ ] Verificar contraste, carregamento das fotos e comportamento com movimento reduzido.
- [ ] Executar TypeScript e build de produção antes de publicar.
