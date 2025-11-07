import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ["arial", "sans-serif"],
        helvetica: ["helvetica", "sans-serif"],
        "old-london": ["old-london", "serif"],
        "times-new-roman": ["var(--font-times-new-roman)", "serif"],
        impact: ["var(--font-impact)", "sans-serif"],
        canopee: ["var(--font-canopee)", "serif"],
        editorial: ["var(--font-editorial-regular)", "serif"],
      },
      colors: {
        themeOrange: "#ff6600",
      },
    },
  },
  plugins: [],
};

export default config;
