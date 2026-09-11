import { useState } from "react";
import MobileNav from './MobileNavLinks';

const MobileElementNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center sm:hidden relative flex-col items-center">
      <div className="h-full flex justify-center items-center px-4">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex justify-center flex-col gap-2 p-2 focus:outline-none cursor-pointer"
        >
          <span
            className={`w-8 h-0.5 bg-black dark:bg-white rounded-full transition-all duration-300 origin-center ${
              open ? "translate-y-2.5 rotate-45" : ""
            }`}
          />

          <span
            className={`w-8 h-0.5 bg-black dark:bg-white rounded-full transition-all duration-300 ${
              open ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          />

          <span
            className={`w-8 z-10 h-0.5 bg-black dark:bg-white rounded-full transition-all duration-300 origin-center ${
              open ? "-translate-y-2.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <MobileNav open={open}/>
    </div>
  );
};

export default MobileElementNav;