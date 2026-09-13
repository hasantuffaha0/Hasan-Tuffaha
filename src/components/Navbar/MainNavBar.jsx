import { useTranslation } from "react-i18next";
import NavItems from "./ItemsNav";
import ButtonNav from "./ButtonHire";
import MobileElementNav from "./MobileNav";
import ButtonTranslate from "./ButtonTrans";
import ModsBChange from "./ModsChange";

const MainNav = () => {
  const { t } = useTranslation();

  const items = [
    { label: t("Home"), href: "#hero" },
    { label: t("About"), href: "#about" },
    { label: t("Skills"), href: "#skills" },
    { label: t("Projects"), href: "#projects" },
    { label: t("Services"), href: "#services" },
  ];

  return (
    <nav
      className="fixed left-1/2 -translate-x-1/2 w-[90%] md:w-[95%] max-w-5xl z-50 mt-3"
      data-aos="fade-down"
    >
      <div
        className={`flex ps-3 md:ps-6 pe-0 md:pe-3 md:px-4 py-2 justify-between items-center rounded-full h-12 md:h-14 bg-white/70 dark:bg-[#121118]/80 backdrop-blur-xl border border-purple-400/30 dark:border-purple-500/30 shadow-xl shadow-purple-500/10 dark:shadow-purple-900/30 transition-all duration-300 hover:border-purple-500/60 dark:hover:border-purple-400/50`}
      >
        <a
          href="#"
          className={
            "w-20 dark:text-purple-300 text-base md:text-xl text-purple-800 font-semibold"
          }
        >
          {"<HT/>"}
        </a>

        <NavItems items={items} />
        <div className="flex flex-row justify-center items-center gap-0">
          <ModsBChange />
          <ButtonTranslate />
          <MobileElementNav />
          <ButtonNav
            Href={"#hire"}
            write={t("Hire Me")}
            className={
              "bg-linear-to-r dark:from-white dark:to-purple-100 from-purple-600 text-xs md:text-sm to-purple-900 text-white hidden sm:flex dark:hover:text-purple-900 dark:hover:from-purple-100 dark:hover:to-white dark:text-purple-700 px-6 py-2.5 md:py-2 rounded-full hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] dark:hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] font-semibold transition-all duration-300"
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
