module.exports = {
  content: ['./.vitepress/theme/**/*.{js,vue}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.slate.700'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
