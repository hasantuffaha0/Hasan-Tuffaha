import { useTranslation } from "react-i18next"

const Available = ({ StyleAttr }) => {
    const { t } = useTranslation();
    return (
        <div
            className={`${StyleAttr} text-xs sm:text-sm md:text-md lg:text-lg flex md:py-3 py-2 w-fit text-purple-600 dark:text-gray-300 justify-between gap-5 md:px-4 px-2 items-center rounded-full h-9 bg-white/70 dark:bg-[#1e1e24]/80 backdrop-blur-xl border border-white/80 dark:border-white/20 shadow-md shadow-white/10`}>
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {t('Available for freelance work')}
        </div>
    )
}

export default Available