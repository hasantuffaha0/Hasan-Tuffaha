import { useState } from "react";
import { createPortal } from "react-dom";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const InnerPhoto = ({ photo, setPhoto, project }) => {
  const photosList = project?.Photos || (photo ? [photo] : []);
  const initialIndex =
    photosList.indexOf(photo) !== -1 ? photosList.indexOf(photo) : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!photo) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photosList.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + photosList.length) % photosList.length,
    );
  };

  return createPortal(
    <div
      className="fixed inset-0 z-99999 flex items-center justify-center bg-black/70 dark:bg-black/85 backdrop-blur-md p-4 animate-fadeIn select-none overflow-y-auto"
      onClick={() => setPhoto(null)}
      data-aos="fade"
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-white dark:bg-[#121118] border border-purple-300 dark:border-purple-500/40 p-6 md:p-8 rounded-3xl shadow-2xl text-gray-900 dark:text-white transition-colors duration-300 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setPhoto(null)}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-white bg-purple-100 dark:bg-purple-900/40 hover:bg-purple-600 dark:hover:bg-purple-600 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors z-20 shadow-sm"
        >
          <FaTimes />
        </button>

        <div className="relative flex items-center justify-center my-auto min-h-[50vh]">
          {photosList.length > 1 && (
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-2 z-10 flex items-center justify-center w-10 h-10 bg-black/40 hover:bg-purple-600 text-white rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-md"
            >
              <FaChevronLeft />
            </button>
          )}

          <div className="flex items-center justify-center overflow-hidden rounded-2xl max-h-[70vh]">
            <img
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              src={photosList[currentIndex]}
              alt={`Project view ${currentIndex + 1}`}
            />
          </div>

          {photosList.length > 1 && (
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-2 z-10 flex items-center justify-center w-10 h-10 bg-black/40 hover:bg-purple-600 text-white rounded-full backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-md"
            >
              <FaChevronRight />
            </button>
          )}
        </div>

        {photosList.length > 1 && (
          <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
            {currentIndex + 1} / {photosList.length}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default InnerPhoto;
