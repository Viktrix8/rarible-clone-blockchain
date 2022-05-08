module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary-gray': 'rgb(38,38,38)',
      }
    },
  },
  plugins: [],
}
