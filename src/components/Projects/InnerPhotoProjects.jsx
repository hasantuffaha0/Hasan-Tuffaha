import { createPortal } from "react-dom";
// import { useState } from "react";

const InnerPhoto = ({ photo, setPhoto }) => {
  return (
    <>
      {photo &&
        createPortal(
          <div
            className="fixed select-none inset-0 z-99999 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-md p-4 animate-fadeIn overflow-y-auto"
            onClick={() => setPhoto(null)}
          >
            <div
              className="relative max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121118] border border-purple-300 dark:border-purple-500/40 p-6 md:p-8 rounded-3xl shadow-2xl text-gray-900 dark:text-white transition-colors duration-300 my-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <p>Alaa Metnak</p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default InnerPhoto;
