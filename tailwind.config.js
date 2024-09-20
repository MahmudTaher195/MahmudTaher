/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'container':'1280px'
    },
    'font-family': "IBM Plex Sans ",
    'font-style': 'normal' 

  },
  plugins: [],
}