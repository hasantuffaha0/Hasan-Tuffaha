import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import NavItems from "./ItemsNav";
import ButtonNav from "./ButtonHire";
import HasanLogo from "../../assets/logo.png";
import MobileElementNav from "./MobileNav";
import ButtonTranslate from "./ButtonTrans";
import ModsBChange from "./ModsChange";

const MainNav = () => {
  const { t } = useTranslation();

  const items = [
    { label: t("About"), href: "#" },
    { label: t("Skills"), href: "#" },
    { label: t("Services"), href: "#" },
    { label: t("Projects"), href: "#" },
  ];

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 mt-3">
      <div
        className={`flex ps-6 pe-3 md:px-4 py-2 justify-between items-center rounded-full h-14 bg-white/70 dark:bg-[#121118]/80 backdrop-blur-xl border border-purple-400/30 dark:border-purple-500/30 shadow-xl shadow-purple-500/10 dark:shadow-purple-900/30 transition-all duration-300 hover:border-purple-500/60 dark:hover:border-purple-400/50`}
      >
        {" "}
        <Logo item={<img src={HasanLogo} alt="Logo" />} className={"w-20"} />
        {/* {'<HT/>'} */}
        <NavItems items={items} />
        <div className="flex flex-row justify-center items-center gap-1">
          <ModsBChange />
          <ButtonTranslate />
          <MobileElementNav />
          <ButtonNav
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
