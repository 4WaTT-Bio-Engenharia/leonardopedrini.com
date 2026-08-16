# Business Acceleration Hub

**PROMPT PARA LOVABLE.DEV**

**Objetivo:** Criar uma landing page de alta conversão para capturar leads (nome, e-mail, telefone) para a marca pessoal de Leonardo Pedrini, um mentor de gestão para microempreendedores. A página oferecerá uma isca digital gratuita chamada "A Biblioteca Essencial do MEI".

**Estrutura da Página (de cima para baixo):**

**1. Seção de Cabeçalho (Hero Section):**

   - Fundo: Uma imagem de alta qualidade, com tons escuros e profissionais, mostrando Leonardo Pedrini em um ambiente de escritório moderno, olhando para a câmera com uma expressão confiante. A imagem deve ter um overlay escuro para garantir a legibilidade do texto.

   - Título Principal (H1): "A Biblioteca Essencial do MEI: 3 Livros que Valem um MBA e as Ferramentas para Aplicá-los Hoje."

   - Subtítulo (H2): "Receba de graça os resumos executivos dos 3 livros que me ajudaram a construir um ecossistema de R$ 5 bilhões, junto com planilhas e templates prontos para você usar no seu negócio hoje."

   - Botão de Ação (CTA): Um botão grande, com a cor verde neon (#39FF14), com o texto "QUERO MINHA BIBLIOTECA GRATUITA". Este botão deve rolar suavemente para a seção do formulário no final da página.

**2. Seção "O Que Você Vai Receber":**

   - Título da Seção (H2): "Um MBA para MEIs, entregue em seu e-mail em 5 minutos."

   - Layout: Três colunas, cada uma representando um livro.

   - **Coluna 1:**

     - Imagem: Capa do livro "Profit First" de Mike Michalowicz.

     - Título do Livro (H3): "Profit First (O Lucro Primeiro)"

     - Descrição: "Aprenda a se pagar primeiro e garanta que sua empresa sempre tenha lucro, revertendo a lógica tradicional do fluxo de caixa."

     - Ferramenta: "+ Planilha 'O Lucro Primeiro em 5 Minutos'"

   - **Coluna 2:**

     - Imagem: Capa do livro "The E-Myth Revisited" de Michael E. Gerber.

     - Título do Livro (H3): "O Mito do Empreendedor"

     - Descrição: "Descubra a diferença entre ser um técnico escravo do seu negócio e um empreendedor que constrói sistemas que trabalham para você."

     - Ferramenta: "+ Checklist 'Minha Primeira SOP (Standard Operating Procedure)'"

   - **Coluna 3:**

     - Imagem: Capa do livro "Essencialismo" de Greg McKeown.

     - Título do Livro (H3): "Essencialismo"

     - Descrição: "Domine a arte de focar nos 20% de atividades que geram 80% dos resultados, eliminando a sobrecarga e o caos do dia a dia."

     - Ferramenta: "+ Matriz de Eisenhower Simplificada para MEIs"

**3. Seção "Para Quem É / Para Quem Não É":**

   - Layout: Duas colunas.

   - **Coluna 1 (Para Quem É):**

     - Título (H3): "Isto é para você se..."

     - Itens (com ícones de check ✔️): "...você é MEI, autônomo ou dono de um pequeno negócio.", "...você se sente sobrecarregado e sem tempo.", "...você quer organizar suas finanças e ter mais lucro.", "...você está pronto para aplicar um método simples e comprovado."

   - **Coluna 2 (Para Quem Não É):**

     - Título (H3): "Isto NÃO é para você se..."

     - Itens (com ícones de X ❌): "...você busca uma fórmula mágica para ficar rico.", "...você não está disposto a dedicar 15 minutos por dia ao seu negócio.", "...você prefere continuar apagando incêndios a construir um sistema."

**4. Seção "Sobre Leonardo Pedrini":**

   - Layout: Duas colunas.

   - **Coluna 1:** Uma foto profissional de Leonardo Pedrini, de meio corpo, com fundo neutro.

   - **Coluna 2:**

     - Título (H2): "De projetos de R$ 5 bilhões para a realidade do seu MEI."

     - Parágrafo: "Meu nome é Leonardo Pedrini. Sou engenheiro, empreendedor e fundador de um ecossistema de infraestrutura e energia. Construí tudo do zero, sem herança e sem network. A mesma lógica de gestão que uso em projetos bilionários pode ser simplificada para ajudar você a ter mais lucro, mais tempo e mais liberdade. Meu objetivo é traduzir o complexo para o simples e te dar as ferramentas para crescer."

**5. Seção do Formulário de Captura:**

   - Título (H2): "Receba acesso imediato e gratuito."

   - Formulário com 3 campos:

     - Campo 1: "Seu Nome" (obrigatório)

     - Campo 2: "Seu Melhor E-mail" (obrigatório, tipo e-mail)

     - Campo 3: "Seu WhatsApp" (obrigatório, tipo telefone)

   - Botão de Envio: Um botão grande, cor verde neon (#39FF14), com o texto "ENVIAR MINHA BIBLIOTECA GRATUITA".

   - Texto de Privacidade abaixo do botão: "Seus dados estão 100% seguros. Odio spam tanto quanto você."

**6. Funcionalidade do Formulário (Backend):**

   - Ao clicar em "ENVIAR MINHA BIBLIOTECA GRATUITA", os dados (nome, e-mail, telefone) devem ser salvos em um banco de dados Supabase, em uma tabela chamada 'leads'.

   - **Simultaneamente**, o formulário deve disparar uma requisição POST para uma URL de um Google Apps Script (a URL será fornecida posteriormente) para adicionar os mesmos dados a uma planilha do Google Sheets.

   - Após o envio bem-sucedido, o usuário deve ser redirecionado para uma página de "Obrigado" com a mensagem: "Pronto! Sua biblioteca foi enviada para o seu e-mail. Verifique sua caixa de entrada (e a de spam, por via das dúvidas)."

**Design e Estilo:**

- Paleta de cores: Preto (#000000), Branco (#FFFFFF), Cinza escuro (#1a1a1a) e Verde Neon (#39FF14) para os botões e destaques.

- Tipografia: Use uma fonte moderna e limpa, como Inter ou Manrope.

- A página deve ser totalmente responsiva para mobile.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://lvpedrini-mentor-boost.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2ff26add-3ee2-4352-8ffd-e8b4a3662c58).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
