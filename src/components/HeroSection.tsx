// src/components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section 
      id="home"
      // Container principal que ocupa a tela e centraliza o conteúdo
      className="flex items-center justify-center min-h-screen px-4 pt-24 pb-16 sm:pt-28" // pt-24 (6rem) para dar espaço abaixo do header (h-20)
    >
      {/* Container do conteúdo (texto + imagem) */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-7xl mx-auto">
        
        {/* 1. Div do Texto */}
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl">Olá Mundo!</h1>
          <p className="text-3xl md:text-4xl">
            Eu sou <span className="text-4xl md:text-5xl font-bold text-azuled">Alexandre Rodrigues</span>
          </p>
          <h2 className="text-2xl p-1 md:text-5xl md:p-2 font-bold mb-4 text-creme/80 bg-nescau rounded-full p-1.3 w-fit mx-auto lg:mx-0">
            Desenvolvedor Full Stack Júnior
          </h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto text-azuled font-bold">
            Formado pelo Programa Desenvolve Boticário. Foco em soluções impactantes
          </p>
        </div>

        {/* 2. Div da Imagem */}
        <div className="flex-shrink-0">
          <img
            src="/assets/images/perfilPortfolio.png"
            alt="Alexandre Rodrigues"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-creme p-1"
          />
        </div>

      </div>
    </section>
  );
}
