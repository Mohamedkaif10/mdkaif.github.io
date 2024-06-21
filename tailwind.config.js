/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iithColor: '#B8A07E',
        bgColor:'#1D1D27'
      },
    },
  },
  plugins: [],
}