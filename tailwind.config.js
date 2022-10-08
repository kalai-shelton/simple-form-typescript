/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      textColor: {
        primary: "#B0E0E6", 
        secondary:"#00ced1"
      },
      backgroundColor: {
        primary: "#B0E0E6",
        secondary:"#00ced1"
      },
      height: {
        "80vh": "80vh",
        
      }
    },
  },
  plugins: [],
}
