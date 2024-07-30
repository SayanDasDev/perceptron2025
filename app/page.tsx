import HeroCardLeft from "@/components/hero-card-left";
import HeroCardRight from "@/components/hero-card-right";
import HeroCTA from "@/components/hero-cta";
import { Logos } from "@/components/logos";
import Navbar from "@/components/navbar";
import { Bruno_Ace_SC, Bungee } from "next/font/google";
const font_main = Bungee({ subsets: ["latin"], weight: ["400"] });
const font_sub_cap = Bruno_Ace_SC({ subsets: ["latin"], weight: ["400"] });


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
        <HeroCardLeft />
        <HeroCTA />
        <HeroCardRight />
      </div>
    </main>
  );
}
