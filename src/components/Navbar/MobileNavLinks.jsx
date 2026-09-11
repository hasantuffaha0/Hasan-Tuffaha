import { useTranslation } from "react-i18next";
import React from "react";

const Links = [
  {
    link: "About",
  },
  {
    link: "Skills",
  },
  {
    link: "Services",
  },
  {
    link: "Projects",
  },
  {
    link: "Content",
  },
];

const MobileNav = ({ open }) => {
    const { t } = useTranslation();

    return (
        <div
        className={`${open ? "w-50 h-50 top-15 rtl:left-5 ltr:right-5" : "w-0 h-0 top-7 rtl:left-6 ltr:right-6"} bg-[#f3f4f6]/90 dark:bg-[#252533] text-purple-900 dark:text-purple-400 backdrop-blur-md border border-purple-500/20 shadow-lg shadow-purple-500/20 hover:border-purple-400/30 text-lg flex flex-col justify-center gap-1 items-center rounded-xl transition-all duration-400 absolute`}
      >
        {Links.map(({ link }, index) => (
          <React.Fragment key={index}>
            <a
              className={`w-[85%] text-center hover:text-[#252533] dark:hover:text-purple-800 transition-all duration-200 ${
                open ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              href="#"
            >
              {t(link)}
            </a>
            {index !== Links.length - 1 && (
              <span
                className={`w-[85%] h-px bg-purple-900/30 dark:bg-black transition-all duration-100 ${
                  open ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    )
}

export default MobileNav