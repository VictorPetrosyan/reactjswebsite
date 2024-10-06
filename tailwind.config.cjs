/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": '#09101E',
        "btn-color": '#3A68B8',
        "features": "#111926"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "770px",
      md: "1023px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
