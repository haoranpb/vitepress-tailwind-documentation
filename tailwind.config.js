const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./.vitepress/theme/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
