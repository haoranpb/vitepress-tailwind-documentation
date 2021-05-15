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
      maxHeight: (theme) => ({
        '(screen-16)': `calc(100vh - ${theme('spacing.16')})`,
      }),
      height: (theme) => ({
        '(screen-16)': `calc(100vh - ${theme('spacing.16')})`,
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
