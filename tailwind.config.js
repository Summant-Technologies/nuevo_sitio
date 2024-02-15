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
        'cegid-seleccion': '1px 1px 5px rgba(25, 52, 239, .5)',
        'cegid-onboarding': '1px 1px 5px rgba(29, 83, 210, .5)',
        'cegid-compensacion': '1px 1px 5px rgba(32, 105, 196, .5)',
        'cegid-beneficios': '1px 1px 5px rgba(35, 131, 174, .5)',
        'cegid-capacitacion': '1px 1px 5px rgba(39, 157, 152, .5)',
        'cegid-talento': '1px 1px 5px rgba(42, 185, 129, .5)',
        'cegid-desarrollo': '1px 1px 5px rgba(45, 207, 110, .5)',
        'servicios-desktop': '0px 25px 20px -20px rgba(45, 207, 110, .5)'
      },
      backgroundImage: {
        'hexagon-right': "url('./images/PARTNERS/PNG/Right.png')",
        'hexagon-left': "url('./images/PARTNERS/PNG/Left.png')"
      },
    },
  },
  plugins: [],
}

