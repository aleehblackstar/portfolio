import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-10 bg-cafe shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link
          href="#hero"
          className="text-x1 font-extrabold text-caramelo hover:text-creme transition duration-300"
        >
          Alexandre Rodrigues
        </Link>
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
            href="#"
            className="text-creme hover:text-caramelo transition duration-300 font-medium"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
