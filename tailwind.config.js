/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      green: "#042f1a",
      white: "#fff6f6",
      pink: "#ff73b5",
      yellow: "#d4ed6d",
    },
    fontFamily: {
      narrow: ["PT Sans Narrow", "sans-serif"],
      lilita: ["Lilita One", "cursive"],
      anton: ["Anton", "sans-serif"],
    },
  },
  plugins: [],
};
