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
        'services': '2px 2px 5px rgb(0, 0, 0, 0.1)',
        'cegid-seleccion': '2px 2px 5px rgba(25, 52, 239, 1)',
        'cegid-onboarding': '1px 1px 3px rgba(29, 83, 210, 1)',
        'cegid-compensacion': '2px 2px 5px rgba(32, 105, 196, 1)',
        'cegid-beneficios': '2px 2px 5px rgba(35, 131, 174, 1)',
        'cegid-capacitacion': '2px 2px 5px rgba(39, 157, 152, 1)',
        'cegid-talento': '2px 2px 5px rgba(42, 185, 129, 1)',
        'cegid-desarrollo': '2px 2px 5px rgba(45, 207, 110, 1)',
      },
      backgroundImage: {
        'hexagon-right': "url('./images/PARTNERS/PNG/Right.png')",
        'hexagon-left': "url('./images/PARTNERS/PNG/Left.png')"
      },
    },
  },
  plugins: [],
}

