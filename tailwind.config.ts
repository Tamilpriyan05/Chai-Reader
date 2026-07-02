import type { Config } from "tailwindcss";

// All colors are wired to CSS variables (see app/globals.css).
// To re-theme the whole app, edit the variables in one place instead of
// hunting through components.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        sidebar: "rgb(var(--color-sidebar) / <alpha-value>)",
        "sidebar-foreground": "rgb(var(--color-sidebar-foreground) / <alpha-value>)",
        "sidebar-active": "rgb(var(--color-sidebar-active) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          foreground: "rgb(var(--color-primary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          foreground: "rgb(var(--color-accent-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--color-muted) / <alpha-value>)",
          foreground: "rgb(var(--color-muted-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--color-border) / <alpha-value>)",
        badge: {
          DEFAULT: "rgb(var(--color-badge-bg) / <alpha-value>)",
          foreground: "rgb(var(--color-badge-foreground) / <alpha-value>)",
        },
        heading: "rgb(var(--color-heading) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
      maxWidth: {
        "content-wrap": "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
