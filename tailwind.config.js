/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "30rem",
      md: "48rem",
      lg: "61rem",
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 55%)",
        veryDarkGray: "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
      },
      maxWidth: {
        mdWidth: "69.375rem",
      },
      fontSize: {
        fsClamp: "clamp(1rem, 11vw, 2.5rem)",
      },
    },
  },
  plugins: [],
};
