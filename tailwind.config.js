const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  mode: 'jit',
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
      },
    },
  },
  plugins: [],
}
