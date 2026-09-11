import MagicBento from "./MagicBento";
import TitleSections from './titles';
import { useTranslation } from "react-i18next";
import { GraduationCap, Atom, BriefcaseBusiness, Compass } from "lucide-react";

const MainAbout = () => {
  
  const { t } = useTranslation();
  const CardsDatas = [
    {
      cardClassName:
        "lg:col-span-7 p-8 md:p-10 z-2 rounded-[30px] bg-white dark:bg-white/10 shadow-purple-900/40 backdrop-blur-2xl border border-purple-800/50 shadow-2xl flex flex-col gap-6",
      content: (
        <>
          <div>
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-400 mb-3 flex items-center gap-2">
              {t("Who am I?")}
            </h3>
            <p className="text-gray-800/80 dark:text-white/80 text-sm md:text-base leading-relaxed">
              {t(
                `Hi, I'm Hasan Tuffaha — a Frontend Developer and Computer Science student in Egypt. I build clean, responsive interfaces with React, JavaScript, and Tailwind CSS, focused on smooth UX across devices. Currently sharpening my skills through DEPI's React Frontend track, and working toward becoming a fullstack developer.`,
              )}
            </p>
          </div>
  
          <div className="border-t border-purple-900 dark:border-white/10 pt-6">
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-400 mb-3 flex items-center gap-2">
              {t("What drives me?")}
            </h3>
            <p className="text-gray-800/80 dark:text-white/80 text-sm md:text-base leading-relaxed">
              {t(
                `I enjoy the process itself — taking an idea and shaping it into something people actually enjoy using. I'm always learning, and my goal is to keep growing until I can build complete products end to end, frontend to backend.`,
              )}
            </p>
          </div>
  
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 hover:scale-105 transition-all duration-200"
            >
              {t("Let's Connect")}
            </a>
          </div>
        </>
      ),
    },
    {
      cardClassName:
        "lg:col-span-5 p-8 rounded-[30px] bg-white z-2 dark:bg-white/10 backdrop-blur-2xl border-purple-800/50 border shadow-2xl shadow-purple-900/40 flex flex-col gap-6 relative overflow-hidden",
      content: (
        <>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
  
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xl font-bold">
              <GraduationCap className="text-purple-900 dark:text-purple-300" />
            </div>
            <div>
              <h4 className="text-purple-800 dark:text-purple-400 font-semibold text-base">
                {t("Education")}
              </h4>
              <p className="text-gray-800/70 dark:text-white/70 text-sm">
                {t(
                  "Computers and Artificial Intelligence – Damietta University",
                )}
              </p>
            </div>
          </div>
  
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xl font-bold">
              <Atom className="text-purple-900 dark:text-purple-300" />
            </div>
            <div>
              <h4 className="text-purple-900 dark:text-purple-400 font-semibold text-base">
                {t("Track")}
              </h4>
              <p className="text-gray-800/70 dark:text-white/70 text-sm">
                {t("Frontend Developer (React & Tailwind)")}
              </p>
            </div>
          </div>
  
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xl font-bold">
                <BriefcaseBusiness  className="text-purple-900 dark:text-purple-300" />
            </div>
            <div>
              <h4 className="text-purple-800 dark:text-purple-400 font-semibold text-base">
                {t("Current training")}
              </h4>
              <p className="text-gray-800/70 dark:text-white/70 text-sm">
                {t("Digital Egypt Pioneers (DEPI) – React Frontend Track")}{" "}
              </p>
            </div>
          </div>
  
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xl font-bold">
              <Compass  className="text-purple-900 dark:text-purple-300" />
            </div>
            <div>
              <h4 className="text-purple-800 dark:text-purple-400 font-semibold text-base">
                {t("Passion")}
              </h4>
              <p className="text-gray-800/70 dark:text-white/70 text-sm">
                {t(
                  `Developing modern, interactive interfaces and a full-stack architecture.`,
                )}
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];
  

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden flex justify-center flex-col items-center">
      <TitleSections prim={'ABOUT ME'} secon={'Passionate Frontend Developer'} third={''} />
      <MagicBento
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={400}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
        cardData={CardsDatas}
        StylingLine='grid grid-cols-1 lg:grid-cols-12'
      />
    </section>
  );
};

export default MainAbout;
