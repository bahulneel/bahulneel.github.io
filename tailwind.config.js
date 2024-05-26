module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: '#002F6C',
          teal: '#008080',
        },
        secondary: {
          gray: '#4A4A4A',
          lightGray: '#D3D3D3',
        },
        accent: {
          orange: '#FF6600',
          white: '#FFFFFF',
        },
        gradient: {
          start: '#005B99',
          end: '#00CCCC',
        },
      },
      backgroundImage: theme => ({
        'gradient-to-r': `linear-gradient(to right, ${theme('colors.gradient.start')}, ${theme('colors.gradient.end')})`,
      }),
    },
  },
  plugins: [],
}
