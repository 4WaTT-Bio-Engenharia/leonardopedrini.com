import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          muted: "hsl(var(--primary-muted))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /*
         * Paleta "Luxo Navy & Champagne".
         * Chaves legadas remapeadas: grafite → navy · papel → off-white ·
         * cobre → dourado champagne · aco → azul-acinzentado ·
         * medicao → verde sálvia · risco → vinho técnico.
         */
        grafite: {
          DEFAULT: "#0E233A", // navy principal
          900: "#081626", // navy profundo (footer, faixas)
          700: "#122E4D", // navy médio (gradientes, cards escuros)
          500: "#1E3A5C", // navy claro (bordas em escuro)
        },
        papel: {
          DEFAULT: "#F7F5F1", // off-white quente
          dark: "#EAE6DD",
          light: "#FCFBF8",
        },
        cobre: {
          DEFAULT: "#C9A962", // dourado champagne — acento de luxo
          dark: "#A8894A", // dourado profundo (texto sobre claro)
          light: "#DCC48C", // dourado claro (texto sobre navy)
          soft: "#F1E8D5", // dourado em superfície
        },
        aco: {
          DEFAULT: "#8A97A8", // azul-acinzentado
          dark: "#5A6B80", // texto secundário sobre claro
          light: "#C7CFDA",
        },
        medicao: {
          DEFAULT: "#3F6B5A",
          dark: "#2F5346",
          light: "#7FA393",
          soft: "#E0E9E4",
        },
        risco: {
          DEFAULT: "#8A3A34",
          dark: "#6E2E29",
          soft: "#F2DEDC",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-gold": "var(--gradient-gold)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-navy": "var(--gradient-navy)",
      },
      boxShadow: {
        premium: "var(--shadow-premium)",
        soft: "var(--shadow-soft)",
        gold: "var(--shadow-gold)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "mega-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "flow-dash": {
          to: { strokeDashoffset: "-28" },
        },
        "node-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "mega-in": "mega-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both",
        "flow-dash": "flow-dash 1.6s linear infinite",
        "node-pulse": "node-pulse 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
