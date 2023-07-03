/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#008021",
      primaryFocus: "#00681a",
      error: "#FF8585",
      alert: "#FFD485",
      backgroud: "#fefefe",
      contrastBackgroud: "#eaecec",
      white: "#fff",
      black: "#000",
      gray: "#9b9b9b",
      darkBlue: "#0676ed"
    },
  },
  plugins: [require("tailwindcss-animated")],
};

/*
colors variations:
primary: #11b811
error: #f14c4c
alert: "#f4b61a"
*/