export default function Footer() {
  return (
    <footer className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-20 border-t bg-nescau/90 border-creme/80 py-6 mt-5">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-creme">
        Desenvolvido por{" "}
        <span className="text-creme font-semibold">Alexandre Rodrigues</span>
      </p>
      <p className="text-xs mt-1 text-creme">
        {"<code>"} Criado com ☕, 💻 e paixão por tecnologia {"</code>"}
      </p>
        <p className="text-sm text-creme">
          © {new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
