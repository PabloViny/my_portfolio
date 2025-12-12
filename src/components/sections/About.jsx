import {RevealOnScroll} from "./RevealOnScroll"

const About = () => {

    const frontendSkills = [
        "ReactJS", 
        "JavaScript", 
        "TailwindCSS"
    ]

    const backendSkills = [
        "Java",
        "Python"
    ]


  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-center">Sobre mim</h2>

            <div className="glass rounded-xl p-8 border-white/10 border:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Sou estudante de Engenharia de Software e desenvolvedor front-end júnior, com foco em construir interfaces modernas, acessíveis e responsivas.
                    Gosto de aprender, explorar novas ferramentas e transformar problemas em produtos práticos. Acredito em código limpo, evolução constante e em entregar experiências que realmente façam diferença para o usuário.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend </h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Educação </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Bacharelado em Engenharia de Software</strong> - Centro Universitário Internacional UNINTER (2023-2027)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Experiência </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Buscando primeira oportunidade como Desenvolvedor Front-end</h4>
                            <p> • Atualmente focado em aprimorar habilidades em React, JavaScript e APIs REST</p>
                            <p>• Desenvolvendo projetos próprios para evolução técnica e portfólio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About