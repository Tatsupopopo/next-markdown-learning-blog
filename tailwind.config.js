/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "Noto Sans JP", "sans-serif"],
      },
    },
  },
  plugins: [],
};
