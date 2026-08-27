import { RevealOnScroll } from "./RevealOnScroll"
import { useLanguage } from "../../context/useLanguage"

const Projects = () => {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">
            {t.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Personal Financial Control
              </h3>
              <p className="text-gray-400 mb-4">
                {t.projects.project1.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://projectfinancialcontrol.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  {t.projects.viewProject}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Personal Financial Control
              </h3>
              <p className="text-gray-400 mb-4">
                {t.projects.project2.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "JavaScript", "HTML", "CSS"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://pabloviny.github.io/financial-control-react/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                >
                  {t.projects.viewProject}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects
