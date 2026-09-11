import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const ButtonTranslate = () => {
  const { i18n } = useTranslation();

  const getInitialLanguage = () => {
    const savedLang = localStorage.getItem("app_lang");
    if (savedLang) return savedLang;
    return i18n.language?.startsWith("ar") ? "ar" : "en";
  };

  const [lang, setLang] = useState(getInitialLanguage);
  const [justChanged, setJustChanged] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const initialLang = getInitialLanguage();
    i18n.changeLanguage(initialLang);
    document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = initialLang;
  },[]);

  useEffect(() => {
    const handleLangChange = (lng) => {
      const currentLang = lng.startsWith("ar") ? "ar" : "en";
      setLang(currentLang);
      localStorage.setItem("app_lang", currentLang);
    };

    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, [i18n]);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";

    i18n.changeLanguage(newLang);
    localStorage.setItem("app_lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;

    setJustChanged(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setJustChanged(false), 500);
  };

  const isEnglish = lang === "en";

  return (
    <button
      onClick={toggleLanguage}
      dir="ltr"
      aria-label="Toggle language"
      className={`relative w-18 h-9 p-1 rounded-full bg-white dark:bg-[#1e1e24] border transition-all duration-300 cursor-pointer active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 ${
        justChanged
          ? "border-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.7)]"
          : "border-purple-500/30 shadow-inner shadow-black/40 hover:border-purple-400/50"
      }`}
    >
      <div className="relative w-full h-full">
        <span
          className={`absolute top-0 left-0 h-full w-1/2 rounded-full bg-linear-to-r from-purple-700 to-purple-800 dark:from-white dark:to-purple-100 shadow-[0_2px_8px_rgba(168,85,247,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isEnglish ? "translate-x-0" : "translate-x-full"
          } ${justChanged ? "scale-105" : "scale-100"}`}
          style={{ transitionProperty: "transform, scale" }}
        />

        <div className="relative z-10 grid grid-cols-2 w-full h-full">
          <span
            className={`flex items-center justify-center text-[11px] font-bold transition-colors duration-300 ${
              isEnglish ? "text-white dark:text-purple-700" : "text-[#1e1e24] dark:text-white/50"
            }`}
          >
            EN
          </span>
          <span
            className={`flex items-center justify-center text-[11px] font-bold transition-colors duration-300 ${
              !isEnglish ? "text-white dark:text-purple-700" : "text-[#1e1e24] dark:text-white/50"
            }`}
          >
            AR
          </span>
        </div>
      </div>
    </button>
  );
};

export default ButtonTranslate;