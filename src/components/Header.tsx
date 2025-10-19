// src/components/Header.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { Radar, Menu, X } from "lucide-react";

function UnderlineLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: any;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative text-creme hover:text-caramelo transition-colors duration-200"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-caramelo transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-nescau/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 border-b border-creme/20">
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl flex flex-row gap-3 items-center font-medium bg-gradient-to-r from-caramelo via-creme to-caramelo bg-clip-text text-transparent animate-gradient-x"
          onClick={() => setIsMenuOpen(false)}
        >
          <Radar size={40} className="bg-caramelo text-cafe rounded p-0.5" />
          Alexandre Rodrigues
        </Link>

        <style jsx>{`
          @keyframes gradient-x {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }
        `}</style>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex space-x-8">
          {/* CORREÇÃO 2: O componente UnderlineLink agora é usado aqui também. */}
          {navLinks.map((link) => (
            <UnderlineLink key={link.href} href={link.href}>
              {link.label}
            </UnderlineLink>
          ))}
        </nav>

        {/* Botão Hambúrguer */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir ou fechar menu"
          >
            {isMenuOpen ? (
              <X size={30} className="text-creme" />
            ) : (
              <Menu size={30} className="text-creme" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Overlay) */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-nescau shadow-md transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "transform translate-y-0"
            : "transform -translate-y-[150%]"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          {/* O UnderlineLink já estava sendo usado corretamente aqui. */}
          {navLinks.map((link) => (
            <UnderlineLink
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </UnderlineLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
