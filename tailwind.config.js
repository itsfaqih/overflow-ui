const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const overflowColors = {
  primary: {
    50: 'hsl(240, 60%, 90%)',
    500: 'hsl(240, 60%, 60%)',
    600: 'hsl(240, 60%, 50%)',
    700: 'hsl(240, 60%, 40%)',
    800: 'hsl(240, 60%, 30%)',
    900: 'hsl(240, 60%, 10%)',
  },
  grayDark: 'hsl(240, 16%, 30%)',
  gray: 'hsl(240, 16%, 60%)',
  graySoft: 'hsl(240, 16%, 80%)',
  grayCool: {
    50: 'hsl(240, 80%, 98%)',
    100: 'hsl(240, 80%, 96%)',
    200: 'hsl(240, 80%, 92%)',
  },
  purple: {
    50: 'hsl(284, 60%, 90%)',
    500: 'hsl(284, 60%, 60%)',
    600: 'hsl(284, 60%, 50%)',
    700: 'hsl(284, 60%, 40%)',
  },
  red: {
    50: 'hsl(0, 60%, 90%)',
    500: 'hsl(0, 60%, 60%)',
    600: 'hsl(0, 60%, 50%)',
    700: 'hsl(0, 60%, 40%)',
  },
  green: {
    50: 'hsl(130, 60%, 90%)',
    500: 'hsl(130, 60%, 60%)',
    600: 'hsl(130, 60%, 50%)',
    700: 'hsl(130, 60%, 40%)',
  },
  blue: {
    50: 'hsl(210, 80%, 90%)',
    500: 'hsl(210, 80%, 60%)',
    600: 'hsl(210, 80%, 50%)',
    700: 'hsl(210, 80%, 40%)',
  },
  yellow: {
    50: 'hsl(60, 80%, 90%)',
    500: 'hsl(60, 80%, 60%)',
    600: 'hsl(60, 80%, 50%)',
    700: 'hsl(60, 80%, 40%)',
  },
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: 'transparent',
      ...overflowColors,
      success: overflowColors.green,
      danger: overflowColors.red,
      warning: overflowColors.yellow,
      info: overflowColors.blue,
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: '0 4px 8px 0 rgba(0,0,0,0.08)',
        big: '0 8px 32px 0 rgba(0,0,0,0.06)',
      },
      transitionProperty: {
        'background-opacity': 'backgroundOpacity',
        margin: 'margin',
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['disabled', 'data-enter'],
      cursor: ['disabled'],
      opacity: ['data-enter', 'group-data-enter'],
      scale: ['data-enter'],
      backgroundColor: ['even'],
      translate: ['data-enter'],
      margin: ['data-enter'],
      ringWidth: ['group-focus'],
      position: ['focus'],
      zIndex: ['focus'],
    },
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('data-enter', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`data-enter${separator}${className}`)}[data-enter]`;
        });
      });
      addVariant('data-leave', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`data-leave${separator}${className}`)}[data-leave]`;
        });
      });
      addVariant('group-data-enter', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `[data-enter].group .${e(
            `group-data-enter${separator}${className}`
          )}`;
        });
      });
      addVariant('group-data-leave', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `[data-leve].group .${e(
            `group-data-leave${separator}${className}`
          )}`;
        });
      });
    }),
  ],
};
