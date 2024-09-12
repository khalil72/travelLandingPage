

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', 'sans-serif'], 
      },
      colors: {
        blackColor:'#212832',
        subColor:'#5E6282',
        redColor:'#DF6951',
        buttonColor:'#F1A501'

      },
    },
  },
  plugins: [],
}