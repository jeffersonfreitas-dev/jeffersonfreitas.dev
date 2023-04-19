// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors:  {
        "default-green-1": "#2E8B57",
        "default-green-2": "#197519"
      }
    },
  },
  plugins: [],
}

