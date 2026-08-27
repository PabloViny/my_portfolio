import { useState } from "react"
import { LanguageContext, translations } from "./language"

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"))
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
