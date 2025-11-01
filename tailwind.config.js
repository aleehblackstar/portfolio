/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}", 
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: '#6F4E37',
        nescau: '#6E3D34',
        caramelo: '#D19D56',
        creme: '#FFFDD0',
        fundo: '#D19D56',
        azuled: '#262A3E',
      },
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
  ],
};
