import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f80a1",
        accent: "#a4c8e1",
        background: "#d1d3d5",
      },
      fontFamily: {
        sans: ["var(--font-congenial)", "sans-serif"],
        heading: ["var(--font-berlin)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
