import Hasan from "../../assets/Hasan Tuffaha.jpg";
import HasanLight from "../../assets/Hasan Tuffaha Light.jpg";
import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import IconsMain from "./Icons";

const MainHasan = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div data-aos="fade-left" className="relative w-67.5 h-90 md:w-72 md:h-96 lg:w-75 lg:h-100 xl:w-90 xl:h-120 flex items-center justify-center">
      <div className="absolute rtl:rotate-180 w-60 h-60 md:w-70 md:h-70 lg:w-75 lg:h-75 xl:w-90 xl:h-90 bg-linear-to-r from-pink-300 to-purple-300 dark:from-pink-800 dark:via-purple-600 dark:to-purple-950 rounded-full z-0 opacity-60 blur-xl -top-5 ltr:right-10 rtl:left-10" />
      <div className="absolute blur-px w-60.75 h-83.25 md:w-64.8 md:h-88.8 lg:w-67.5 lg:h-92.5 xl:w-81 xl:h-111 bg-linear-120 from-purple-200 to-sky-200 dark:from-sky-400 dark:to-purple-400 rounded-4xl z-10 border border-purple-500/22 shadow-lg shadow-white/20"></div>
      <IconsMain />
      <div className="relative w-59.75 h-82.25 md:w-63.8 md:h-87.8 lg:w-66.5 lg:h-91.5 xl:w-80 xl:h-110 rounded-4xl overflow-hidden z-20 border border-purple-400/40 shadow-lg">
        <ProfileCard 
          title="Frontend Developer"
          handle="hassandev"
          status="Online"
          contactText="Contact Me"
          avatarUrl={`${isDarkMode? Hasan : HasanLight}`}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => console.log("Contact clicked")}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          iconUrl="/assets/demo/iconpattern.png"
          behindGlowEnabled
          innerGradient={`${isDarkMode? 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)' : 'linear-gradient(145deg,#f3e8ff 0%,#71C4FF44 100%)'}`}
        />
        <div className="absolute inset-0 bg-purple-600/30 dark:bg-purple-900/30 mix-blend-color pointer-events-none" />
      </div>
    </div>
  );
};

export default MainHasan;
