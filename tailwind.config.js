/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A2845F",
        secondary: "#EAE1D0",
        accent: "#FAF3EB",
        lightGray: "#F5F5F6",
      },
    },
  },
  plugins: [],
};
