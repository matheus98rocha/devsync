/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#85FFA7",
      primaryFocus: "#5CFF8A",
      error: "#FF8585",
      alert: "#FFD485",
      backgroud: "#F5F5F5",
    },
  },
  plugins: [],
};
