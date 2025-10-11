import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-fundo text-cafe pt-16">
      <Header />

      <section id="hero" className="py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Desenvolvedor Full Stack Júnior</h2>
        <p className="text-xl text-cafe/80">Formado pelo Programa Desenvolve Boticário. Foco em soluções impactantes</p>
      </section>

      <section id="sobre" className="py-20 bg-creme">
        <h2 className="text-4xl font-bold text-cafe mb-8 text-center">Sobre Mim</h2>
        <p className="text-lg text-cafe/80 max-w-2xl mx-auto">
          Sou um desenvolvedor apaixonado por criar soluções web que proporcionam
          experiências incríveis para os usuários. Com um forte conhecimento em
          tecnologias modernas, estou sempre em busca de aprender e me
          aprimorar.
        </p>
      </section>

      <section id="habilidades" className="py-20">
        <h2 className="text-4xl font-bold text-cafe mb-8 text-center">Habilidades Técnicas</h2>
        {/* Cards */}
      </section>

      <section id="projetos" className="py-20 bg-creme">
        <h2 className="text-4-xl font-bold text-cafe mb-8 text-center">Meus Projetos de Destaque</h2>
      </section> 

      <section id="#contato" className="py-20 text-center">
        <h2 className="text-4x1 font-bold text-cafe mb-8">
          Contato
        </h2>
      </section>
    </main>
  )
}
