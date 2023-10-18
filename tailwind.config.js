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
      lightGreen: "#00d082",
      white: "#fff6f6",
      pink: "#ff73b5",
      red: "#f95b77",
      yellow: "#d4ed6d",
      mustardYellow: "#fcb900",
    },
    fontFamily: {
      narrow: ["PT Sans Narrow", "sans-serif"],
      lilita: ["Lilita One", "cursive"],
      anton: ["Anton", "sans-serif"],
    },
  },
  plugins: [],
};
