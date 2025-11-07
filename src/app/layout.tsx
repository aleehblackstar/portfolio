import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexandre Rodrigues | Desenvolvedor Full Stack",
  description: "Portfólio e projetos de Alexandre Rodrigues, desenvolvedor Full Stack Júnior.",
  authors: [{ name: "Alexandre Rodrigues" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio-1qbf9g2ia-alexandre-rodrigues-s-projects.vercel.app/",
    title: "Alexandre Rodrigues | Desenvolvedor Full Stack",
    description: "Software Developer | HTML | CSS | Tailwind | JavaScript | React | Next.js | Python",
    siteName: "Alexandre Rodrigues Portfolio",
    images: [
      {
        url: "/assets/images/portfolioScreenshot.jpg", 
        height: 630,
        alt: "Alexandre Rodrigues - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Rodrigues | Desenvolvedor Full Stack",
    description: "Software Developer | HTML | CSS | Tailwind | JavaScript | React | Next.js | Python",
    images: ["/assets/images/perfilPortfolio.png"],
  },
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