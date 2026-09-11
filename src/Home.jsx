import MainNav from "./components/Navbar/MainNavBar";
import MainHero from "./components/Hero/MainHero";
import MainAbout from "./components/About/MainAbout";
import Back from "./components/Background/Backgrounds";
import Row from "./components/Background/Rows";
import Mainskills from './components/Skills/MainSkills';
import MainServ from './components/Services/MainServices'

function Home() {
  return (
    <div className="select-none scroll-smooth overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        <Back />
        <div className="relative">
          <MainNav />
          <MainHero />
        </div>
        <Row />
      </div>

      <div id="about" className="min-h-screen bg-slate-100 dark:bg-black relative z-10">
        <MainAbout />
      </div>

      <div id="about" className="min-h-screen bg-slate-100 dark:bg-black relative z-10">
        <Mainskills />
      </div>

      <div id="about" className="min-h-screen bg-slate-100 dark:bg-black relative z-10">
        <MainServ />
      </div>
      
    </div>
  );
}

export default Home;