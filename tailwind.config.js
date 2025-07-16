/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zen: ['"Zen Maru Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
