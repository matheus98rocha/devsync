/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: "#FF8585",
      green: "#85FFA7",
      yellow: "#FFD485",
      white: "#F5F5F5",
      black: "#000000",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
