/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Ensure this is set
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.emerald,
        neutral: colors.gray,
        danger: colors.red,
        warning: colors.amber,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "inner-light": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        "inner-dark": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)",
      },
    },
  },
  plugins: [],
};
