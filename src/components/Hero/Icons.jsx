import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaJsSquare } from 'react-icons/fa';

const IconsMain = () => {
    const Icons = [
        {
            Icon: FaReact,
            position: 'top-10 lg:ltr:-right-15 lg:rtl:-left-15 ltr:-right-9 rtl:-left-9',
        },
        {
            Icon: FaJsSquare,
            position: 'top-1/3 lg:ltr:-left-15 lg:rtl:-right-15 ltr:-left-9 rtl:-right-9',
        },
        {
            Icon: SiTailwindcss,
            position: 'lg:top-85 top-65 lg:ltr:-right-15 lg:rtl:-left-15 ltr:-right-9 rtl:-left-9',
        }
    ]

    return (
        Icons.map(({ Icon, position }, index) => (
            <div className={`${position} lg:w-22 lg:h-22 md:w-17 md:h-17 w-15 h-15 transition-all duration-300 backdrop-blur-xl dark:hover:border-purple-400/60 hover:border-purple-600/70 bg-white/70 dark:bg-[#1e1e24] border flex justify-center items-center border-white/20 shadow-lg shadow-white/20 absolute z-30 rounded-2xl`} key={index}>
                <Icon className={`lg:text-7xl md:text-6xl text-5xl text-purple-600 dark:text-sky-400`} />
            </div>
        ))
    )
}

export default IconsMain