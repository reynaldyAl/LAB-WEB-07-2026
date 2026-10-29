/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        senja: {
          900: '#2B1B3D',
          700: '#4A2E63',
          100: '#F1ECF6',
          50: '#F8F6FB',
        },
        amber: { senja: '#F2A33A' },
      },
    },
  },
  plugins: [],
}
