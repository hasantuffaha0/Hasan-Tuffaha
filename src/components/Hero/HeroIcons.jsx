import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";

const Apps = [
    {
        Title: FaLinkedin,
        style: 'hover:text-[#0A66C2]',
        href: 'https://www.linkedin.com/in/hasantuffaha/'
    },
    {
        Title: FaGithub,
        style: 'hover:text-gray-400',
        href: 'https://github.com/hasantuffaha0'
    },
    {
        Title: FaWhatsapp,
        style: 'hover:text-[#25D366]',
        href: 'https://wa.me/201011308020'
    }
]

const IconHero = () => {
  return (
    <div className="flex items-center gap-4 mt-8 relative z-20">
      {Apps.map(({ Title, style, href }, index) => (
        <a
          key={index}
          target="_blank"
          rel="noreferrer"
          href={href}
          className={`${style} w-11 h-11 flex items-center justify-center rounded-full bg-white/70 dark:bg-[#1e1e24]/80 backdrop-blur-xl border border-purple-400/80 dark:border-white/20 text-purple-600 dark:text-white text-lg transition-all duration-300 hover:scale-110 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]`}
        >
          <Title />
        </a>
      ))}
    </div>
  );
};

export default IconHero