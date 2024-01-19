/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "primary-color": "#32B21D",
      disabled: "#8D8D8D",
      white: "#ffffff",
      "dark-gray": "#171717",
      "dark-gray-300": "#2B2B2B",
      "dark-gray-400": "#202020",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      kanit: ["Kanit", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        home: "url('/assets/Portada.png')",
      },
      height: {
        "bg-home": "calc(100vh - 120px)",
      },
    },
  },
  plugins: [],
};
