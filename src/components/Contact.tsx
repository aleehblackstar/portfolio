"use client";
import { useState } from "react";

import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());

    try {
      const response = await fetch("https://formspree.io/f/xblppeaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        setStatus("Erro ao enviar mensagem.");
      }
    } catch (error) {
      setStatus("Erro ao enviar mensagem.");
    }
  };

  return (
    <section
      id="contato"
      className="rounded-lg bg-nescau/90 shadow-md py-5 px-4 max-w-3xl max-h-auto mx-auto mt-14"
    >
      <div className="flex flex-col gap-2 text-creme mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Contato</h2>
        <p className="text-lg">É fácil me encontrar! </p>
        <p className="text-lg">
          Pode me enviar um email diretamente para{" "}
          <span className="font-semibold text-xl py-0 bg-caramelo text-azuled px-2 py-1 rounded-md">
            aleeh.rodrigues92@gmail.com
          </span>
        </p>
        <p className="text-lg">
          Ou pode me contatar pelo formulário aqui em baixo.
        </p>
        
      </div>
      {/* Botões ou formulário podem ser adicionados aqui */}
      <div className="grid md:grid-cols-2 gap-8">
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col gap-4 mr-4 border-solid border-solid-caramelo p-4"
        >
          <div>
            <label htmlFor="name" className="text-creme">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-cafe rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-creme">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-cafe rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-creme">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="border border-cafe rounded-md p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-caramelo text-cafe font-semibold py-2 rounded-md hover:bg-caramelo/80 transition-colors"
          >
            Enviar
          </button>

          {status && (
            <p className="text-center text-creme font-semibold mt-2">
              {status}
            </p>
          )}
        </form>
        <div className="flex  flex-col justify-center items-center align-bottom">
          <h2 className="text-creme text-center text-2xl px-4">
            Também pode me encontrar nas redes sociais
          </h2>
          <div className="flex justify-center gap-4 mt-4">
            {[
              {
                href: "https://www.linkedin.com/in/alexandre-rodrigues-9a1050100/",
                icon: <SiLinkedin size="2rem" />,
              },
              {
                href: "https://github.com/aleehblackstar",
                icon: <SiGithub size="2rem" />,
              },
              {
                href: "https://wa.me/5521991428726?text=Ol%C3%A1%20Alexandre!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
                icon: <SiWhatsapp size="2rem" />,
              },
            ].map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-creme hover:text-caramelo transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
