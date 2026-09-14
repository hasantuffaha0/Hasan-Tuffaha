import { useState, useEffect } from "react";
import MainCard from './Cards';
import TitleSections from "../About/titles";
import { useTranslation } from "react-i18next";
import InnerP from './InnerPage';

const MainServ = () => {
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
    <section className="py-16 px-3 max-w-6xl mx-auto transition-colors duration-300">
      <div data-aos="zoom-in">

      <TitleSections
        prim={t("WHAT I OFFER")}
        secon={t("High-quality web development services")}
        third={t(
          "Transforming ideas into modern, scalable, and responsive web applications tailored to elevate your digital presence.",
        )}
      />
      </div>
      <MainCard Service={setSelectedService} />
      <InnerP Service={selectedService} setService={setSelectedService} />
    </section>
  );
};

export default MainServ;
