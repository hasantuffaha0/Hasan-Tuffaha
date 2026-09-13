import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";

const ModsBChange = () => {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="p-2 rounded-full dark:hover:bg-white/10 hover:bg-gray-400/40 transition-colors"
      aria-label="Toggle Theme"
    >
      <MdLightMode className="hidden dark:block hover:rotate-90 duration-300 text-md md:text-2xl text-purple-400" />
      <MdDarkMode className="dark:hidden block duration-300 text-xl md:text-2xl text-purple-800" />
    </button>
  );
};

export default ModsBChange;
