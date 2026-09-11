import IMGweb from "../../assets/web.jpg";
import IMGFigma from "../../assets/Ferramenta grátis para design de sites e produtos _ Figma.jpg";
import Portfolio from "../../assets/projectsOne/one.png";
import Landing from "../../assets/Landing.jpg";
import { useTranslation } from "react-i18next";
import { FaCode, FaFigma, FaRocket, FaUserTie } from "react-icons/fa";
import one from "../../assets/projectsOne/one.png";
import two from "../../assets/projectsOne/two.png";
import three from "../../assets/projectsOne/three.png";
import four from "../../assets/projectsOne/four.png";
import five from "../../assets/projectsOne/five.png";
import six from "../../assets/projectsOne/six.png";
import seven from "../../assets/projectsOne/seven.png";
import eight from "../../assets/projectsOne/eight.png";
import nine from "../../assets/projectsOne/nine.png";
import ten from "../../assets/projectsOne/ten.png";

const MainCard = ({ Service }) => {
  const { t } = useTranslation();
  

  const services = [
    {
      id: "landing-page",
      title: "Landing Page Development",
      shortDesc:
        "A fast, modern single-page website to showcase your business, products, or personal brand effectively.",
      img: Landing,
      icon: FaRocket,
      notes: [
        "FRONTEND DEVELOPMENT ONLY: I build the visual and interactive interface without backend servers or databases.",
        "Content Required: The client must provide all text, images, and branding assets.",
        "Free Deployment: Free assistance with live deployment on platforms like Vercel.",
      ],
    },
    {
      id: "portfolio-dev",
      title: "Personal & Professional Portfolio",
      shortDesc:
      "Custom portfolio websites to showcase your projects, skills, and resume with a modern look.",
      img: Portfolio,
      icon: FaUserTie,
      notes: [
        "FRONTEND DEVELOPMENT ONLY: No dynamic database backend included.",
        "Content Required: Client provides personal biography, resume details, and project media.",
        "Free Deployment: Assistance with deployment on Vercel or GitHub Pages.",
      ],
      Photos: [one, two, three, four, five, six, seven, eight, nine, ten],
      HrefTo: 'https://adnan-sakr.vercel.app/'
    },
    {
      id: "web-app",
      title: "Custom Web Application Development",
      shortDesc:
        "Building fast, responsive, and dynamic web applications using React.js and modern tools.",
      img: IMGweb,
      icon: FaCode,
      notes: [
        "FRONTEND DEVELOPMENT ONLY: Visual UI and interactive components only.",
        "Content Required: API endpoints documentation and assets provided by client.",
        "Free Deployment: Free live deployment setup on Vercel.",
      ],
    },
    {
      id: "figma-to-react",
      title: "Figma to React Conversion",
      shortDesc:
        "Transforming Figma & UI designs into pixel-perfect, clean, and responsive React components.",
      img: IMGFigma,
      icon: FaFigma,
      notes: [
        "FRONTEND DEVELOPMENT ONLY: Design implementation without custom server logic.",
        "Design Required: Client must provide original Figma design files.",
        "Free Deployment: Project preview deployment included.",
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.id}
            onClick={() => Service(service)}
            className="cursor-pointer group"
          >
            <div className="bg-white/80 dark:bg-[#121118]/80 backdrop-blur-xl p-6 rounded-[22px] border border-purple-300/50 dark:border-purple-500/20 shadow-xl hover:border-purple-500/60 dark:hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="overflow-hidden rounded-xl mb-2 h-60 border border-purple-200 dark:border-purple-900/30 relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-3 mb-1">
                  <Icon className="text-purple-600 dark:text-purple-400 text-2xl shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors line-clamp-1">
                    {t(service.title)}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-1">
                  {t(service.shortDesc)}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-purple-200 dark:border-purple-500/10 flex justify-between items-center text-purple-600 dark:text-purple-400 font-medium text-sm">
                <span>{t("Click for details")}</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  {t("→")}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainCard;