/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Font family
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
    },

    // Colors
    colors: {
      transparent: "transparent",
      black: "#050505",
      white: "#FFFFFF",
      violet: "#A445ED",
      red: "#FF5252",
      grey: {
        100: "#F4F4F4",
        200: "#E9E9E9",
        600: "#757575",
        700: "#3A3A3A",
        800: "#2D2D2D",
        900: "#1F1F1F",
      },
    },

    extend: {},
  },

  // eslint-disable-next-line no-undef
  plugins: [require("prettier-plugin-tailwindcss")],
};
