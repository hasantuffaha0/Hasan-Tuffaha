import MainHasan from "./PhotoMain";
import HeroText from "./Hero";

const MainHero = () => {
  return (
    <div
      className="relative w-full max-w-[1800px] mx-auto top-5 md:top-0 text-black flex flex-col md:flex-row items-center justify-between sm:ps-10 sm:pe-15 md:pe-20 lg:ps-15 lg:pe-30 xl:ps-20 xl:pe-40 pt-24 md:pt-20"
      style={{ minHeight: "calc(100vh - 2rem)" }}
    >
      <HeroText />
      <MainHasan />
    </div>
  );
};

export default MainHero;