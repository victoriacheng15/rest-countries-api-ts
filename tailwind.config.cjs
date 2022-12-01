/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    animation:{
      "spin-slow": "spin 3s linear infinite"
    },
    extend: {
      fontFamily: {
        nuito: ['Nunito Sans', 'sans-seri'],
      },
      colors: {
        darkBlue: {
          900: 'hsl(200, 15%, 8%)',
          800: 'hsl(207, 26%, 17%)',
          700: 'hsl(209, 23%, 22%)',
        },
        lightGray: {
          900: 'hsl(0, 0%, 52%)',
          800: 'hsl(0, 0%, 98%)',
          700: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
};