import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#F97316",
        accent: "#38BDF8",
        light: "#F8FAFC"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      backgroundImage: {
        heroGradient:
          "linear-gradient(to right, rgba(15,23,42,.85), rgba(15,23,42,.4))"
      }
    }
  },
  plugins: []
};

export default config;
