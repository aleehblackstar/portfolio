export default function AboutMe() {
  return (
    <section id="sobre" className="py-20 bg-creme">
      <div className="max-w-4xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-4xl font-bold text-cafe mb-8 text-center">
          Sobre Mim
        </h2>

        {/* Parágrafos */}
        <p className="text-lg text-cafe/80 text-center leading-relaxed">
          Sou um desenvolvedor apaixonado por criar soluções web que
          proporcionam experiências incríveis para os usuários. Com um forte
          conhecimento em tecnologias modernas, estou sempre em busca de
          aprender e me aprimorar.
        </p>

        <p className="text-lg text-cafe/80 text-center leading-relaxed mt-4">
          Minha jornada foi impulsionada pelo <strong>Programa Desenvolve do Grupo
          Boticário</strong>, onde adquiri proficiência em <strong>Next.js, TypeScript, React
          e Prisma</strong>. Meu foco é transformar desafios complexos em soluções de
          código limpo, eficiente e tipado. Busco uma oportunidade para aplicar
          minhas habilidades em um ambiente que valorize a inovação e o impacto,
          como o ecossistema Boticário.
        </p>
      </div>
    </section>
  );
}
