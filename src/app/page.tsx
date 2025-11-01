import "./globals.css";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Head from "next/head";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-fundo text-cafe">
      <Header />
      {/* Seção Home */}
      <HeroSection />

      {/* Sobre Mim*/}
      <AboutMe />

      {/* Habilidades Técnicas */}

      <Skills />

      {/* Projetos */}
      <Projects />

      {/* Contato */}
      <Contact />

      <Footer />
    </main>
  );
}
