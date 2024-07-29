import Countdown from "@/components/countdown";
import { Logos } from "@/components/logos";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Bruno_Ace, Bruno_Ace_SC, Bungee, DM_Sans } from "next/font/google";
const font_main = Bungee({ subsets: ["latin"], weight: ["400"] });
const font_sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });
const font_sub_cap = Bruno_Ace_SC({ subsets: ["latin"], weight: ["400"] });
const font = DM_Sans({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className="hero w-screen h-screen grid grid-rows-[80px_1fr_280px]">
      <Navbar />
      <div className="w-full flex items-center justify-between px-6 pb-8">
        <Logos.Perceptron className="w-[15vw]" />
        <div className="flex flex-col text-center">
          <p
            className={`${font_sub_cap.className} text-4xl text-gray-50 font-extrabold whitespace-nowrap`}
          >
            The techfest at RKMVERI
          </p>
          <p
            className={`${font_main.className} hero-text text-8xl text-gray-50 font-extrabold whitespace-nowrap`}
          >
            PERCEPTRON 3.0
          </p>
        </div>
        <Logos.RKM className="w-[12vw]" />
      </div>
      <div className="grid grid-cols-[500px_1fr_500px]">
        <div className="bg-glassmorphic hero-card flex flex-col justify-center !border-b-0 !border-l-0 rounded-tr-3xl text-center px-4">
          <p className={`${font_sub.className} text-lg text-gray-400 font-extrabold`}>Event Date</p>
          <p className={`${font_sub_cap.className} text-2xl pt-2 pb-6 text-gray-50 font-extrabold`}>13-14<sup>th</sup> January, 2025</p>
          <Countdown />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button className={`${font_sub.className} translate-y-[-180%]`} variant={"heroCTA"} size={"xl"}>Register</Button>
          <Button className={`${font_sub.className} rounded-full w-28 h-28 px-0`} variant={"heroCTA"} size={"xl"}>
            <Play size={48} />
          </Button>
        </div>
        <div className="bg-glassmorphic hero-card flex flex-col justify-center !border-b-0 !border-r-0 rounded-tl-3xl text-center px-4">
          <p className={`${font_sub.className} text-lg text-gray-400 font-extrabold`}>Organized By</p>
          <p className={`${font_sub_cap.className} text-2xl pt-2 text-gray-50 font-extrabold`}>Dept. of Computer Science</p>
          <p className={`${font.className} text-lg pt-4 leading-snug font-medium text-gray-300`}>Ramakrishna Mission Vivekananda Educational and Research Institute (RKMVERI)</p>
          <p className={`${font.className} text-lg pt-1 leading-snug font-thin text-gray-50`}>(Deemed-to-be-University as declared by Govt. of India under Section 3 of UGC Act, 1956)</p>
        </div>
      </div>
    </main>
  );
}
