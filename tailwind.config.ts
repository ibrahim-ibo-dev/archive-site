import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ── Color System ── */
      colors: {
        primary: "#0A0A0F",
        secondary: "#12121A",
        surface: {
          DEFAULT: "#12121A",
          raised: "#1A1A24",
          overlay: "#22222E",
        },
        accent: {
          DEFAULT: "#D4A574",
          light: "#E8C9A0",
          soft: "rgba(212, 165, 116, 0.12)",
          muted: "rgba(212, 165, 116, 0.06)",
        },
        "accent-light": "#E8C9A0",
        muted: "#8A8A9A",
        subtle: "#5A5A6A",
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          accent: "rgba(212, 165, 116, 0.15)",
          hover: "rgba(212, 165, 116, 0.25)",
        },
        textColor: "#E8E4E0",
      },
      /* ── Typography ── */
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "heading": ["clamp(2rem, 3.5vw + 0.5rem, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "subheading": ["clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.7" }],
        "body": ["0.9375rem", { lineHeight: "1.7" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        "overline": ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.15em", fontWeight: "500" }],
      },
      /* ── Elevation Shadows ── */
      boxShadow: {
        "glow-sm": "0 0 20px rgba(212, 165, 116, 0.08)",
        "glow-md": "0 0 40px rgba(212, 165, 116, 0.12)",
        "card": "0 4px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(212,165,116,0.04)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(212,165,116,0.12), 0 0 30px rgba(212,165,116,0.06)",
      },
      /* ── Border Radius ── */
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      /* ── Motion Tokens ── */
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
export default config;
