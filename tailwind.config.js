/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "ebony-clay": {
        50: "#f6f7f9",
        100: "#eceef2",
        200: "#d4dae3",
        300: "#afbaca",
        400: "#8395ad",
        500: "#647793",
        600: "#4f607a",
        700: "#414e63",
        800: "#384354",
        900: "#323a48",
        950: "#242933",
      },
      "green-tag": "#04784c",
    },
  },
  plugins: [require("daisyui")],
};
