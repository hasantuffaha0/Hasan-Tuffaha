import { useState, useEffect } from "react";
import MainCard from './CardPro';
import TitleSections from "../About/Titles";
import { useTranslation } from "react-i18next";
import InnerPro from './InnerPro';

const MainPro = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto transition-colors duration-300">
      <TitleSections
        prim={t("FEATURED WORK")}
        secon={t("Bringing concepts to life through code")}
        third={t(
          "Showcasing innovative, high-performance web applications built to solve real-world problems and deliver exceptional user experiences.",
        )}
      />
      <MainCard Service={setSelectedService} />
      <InnerPro Service={selectedService} setService={setSelectedService} />
    </section>
  );
};

export default MainPro;
