/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#1723FF',
        'secondary': '#30E35E',
        'info': '#717171',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      dropShadow: {
        'services': '2px 2px 5px rgb(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hexagon-right': "url('./images/PARTNERS/PNG/Right.png')",
        'hexagon-left': "url('./images/PARTNERS/PNG/Left.png')"
      },
    },
  },
  plugins: [],
}

