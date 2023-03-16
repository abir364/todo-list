/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        'row': '2fr 12fr 1fr',
      },
      gridTemplateColumns: {
        // Complex site-specific row configuration
        'col': '1fr 5fr',
      }
    },
  },
  plugins: [],
}
