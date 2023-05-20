/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#481815",
        secondary: "#E38401",
      },
      fontFamily: {
        Sigmar: ["Sigmar", "cursive"],
        Gurajada: ["Gurajada", "serif"],
      },
      lineHeight: {
        head: "54px",
      },
    },
  },
  plugins: [],
};
