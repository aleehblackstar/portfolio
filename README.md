# 💼 Portfólio Pessoal | Alexandre Rodrigues

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?style=for-the-badge&logo=vercel&logoColor=white)

</div>

## 📸 Preview

<div align="center">
  <img src="./src/assets/images/portfolioScreenshot.jpg" alt="Preview do Portfólio" width="800px" />
</div>

<br />

## 🚀 Sobre o Projeto

Meu portfólio profissional desenvolvido com as mais recentes tecnologias do ecossistema React. Este projeto representa não apenas minhas habilidades técnicas, mas também minha paixão por criar experiências web modernas, responsivas e performáticas.

O portfólio foi construído com **Next.js 15** utilizando **Turbopack** para builds ultra-rápidos e **React 19** para aproveitar as últimas funcionalidades do framework.

### 👉 [Acessar Portfólio Online](https://portfolio-1qbf9g2ia-alexandre-rodrigues-s-projects.vercel.app/)

---

## ✨ Funcionalidades

- 🎨 **Design Moderno e Responsivo** - Interface adaptável para todos os dispositivos
- 🌓 **Modo Claro/Escuro** - Alternância entre temas para melhor experiência do usuário
- 📱 **Mobile First** - Prioridade para experiência mobile
- ⚡ **Performance Otimizada** - Carregamento rápido com Next.js 15 e Turbopack
- 📧 **Formulário de Contato Funcional** - Integração com Formspree para envio de mensagens
- 🎯 **Seções Interativas**:
  - Hero Section com apresentação dinâmica
  - Sobre Mim com informações profissionais
  - Portfólio de Projetos com cards interativos
  - Skills técnicas organizadas
  - Formulário de contato direto
- 🔍 **SEO Otimizado** - Meta tags e estrutura para melhor indexação
- 🎭 **Animações Suaves** - Transições e efeitos visuais refinados

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 15.5.4](https://nextjs.org/)** - Framework React com App Router e Turbopack
- **[React 19.1.0](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### Estilização
- **[Tailwind CSS 3.4.18](https://tailwindcss.com/)** - Framework CSS utility-first
- **[PostCSS](https://postcss.org/)** - Processador CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Plugin para compatibilidade cross-browser
- **[tailwindcss-pseudo-elements](https://www.npmjs.com/package/tailwindcss-pseudo-elements)** - Plugin para pseudo-elementos customizados

### Ícones & UI
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna e customizável
- **[React Icons](https://react-icons.github.io/react-icons/)** - Coleção completa de ícones populares

### Ferramentas & Serviços
- **[Formspree](https://formspree.io/)** - Serviço de backend para formulários
- **[Vercel](https://vercel.com/)** - Plataforma de deploy e hospedagem
- **[ESLint](https://eslint.org/)** - Linter para qualidade de código

---

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout principal da aplicação
│   │   ├── page.tsx          # Página inicial (Home)
│   │   └── globals.css       # Estilos globais e variáveis CSS
│   │
│   ├── components/           # Componentes React da aplicação
│   │   ├── HeroSection.tsx   # Seção hero principal com apresentação
│   │   ├── AboutMe.tsx       # Seção sobre mim
│   │   ├── Projects.tsx      # Galeria de projetos
│   │   ├── Skills.tsx        # Habilidades técnicas
│   │   ├── Contact.tsx       # Formulário de contato
│   │   ├── Header.tsx        # Cabeçalho e navegação
│   │   └── Footer.tsx        # Rodapé com links
│   │
│   └── assets/
│       └── images/           # Imagens e screenshots dos projetos
│
├── public/                   # Arquivos públicos e estáticos
├── .gitignore               # Arquivos ignorados pelo Git
├── next.config.ts           # Configurações do Next.js
├── tailwind.config.js       # Configurações do Tailwind CSS
├── tsconfig.json            # Configurações do TypeScript
├── package.json             # Dependências e scripts
└── README.md                # Documentação do projeto
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão 18 ou superior)
- **npm**, **yarn**, **pnpm** ou **bun**

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/aleehblackstar/portfolio.git
```

2. **Navegue até o diretório:**
```bash
cd portfolio
```

3. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

4. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Abra no navegador:**
Acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

### 📦 Build para Produção

```bash
npm run build
npm start
```

---

## 💡 Aprendizados

Durante o desenvolvimento deste projeto, aprofundei conhecimentos em:

- ⚡ Utilização do **Turbopack** para builds mais rápidos no Next.js 15
- 🎨 Técnicas avançadas de **Tailwind CSS** e customização de temas
- 📱 Desenvolvimento **mobile-first** e design responsivo
- 🔄 Integração de APIs externas (Formspree) para funcionalidades backend
- ♿ Boas práticas de **acessibilidade** e **SEO**
- 🎯 Arquitetura de componentes escalável com TypeScript

---

## 🎯 Próximas Melhorias

- [ ] Implementar blog pessoal com MDX
- [ ] Adicionar animações com Framer Motion
- [ ] Sistema de analytics para tracking de visitantes
- [ ] Internacionalização (i18n) PT/EN
- [ ] Testes unitários com Jest e React Testing Library
- [ ] Progressive Web App (PWA)

---

## 📬 Contato

- **LinkedIn:** [Alexandre Rodrigues](https://linkedin.com/in/seu-perfil)
- **GitHub:** [@aleehblackstar](https://github.com/aleehblackstar)
- **E-mail:** seu.email@exemplo.com
- **Portfólio:** [Acessar Online](https://portfolio-1qbf9g2ia-alexandre-rodrigues-s-projects.vercel.app/)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com 💙 por Alexandre Rodrigues**

⭐ Se você gostou do projeto, considere dar uma estrela no repositório!

</div>