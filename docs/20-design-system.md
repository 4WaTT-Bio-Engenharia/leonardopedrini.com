# 20 — Design System: Luxo Navy & Champagne

Sistema visual do site L.V. Pedrini (Fase 1 do redesign). Referência obrigatória para aplicar
o sistema às demais páginas. Ritmo editorial de luxo: **restrição de cor, muito whitespace,
hierarquia tipográfica forte**, alternância de seções navy escuras e off-white quentes.

---

## 1. Paleta

| Token | Hex | Uso |
|---|---|---|
| `grafite` (navy) | `#0A1524` | Fundo escuro principal, texto sobre claro (`foreground`) — tom "midnight", mais escuro que a v1 |
| `grafite-950` | `#02050A` | Preto-azulado — profundidade máxima (vinhetas) |
| `grafite-900` | `#050810` | Navy profundo — header sólido, footer, gradientes |
| `grafite-700` | `#101F33` | Navy médio — hover de cards escuros, gradientes |
| `grafite-500` | `#1B3350` | Navy claro — bordas em contexto escuro |
| `papel` | `#F7F5F1` | Off-white quente — fundo claro, texto sobre navy |
| `papel-dark` | `#EAE6DD` | Off-white profundo |
| `papel-light` | `#FCFBF8` | Quase branco — cards, barra de credibilidade |
| `cobre` (champagne) | `#C9A962` | **Acento de luxo** — CTAs, detalhes finos, hairlines |
| `cobre-dark` | `#A8894A` | Dourado p/ texto/links sobre fundo claro (contraste) |
| `cobre-light` | `#DCC48C` | Dourado p/ texto/detalhes sobre navy |
| `cobre-soft` | `#F1E8D5` | Champagne em superfície (cards de destaque claros) |
| `aco` | `#8A97A8` / dark `#5A6B80` / light `#C7CFDA` | Neutros azul-acinzentados, texto secundário |
| `medicao` | `#3F6B5A` | Verde sálvia — sucesso/confirmação |
| `risco` | `#8A3A34` | Vinho técnico — erros |

**Tokens semânticos (CSS vars em `src/index.css`)**: tema default **claro**
(`--background` = papel, `--foreground` = navy). `--primary` = `cobre-dark` (seguro para
`text-primary` sobre claro). `--popover` = navy profundo (menus). Seções escuras são
**explícitas** (não dependem de `.dark`): use `bg-gradient-navy` / `bg-navy-hero` / `bg-grafite-900`
+ texto `text-papel`.

**Regras de ouro**: dourado é acento, nunca fundo de bloco grande; sobre claro use `cobre-dark`
para texto; sobre navy use `cobre-light`; `cobre` puro só em fundos sólidos de botão e hairlines.

## 2. Tipografia — Montserrat em tudo

Google Fonts: `Montserrat:wght@300;400;500;600;700;800` + `IBM Plex Mono:wght@400;500;600`.

| Papel | Classe | Spec |
|---|---|---|
| Display / H1 | `font-display font-extrabold` | Montserrat 800, `tracking-[-0.025em]`, `text-5xl md:text-7xl`, `leading-[1.02]` |
| H2 de seção | via `SectionHeading` | Montserrat 800, `text-4xl md:text-5xl lg:text-[3.4rem]`, `leading-[1.06]` |
| H3 / card | `font-display font-bold` | Montserrat 700, `text-xl`–`text-2xl`, `tracking-[-0.015em]` |
| Eyebrow | `.eyebrow` | Montserrat 600, `text-[11px]`, uppercase, `tracking-[0.24em]`, + hairline `h-px w-10` |
| Corpo | `font-sans` (default) | Montserrat 400/500, `text-base`/`text-lg`, `leading-relaxed` |
| Números/dados | `font-mono` | **IBM Plex Mono SOMENTE para números**: índices `01`, preços, CNPJ, dados |

Fraunces e Archivo foram **removidas**. Não usar `font-mono` para eyebrows/labels — isso é do
sistema antigo; eyebrow é sempre Montserrat 600 uppercase.

## 3. Utilitários (index.css)

- `.eyebrow` — label eyebrow (adicionar `text-cobre-dark` sobre claro / `text-cobre-light` sobre navy).
- `.hairline-gold` — linha dourada de 1px com fade nas pontas (topo de footer/CTA, base do hero).
- `.card-lux` — card refinado: borda hairline + hover `-translate-y-1 border-cobre/50` + sombra soft.
- `.bg-navy-hero` — navy com brilho champagne radial (heróis e CTA final).
- `.bg-grid-navy` / `.bg-grid-light` — grid fino 72px como textura de seção (camada `absolute inset-0` + `aria-hidden`).
- `.text-gradient-gold` — gradiente champagne em texto (uso raro: frase de impacto do H1).
- `ease-luxury` — `cubic-bezier(0.22, 1, 0.36, 1)`, a curva padrão de todas as transições.
- Sombras: `shadow-soft`, `shadow-premium`, `shadow-gold`.

## 4. Motion

- **`Reveal`** (`src/components/motion/Reveal.tsx`): wrapper de scroll-reveal via
  IntersectionObserver. Props: `delay` (ms — escalonar grids com `i * 90`–`i * 120`),
  `y` (px, default 28). Respeita `prefers-reduced-motion` (renderiza visível). **Sem framer-motion.**
- Hero: `Reveal` escalonado 0/120/240/360/460ms.
- Micro-interações: `transition-all duration-300 ease-luxury`; setas `group-hover:translate-x-1`;
  botões `hover:-translate-y-0.5`.
- Animações contínuas (hero): `animate-flow-dash` (linha tracejada SVG), `animate-node-pulse`
  (nós), ambas desligadas em `prefers-reduced-motion` via CSS.
- Entrada de painéis (mega menu): `animate-mega-in` (fade + slide −10px, 0.32s ease-luxury).
- **`TiltCard`** (`src/components/motion/TiltCard.tsx`): profundidade 3D estilo Apple —
  `perspective` + `rotateX/rotateY` via cursor (pointermove, só mouse) e brilho direcional
  (`.tilt-glare`, radial-gradient que segue `--mx`/`--my`). Prop `strength` (graus, default 7)
  controla a intensidade — usar valores baixos (4–5) em cards de conteúdo denso, mais alto
  (8–10) em cards decorativos/logos. Desligado em `prefers-reduced-motion` via `.tilt-card`
  em `index.css`. **Sem dependências** — CSS custom properties + pointer events apenas.
- Faixa de logos (`LogoStrip`): marquee contínuo (`animate-marquee`, loop 34s linear, lista
  duplicada) + flutuação idle por item (`animate-logo-float`, stagger por `animationDelay`) +
  `TiltCard` por logo. Pausa no hover via `group-hover/marquee:[animation-play-state:paused]`.

## 5. Componentes

- **`CTAButton`**: primary = `bg-cobre text-grafite-900`, uppercase, `tracking-[0.14em]`,
  `shadow-gold`, hover `bg-cobre-light -translate-y-0.5`. Outline = ghost hairline que herda cor;
  sobre navy passar `className="border-papel/25 text-papel hover:border-cobre-light hover:text-cobre-light"`.
- **`SectionHeading`**: `eyebrow` + H2 800 + description; `tone="dark"` sobre navy; `align="center"` opcional.
- **`CTASection`**: bloco final navy imersivo (`bg-navy-hero` + grid + hairline dourada) com `Reveal`.
- **`SiteHeader`**: fixo; transparente sobre hero navy em `/`, `/metodo`, `/cases` → sólido
  `bg-grafite-900/90 backdrop-blur-xl` ao rolar (scrollY > 24) ou nas demais rotas. Mega menu
  "Soluções": painel full-width navy com 3 grupos (Comece aqui / Aprender e aplicar / Implementar
  comigo) + coluna de destaque do AI Work Audit; abre por hover (delay 140ms) e clique; fecha com
  Escape/rota. Mobile: Sheet navy full-width com os mesmos grupos, tipografia grande, card de
  destaque do Audit e CTA dourado.
- **`SiteFooter`**: `bg-grafite-900`, hairline dourada no topo, eyebrows `cobre-light/70`,
  newsletter com input navy + botão champagne.

## 6. Padrão de seção (aplicar nas demais páginas)

```tsx
{/* Seção clara */}
<section className="border-b border-border">
  <div className="container py-28 md:py-36">
    <Reveal><SectionHeading eyebrow="…" title="…" /></Reveal>
    …
  </div>
</section>

{/* Seção navy imersiva */}
<section className="relative overflow-hidden border-b border-grafite-500/30 bg-gradient-navy text-papel">
  <div className="absolute inset-0 bg-grid-navy" aria-hidden />
  <div className="container relative py-28 md:py-36">
    <Reveal><SectionHeading tone="dark" eyebrow="…" title="…" /></Reveal>
    …
  </div>
</section>
```

Ritmo da Home (referência): hero navy → credibilidade clara → clara → clara `bg-secondary/50` →
CARGA navy → cases clara → **soluções navy** → ICPs clara → bio `bg-secondary/50` → insights clara
→ newsletter → CTA navy. Alternar no máximo 2–3 seções claras seguidas antes de um bloco navy.

Padding vertical padrão: `py-28 md:py-36`. Cards em grids: `.card-lux` ou `gap-px` hairline grid.
Sobre navy: texto `text-papel`, secundário `text-papel/55`–`/65`, bordas `border-papel/10`–`/15`.

## 7. Não fazer

- Não reintroduzir Fraunces/Archivo nem `font-mono` em labels.
- Não usar roxo, gradientes neon, robôs/cérebros/circuitos.
- Não criar novas cores fora da paleta; dourado sempre com parcimônia.
- Não instalar dependências de animação (framer-motion etc.) — CSS + IO apenas.
