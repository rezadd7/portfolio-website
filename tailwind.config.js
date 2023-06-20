/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#2794d8",
        headingColor: "#081e21",
        smallTextColor: "#193256",
        smallTextColorDark: '#d5d8dc',
        headingColorDark: "#eaecee",

      },
      
    },
  },
  plugins: [],
}

// #8873ef