/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        esm: { max: '352px' },
        emd: { max: '463px' },
        esd: { max: '568px' },
        sm: { max: '700px' },
        md: { max: '1000px' },
        lg: { max: '1450px' },
      },
      fontFamily: {
        jetBrainsMono: 'var(--font-jetbrainsmono)',
      },
      colors: {
        dark: '#11172B',
        primaryLight: '#1da1f2',
        light: '#1B2138',
        input: '#1E253E',
        primary: '#34c9dd',
        project: '#2e91c7',
        secondary: '#1c948a',
        secondaryLight: '#0c4742',
        gray: '#848DA0',
        highlight: '#444B5B',
        highlightLight: '#293e6e',
        textLight: '#C4C4C4',
        error: '#d45d5d',
        border: '#313958',
      },
      scale: {
        405: '4.05',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
