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
        sage: {
          50: "#f6f7f6",
          100: "#e3e7e3",
          200: "#c7d0c7",
          300: "#a3b0a3",
          400: "#7d8d7d",
          500: "#617161",
          600: "#4d5a4d",
          700: "#404a40",
          800: "#363e36",
          900: "#2f352f",
        },
        forest: {
          50: "#f2f5f2",
          100: "#e1e8e1",
          200: "#c3d1c3",
          300: "#9bb09b",
          400: "#6d866d",
          500: "#4d664d",
          600: "#3d523d",
          700: "#344334",
          800: "#2d372d",
          900: "#272f27",
        },
        cream: {
          50: "#fefdfb",
          100: "#fdfaf5",
          200: "#faf5e8",
          300: "#f6eed6",
          400: "#f0e2c0",
          500: "#e8d4a8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

