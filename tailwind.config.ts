
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#FBCFE8", // Pink-200
          foreground: "#831843", // Pink-900
        },
        secondary: {
          DEFAULT: "#F3E8FF", // Purple-100 (very light)
          foreground: "#581C87", // Purple-900
        },
        accent: {
          DEFAULT: "#818CF8", // Indigo-400
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F4F4F5", // Zinc-100
          foreground: "#71717A", // Zinc-500
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.7)",
          foreground: "#1E1B4B", // Indigo-950
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(to bottom right, #FFF1F2, #F3E8FF, #FFFFFF)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
