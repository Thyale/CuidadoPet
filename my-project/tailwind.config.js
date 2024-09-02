/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : "media",
  theme: {
    colors: {
      'Yellow': '#F2E205',
      'Green': '#2E5F2E',
      'GreenDark': '#1F4220',
      'Black' : '#0D0D0D',
      'Brown' : '#8C6849',
      'Bege': '#BFAE99',
      'white' : '#f8fafc',
    },
    fontFamily: {
      Frist: ["Rubik", 'sans-serif'],
      Second: ["Baskervville SC",'serif'],
    },
    screens: {
      'Mobile': {'max': '639px'},
    },
    extend: {},
  },
  plugins: [],
}

