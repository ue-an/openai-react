/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx, js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#030712"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

