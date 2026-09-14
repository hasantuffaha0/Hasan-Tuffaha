import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Row = () => {
  const { t } = useTranslation()
  return (
    <a
      href="#about"
      className="relative z-10 translate-y-20 mb-20 md:-translate-y-18 mx-auto w-fit md:-mb-10 flex flex-col items-center gap-2 cursor-pointer group"
    >
      <span className="text-xs md:text-sm font-medium tracking-wider pb-1 text-purple-600 dark:text-purple-300 group-hover:text-purple-400 transition-colors duration-300 drop-shadow-sm">
        {t('Explore More')}
      </span>
      <div className="p-2 rounded-full bg-white/20 dark:bg-white/3 backdrop-blur-md border border-purple-800/30 dark:border-white/30 shadow-lg animate-bounce group-hover:bg-purple-600/30 transition-all duration-300">
        <MdKeyboardDoubleArrowDown className="text-xl text-purple-700 dark:text-purple-300 group-hover:text-white transition-colors duration-300" />
      </div>
    </a>
  );
};

export default Row;