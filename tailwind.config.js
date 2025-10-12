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
        nescau: '#6E3D34',
        caramelo: '#D19D56',
        creme: '#FFFDD0',
        fundo: '#D19D56',
      },
    },
  },
  plugins: [],
}
