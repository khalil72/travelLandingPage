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
        blackColor: '#212832',
        subColor: '#5E6282',
        redColor: '#DF6951',
        buttonColor: '#F1A501',
        shadowColor: '#59B1E6',
        greeceColor: '#080809',
        dataColor: '#84829A',
        custombg: '#DFD7F9',
        hslColor: 'hsla(225, 39%, 36%, 1)',
      },
      borderRadius: {
        custom: '129px 20px 20px 20px',
      },
      rotate: {
        '180': '180deg',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
