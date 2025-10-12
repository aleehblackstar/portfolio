/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: '#6F4E37',
        nescau: '#733D38',
        caramelo: '#C19A6B',
        creme: '#FFFDD0',
        fundo: '#F5F5DC',
      },
    },
  },
  plugins: [],
}
