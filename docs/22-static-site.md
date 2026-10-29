# 22. Site estático de Leonardo Pedrini

## Objetivo

O site oficial passa a usar HTML semântico e CSS puro, sem React, framework CSS ou etapa de build. O conteúdo principal está presente no HTML para melhorar indexação, acessibilidade, carregamento e leitura por sistemas de IA. O domínio canônico é `https://www.leonardopedrini.com/`.

O `index.html` da raiz substitui o antigo ponto de entrada do Vite. A pasta `src/` e os demais arquivos React permanecem como legado e não devem ser apagados nesta etapa.

## Estrutura

```text
index.html                              Home com nove seções
404.html                                Página de erro elegante, com noindex
css/style.css                           Tokens, componentes e responsividade
js/main.js                              Aprimoramento progressivo do header e do menu
img/                                    Fotografias, OG image e favicon
atuacao/index.html                      Hub das seis áreas de atuação
atuacao/consultoria-energia/index.html  Consultoria e viabilidade
atuacao/usinas/index.html               Planejamento e implantação de usinas
atuacao/energia-solar-bess/index.html   Energia solar e armazenamento BESS
atuacao/biogas-biometano/index.html     Projetos de biogás e biometano
atuacao/otimizacao-processos/index.html Otimização de processos
atuacao/gestao-projetos/index.html      Gestão de projetos de energia
projetos/index.html                     Padrão editorial dos estudos de caso
empresas/index.html                     Cinco empresas e iniciativas
blog/index.html                         Listagem estática de artigos
blog/biogas-produtor-rural/index.html   Artigo reservado
blog/bess-armazenamento-energia/index.html Artigo reservado
blog/viabilidade-projeto-energia/index.html Artigo reservado
sobre/index.html                        Biografia, trajetória, formação e empresas
contato/index.html                      Contato e formulário
privacidade/index.html                  Política de Privacidade
termos/index.html                       Termos de Uso
robots.txt                              Regras para buscadores e crawlers de IA
sitemap.xml                             URLs canônicas do site
llms.txt                                Resumo factual para leitores de IA
docs/22-static-template.html            Template documentado para novas páginas
```

As URLs usam diretórios com `index.html`. Assim, `/sobre/index.html` é publicado como `/sobre/`. Os links internos usam caminhos absolutos na raiz, como `/css/style.css` e `/contato/`.

## Design e funcionamento

- Navy `#0E233A`, champagne `#C9A962` e off-white `#F7F5F1` definidos como custom properties.
- Montserrat para textos e IBM Plex Mono apenas para números, ambas pelo Google Fonts com `display=swap`.
- Layout mobile first, grids responsivos, foco visível, skip link, contraste e suporte a `prefers-reduced-motion`.
- Header fixo com blur. O JavaScript apenas reforça o estado de scroll e facilita fechar o menu móvel.
- Menu móvel implementado com `details` e `summary`, portanto funciona sem JavaScript.
- Animações de entrada feitas em CSS. Nenhum conteúdo depende de IntersectionObserver para aparecer.
- As páginas novas reutilizam os componentes existentes, sem alteração do CSS ou das páginas núcleo.

## SEO e GEO

Cada página tem title, description, canonical, Open Graph, Twitter Card e JSON-LD próprios. A home e a página Sobre usam `Person` com `sameAs`. A home também usa `WebSite`, `ProfessionalService` e `Organization`. Páginas internas usam breadcrumbs visíveis e `BreadcrumbList` correspondente.

As seis páginas de serviço incluem `Service` e `FAQPage`, com perguntas e respostas presentes no HTML. O hub de atuação usa `ProfessionalService` e catálogo de serviços. Empresas reúne cinco entidades `Organization`, com `sameAs` apenas para URLs oficiais confirmadas. O blog usa `CollectionPage` e `ItemList`.

O `robots.txt` permite rastreamento geral e declara explicitamente GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended e Bingbot. O `llms.txt` reúne fatos, áreas, empresas, artigos e URLs principais em linguagem informativa.

## Como publicar

1. Revise as páginas de atuação, projetos, empresas e blog já criadas. Conclua os três artigos reservados antes de publicar suas URLs.
2. Use `docs/22-static-template.html` como base para futuras páginas. Substitua todos os metadados, o conteúdo e o JSON-LD. Não mantenha textos de exemplo.
3. Configure uma hospedagem estática que sirva `index.html` dentro de diretórios e use `404.html` como página de erro. Netlify, Cloudflare Pages, Vercel estático, Amazon S3 com CDN e servidores Apache ou Nginx podem atender esse formato.
4. Publique a raiz estática, não a pasta `dist/` do Vite. O pacote público precisa conter os HTMLs, `css/`, `js/`, `img/`, `robots.txt`, `sitemap.xml` e `llms.txt`. Não é necessário publicar `src/`, `node_modules/` ou configurações React.
5. Não há comando de build. Para testar localmente, sirva a raiz com um servidor HTTP estático. Abrir por `file://` não reproduz corretamente os caminhos absolutos.
6. Configure o certificado e o domínio `www.leonardopedrini.com`. Envie o sitemap ao Google Search Console e ao Bing Webmaster Tools.
7. Após o deploy, teste canonical, status HTTP, Open Graph, JSON-LD, menu por teclado, formulário, sitemap, robots e layout móvel.

## Correção de 404 em subdiretórios na Vercel

O arquivo `vercel.json` na raiz força o projeto a funcionar como site estático, sem framework e sem build. A propriedade `outputDirectory` está definida como `.` porque a raiz contém os HTMLs públicos. Essa declaração explícita é importante quando existe uma pasta `public/` legada, já que a detecção automática do preset Other pode escolher essa pasta em vez da raiz.

A configuração também usa `cleanUrls: true` e `trailingSlash: true`. O servidor estático da Vercel resolve diretórios que contêm `index.html`, portanto `/blog/` usa `blog/index.html` e `/sobre/` usa `sobre/index.html`. Não deve existir um rewrite genérico de SPA que envie todas as rotas para o `index.html` da home. Rewrites individuais não são necessários para a resolução nativa desses arquivos.

### Conferência no dashboard

1. Abra o projeto em Vercel e acesse `Project Settings`, depois `General` e `Build and Deployment`.
2. Em `Framework Preset`, selecione `Other`.
3. Em `Build Command`, deixe o campo vazio com `Override` ativado se a interface permitir essa edição. O valor `buildCommand: null` do `vercel.json` deve prevalecer no deployment.
4. Em `Install Command`, deixe o campo vazio ou sem comando personalizado. O valor `installCommand: null` do arquivo evita depender do pacote React legado.
5. Em `Output Directory`, informe `.` com `Override` ativado se o dashboard exigir confirmação manual. Não use `dist` nem `public`.
6. Em `Root Directory`, confirme que o projeto aponta para a raiz do repositório, onde estão `index.html`, `vercel.json`, `blog/`, `sobre/` e as demais pastas.
7. Salve as alterações e faça um novo deploy da branch de produção. Um deploy antigo não muda retroativamente quando o dashboard é editado.
8. Na inspeção do deployment, confirme que não houve execução de `vite build` e que os arquivos estáticos da raiz foram incluídos.
9. Teste em janela anônima `/`, `/blog/`, `/sobre/`, `/projetos/`, `/empresas/`, `/contato/`, `/atuacao/` e uma página filha, como `/atuacao/usinas/`. Teste também `/blog/index.html`, que deve ser normalizado pelas regras de URL limpa e barra final.
10. Se ainda houver 404, verifique nos logs qual diretório de saída foi usado e se o deploy realmente contém o commit com `vercel.json`. Não adicione rewrite de SPA como tentativa de correção.

Referências oficiais consultadas: `https://vercel.com/docs/project-configuration/vercel-json` e `https://vercel.com/docs/builds/configure-a-build`.

## Blog editorial com filtros progressivos

A listagem do blog tem artigo em destaque, capas, categorias, tempo de leitura e filtros com contadores. No mobile, os cards usam lista horizontal com capa lateral. Em telas maiores, a apresentação muda para grade editorial assimétrica.

Os filtros são aprimoramento progressivo em `js/main.js`. Sem JavaScript, todos os artigos continuam visíveis e os chips funcionam como âncoras para a listagem. O estado vazio de energia solar só aparece quando o filtro correspondente é ativado com JavaScript.

## Formulário: configuração obrigatória

Os formulários da home e de `/contato/` têm o action placeholder:

```text
https://formspree.io/f/SUBSTITUA_PELO_ID_DO_FORMULARIO
```

Os botões estão intencionalmente com `disabled`, e uma nota visível informa que nenhum dado é transmitido. Para ativar:

1. Criar e configurar o endpoint real no Formspree ou substituir o action por outro serviço equivalente.
2. Remover o atributo `disabled` e trocar o texto do botão por uma chamada de envio.
3. Atualizar ou remover a nota de configuração.
4. Configurar proteção contra spam, notificação, armazenamento e página de retorno.
5. Testar o recebimento e revisar a Política de Privacidade conforme os provedores efetivamente usados.

## Pendências de conteúdo e evidências

- Validar o escopo, o período e a atribuição coletiva dos indicadores `200+`, `2 GW+` e `R$ 5 bi+` antes da publicação.
- Revisar e aprovar a biografia e a formação com Leonardo.
- Obter autorização para as fotografias e atualizar a imagem Open Graph para o novo posicionamento.
- Confirmar escopos, vínculos, logotipos e URLs de BESS4YOU e Carbon4you antes de acrescentar informações.
- Publicar somente estudos de caso reais, autorizados e com resultados comprováveis.
- Criar e revisar os três artigos reservados antes de apresentar seus links como conteúdo publicado.
- Confirmar dados jurídicos do controlador e ativar um canal específico de privacidade.

## Domínio antigo e redirects

Configurar redirect permanente 301 de `www.lvpedrini.com.br` e de variantes sem `www` para `https://www.leonardopedrini.com/`, preservando o caminho quando houver página equivalente. Não presumir que o redirect já existe.

Mapear as URLs React antigas antes da troca. Criar redirects 301 para as novas URLs com barra final e para as novas páginas de serviço. URLs sem equivalente devem retornar 404 real, sem redirecionamento genérico para a home.

## Próxima etapa

O próximo agente deve criar os três artigos reservados usando o mesmo template, adicionar JSON-LD `Article` e `BreadcrumbList`, revisar os links do blog e manter as regras editoriais. Não adicionar telefone, e-mail, endereço, CNPJ, cases, depoimentos ou papéis societários sem confirmação.
