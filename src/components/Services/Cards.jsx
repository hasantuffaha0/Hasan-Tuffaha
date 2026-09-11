import IMGweb from "../../assets/web.jpg";
import IMGFigma from "../../assets/Ferramenta grátis para design de sites e produtos _ Figma.jpg";
import Portfolio from "../../assets/Graphic Design Portfolio Projects __ Photos, videos, logos, illustrations and branding.jpg";
import Landing from "../../assets/Landing.jpg";
import { useTranslation } from "react-i18next";
import {
  FaCode,
  FaFigma,
  FaTag,
  FaRocket,
  FaUserTie,
} from "react-icons/fa";

const MainCard = ({ Service }) => {
  const { t } = useTranslation()
  const services = [
    {
      id: "landing-page",
      title: "Landing Page Development",
      shortDesc:
        "A fast, modern single-page website to showcase your business, products, or personal brand effectively.",
      price: "$60",
      img: Landing,
      icon: FaRocket,
      whatYouGet: [
        {
          title: "Full Ownership (Source Code)",
          desc: "You receive all the project files, giving you complete ownership of your website.",
        },
        {
          title: "Mobile-Responsive Design",
          desc: "The layout adapts seamlessly to look perfect on mobile phones, tablets, and desktop screens.",
        },
        {
          title: "High Performance & Animations",
          desc: "Fast loading times paired with smooth, modern scroll animations for a premium feel.",
        },
      ],
      addons: [
        {
          name: "Dark Theme Toggle",
          price: "+$5",
          desc: "A toggle button that allows visitors to switch between light and dark layouts.",
        },
        {
          name: "Bilingual Support (AR / EN)",
          price: "+$5",
          desc: "Full support for both Arabic and English, automatically adjusting layout direction.",
        },
      ],
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
      price: "$80",
      img: Portfolio,
      icon: FaUserTie,
      whatYouGet: [
        {
          title: "Interactive Showcase",
          desc: "Clean component architecture featuring dynamic project galleries and interactive cards.",
        },
        {
          title: "Fully Responsive UI",
          desc: "Pixel-perfect layout designed to adapt effortlessly across all screen sizes.",
        },
        {
          title: "Full Source Code Access",
          desc: "Complete ownership of the frontend codebase for future enhancements.",
        },
      ],
      addons: [
        {
          name: "Dark Theme Toggle",
          price: "+$5",
          desc: "Smooth theme switcher between light and dark modes.",
        },
        {
          name: "Bilingual Support (AR / EN)",
          price: "+$5",
          desc: "Multi-language setup with RTL/LTR layout handling.",
        },
      ],
      notes: [
        "FRONTEND DEVELOPMENT ONLY: No dynamic database backend included.",
        "Content Required: Client provides personal biography, resume details, and project media.",
        "Free Deployment: Assistance with deployment on Vercel or GitHub Pages.",
      ],
    },
    {
      id: "web-app",
      title: "Custom Web Application Development",
      shortDesc:
        "Building fast, responsive, and dynamic web applications using React.js and modern tools.",
      price: "$150",
      img: IMGweb,
      icon: FaCode,
      whatYouGet: [
        {
          title: "Scalable Architecture",
          desc: "High-performance front-end architecture built using React.js and Vite.",
        },
        {
          title: "Complex State Management",
          desc: "Robust interactive workflows, reusable components, and clean code structure.",
        },
        {
          title: "Full Source Code Delivery",
          desc: "100% ownership of the repository and project setup files.",
        },
      ],
      addons: [
        {
          name: "Dark Theme Toggle",
          price: "+$5",
          desc: "Toggle between dark and light appearance seamlessly.",
        },
        {
          name: "Bilingual Support (AR / EN)",
          price: "+$5",
          desc: "Internationalization (i18n) setup for bilingual UI.",
        },
      ],
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
      price: "$80",
      img: IMGFigma,
      icon: FaFigma,
      whatYouGet: [
        {
          title: "Pixel-Perfect Implementation",
          desc: "100% accurate conversion matching your exact Figma design specifications.",
        },
        {
          title: "Tailwind CSS Styling",
          desc: "Clean, reusable, and maintainable styles using utility-first Tailwind CSS.",
        },
        {
          title: "Source Code Handover",
          desc: "Well-organized React component directory ready for integration.",
        },
      ],
      addons: [
        {
          name: "Dark Theme Toggle",
          price: "+$5",
          desc: "Add light and dark theme styling variables.",
        },
        {
          name: "Bilingual Support (AR / EN)",
          price: "+$5",
          desc: "Configure RTL support for Arabic layout translations.",
        },
      ],
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
                <div className="overflow-hidden rounded-xl mb-4 h-48 border border-purple-200 dark:border-purple-900/30 relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-purple-600/90 backdrop-blur-md text-white font-bold text-sm px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <FaTag className="text-xs" /> {service.price}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <Icon className="text-purple-600 dark:text-purple-400 text-2xl shrink-0" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors line-clamp-1">
                    {t(service.title)}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-1">
                  {t(service.shortDesc)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-200 dark:border-purple-500/10 flex justify-between items-center text-purple-600 dark:text-purple-400 font-medium text-sm">
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