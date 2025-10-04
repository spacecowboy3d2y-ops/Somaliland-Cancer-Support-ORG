/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#A076A8',
        'brand-light-purple': '#F3E8F5',
        'brand-dark': '#333333',
      }
    },
  },
  plugins: [],
}
