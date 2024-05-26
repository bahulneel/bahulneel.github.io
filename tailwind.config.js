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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.secondary.gray'),
            '--tw-prose-headings': theme('colors.primary.darkBlue'),
            '--tw-prose-lead': theme('colors.secondary.lightGray'),
            '--tw-prose-links': theme('colors.accent.orange'),
            '--tw-prose-bold': theme('colors.primary.darkBlue'),
            '--tw-prose-counters': theme('colors.secondary.gray'),
            '--tw-prose-bullets': theme('colors.primary.teal'),
            '--tw-prose-hr': theme('colors.gradient.start'),
            '--tw-prose-quotes': theme('colors.primary.teal'),
            '--tw-prose-quote-borders': theme('colors.gradient.end'),
            '--tw-prose-captions': theme('colors.secondary.lightGray'),
            '--tw-prose-code': theme('colors.accent.orange'),
            '--tw-prose-pre-code': theme('colors.primary.teal'),
            '--tw-prose-pre-bg': theme('colors.primary.darkBlue'),
          },
        },
      }),
      backgroundImage: theme => ({
        'gradient-to-r': `linear-gradient(to right, ${theme('colors.gradient.start')}, ${theme('colors.gradient.end')})`,
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
