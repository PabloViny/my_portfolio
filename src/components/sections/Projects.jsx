import { useState } from "react"
import { RevealOnScroll } from "./RevealOnScroll"
import { useLanguage } from "../../context/useLanguage"

const projects = [
  {
    key: "project1",
    techs: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Git"],
    link: "https://stocklog-website.vercel.app/",
    github: null,
  },
  {
    key: "project2",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    link: "psicorpusconnect.com.br",
    github: null,
  },
  {
    key: "project3",
    techs: ["React", "TypeScript", "Node.js", "Express"],
    link: null,
    github: "https://github.com/PabloViny/desafio-agilize-fullstack",
  },
  {
    key: "project4",
    techs: ["React", "Vite", "JavaScript", "HTML", "CSS"],
    link: "https://pabloviny.github.io/financial-control-react/",
    github: "https://github.com/PabloViny/financial-control-react",
  },
]

const Projects = () => {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === projects.length - 1 ? 0 : i + 1))

  const project = projects[current]

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">
            {t.projects.title}
          </h2>

          <div className="flex items-center gap-4">
            {/* Prev button */}
            <button
              onClick={prev}
              className="p-2 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all shrink-0"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Card */}
            <div
              key={current}
              className="flex-1 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all animate-fadeIn flex flex-col min-h-[280px]"
            >
              <h3 className="text-xl font-bold mb-2">
                {t.projects[project.key].title}
              </h3>
              <p className="text-gray-400 mb-4 flex-1">
                {t.projects[project.key].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.link || project.github) && (
                <div className="flex gap-4 mt-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.projects.viewProject}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Next button */}
            <button
              onClick={next}
              className="p-2 rounded-full border border-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all shrink-0"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-blue-500 w-4" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Projects
