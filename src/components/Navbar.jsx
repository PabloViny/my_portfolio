import { useEffect } from "react"
import { useLanguage } from "../context/useLanguage"

const Navbar = ({menuOpen, setMenuOpen}) => {
    const { language, toggleLanguage, t } = useLanguage()

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white"> 
                    pablo<span className="text-blue-600">.dev</span>{" "}
                </a>

                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="text-gray-300 hover:text-white text-sm font-medium border border-white/20 rounded px-2 py-1 transition-colors hover:border-blue-500/50"
                        aria-label="Toggle language"
                    >
                        {language === "pt" ? "EN" : "PT"}
                    </button>

                    <div className="w-7 h-5 relative cursor-pointer z-40" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors"> {t.nav.home} </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors"> {t.nav.about} </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors"> {t.nav.projects} </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors"> {t.nav.contact} </a>

                    <button
                        onClick={toggleLanguage}
                        className="text-gray-300 hover:text-white text-sm font-medium border border-white/20 rounded px-3 py-1.5 transition-colors hover:border-blue-500/50 hover:text-blue-400"
                        aria-label="Toggle language"
                    >
                        {language === "pt" ? "EN" : "PT"}
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
