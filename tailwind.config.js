/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  images: {
    domains: ['s-lol-web.op.gg'],
  },
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },   
          '100%': { opacity: '1' },  
        },
      },
      colors: {
        primary: {
          DEFAULT: "#7e5dca",
          hover: "#5936ab",
          focus: "#5432a3",
        },
        error: {
          DEFAULT: "#f84b4b",
          hover: "#e92626",
        },
        alert: {
          DEFAULT: "#ebb44f",
          hover: "#f3b005",
        },
        disabled: {
          DEFAULT: "#BBBBBB",
          hover: "#AAAAAA",
        },
        gray: "#8A8A8A",
        lightGray: "#eff1f0",
        background: "#fefefe",
        contrastBackground: "#eaecec",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
