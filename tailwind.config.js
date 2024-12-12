/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-inset': 'inset 0 calc(var(--borderWidth-thin, 1px) * -1) var(--borderColor-default)',
      },
    },
  },
  plugins: [],
}

