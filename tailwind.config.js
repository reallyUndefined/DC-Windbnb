/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        lightGray: "#828282",
        mediumGray: "#4F4F4F",
        darkGray: "#333333",
        softRed: "#EB5757",
        overlay: "rgba(79, 79, 79, 0.4)",
      },
    },
  },
  plugins: [],
};
