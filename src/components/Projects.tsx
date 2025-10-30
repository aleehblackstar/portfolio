import Image from "next/image";

export default function Projects() {
  return (
    <section id="projetos" className="rounded-lg bg-nescau/90 shadow-md py-20">
      <h2 className="text-4xl font-bold text-creme mb-12 text-center">
        Meus Projetos de Destaque
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
        <div className="bg-creme text-cafe rounded-lg shadow-lg overflow-hidden w-full max-w-md hover:shadow-xl transition-shadow flex flex-col h-full">
          <div className="relative">
            <Image
              src="/assets/images/projetoBlogPessoal.jpg"
              alt="Projeto Blog Pessoal"
              className="w-full h-56 object-cover border-b-4 border-nescau"
              width={400}
              height={224}
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-azuled">
              Blog Pessoal
            </h3>

            <p className="text-azuled text-sm leading-relaxed mb-2 flex-grow">
              Blog pessoal criado para documentar minha jornada de aprendizado
              em tecnologia e inspirar outras pessoas ao acompanhar minha
              trajetória. Desenvolvi com Next.js (utilizando o App Router) e
              React, explorando conceitos modernos de roteamento, TypeScript
              para garantir um código mais seguro e Tailwind CSS para interfaces
              responsivas. Utiliza Lucide React para iconografia moderna e
              consistente.
            </p>

            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                Next.js
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                Tailwind CSS
              </span>
            </div>

            <a
              href="https://projeto-blog-pessoal-iota.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nescau text-creme px-6 py-2 rounded-md hover:opacity-90 transition-opacity inline-block w-full text-center font-medium my-5"
            >
              Ver Projeto
            </a>
          </div>
        </div>

        <div className="bg-creme text-cafe rounded-lg shadow-lg overflow-hidden w-full max-w-md hover:shadow-xl transition-shadow flex flex-col h-full">
          <div className="relative">
            <Image
              src="/assets/images/projetoToDoList.jpg"
              alt="Projeto To Do List"
              className="w-full h-56 object-cover border-b-4 border-nescau"
              width={400}
              height={224}
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-azuled">To Do List</h3>

            <p className="text-azuled text-sm leading-relaxed mb-2 flex-grow">
              Criado para organizar tarefas diárias de forma prática, este
              projeto é uma Lista de Tarefas (To-Do List) desenvolvida com React
              e CSS puro, usando Local Storage para persistência dos dados.
              Permite adicionar, concluir e remover tarefas, e foi um dos meus
              primeiros projetos no programa Desenvolve, ajudando a consolidar
              conceitos de estado, componentização e interação com o DOM no
              React.
            </p>

            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                CSS Puro
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                Local Storage
              </span>
            </div>

            <a
              href="https://projeto-to-do-list-pi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nescau text-creme px-6 py-2 rounded-md hover:opacity-90 transition-opacity inline-block w-full text-center font-medium my-5"
            >
              Ver Projeto
            </a>
          </div>
        </div>

        <div className="bg-creme text-cafe rounded-lg shadow-lg overflow-hidden w-full max-w-md hover:shadow-xl transition-shadow flex flex-col h-full">
          <div className="relative bg-gray-200 h-56 flex items-center justify-center border-b-4 border-nescau">
            <span className="text-gray-400 text-lg">Imagem Aqui</span>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-azuled">Projeto 3</h3>

            <p className="text-azuled text-sm leading-relaxed mb-2 flex-grow">
              Descrição do projeto aqui...
            </p>

            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                Tecnologia 1
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                Tecnologia 2
              </span>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nescau text-creme px-6 py-2 rounded-md hover:opacity-90 transition-opacity inline-block w-full text-center font-medium my-5"
            >
              Ver Projeto
            </a>
          </div>
        </div>

        <div className="bg-creme text-cafe rounded-lg shadow-lg overflow-hidden w-full max-w-md hover:shadow-xl transition-shadow flex flex-col h-full">
          <div className="relative bg-gray-200 h-56 flex items-center justify-center border-b-4 border-nescau">
            <span className="text-gray-400 text-lg">Imagem Aqui</span>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-azuled">Projeto 4</h3>

            <p className="text-azuled text-sm leading-relaxed mb-2 flex-grow">
              Descrição do projeto aqui...
            </p>

            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                Tecnologia 1
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                Tecnologia 2
              </span>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nescau text-creme px-6 py-2 rounded-md hover:opacity-90 transition-opacity inline-block w-full text-center font-medium my-5"
            >
              Ver Projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
