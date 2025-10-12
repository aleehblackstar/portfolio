import './globals.css'
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen bg-fundo pt-16 text-cafe">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4">
          Desenvolvedor Full Stack Júnior
        </h2>
        <p className="text-xl text-cafe/80 max-w-xl mx-auto">
          Formado pelo Programa Desenvolve Boticário. Foco em soluções impactantes
        </p>
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
        <h2 className="text-4xl font-bold text-cafe mb-8">
          Contato
        </h2>
        <p className="text-lg text-cafe/80 max-w-md mx-auto">
          Me envie uma mensagem pelo e-mail ou redes sociais.
        </p>
        {/* Botões ou formulário podem ser adicionados aqui */}
      </section>
    </main>
  )
}
