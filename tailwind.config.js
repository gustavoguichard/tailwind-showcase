const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
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
