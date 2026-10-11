import { AiFillCode } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 dark:bg-[#0A0E17] py-10 md:py-12 px-4 sm:px-6 lg:px-12 transition-colors duration-300">
      <div className="flex justify-between gap-7 lg:gap-3 w-full text-[#B9CACB] lg:flex-row flex-col items-center">
        {/* upper */}
        <div className="lg:w-[35%] flex flex-col gap-4">
          {/* right */}
          <p className="text-white text-2xl">
            HT
            <span className="inline-block w-2 h-2 rounded-full me-3 ms-1 bg-[#00F0FF] shadow-[0_0_10px_2px_#00F0FF]"></span>
            Hasan Tuffaha{" "}
            <span className="text-[#B9CACB] text-base">(حسن تفاحة)</span>{" "}
          </p>
          <p className="text-sm">
            Frontend Architect & Systems Engineer crafting bespoke digital
            surfaces with pixel-perfection, reactive state architectures, and
            high-frequency luminescent micro-interactions.
          </p>

          <div className="flex gap-3 lg:flex-row flex-col lg:w-full w-fit text-sm">
            <a className="bg-[#1C1F29] cursor-pointer hover:bg-[#292c35] duration-300 rounded-sm outline-none px-4 py-1 flex gap-3 items-center">
              <AiFillCode />
              github.com/hasantuffaha0
            </a>
            <a className="bg-[#1C1F29] cursor-pointer hover:bg-[#292c35] duration-300 rounded-sm outline-none px-4 py-1 flex gap-3 items-center">
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="lg:w-[15%] w-full flex items-center gap-4 flex-col text-sm">
          {/* center */}
          <p className="text-[#00F0FF] w-full uppercase text-xl">navigation</p>
          <div className="flex w-full flex-col gap-2">
            <a href="" className="hover:text-[#00F0FF] duration-300">About Narrative</a>
            <a href="" className="hover:text-[#00F0FF] duration-300">Technical Stack</a>
            <a href="" className="hover:text-[#00F0FF] duration-300">Specialized Services</a>
            <a href="" className="hover:text-[#00F0FF] duration-300">Featured Case Studies</a>
            <a href="" className="hover:text-[#00F0FF] duration-300">Work Experience</a>
            <a href="" className="hover:text-[#00F0FF] duration-300">Contract & Inquiries</a>
          </div>
        </div>

        <div className="lg:w-[35%] w-full flex flex-col gap-4 text-sm">
          {/* left */}
          <p className="text-[#00F0FF] uppercase text-xl">Engineering Status</p>
          <div className="dark:bg-[#1C1F29] p-4 w-full flex flex-col gap-2">
            {/* container in left side */}
            <p className="flex items-center gap-3 text-lg text-white">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></span>
              </span>
              Available for Freelance & Contracts
            </p>
            <p className="">
              Open to worldwide remote positions, high-impact consulting
              engagements, and bespoke frontend engineering.
            </p>
            <p className="text-[#38BDF8]">
              Timezone: GMT+3 &nbsp; / &nbsp; Remote Ready
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-[#B9CACB] mt-15 md:flex-row flex-col items-center text-sm">
        {/* lower */}
        <p>© 2025 Hasan Tuffaha. All rights reserved</p>
        <div className="flex gap-4 items-center">
          <p className="text-[#38BDF8]">Hassan Tuffaha's Portfolio </p>
          <span className="w-1 h-1 bg-[#B9CACB] rounded-full"></span>
          <p>v2.4.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
