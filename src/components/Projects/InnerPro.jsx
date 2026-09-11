import { createPortal } from "react-dom";
import { FaTimes, FaInfoCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import InnerPhoto from "./InnerPhotoProjects";


const InnerPro = ({ Service, setService }) => {
  const { t } = useTranslation();
  const [imageOver, setImageOver] = useState(null);

  

  return (
    <>
      {Service &&
        createPortal(
          <div
            className="fixed select-none inset-0 z-99999 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-md p-4 animate-fadeIn overflow-y-auto"
            onClick={() => setService()}
          >
            <div
              className="relative max-w-7xl w-full max-h-[70vh] lg:max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121118] border border-purple-300 dark:border-purple-500/40 p-6 md:p-8 rounded-3xl shadow-2xl text-gray-900 dark:text-white transition-colors duration-300 my-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setService(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-white bg-purple-100 dark:bg-purple-900/40 hover:bg-purple-600 dark:hover:bg-purple-600 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10"
              >
                <FaTimes />
              </button>
              <div className="flex flex-col items-center gap-10">
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                  {t(Service.title)}
                </p>
                <div className="relative mb-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                  {Service.Photos?.map((imgSrc, index) => (
                    <img
                      src={imgSrc}
                      alt={`${Service.title} - ${index + 1}`}
                      key={index}
                      onClick={() => setImageOver(imgSrc)}
                      className="w-full h-52 object-cover rounded-2xl border-2 border-purple-300/50 dark:border-purple-500/20 shadow-xl hover:border-purple-500/60 dark:hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:opacity-90"
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {t(Service.shortDesc)}
                  </p>
                </div>
              </div>

              <hr className="my-6 border-purple-200 dark:border-purple-500/20" />

              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <FaInfoCircle className="text-purple-600 dark:text-purple-400" />
                  {t("Notes")}
                </h4>
                <ul className="space-y-2 list-disc list-inside text-xs md:text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-black/30 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                  {Service.notes.map((note, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {t(note)}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={Service.HrefTo}
                target="_blanck"
                onClick={() => setService(null)}
                className="w-full inline-flex justify-center items-center gap-2 py-3.5 px-6 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-lg shadow-purple-600/30 text-center cursor-pointer"
              >
                <button>{t("Live demo")}</button>
                <span>{t("→")}</span>
              </a>
            </div>
          </div>,
          document.body,
        )}
      <InnerPhoto photo={imageOver} setPhoto={setImageOver} />
    </>
  );
};

export default InnerPro;