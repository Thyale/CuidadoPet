/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "media",
  theme: {
    colors: {
      'Yellow': '#B3A704',
      'Green': '#2E5F2E',
      'LigthGreen' : '#388938',
      'GreenDark': '#1F4220',
      'Black' : '#0D0D0D',
      'Brown' : '#8C6849',
      'Bege': '#BFAE99',
      'white' : '#f8fafc',
      'Gray200' : '#e5e7eb',
      'whiteTransparent' : 'rgba(255, 255, 255, 0.542)',
      'BlackTransparent' : 'rgba(0, 0, 0, 0.519)'
    },
    fontFamily: {
      Frist: ["Rubik", 'sans-serif'],
      Second: ["Baskervville SC",'serif'],
    },
    screens: {
      'Mobile': {'max': '639px'},
      'DeskTop' : {'min' : '1200px'},
    },
    extend: {},
  },
  plugins: [],
}

