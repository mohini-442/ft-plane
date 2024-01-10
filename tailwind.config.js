/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Monstserrat': "'Monstserrat',sans-serif",
        'Inter': "'Inter',sans-serif",
        'Rubik':"'Rubik',sans-serif"
      }
    },
  },
  plugins: [],
}