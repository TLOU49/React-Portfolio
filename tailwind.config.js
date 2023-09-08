/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors:{
        dean_blue: "#313bac",
        mbali_dark: "#c74c7e",
        mbali_light: "#ffffff",
        body_pink: "rgb(228 107 156)",
        lightText: "#ccc"
      },
      fontFamily:{
        bodyFont:['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

