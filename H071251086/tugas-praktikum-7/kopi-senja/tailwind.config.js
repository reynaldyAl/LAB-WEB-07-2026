/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        merah: "#c1121f",
        merahTua: "#8a0b0f",
        jambu: "#f8dfdc",
        abu: "#e4e2df",
        tinta: "#2b1412",
      },
      fontFamily: {
        display: ['"Abril Fatface"', "Georgia", "serif"],
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // motif kotak-kotak seperti kartu merah pada gambar referensi
        plaid:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 16px, transparent 16px 32px), repeating-linear-gradient(0deg, rgba(0,0,0,0.14) 0 16px, transparent 16px 32px)",
      },
    },
  },
  plugins: [],
};