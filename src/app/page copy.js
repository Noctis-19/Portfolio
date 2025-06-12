import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import FormationSection from "./components/FormationSection";
import SkillSection from "./components/SkillSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-8 py-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="relative">
          <div className="pattern-bg"></div>
          <h1 className="text-4xl font-bold tracking-light">
            Ingénieur Informatique et Multimédia <span className="block text-blue-500">Développeur Web</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-8">
            Ingénieur en informatique et multimédia, au service de solutions durables et efficaces.
          </p>
          <div className="flex mt-10 gap-4">
            <Link href="/about" className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500">
              À propos
            </Link>
            <Link href="/contact" className="px-8 py-3 rounded-lg border border-gray-600 hover:border-blue-500 font-medium bg-slate-900">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div id="sections">
        <ProjectSection/>
        <ExperienceSection/>
        <FormationSection/>
        <SkillSection/>
      </div>

      <div className="hidden bg-green-500/20 text-green-200 border border-green-500/30"></div>
      <div className="hidden bg-purple-500/20 text-purple-200 border border-purple-500/30"></div>
      <div className="hidden bg-gray-500/20 text-gray-200 border border-gray-500/30"></div>
      <div className="hidden bg-gray-600/20 text-gray-200 border border-gray-600/30"></div>
      <div className="hidden bg-cyan-500/20 text-cyan-200 border border-cyan-500/30"></div>
      <div className="hidden bg-pink-500/20 text-pink-200 border border-pink-500/30"></div>
      <div className="hidden bg-blue-500/20 text-blue-200 border border-blue-500/30"></div>
    </div>
  );
}
