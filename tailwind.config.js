/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'display':['poppins','sans-serif'],
        'body':['Roboto','sans-serif']
      },
      colors:{
        'primary': '#ff7700',
        'secondary': '#3238f2',
      }
    },
  },
  plugins: [],
}

