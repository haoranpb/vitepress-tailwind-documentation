const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./.vitepress/theme/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        'light-blue': colors.lightBlue,
        rose: colors.rose,
        emerald: colors.emerald,
      },
      maxWidth: {
        '8xl': '90rem',
      },
      maxHeight: (theme) => ({
        '(screen-16)': `calc(100vh - ${theme('spacing.16')})`,
      }),
      boxShadow: {
        px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
        link:
          'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
      },
      height: (theme) => ({
        '(screen-16)': `calc(100vh - ${theme('spacing.16')})`,
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.500'),
            a: {
              color: theme('colors.cyan.700'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none',
              boxShadow: theme('boxShadow.link'),
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            code: {
              fontWeight: '400',
              color: theme('colors.violet.600'),
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.medium'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
