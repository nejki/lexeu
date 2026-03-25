import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          DEFAULT: "#F4F1ED",
          dark: "#E8E3DB",
          mid: "#D4CCBF",
        },
        sage: {
          DEFAULT: "#2A2520",
          light: "#9A938A",
          pale: "#EDEAE6",
          dark: "#1A1714",
        },
        accent: {
          DEFAULT: "#BF7A3B",
          light: "#D08E55",
        },
        warm: {
          DEFAULT: "#C8A882",
          light: "#ECD9C4",
          pale: "#F5EEE3",
        },
        rose: {
          dusty: "#C89090",
          light: "#E8C8C8",
        },
        site: {
          bg: "#F4F1ED",
          white: "#FAFAF8",
          text: "#2A2520",
          mid: "#5C5650",
          muted: "#9A938A",
          border: "#E0D9D0",
        },
      },
      fontSize: {
        'heading-sm': 'clamp(32px, 4vw, 48px)',
        'heading-md': 'clamp(36px, 4vw, 54px)',
        'heading-lg': 'clamp(36px, 5vw, 58px)',
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.16em",
      },
    },
  },
  plugins: [],
};

export default config;
