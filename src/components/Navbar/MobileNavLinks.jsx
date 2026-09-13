import { useTranslation } from "react-i18next";
import React from "react";

const Links = [
  { link: "About", href: "#about" },
  { link: "Skills", href: "#skills" },
  { link: "Projects", href: "#projects" },
  { link: "Services", href: "#services" },
  { link: "Content", href: "#hire" },
];

const MobileNav = ({ open, setOpen }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${
        open
          ? "max-h-96 opacity-100 scale-100 pointer-events-auto"
          : "max-h-0 opacity-0 scale-95 pointer-events-none"
      } absolute top-14 rtl:left-5 ltr:right-5 w-56 origin-top
      bg-[#f3f4f6]/90 dark:bg-[#252533] backdrop-blur-md
      border border-purple-500/20 shadow-lg shadow-purple-500/20
      hover:border-purple-400/30 rounded-xl overflow-hidden
      transition-all duration-300 ease-out flex flex-col`}
    >
      {Links.map(({ link, href }, index) => (
        <React.Fragment key={link}>
          <a
            href={href}
            onClick={() => setOpen(false)}
            style={{
              transitionDelay: open ? `${index * 60}ms` : "0ms",
            }}
            className={`w-full text-center py-3 text-lg font-medium
              text-purple-900 dark:text-purple-400
              hover:text-white hover:bg-purple-500/80
              dark:hover:text-white dark:hover:bg-purple-700/80
              transition-all duration-200 ${
                open
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
          >
            {t(link)}
          </a>

          {index !== Links.length - 1 && (
            <span className="mx-auto w-[85%] h-px bg-purple-900/20 dark:bg-purple-400/10" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileNav;