import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-cafe shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo / Nome */}
        <Link
          href="#hero"
          className="text-xl font-extrabold text-caramelo hover:text-creme transition duration-300"
        >
          Alexandre Rodrigues
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#sobre"
            className="text-creme hover:text-caramelo transition duration-300 font-medium"
          >
            Sobre
          </Link>
          <Link
            href="#habilidades"
            className="text-creme hover:text-caramelo transition duration-300 font-medium"
          >
            Habilidades
          </Link>
          <Link
            href="#projetos"
            className="text-creme hover:text-caramelo transition duration-300 font-medium"
          >
            Projetos
          </Link>
          <Link
            href="#contato"
            className="text-creme hover:text-caramelo transition duration-300 font-medium"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
