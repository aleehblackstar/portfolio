export default function Projects() {
  return (
    <section id="projetos" className="py-6 rounded-lg bg-nescau/90 shadow-md py-28">
      <h2 className="text-4xl font-bold text-creme mb-8 text-center">
        Meus Projetos de Destaque
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-creme text-cafe p-6 rounded-lg shadow-md w-80 text-center">
          <div className="h-80">Imagem Aqui</div>
          Projeto 1
        </div>
        <div className="bg-creme text-cafe p-6 rounded-lg shadow-md w-80 text-center">
          <div className="h-80">Imagem Aqui</div>
          Projeto 2
        </div>
        <div className="bg-creme text-cafe p-6 rounded-lg shadow-md w-80 text-center">
          <div className="h-80">Imagem Aqui</div>
          Projeto 3
        </div>
        <div className="bg-creme text-cafe p-6 rounded-lg shadow-md w-80 text-center">
          <div className="h-80">Imagem Aqui</div>
          Projeto 4
        </div>
      </div>
    </section>
  );
}
