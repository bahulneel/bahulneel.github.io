module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: '#1A1D23',
          teal: '#34C759',
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
          start: '#34C759',
          end: '#FF8E0D',
        },
      },
    },
  },
  plugins: [],
}
