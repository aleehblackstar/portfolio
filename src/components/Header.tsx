"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Radar, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-nescau/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 border-b border-creme/20">
        
        <Link
          href="#home"
          className="text-2xl flex flex-row gap-3 items-center font-medium text-creme hover:text-caramelo transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <Radar size={40} className="bg-caramelo text-cafe rounded p-0.5" />
          Alexandre Rodrigues
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-creme hover:text-caramelo transition-colors duration-300 text-lg font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir ou fechar menu">
            {isMenuOpen ? (
              <X size={30} className="text-creme" />
            ) : (
              <Menu size={30} className="text-creme" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-nescau shadow-md transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-creme hover:text-caramelo transition-colors duration-300 text-xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
