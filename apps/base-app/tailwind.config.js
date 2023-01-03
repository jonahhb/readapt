/* eslint-env node */
const daisy = require('daisyui')
const daisyThemeLight = require('daisyui/src/colors/themes')['[data-theme=light]']

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  plugins: [daisy],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyThemeLight,
          primary: '#4B8AE7',
          secondary: '#6C757D',
          '--btn-text-case': 'none'
        }
      }
    ],
    logs: false
  },
  theme: {
    screens: {
      sm: '600px'
    }
  }
}
