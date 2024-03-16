/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      height: {
        page: "calc(100vh - 64px)",
      },
      animation: {
        "spin-fast": "spin 0.5s linear infinite",
      },
      screens: {
        smalldesktop: { max: "1024px" }, // small desktop
        tablet: { max: "768px" },
        mobile: { max: "480px" },
        smallmobile: { max: "320px" },
        container: "1440px",
        "2xl": "1536px",
      },
      fontSize: {
        base: "1.4rem",
      },
      colors: {
        "secondary-text": "#9ea5ac",
        green: "#5EFF5A",
        "secondary-orange": "#FF991E",
      },
    },
  },
  plugins: [],
};
