/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '19': '19px',
      },
      colors: {
        black: '#000000', 
        ash: '#A9A9A9',  
      },
    },
  },
  plugins: [],
}

