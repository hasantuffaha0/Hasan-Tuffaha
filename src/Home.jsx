import MainNav from "./components/Navbar/MainNavBar";
import MainHero from "./components/Hero/MainHero";
import MainAbout from "./components/About/MainAbout";
import Back from "./components/Background/Backgrounds";
import Row from "./components/Background/Rows";
import Mainskills from "./components/Skills/MainSkills";
import MainServ from "./components/Services/MainServices";
import MainPro from "./components/Projects/MainProjects";
import MainHire from "./components/Hire/MainHire";
import Footer from "./components/Footer/MainFooter";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="select-none scroll-smooth overflow-x-hidden">
      <div
        id="hero"
        className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      >
        <Back />
        <div className="relative">
          <MainNav />
          <MainHero />
        </div>
        <Row />
      </div>

      <div
        id="about"
        className="min-h-screen bg-slate-100 dark:bg-black relative z-10"
      >
        <MainAbout />
      </div>

      <div
        id="skills"
        className="min-h-screen bg-slate-100 dark:bg-black relative z-10"
      >
        <Mainskills />
      </div>

      <div
        id="projects"
        className="min-h-screen bg-slate-100 dark:bg-black relative z-10"
      >
        <MainPro />
      </div>

      <div
        id="services"
        className="min-h-screen bg-slate-100 dark:bg-black relative z-10"
      >
        <MainServ />
      </div>

      <div
        id="hire"
        className="min-h-screen bg-slate-100 dark:bg-black relative z-10"
      >
        <MainHire />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
