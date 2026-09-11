import { createPortal } from "react-dom";
import {
  FaTimes,
  FaCheckCircle,
  FaPlusCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const InnerP = ({ Service, setService }) => {
  const { t } = useTranslation();
  return (
    <>
      {Service &&
        createPortal(
          <div
            className="fixed select-none inset-0 z-99999 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-md p-4 animate-fadeIn overflow-y-auto"
            onClick={() => setService(null)}
          >
            <div
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121118] border border-purple-300 dark:border-purple-500/40 p-6 md:p-8 rounded-3xl shadow-2xl text-gray-900 dark:text-white transition-colors duration-300 my-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setService(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-white bg-purple-100 dark:bg-purple-900/40 hover:bg-purple-600 dark:hover:bg-purple-600 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10"
              >
                <FaTimes />
              </button>

              <div className="relative mb-6">
                <img
                  src={Service.img}
                  alt={Service.title}
                  className="w-full h-52 object-cover rounded-2xl border border-purple-200 dark:border-purple-500/20"
                />
              </div>

              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                    {t(Service.title)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {t(Service.shortDesc)}
                  </p>
                </div>
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/60 px-4 py-1.5 rounded-2xl border border-purple-300 dark:border-purple-500/30 shrink-0">
                  {Service.price}
                </span>
              </div>

              <hr className="my-6 border-purple-200 dark:border-purple-500/20" />

              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-purple-600 dark:text-purple-400" />
                  {t("What you get")}
                </h4>
                <div className="space-y-4">
                  {Service.whatYouGet.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-purple-50/50 dark:bg-purple-950/20 p-4 rounded-xl border border-purple-200/60 dark:border-purple-500/10"
                    >
                      <h5 className="font-semibold text-purple-700 dark:text-purple-300 text-sm md:text-base">
                        {t(item.title)}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">
                        {t(item.desc)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FaPlusCircle className="text-purple-600 dark:text-purple-400" />
                  {t("Addons")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Service.addons.map((addon, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-purple-200 dark:border-purple-500/20 bg-white/50 dark:bg-[#181622] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center gap-2 mb-1">
                          <span className="font-bold text-xs md:text-sm text-gray-800 dark:text-gray-200">
                            {t(addon.name)}
                          </span>
                          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50 px-2 py-0.5 rounded-md">
                            {addon.price}
                          </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">
                          {t(addon.desc)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

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
                href="#contact"
                onClick={() => setService(null)}
                className="w-full inline-flex justify-center items-center gap-2 py-3.5 px-6 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-lg shadow-purple-600/30 text-center cursor-pointer"
              >
                <span>{t("Order Now")}</span>
                <span>{t("→")}</span>
              </a>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default InnerP;
