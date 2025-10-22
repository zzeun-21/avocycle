/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#7aff8b",
          light: "#d9fdd3",
          dark: "#147A27",
        },
      },
    },
  },
  plugins: [],
}
