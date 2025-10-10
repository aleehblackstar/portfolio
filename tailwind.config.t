import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de Cores "Café/Caramelo"
        'cafe': '#6F4E37',       // Marrom Escuro (Texto Principal, Fundo de Destaque)
        'caramelo': '#C19A6B',   // Caramelo (Botões, Links, Destaques)
        'creme': '#FFFDD0',      // Creme (Fundo de Cartões, Elementos Secundários)
        'fundo': '#F5F5DC',      // Bege Claro (Fundo Principal da Página)
      },
    },
  },
  plugins: [],
}
export default config
