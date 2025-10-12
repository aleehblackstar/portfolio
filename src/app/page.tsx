import "./globals.css";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-fundo pt-16 text-cafe">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="py-32 md:py-40 px-4 m-10 md:px-8">
        <div className="flex flex-col lg:flex-row items-center text-nescau justify-between gap-20 lg:gap-16 max-w-7xl mx-auto">
          {/* Texto */}
          <div className="flex gap-4 flex-col text-center lg:text-center">
            <h1 className="text-4xl md:text-5xl">Olá Mundo!</h1>
            <p className="text-3xl md:text-4xl">
              Eu sou <span className="text-4xl md:text-5xl font-bold text-azuled">Alexandre Rodrigues</span>
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-creme/80 bg-nescau rounded-full p-1.3 w-fit mx-auto">
              Desenvolvedor Full Stack Júnior
            </h2>
            <p className="text-lg md:text-xl max-w-xl mx-auto text-azuled font-bold itens-center">
              Formado pelo Programa Desenvolve Boticário. Foco em soluções
              impactantes
            </p>
          </div>

          {/* Imagem */}
          <div className="flex-shrink-0">
      <img
        src="/perfilPortfolio.png"
        alt="Alexandre Rodrigues"
        className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-cover rounded-full border-4 border-creme p-1"
      />
    </div>
        </div>
      </section>

      <AboutMe />

      {/* Habilidades */}
      <section id="habilidades" className="py-20">
        <h2 className="text-4xl font-bold text-cafe mb-8 text-center">
          Habilidades Técnicas
        </h2>
        {/* Aqui você pode colocar os cards de habilidades */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-creme text-cafe p-6 rounded-lg shadow-md w-60 text-center">
            JavaScript
          </div>
          <div className="bg-creme text-cafe p-6 rounded-lg shadow-md w-60 text-center">
            Python
          </div>
          <div className="bg-creme text-cafe p-6 rounded-lg shadow-md w-60 text-center">
            React / Next.js
          </div>
          {/* Adicione mais cards conforme necessário */}
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 bg-fundo">
        <h2 className="text-4xl font-bold text-cafe mb-8 text-center">
          Meus Projetos de Destaque
        </h2>
        {/* Aqui você pode colocar cards ou links para projetos */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-creme text-cafe p-6 rounded-lg shadow-md w-80 text-center">
            Projeto 1
          </div>
          <div className="bg-creme text-cafe p-6 rounded-lg shadow-md w-80 text-center">
            Projeto 2
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-cafe mb-8">Contato</h2>
        <p className="text-lg text-cafe/80 max-w-md mx-auto">
          Me envie uma mensagem pelo e-mail ou redes sociais.
        </p>
        {/* Botões ou formulário podem ser adicionados aqui */}
      </section>
    </main>
  );