/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      spacing: {
        '15': '3.75rem',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
} 