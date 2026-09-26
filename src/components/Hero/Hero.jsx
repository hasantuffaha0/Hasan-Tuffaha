import Available from "./FreeLanceAvailable";
import ButtonNav from "../Navbar/ButtonHire";
import IconHero from "./HeroIcons";
import { useTranslation } from "react-i18next";

const HeroText = () => {
  const { t } = useTranslation();
  const buttons = [
    {
      write: t("View Projects"),
      style:
        "lg:px-8 md:px-6.5 min-[840px]:px-7 px-6 py-3 rounded-xl font-medium text-white bg-linear-to-r from-purple-600 to-purple-900 dark:from-purple-600 dark:to-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 hover:from-purple-600 hover:to-purple-800 dark:hover:from-purple-500 dark:hover:to-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105 active:scale-95 cursor-pointer",
      Href: "#projects",
    },
    {
      write: t("Download CV"),
      style:
        "lg:px-8 md:px-6.5 min-[840px]:px-7 px-6 py-3 rounded-xl font-medium text-purple-800 dark:text-purple-300 bg-transparent border-2 border-purple-700/80 dark:border-purple-500/60 transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-900 dark:hover:border-purple-400 hover:text-gray-700 dark:hover:text-white hover:scale-105 active:scale-95 cursor-pointer",
      Href: "https://doc-0c-70-docstext.googleusercontent.com/export/12o0cpb8u3srg1uehmkvbov78s/h50635rsj3jgm4pk0f0qhabg7o/1790449725000/110755388642704907337/110755388642704907337/1m3_rYlx_R47ace1q508VcZcyRJNB9Q9KcNR8lUxodUk?format=docx&dat=AEnQ8CedPNv1bl44iB_xrJcjwn-pg4rPRJ64EsU-Spqg-ETz1tI8t1CJNsA-_GyYeZfchp7tyIeBbYYq8DraiTMcpUEOe3Os3OnqwcZZtXekex28BHZye9TIii047Ez2meqXcuqggOaxxOn5S0Wa5QxkdgOAktSvTavKAbm2O8RuiMAV0w_7JHs3eQHPrJAKw_a24-PskKA8EhVPCX96sMXtIKsilgJ-G9DiAjlwHuVDoWcmw-eg04ktJyRZEWnEYh1p-pAUnmt4gGqdnthtz9Ipdn9rM1Q5xe5TqyJeaoo9kF_touSPgZRuswXtiXQMaLyTc0OmqwD2h3l83982yi_swVyIwNn_gStzKpEjpFZlzunwDi_dFaZcRq_HHLOOkAOgT7qQ2bHEdeADYhk9xRx88CyB8ac_nD_YMVLbTPrG-drGV9utYs7bE-n3Fp1Qm6xamrZ4OUqLzB3lKwj15Pjh182DKLj4XaIg7DPjYv8QcRjv-E2S_EjWTCuwwjwt-oMup6iJ9ZJ3Ok4ntRfAhP0CA6r76-797RHAAWQKcCVdQHNmORXK-BzoH1H1kLBJPBcumyCbRzyDm8mZjjzU50Z-V0aS4JFcqaNO6OdS53DSzWUtCaTVT8CT8aN_kpzH_vfKAMVqsRONqPz8Wtn34bE3SU6GHNIiqBLmQ0v_VLfMVdv1QT1IlV4mo_x89JtkgN4hG5FP4QyaH2pDQwqDEFt6uedIUgTbh6pfHvzzPShkxEv5z8osXeeXcOOxo4vfcsHVciiMzKdGjkVtqWBd7i83ID1AokvAxOxqyiI5egLJvL-7VpeBkn2NTVoFxG-iQ6FeDZwk_d1xA76cT5g1RzxC7whyKV8wu5YoAUCMv1vCS_NF3TAMSFCYX40sDBKXMEcw9ANOxA_doAmUFqiA4ROmBoWrpkj2cBM-UQMzHO6JIvjWEx3vM7DrhQuRxMxdzkD6dAVBci65IORCFv96ow2Ifz0XzAheGFd4SRSgZMBiwuMIDr8EMRv2li2_AyRdIONb",
    },
  ];

  return (
    <div
      className="flex flex-col items-center md:items-start"
      data-aos="fade-right"
    >
      <Available StyleAttr="-translate-y-5" />
      <div className="flex justify-center items-center md:items-start flex-col gap-1">
        <p className="dark:bg-linear-to-r text-gray-600 text-sm sm:text-lg md:text-xl lg:text-2xl dark:from-purple-400 dark:to-purple-200 dark:bg-clip-text dark:text-transparent font-medium">
          {t("Hi, I'm")}
        </p>
        <p className="dark:text-white text-transparent pb-2 bg-linear-to-r from-purple-800 to-fuchsia-600 bg-clip-text text-4xl sm:text-[42px] md:text-5xl min-[840px]:text-[54px] lg:text-[66px] xl:text-7xl font-bold my-1 tracking-tight">
          {t("Hasan Tuffaha")}
        </p>
        <p className="dark:bg-linear-to-r text-gray-600 text-xl sm:text-[22px] md:text-2xl lg:text-[27px] xl:text-3xl dark:from-purple-400 dark:to-fuchsia-300 dark:bg-clip-text dark:text-transparent font-semibold mb-2">
          {t("Frontend Developer")}
        </p>
        <p className="dark:text-gray-200 text-transparent bg-linear-to-r from-purple-900 to-fuchsia-900 bg-clip-text max-sm:text-center my-2 text-xs lg:text-[13px] xl:text-sm w-60 sm:w-65 md:w-75 lg:w-80 leading-relaxed">
          {t(
            "Building fast, modern, and beautiful web experiences using React and Tailwind CSS.",
          )}
        </p>

        <div className="flex items-center gap-3 md:gap-6 mt-3 md:mt-7">
          {buttons.map(({ write, Href, style }) => (
            <ButtonNav
              Href={Href}
              write={write}
              key={write}
              className={`${style} cursor-pointer rounded-full text-[14px] md:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-purple-500/30`}
            />
          ))}
        </div>
      </div>
      <IconHero />
    </div>
  );
};

export default HeroText;
