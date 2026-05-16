/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F0",
        warmpink: "#E88B9B",
        chocolatebrown: "#6B4F3A",
      },
    },
  },
  plugins: [],
};
