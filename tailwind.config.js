/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#1723FF',
        'secondary': '#30E35E',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      dropShadow: {
        'services': '2px 2px 5px rgb(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

