/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
    fontFamily: {
      'Oswald': ['Oswald'],
      'Open': ['Open Sans'],  
    }
  },
  plugins: [require("daisyui")],
}

