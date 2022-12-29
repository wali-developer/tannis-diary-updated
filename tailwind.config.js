/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#E5E5E5',
        'dark-gray': '#A0A0A3',
        'myellow': '#B3DD07'
      }
    },
  },
  plugins: [],
}