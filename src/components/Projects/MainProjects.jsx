import { useState, useEffect } from "react";
import MainCard from "./CardPro";
import TitleSections from "../About/titles";
import { useTranslation } from "react-i18next";
import InnerPro from "./InnerPro";

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
    <section className="md:py-16 px-3 max-w-7xl mx-auto transition-colors duration-300">
      <div data-aos="zoom-in">
        <TitleSections
          data-aos="zoom-in"
          prim={t("FEATURED WORK")}
          secon={t("Bringing concepts to life through code")}
          third={t(
            "Showcasing innovative, high-performance web applications built to solve real-world problems and deliver exceptional user experiences.",
          )}
        />
      </div>
      <MainCard Service={setSelectedService} />
      <InnerPro Service={selectedService} setService={setSelectedService} />
    </section>
  );
};

export default MainPro;
