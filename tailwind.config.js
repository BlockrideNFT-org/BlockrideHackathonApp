/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        page: "calc(100vh - 64px)",
      },
      screens: {
        smalldesktop: { max: "1024px" }, // small desktop
        tablet: { max: "768px" },
        mobile: { max: "480px" },
        smallmobile: { max: "320px" },
      },
      fontSize: {
        base: "1.4rem",
      },
      colors: {
        "secondary-text": "#9ea5ac",
        green: "#58F154",
      },
    },
  },
  plugins: [],
};
