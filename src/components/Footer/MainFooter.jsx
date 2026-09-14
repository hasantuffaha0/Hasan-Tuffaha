import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const Contacts = [
    {
      ConHref: "https://github.com/hasantuffaha0",
      Aria: "GitHub",
      Icon: FaGithub,
    },
    {
      ConHref: "https://www.linkedin.com/in/hasantuffaha/",
      Aria: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      ConHref: "https://wa.me/201011308020",
      Aria: "Whatsapp",
      Icon: FaWhatsapp,
    },
    {
      ConHref: "mailto:hasatuffaha74@gmail.com",
      Aria: "Email",
      Icon: FaEnvelope,
    },
  ];

  return (
    <footer className="bg-white text-purple-700 dark:bg-slate-900 dark:text-purple-100 py-10 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20 transition-colors duration-300">
      <div data-aos="fade" className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-start gap-2.5">
          <h3 className="text-2xl font-bold tracking-wider text-purple-600 dark:text-purple-400">
            {t("Portfolio")}
          </h3>
          <p className="text-sm text-purple-600/80 dark:text-purple-300/80 max-w-sm">
            {t(
              "Building digital experiences with passion, clean code, and modern technologies.",
            )}
          </p>
        </div>

        <div data-aos="fade" className="flex items-center gap-4 md:gap-5">
          {Contacts.map(({ ConHref, Aria, Icon }, index) => (
            <a
              href={ConHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={Aria}
              key={index}
              className="p-3 rounded-full bg-purple-50 dark:bg-slate-800 border border-purple-500/30 text-purple-600 dark:text-purple-300 hover:text-white hover:bg-purple-600 dark:hover:bg-purple-600 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 md:mt-8 pt-6 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-600/70 dark:text-purple-400/60 gap-3 sm:gap-4">
        <p>
          © {currentYear} — {t("All rights reserved.")}
        </p>
        <p className="flex items-center gap-1.5">
          {t("Designed & Built by")} <a href="">{t("Hasan Tuffaha")}</a>{" "}
          <FaHeart className="text-red-500 mx-0.5" size={12} />
        </p>
      </div>
    </footer>
  );
};

export default Footer;