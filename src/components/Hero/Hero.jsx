import Available from "./FreeLanceAvailable";
import ButtonNav from "../Navbar/ButtonHire";
import IconHero from "./HeroIcons";
import { useTranslation } from "react-i18next";

const HeroText = () => {
  const { t } = useTranslation();
  const buttons = [
    {
      write: t("View Projects"),
      style:
        "lg:px-8 md:px-6.5 min-[840px]:px-7 px-6 py-3 rounded-xl font-medium text-white bg-linear-to-r from-purple-600 to-purple-900 dark:from-purple-600 dark:to-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 hover:from-purple-600 hover:to-purple-800 dark:hover:from-purple-500 dark:hover:to-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105 active:scale-95 cursor-pointer",
      Href: "#projects",
    },
    {
      write: t("Download CV"),
      style:
        "lg:px-8 md:px-6.5 min-[840px]:px-7 px-6 py-3 rounded-xl font-medium text-purple-800 dark:text-purple-300 bg-transparent border-2 border-purple-700/80 dark:border-purple-500/60 transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-900 dark:hover:border-purple-400 hover:text-gray-700 dark:hover:text-white hover:scale-105 active:scale-95 cursor-pointer",
      Href: "",
    },
  ];

  return (
    <div
      className="flex flex-col items-center md:items-start"
      data-aos="fade-right"
    >
      <Available StyleAttr="-translate-y-5" />
      <div className="flex justify-center items-center md:items-start flex-col gap-1">
        <p className="dark:bg-linear-to-r text-gray-600 text-sm sm:text-lg md:text-xl lg:text-2xl dark:from-purple-400 dark:to-purple-200 dark:bg-clip-text dark:text-transparent font-medium">
          {t("Hi, I'm")}
        </p>
        <p className="dark:text-white text-transparent pb-2 bg-linear-to-r from-purple-800 to-fuchsia-600 bg-clip-text text-4xl sm:text-[42px] md:text-5xl min-[840px]:text-[54px] lg:text-[66px] xl:text-7xl font-bold my-1 tracking-tight">
          {t("Hasan Tuffaha")}
        </p>
        <p className="dark:bg-linear-to-r text-gray-600 text-xl sm:text-[22px] md:text-2xl lg:text-[27px] xl:text-3xl dark:from-purple-400 dark:to-fuchsia-300 dark:bg-clip-text dark:text-transparent font-semibold mb-2">
          {t("Frontend Developer")}
        </p>
        <p className="dark:text-gray-200 text-transparent bg-linear-to-r from-purple-900 to-fuchsia-900 bg-clip-text max-sm:text-center my-2 text-xs lg:text-[13px] xl:text-sm w-60 sm:w-65 md:w-75 lg:w-80 leading-relaxed">
          {t(
            "Building fast, modern, and beautiful web experiences using React and Tailwind CSS.",
          )}
        </p>

        <div className="flex items-center gap-3 md:gap-6 mt-7">
          {buttons.map(({ write, Href, style }) => (
            <ButtonNav
              Href={Href}
              write={write}
              key={write}
              className={`${style} cursor-pointer rounded-full text-[10px] md:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-purple-500/30`}
            />
          ))}
        </div>
      </div>
      <IconHero />
    </div>
  );
};

export default HeroText;
