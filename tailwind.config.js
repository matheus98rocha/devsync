/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#009F29",
          hover: "#008021",
          focus: "#00681a",
        },
        error: {
          DEFAULT: "#FF8585",
          hover: "#f14c4c"
        },
        alert: {
          DEFAULT: "#FFD485",
          hover: "#f4b61a",
        },
        disabled: {
          DEFAULT: "#BBBBBB",
          hover: "#AAAAAA",
        },
        white: "#fff",
        black: "#000",
        gray: "#9b9b9b",
        background: "#fefefe",
        contrastBackground: "#eaecec",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};