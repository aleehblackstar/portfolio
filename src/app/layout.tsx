import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configurando a fonte Inter com variável CSS
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexandre Rodrigues | Desenvolvedor Full Stack",
  description: "Portfólio e projetos de Alexandre Rodrigues, desenvolvedor Full Stack Júnior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} bg-fundo text-cafe min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
