import { Bruno_Ace, Bruno_Ace_SC, DM_Sans } from "next/font/google";
const font_sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });
const font_sub_cap = Bruno_Ace_SC({ subsets: ["latin"], weight: ["400"] });
const font = DM_Sans({ subsets: ["latin"] });

const HeroCardRight = () => {
  return (
    <div className="bg-glassmorphic hero-card flex flex-col justify-center !border-b-0 !border-r-0 rounded-tl-3xl text-center px-4">
      <p
        className={`${font_sub.className} text-lg text-gray-400 font-extrabold`}
      >
        Organized By
      </p>
      <p
        className={`${font_sub_cap.className} text-2xl pt-2 text-gray-50 font-extrabold`}
      >
        Dept. of Computer Science
      </p>
      <p
        className={`${font.className} text-lg pt-4 leading-snug font-medium text-gray-300`}
      >
        Ramakrishna Mission Vivekananda Educational and Research Institute
        (RKMVERI)
      </p>
      <p
        className={`${font.className} text-lg pt-1 leading-snug font-thin text-gray-50`}
      >
        (Deemed-to-be-University as declared by Govt. of India under Section 3
        of UGC Act, 1956)
      </p>
    </div>
  );
};

export default HeroCardRight;
