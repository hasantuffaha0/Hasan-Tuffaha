import { useState } from "react";
import { useTranslation } from "react-i18next";
import TitleSections from "../About/titles";
import MagicBento from "../About/MagicBento";
import SkillsContent from "./Skills";

const Mainskills = () => {
  const { t } = useTranslation();
  const [cat, setCat] = useState("All Skills");

  const categories = [
    { id: "All Skills", label: t("All Skills") },
    { id: "Frontend Skills", label: t("Frontend Skills") },
    { id: "Tools", label: t("Tools") },
    { id: "Languages", label: t("Languages") },
  ];

  const cardsDatas = SkillsContent({ cat });

  return (
    <section className="min-h-screen flex items-center flex-col text-foreground py-4 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-4" data-aos="zoom-in">
        <TitleSections
          prim={t("My Technical Expertise")}
          secon={t("My programming skills and capabilities")}
          third={t(
            "An overview of the technologies and tools I use to develop modern, fast, and highly efficient web applications.",
          )}
        />
      </div>

      <div className="w-[110%] md:w-[90vw]" >
        {/* //data-aos="fade-right" */}
        <div className="h-fit p-7 flex gap-3 md:gap-6 flex-col">
          <div className="flex md:gap-6 gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCat(category.id)}
                className={`py-2 px-3 md:py-3 md:px-4 rounded-xl cursor-pointer backdrop-blur-xl border shadow-md transition-all duration-300 ${
                  cat === category.id
                    ? "bg-purple-600 text-white border-purple-400 shadow-purple-500/30"
                    : "bg-white/70 dark:text-purple-200 text-purple-500 dark:bg-[#121118]/80 border-purple-400/30 dark:border-purple-500/10 hover:border-purple-500/60"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="" data-aos="fade-up">
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
              cardData={cardsDatas}
              StylingLine=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainskills;
