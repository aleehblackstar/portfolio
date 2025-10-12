import Link from "next/link";
import { Radar } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-nescau shadow-lg">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 border-b border-creme">
        
        {/* Logo / Nome */}
        <Link
          href="#hero"
          className="text-2xl flex flex-row gap-3 items-center font-medium text-creme hover:text-caramelo transition duration-300"
        >
          <Radar size={40} className="bg-caramelo text-cafe rounded p-0.5" /> Alexandre Rodrigues
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-12">
          <Link
            href="#sobre"
            className="text-creme hover:text-caramelo transition duration-300 text-xl font-medium"
          >
            Sobre
          </Link>
          <Link
            href="#habilidades"
            className="text-creme hover:text-caramelo transition duration-300 text-xl font-medium"
          >
            Habilidades
          </Link>
          <Link
            href="#projetos"
            className="text-creme hover:text-caramelo transition duration-300 text-xl font-medium"
          >
            Projetos
          </Link>
          <Link
            href="#contato"
            className="text-creme hover:text-caramelo transition duration-300 text-xl font-medium"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
