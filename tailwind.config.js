module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fill: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
      }),
      colors: {
        greenBlue: '#0066cc',
        orangeYellow: '#F4D35E'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
