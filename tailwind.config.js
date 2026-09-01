module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: '#0A1F44',
          teal: '#005B99',
        },
        secondary: {
          gray: '#2E2E3A',
          lightGray: '#B0B0B8',
        },
        accent: {
          lightBlue: '#00A8E8',
          white: '#FFFFFF',
        },
        link: {
          DEFAULT: '#0A1F44',
          hover: '#005B99',
        },
        gradient: {
          start: '#0A1F44',
          end: '#005B99',
          radialStart: '#F5F5F5',
          radialEnd: '#B0B0B8',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.secondary.gray'),
            '--tw-prose-headings': theme('colors.primary.darkBlue'),
            '--tw-prose-lead': theme('colors.secondary.lightGray'),
            '--tw-prose-links': theme('colors.link.DEFAULT'),
            '--tw-prose-links-hover': theme('colors.link.hover'),
            '--tw-prose-links-active': theme('colors.link.hover'),
            '--tw-prose-bold': theme('colors.accent.white'), // Changed to white for better contrast
            '--tw-prose-counters': theme('colors.secondary.gray'),
            '--tw-prose-bullets': theme('colors.primary.teal'),
            '--tw-prose-hr': theme('colors.gradient.start'),
            '--tw-prose-quotes': theme('colors.primary.teal'),
            '--tw-prose-quote-borders': theme('colors.gradient.end'),
            '--tw-prose-captions': theme('colors.secondary.lightGray'),
            '--tw-prose-code': theme('colors.primary.teal'),
            '--tw-prose-pre-code': theme('colors.primary.teal'),
            '--tw-prose-pre-bg': theme('colors.primary.darkBlue'),
          },
        },
      }),
      backgroundImage: theme => ({
        'gradient-to-r': `linear-gradient(to right, ${theme('colors.gradient.start')}, ${theme('colors.gradient.end')})`,
        'radial-gradient': `radial-gradient(circle, ${theme('colors.gradient.radialStart')} 0%, ${theme('colors.gradient.radialEnd')} 100%)`,
      }),
      screens: {
        '2k': '2736px',  // Adding a breakpoint for high DPI screens like the Surface Pro 7
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
