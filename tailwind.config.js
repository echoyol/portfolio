/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        passionOne: ['Passion One', 'sans-serif'],
        Candal: ['Candal', 'sans-serif'],
        Racing: ['Racing Sans One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
