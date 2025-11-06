export default function AboutMe() {
  return (
    <section id="sobre" className="pt-28 pb-16 md:pt-32 md:pb-20 px-4 min-h-screen md:px-8 flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Título */}
        <h2 className="text-3xl font-bold text-azuled md:text-4xl text-center mb-6">
          Sobre Mim
        </h2>

        {/* Imagem do Sobre Mim */}
        <div className="mb-6 flex justify-center">
          {/* Imagem para desktop - oculta em mobile */}
          <img
            src="/assets/images/sobreMim.jpg"
            alt="Eu sentado em uma bancada digitando no notebook. Estilo da imagem é um desenho com traços de anime."
            className="hidden md:block w-full h-auto max-w-2xl object-cover rounded-lg shadow-lg border-4 border-creme/40"
          />
          
          {/* Imagem para mobile - oculta em desktop */}
          <img
            src="/assets/images/sobreMimMobile.jpg"
            alt="Eu sentado em uma bancada digitando no notebook. Estilo da imagem é um desenho com traços de anime."
            className="block md:hidden w-full h-auto max-w-sm object-cover rounded-lg shadow-lg border-4 border-creme/40"
          />
        </div>

        {/* Texto Sobre Mim - com scroll se necessário */}
        <div className="px-2">
          <p className="text-sm md:text-base text-azuled lg:text-lg text-center leading-relaxed">
            Sou desenvolvedor Full Stack Junior e estou vivendo uma das melhores
            decisões da minha vida: a migração para a área de tecnologia.
            Formado pelo <strong>Programa Desenvolve do Grupo Boticário</strong>{" "}
            e atualmente no 2º período de{" "}
            <strong>Análise e Desenvolvimento de Sistemas na UNISUAM</strong>,
            descobri que programar é mais do que escrever código. É criar
            soluções que impactam pessoas reais.
          </p>

          <p className="text-sm md:text-base text-azuled lg:text-lg text-center leading-relaxed">
            Durante o Programa Desenvolve, reforcei conceitos de{" "}
            <strong>HTML, CSS e JavaScript</strong>, e me especializei em{" "}
            <strong>Next.js, TypeScript, React e Prisma</strong>, transformando
            desafios complexos em código limpo, eficiente e escalável. Minha
            experiência anterior em outras áreas me deu habilidades valiosas:
            análise detalhada, comunicação eficaz e atenção aos mínimos
            detalhes. Competências que hoje me tornam um desenvolvedor mais
            completo.
          </p>
        </div>
      </div>
    </section>
  );
}