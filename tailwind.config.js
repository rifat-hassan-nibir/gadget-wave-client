/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/preline/preline.js"],
  theme: {
    extend: {
      colors: {
        primary: "#00796A",
        secondary: "#006559",
        accent: "#E0F2F1",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
