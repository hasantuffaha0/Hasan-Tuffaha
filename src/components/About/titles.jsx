import { useTranslation } from "react-i18next";

const TitleSections = ({ prim, secon, third }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-2">{t(prim)}</h2>
        <p className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-600 dark:text-white">{t(secon)}</p>
        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-[13px] sm:text-lg">{t(third)}</p>
      </div>
    </div>
  );
};
export default TitleSections;
