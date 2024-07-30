import Countdown from "./countdown";
import { Bruno_Ace, Bruno_Ace_SC } from "next/font/google";
const font_sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });
const font_sub_cap = Bruno_Ace_SC({ subsets: ["latin"], weight: ["400"] });

const HeroCardLeft = () => {
  return (
      <div className="hero-card-left bg-glassmorphic hero-card flex flex-col justify-center !border-b-0 !border-l-0 rounded-tr-3xl text-center px-4">
        <p
          className={`${font_sub.className} text-[clamp(6px,3vw,16px)] text-gray-400 font-extrabold`}
        >
          Event Date
        </p>
        <p
          className={`${font_sub_cap.className} text-[clamp(10px,4vw,24px)] pt-2 pb-6 text-gray-50 font-extrabold`}
        >
          13-14<sup>th</sup> January, 2025
        </p>
        <Countdown />
      </div>
  );
};

export default HeroCardLeft;
