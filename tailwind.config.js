/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivoBlack: ["Archivo Black", "sans-serif"],
        albertSans: ["Albert Sans", "sans-serif"],
      },
      colors: {
        ngDarkblue: "#11132e",
      },
    },
  },
  plugins: [],
};
