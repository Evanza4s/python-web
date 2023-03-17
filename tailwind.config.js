/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#401B59",
        "violet": "#683FBF",
        "purple": "#542B8C",
        "sky": "#85A0F2",
        "yellow": "#F2C335",
        "black": "#1A1E26",
        "light-white": "rgba(255,255,255,0.17)",
      },
      backgroundImage: (theme) => ({
        "gradient-nebula":
        "linear-gradient(81.66deg, #311273 7.21%, #252359 45.05%, #1E1940 78.07%)",
        "gradient-sky":
        "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 78.07%)",
      }),
      fontFamily: {
        space: ["Space Mono", "monospace"],
        fugasOne: ["Fugaz One", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        righteous: ["Righteous", "cursive"]
      },
      screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      },
      content: {
        brush: "url('./assets/brush.png')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}
