/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        PoppinsBold: ["PoppinsBold"],
        Sans: ["Sans"],
        SansBold: ["SansBold"],
      },
    boxShadowColor:{
      primary:"0 0 20px 1px rgb(0 0 0 / 13%)"

    }
    },
  },
  plugins: [],
};
