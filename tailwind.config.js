// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#fdf2f3',
          100: '#fce4e6',
          200: '#fbd0d4',
          300: '#f5a3aa',
          400: '#eb717c',
          500: '#dc3545',
          600: '#B1313F',
          700: '#a12a37',
          800: '#86242e',
          900: '#712028',
          950: '#3f0d12',
        },
        gray: colors.gray,
        light: {
          green: '#5EBC61',
          altRed: '#8D2733',
          red: '#B1313F',
          beige: '#EDE7DF',
          teal: '#A9C1BF',
          darkGray: '#242424',
          gray: '#343837',
          blue: '#118AB2',
        },
        dark: {
          green: '#72A175',
          altRed: '#D4626F',
          red: '#CF4F5E',
          black: '#211A12',
          teal: '#3E5654',
          lightGray: '#DBDBDB',
          gray: '#C7CCCB',
          blue: '#4EC6EF',
        },
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.light.red'),
              '&:hover': {
                color: theme('colors.light.altRed'),
              },
              code: { color: theme('colors.light.red') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.dark.red'),
              '&:hover': {
                color: theme('colors.dark.altRed'),
              },
              code: { color: theme('colors.dark.red') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
