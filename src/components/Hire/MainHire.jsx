import TitleSections from "../About/titles";
import { useTranslation } from "react-i18next";
import MessageIMG from "../../assets/Mailbox-amico.png";
import MainForm from "./MainForm";

const MainHire = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto transition-colors duration-300">
      <div data-aos="zoom-in">
        <TitleSections
          prim={t("LET'S CONNECT")}
          secon={t("Have a project in mind? Let's talk")}
          third={t(
            "Whether you're looking to scale an existing platform or build a cutting-edge web experience from scratch, my inbox is always open.",
          )}
        />
      </div>

      <div className="mt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="fade-right"
          >
            <img
              className="w-full max-w-md h-auto rtl:-scale-x-100 object-contain"
              src={MessageIMG}
              alt={t("Message illustration")}
            />
          </div>
          <MainForm />
        </div>
      </div>
    </section>
  );
};

export default MainHire;
