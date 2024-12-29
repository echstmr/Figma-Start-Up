/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark_bg: '#181818',
        light_bg: '#ffffff',
        primary: '#4452FE',
        first_txt: '#181818',
        scndry_txt: '#ffffff',
        light_txt: '#5C5C5C'
      },
     
    },
  },
  plugins: [],
}