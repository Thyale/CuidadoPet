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
      'Black' : '#0D0D0D',
      'Brown' : '#8C6849',
      'Bege': '#BFAE99',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      'Mobile': {'max': '639px'},
    },
    extend: {},
  },
  plugins: [],
}

