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
          <div className="relative">
            <Image
              src="/assets/images/projetoQuerodog.jpg"
              alt="Projeto QueroDog"
              className="w-full h-56 object-cover border-b-4 border-nescau"
              width={400}
              height={224}
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-azuled">
              QueroDog – Descubra Raças de Cachorro
            </h3>

            <p className="text-azuled text-sm leading-relaxed mb-2 flex-grow">
              Criado em grupo durante o programa{" "}
              <strong>Desenvolve do Grupo Boticário</strong>, o projeto{" "}
              <strong>QueroDog</strong> tem como objetivo facilitar a busca e
              descoberta de diferentes raças de cães. Ele consome uma{" "}
              <strong>API pública</strong> para exibir informações e imagens de
              forma prática e intuitiva, ajudando usuários curiosos ou futuros
              tutores a conhecer melhor cada raça. O desenvolvimento reforçou o
              trabalho em equipe, o consumo de APIs e a criação de interfaces
              dinâmicas com React.
            </p>

            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                CSS Puro
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                API Pública
              </span>
            </div>

            <a
              href="https://debug-cafe.github.io/projeto-pet-desenvolve-boticario/"
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
              src="/assets/images/projetoDiario.jpg"
              alt="Projeto Diário"
              className="w-full h-56 object-cover border-b-4 border-nescau"
              width={400}
              height={224}
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-azuled">Diário</h3>

            <p className="text-azuled text-sm leading-relaxed mb-2 flex-grow">
              Desenvolvido no início da jornada de estudos, o{" "}
              <strong>Diário</strong> foi um dos primeiros projetos criados para
              praticar <strong>HTML</strong>, <strong>CSS</strong> e
              <strong>JavaScript</strong>. Permite registrar pensamentos e
              anotações diárias de forma simples, ajudando a compreender melhor
              a estrutura de páginas, manipulação do DOM e interação com o
              usuário. Este projeto também serviu como{" "}
              <strong>protótipo</strong> para o futuro desenvolvimento do
              <strong> Blog Pessoal</strong>, criado posteriormente com
              melhorias e novas funcionalidades.
            </p>

            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                HTML
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                CSS
              </span>
              <span className="px-3 py-1 bg-nescau/20 text-cafe rounded-full text-xs font-medium">
                JavaScript
              </span>
            </div>

            <a
              href="https://aleehblackstar.github.io/Diario/"
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
