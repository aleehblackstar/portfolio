import "./globals.css";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-fundo text-cafe">
      <Header />
      {/* Seção Home */}
      <HeroSection />

      {/* Sobre Mim*/}
      <AboutMe />

      {/* Habilidades Técnicas */}

      <Skills />

      {/* Projetos */}
      {" "}
      <section id="projetos" className="py-20 bg-fundo">
        <h2 className="text-4xl font-bold text-cafe mb-8 text-center">
          Meus Projetos de Destaque
        </h2>
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
}
