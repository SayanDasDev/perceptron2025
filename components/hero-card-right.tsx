import { Bruno_Ace, Bruno_Ace_SC, DM_Sans } from "next/font/google";
const font_sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });
const font_sub_cap = Bruno_Ace_SC({ subsets: ["latin"], weight: ["400"] });
const font = DM_Sans({ subsets: ["latin"] });

const HeroCardRight = () => {
  return (
    <div className="hero-card-right bg-glassmorphic text-center px-4 hero-card flex flex-col justify-center !border-b-0 max-xl:!border-l-0 max-md:!border-t-0 !border-r-0 md:rounded-tr-3xl xl:rounded-tr-none xl:rounded-tl-3xl  ">
      <p
        className={`${font_sub.className} text-[clamp(6px,3vw,16px)] text-gray-400 font-extrabold`}
      >
        Organized By
      </p>
      <p
        className={`${font_sub_cap.className} text-[clamp(10px,4vw,24px)] pt-2 text-gray-50 font-extrabold`}
      >
        Dept. of Computer Science
      </p>
      <p
        className={`${font.className} text-[clamp(6px,3vw,16px)] pt-4 leading-snug font-medium text-gray-300`}
      >
        Ramakrishna Mission Vivekananda Educational and Research Institute
        (RKMVERI)
      </p>
      <p
        className={`${font.className} text-[clamp(6px,3vw,16px)] pt-1 leading-snug font-thin text-gray-50`}
      >
        (Deemed-to-be-University as declared by Govt. of India under Section 3
        of UGC Act, 1956)
      </p>
    </div>
  );
};

export default HeroCardRight;
