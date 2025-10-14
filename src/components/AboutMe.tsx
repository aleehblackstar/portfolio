export default function AboutMe() {
  return (
    <section id="sobre" className="py-20 bg-fundo">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl font-bold text-azuled md:text-5xl text-center mb-10 mt-6">
          Sobre Mim
        </h2>

        {/* Imagem do Sobre Mim */}
        <div className="my-10 flex justify-center">
          {/* Imagem para desktop - oculta em mobile */}
          <img
            src="/sobreMim.jpg"
            alt="Eu sentado em uma bancada digitando no notebook. Estilo da imagem é um desenho com traços de anime."
            className="hidden md:block w-full h-auto max-w-5xl object-cover rounded-lg shadow-lg border-4 border-creme/40"
          />
          
          {/* Imagem para mobile - oculta em desktop */}
          <img
            src="/sobreMimMobile.jpg"
            alt="Eu sentado em uma bancada digitando no notebook. Estilo da imagem é um desenho com traços de anime."
            className="block md:hidden w-full h-auto max-w-md object-cover rounded-lg shadow-lg border-4 border-creme/40"
          />
        </div>

        {/* Texto Sobre Mim */}
        <div className="space-y-6 max-w-5xl mx-auto font-medium">
          <p className="text-lg md:text-xl text-azuled text-center leading-relaxed">
            Sou desenvolvedor Full Stack Junior e estou vivendo uma das melhores
            decisões da minha vida: a migração para a área de tecnologia.
            Formado pelo <strong>Programa Desenvolve do Grupo Boticário</strong>{" "}
            e atualmente no 2º período de{" "}
            <strong>Análise e Desenvolvimento de Sistemas na UNISUAM</strong>,
            descobri que programar é mais do que escrever código. É criar
            soluções que impactam pessoas reais.
          </p>

          <p className="text-lg md:text-xl text-azuled text-center leading-relaxed">
            Durante o Programa Desenvolve, reforcei conceitos de{" "}
            <strong>HTML, CSS e JavaScript</strong>, e me especializei em{" "}
            <strong>Next.js, TypeScript, React e Prisma</strong>, transformando
            desafios complexos em código limpo, eficiente e escalável. Minha
            experiência anterior em outras áreas me deu habilidades valiosas:
            análise detalhada, comunicação eficaz e atenção aos mínimos
            detalhes. Competências que hoje me tornam um desenvolvedor mais
            completo.
          </p>

          <p className="text-lg md:text-xl text-azuled text-center leading-relaxed">
            Fora do código, sou apaixonado por jogos, animes, filmes e
            atividades físicas. Valorizo o equilíbrio entre produtividade e
            lazer, porque as melhores ideias surgem quando a mente está
            relaxada! 🎮⚡
          </p>
        </div>
      </div>
    </section>
  );
}