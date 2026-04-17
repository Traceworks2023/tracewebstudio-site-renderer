/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}',
    './node_modules/@tracewebstudio/design-system/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FA5014',
        navy: '#000032',
      },
      fontFamily: {
        sans: ['Exo 2', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

