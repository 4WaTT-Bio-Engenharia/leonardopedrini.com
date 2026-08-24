# Plano: LinkBio — foto de rosto, botões 3D e animação de entrada

## Objetivo
Atualizar a página `/link-bio` (`src/pages/LinkBio.tsx`) conforme 4 pedidos do usuário,
mantendo o manual da marca Luxo Navy & Champagne.

## 1. Foto do rosto (não corpo inteiro)
- Foto atual (`src/assets/leonardo-de-pe-fundo-branco.png`) é corpo inteiro.
- Usar o retrato enviado pelo usuário (`/mnt/user-uploads/Captura_de_tela_2025-11-04_143243.png`,
  retrato profissional do peito para cima).
- Recortar com PIL (Python) para um quadrado **head-and-shoulders** focado no rosto, para o
  avatar circular (`h-28 w-28`) não cortar a cabeça.
- Externalizar via Lovable Assets (não deixar binário no repo):
  `lovable-assets create --file <crop> --filename leonardo-rosto-linkbio.png`
  → `src/assets/leonardo-rosto-linkbio.png.asset.json`.
- Atualizar o `import` em `LinkBio.tsx` para usar a URL do asset no `src` do `<img>`.

## 2. Botões com efeito 3D
Aplicar efeito 3D nos botões da `<nav>` (sem mudar a paleta):
- Sombra inferior sólida champagne/escura simulando profundidade:
  `shadow-[0_5px_0_0_hsl(var(--...cobre-dark))]` (base do botão).
- `hover:-translate-y-0.5` + intensificar a sombra.
- `active:translate-y-1 active:shadow-[0_1px_0_0_...]` (efeito de "pressionar").
- Manter glassmorphism existente (fundo navy translúcido + borda hairline).
- Sutil gradiente interno no topo para simular luz (highlight).

## 3. Animação de entrada (surgir de baixo para cima ao carregar)
- Usar a keyframe `fade-up` já existente (`tailwind.config.ts`).
- Aplicar `animate-fade-up` escalonado aos blocos do conteúdo:
  foto (delay 0) → nome (delay ~120ms) → descrição → hairline → botões (cada +90ms) → rodapé.
- Como é animação de load (não scroll), usar classe `animate-[fade-up_0.8s_...]` com
  `animation-delay` inline por elemento. Respeitar `prefers-reduced-motion` (via CSS
  `motion-reduce:animate-none`).

## 4. Subtítulo da Comunidade
Alterar o `sub` do item Comunidade no array `links` de:
`"Acesso a aulas, ferramentas e IAs"`
para:
`"Ferramentas e conteúdo exclusivo que geram valor na vida real"`

## Arquivos afetados
- `src/pages/LinkBio.tsx` (edição: import da foto, botões 3D, animação, subtítulo)
- `src/assets/leonardo-rosto-linkbio.png.asset.json` (novo — pointer do asset)

## Verificação
- Ler o `LinkBio.tsx` final para conferir classes e import.
- Rodar tsgo/typecheck para garantir sem erros de tipo.
