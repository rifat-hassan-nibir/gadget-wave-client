/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004798",
        secondary: "#bbd9fc",
        lightGray: "#F5F5F6",
      },
    },
  },
  plugins: [require("daisyui")],
};
