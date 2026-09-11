import { useState, useEffect } from "react";
import BackgroundContainer from "./Background";

const Back = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isDarkMode ? (
        <BackgroundContainer className="absolute bg-[radial-gradient(ellipse_at_50%_35%,#0a0612_0%,#010004_60%,#000000_100%)] z-0 inset-0 w-full h-full" />
      ) : (
        <div className="absolute bg-slate-100 z-0 inset-0 w-full h-full"></div>
      )}
    </>
  );
};

export default Back;
