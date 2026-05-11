/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Univers LT Std", "sans-serif"],
        serif: ["TT Chocolates", "serif"],
      },
    },
  },
  plugins: [],
};
