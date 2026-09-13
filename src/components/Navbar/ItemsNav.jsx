import { useEffect, useState } from "react";

const NavItems = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href || item.Href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="hidden sm:flex items-center gap-6">
      {items.map((item, index) => {
        const hrefValue = item.href || item.Href;
        return (
          <a
            className={`md:text-sm text-[11px] font-medium transition-all duration-300 relative pb-1 ${
              activeIndex === index
                ? "dark:text-white text-gray-900 scale-105"
                : "dark:text-gray-400 text-purple-700 dark:hover:text-white hover:text-gray-900 hover:scale-105"
            }`}
            key={index}
            href={hrefValue}
            onClick={() => setActiveIndex(index)}
          >
            {item.label}

            {activeIndex === index && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-purple-400 dark:to-fuchsia-300 to-fuchsia-900 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            )}
          </a>
        );
      })}
    </div>
  );
};

export default NavItems;