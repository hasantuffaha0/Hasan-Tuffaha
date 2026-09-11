import { useState } from "react";

const NavItems = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hidden sm:flex items-center gap-6">
      {items.map((item, index) => (
        <a
          className={`text-sm font-medium transition-all duration-300 relative pb-1 ${
            activeIndex == index
              ? "dark:text-white text-gray-900 scale-105"
              : "dark:text-gray-400 text-purple-700 dark:hover:text-white hover:text-gray-900 hover:scale-105"
          }`}
          onClick={() => setActiveIndex(index)}
          key={index}
          href={item.href}
        >
          {item.label}
          {activeIndex == index && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-purple-400 dark:to-fuchsia-300 to-fuchsia-900 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          )}
        </a>
      ))}
    </div>
  );
};

export default NavItems;