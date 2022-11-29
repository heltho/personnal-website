/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': "'Fira Code', monospace",
    },
    extend: {
      colors: {
        'tuna': {
          DEFAULT: '#2F333D',
          '50': '#C9CCD5',
          '100': '#BDC2CC',
          '200': '#A6ACBB',
          '300': '#8F97A9',
          '400': '#788197',
          '500': '#646D82',
          '600': '#535A6B',
          '700': '#414654',
          '800': '#2F333D',
          '900': '#17191D'
        },
        'scooter': {
          DEFAULT: '#32C4D8',
          '50': '#CCF0F5',
          '100': '#BBEBF2',
          '200': '#99E2EC',
          '300': '#77D8E5',
          '400': '#54CEDF',
          '500': '#32C4D8',
          '600': '#229FB0',
          '700': '#197581',
          '800': '#104A52',
          '900': '#072023'
        },
      },
    },
  },
  plugins: [],
}
