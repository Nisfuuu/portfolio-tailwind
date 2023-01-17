/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        big: "48rem",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280",
      },
      fontFamily: {
        nunito: ["Nuito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
