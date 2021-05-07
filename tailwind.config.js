module.exports = {
  mode: 'jit',
  purge: ['./.vitepress/theme/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
