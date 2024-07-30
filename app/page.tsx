import HeroCardLeft from "@/components/hero-card-left";
import HeroCardRight from "@/components/hero-card-right";
import HeroCTA from "@/components/hero-cta";
import HeroTitle from "@/components/hero-title";
import { Logos } from "@/components/logos";
import Navbar from "@/components/navbar";
import { Menu } from "lucide-react";



export default function Home() {
  return (
    <main className="hero w-screen h-screen grid grid-rows-[80px_1fr_60dvh] lg:grid-rows-[80px_1fr_50dvh] xl:grid-rows-[80px_1fr_280px]">
      <Navbar />
      <Menu size={32} className="text-gray-50 xl:hidden ml-auto mr-6 my-6" />
      <div className="w-full flex items-center justify-between xl:px-6 xl:pb-8">
        <Logos.Perceptron className="w-[15vw]" />
        <HeroTitle />
        <Logos.RKM className="w-[12vw]" />
      </div>
      <div className="grid hero-cards-grid">
        <HeroCardLeft />
        <HeroCTA />
        <HeroCardRight />
      </div>
    </main>
  );
}
