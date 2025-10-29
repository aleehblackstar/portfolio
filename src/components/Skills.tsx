import {
  SiPython,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiVercel,
  SiGithub,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="py-28 pb-16 md:pt-32 md:pb-20  md:px-8 flex flex-col items-center justify-center bg-cafe/5"
    >
      {/* Título */}
      <h2 className="text-4xl font-bold text-cafe mb-12 text-center">
        Ferramentas
      </h2>

      {/* Ícones */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-5xl text-center">
        <SiHtml5 className="text-[#E34F26] hover:scale-110 transition-transform duration-300" title="HTML5" />
        <SiCss3 className="text-[#1572B6] hover:scale-110 transition-transform duration-300" title="CSS3" />
        <SiJavascript className="text-[#F7DF1E] hover:scale-110 transition-transform duration-300" title="JavaScript" />
        <SiTypescript className="text-[#3178C6] hover:scale-110 transition-transform duration-300" title="TypeScript" />
        <SiPython className="text-[#3776AB] hover:scale-110 transition-transform duration-300" title="Python" />
        <SiReact className="text-[#61DAFB] hover:scale-110 transition-transform duration-300" title="React" />
        <SiTailwindcss className="text-[#38B2AC] hover:scale-110 transition-transform duration-300" title="Tailwind CSS" />
        <SiNodedotjs className="text-[#339933] hover:scale-110 transition-transform duration-300" title="Node.js" />
        <SiPrisma className="text-[#2D3748] hover:scale-110 transition-transform duration-300" title="Prisma" />
        <SiMysql className="text-[#4479A1] hover:scale-110 transition-transform duration-300" title="MySQL" />
        <SiGit className="text-[#F05032] hover:scale-110 transition-transform duration-300" title="Git" />
        <SiGithub className="text-[#181717] hover:scale-110 transition-transform duration-300" title="GitHub" />
        <SiVercel className="text-white hover:scale-110 transition-transform duration-300" title="Vercel" />
      </div>
    </section>
  );
}
