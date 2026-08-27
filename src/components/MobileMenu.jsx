import { useLanguage } from "../context/useLanguage"

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { t } = useLanguage()

  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
  transition-transform duration-300 ease-in-out
  ${menuOpen ? "translate-y-0" : "-translate-y-full"}
`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        {t.nav.home}
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        {t.nav.about}
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        {t.nav.projects}
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        {t.nav.contact}
      </a>
    </div>
  );
};

export default MobileMenu;
