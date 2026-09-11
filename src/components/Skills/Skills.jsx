import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiI18Next, SiCplusplus } from "react-icons/si";

export const skillsData = [
  { name: "HTML 5", category: "Frontend Skills", icon: FaHtml5, style: "text-orange-500", },
  { name: "CSS 3", category: "Frontend Skills", icon: FaCss3Alt, style: "text-blue-500", },
  { name: "JavaScript", category: "Frontend Skills", icon: FaJsSquare, style: "text-yellow-500", },
  { name: "Tailwind", category: "Frontend Skills", icon: RiTailwindCssFill, style: "text-blue-500", },
  { name: "React", category: "Frontend Skills", icon: FaReact, style: "text-sky-500", },
  { name: "Vite", category: "Frontend Skills", icon: SiVite, style: "text-purple-500", },
  { name: "i18next", category: "Frontend Skills", icon: SiI18Next, style: "text-teal-500", },
  { name: "Git", category: "Tools", icon: FaGitAlt, style: "text-orange-500", },
  { name: "Github", category: "Tools", icon: FaGithub, style: "text-black dark:text-white", },
  { name: "Figma", category: "Tools", icon: FaFigma, style: "text-black dark:text-white", },
  { name: "Python", category: "Languages", icon: FaPython, style: "text-blue-400", },
  { name: "C++", category: "Languages", icon: SiCplusplus, style: "text-blue-500", },
  { name: "Mysql", category: "Languages", icon: DiMysql, style: "text-blue-600 dark:text-blue-400", },
];

const SkillsContent = ({ cat }) => {
  const { t } = useTranslation();
  const filteredSkills =
    cat === "All Skills"
      ? skillsData
      : skillsData.filter((item) => item.category === cat);

  const Styling =
    "p-8 md:p-10 z-2 rounded-[30px] bg-white dark:bg-white/10 shadow-purple-900/40 backdrop-blur-2xl border border-purple-800/50 shadow-2xl";
  return [
    {
      cardClassName: Styling,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
          {filteredSkills.map(({ name, icon: Icon, style }, index) => (
            <div
              key={index}
              className="flex flex-row gap-3 items-center shadow-purple-900/40 border border-purple-800/50 shadow-2xl p-3 rounded-3xl bg-white/5 hover:scale-105 transition-transform duration-300"
            >
              <Icon
                className={`${style} text-xl md:text-2xl lg:text-3xl xl:text-4xl shrink-0`}
              />
              <span className="text-md lg:text-xl font-medium">{t(name)}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];
};

export default SkillsContent;