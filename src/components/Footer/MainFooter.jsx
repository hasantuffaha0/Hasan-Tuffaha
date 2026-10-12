import { AiFillCode } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";

// Social media links shown in the left column
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/hasantuffaha0",
    icon: <AiFillCode />,
    label: "github.com/hasantuffaha0",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hasantuffaha",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
];

// Navigation links that scroll to specific sections on the page
const NAV_LINKS = [
  "About Narrative",
  "Technical Stack",
  "Specialized Services",
  "Featured Case Studies",
  "Work Experience",
  "Contract & Inquiries",
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#F1F5F9] dark:bg-[#0A0E17] border-t border-slate-200 dark:border-transparent py-10 md:py-12 px-4 sm:px-6 lg:px-12 transition-colors duration-300">
      <div className="flex justify-between gap-7 lg:gap-3 w-full text-slate-600 dark:text-[#B9CACB] lg:flex-row flex-col items-center">
        
        {/* Section 1: Branding and Personal Intro */}
        <div className="lg:w-[35%] flex flex-col gap-4">
          {/* My name with a glowing status dot */}
          <div className="text-[#0F172A] dark:text-white text-2xl flex items-baseline flex-wrap gap-1">
            <span className="rtl:hidden font-semibold">HT</span>
            <span className="inline-block w-2 h-2 rounded-full mx-2 bg-[#0891B2] dark:bg-[#00F0FF] shadow-[0_0_8px_1px_#0891B2] dark:shadow-[0_0_10px_2px_#00F0FF]" />
            <span>{t("Hasan Tuffaha")}</span>
            <span className="text-slate-500 rtl:hidden dark:text-[#B9CACB] text-base ms-1">
              (حسن تفاحة)
            </span>
            <span className="text-slate-500 ltr:hidden dark:text-[#B9CACB] text-base ms-1">
              (Hassan Tuffaha)
            </span>
          </div>
          
          {/* Short professional bio */}
          <p className="text-sm leading-relaxed">
            {t(
              "Frontend Architect & Systems Engineer crafting bespoke digital surfaces with pixel-perfection, reactive state architectures, and high-frequency luminescent micro-interactions.",
            )}
          </p>

          {/* Social Media Buttons */}
          <div className="flex gap-3 lg:flex-row flex-col lg:w-full w-fit text-sm">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "bg-white dark:bg-[#1C1F29] text-slate-700 dark:text-[#B9CACB]",
                  "border border-slate-200 dark:border-transparent cursor-pointer",
                  "hover:bg-slate-100 dark:hover:bg-[#292c35] duration-300",
                  "rounded-sm outline-none px-4 py-1.5 flex gap-3 items-center",
                )}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Section 2: Quick Navigation */}
        <div className="lg:w-[15%] w-full flex items-center gap-4 flex-col text-sm">
          <h3 className="text-[#0891B2] dark:text-[#00F0FF] w-full uppercase text-xl font-medium">
            {t("navigation")}
          </h3>
          <nav className="flex w-full flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                className="hover:text-[#0891B2] dark:hover:text-[#00F0FF] transition-colors duration-300 w-fit"
              >
                {t(item)}
              </a>
            ))}
          </nav>
        </div>

        {/* Section 3: Work Availability / Status Card */}
        <div className="lg:w-[35%] w-full flex flex-col gap-4 text-sm">
          <h3 className="text-[#0891B2] dark:text-[#00F0FF] uppercase text-xl font-medium">
            {t("Engineering Status")}
          </h3>
          <div className="bg-white dark:bg-[#1C1F29] border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none p-4 w-full flex flex-col gap-2">
            {/* Animated "Live" indicator */}
            <div className="flex items-center gap-3 text-lg text-[#0F172A] dark:text-white">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#0891B2] dark:bg-[#00F0FF] opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0891B2] dark:bg-[#00F0FF] shadow-[0_0_8px_#0891B2] dark:shadow-[0_0_10px_#00F0FF]"></span>
              </span>
              <p>{t("Available for Freelance & Contracts")}</p>
            </div>
            <p className="leading-relaxed">
              {t(
                "Open to worldwide remote positions, high-impact consulting engagements, and bespoke frontend engineering.",
              )}
            </p>
            <p className="text-sky-600 dark:text-[#38BDF8] font-medium">
              {t("Timezone: GMT+3")} &nbsp; / &nbsp; {t("Remote Ready")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Copyright and Version Info */}
      <div className="flex justify-between text-slate-500 dark:text-[#B9CACB] mt-12 md:flex-row flex-col items-center text-sm gap-4 border-t border-slate-200 dark:border-slate-800 pt-8">
        <p>{t("© 2025 Hasan Tuffaha. All rights reserved")}</p>
        <div className="flex gap-4 items-center">
          <p className="text-sky-600 dark:text-[#38BDF8]">
            {t("Hassan Tuffaha's Portfolio")}
          </p>
          <span className="w-1 h-1 bg-slate-400 dark:bg-[#B9CACB] rounded-full"></span>
          <p className="font-mono">{t("v2.4.0")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;