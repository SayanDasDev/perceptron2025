"use client";
import Events from "@/components/events";
import HeroCardLeft from "@/components/hero-card-left";
import HeroCardRight from "@/components/hero-card-right";
import HeroCTA from "@/components/hero-cta";
import HeroTitle from "@/components/hero-title";
import { Logos } from "@/components/logos";
import NavMenu from "@/components/nav-menu";
import Navbar from "@/components/navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main className="no-scrollbar overflow-x-hidden">
      <NavMenu />
      <section
        id="hero"
        className="hero w-screen h-screen grid grid-rows-[80px_25dvh_1fr] md:grid-rows-[80px_30dvh_1fr] xl:grid-rows-[80px_1fr_280px]"
      >
        <Navbar />
        <div className="text-gray-50 h-4 xl:hidden ml-auto mr-6 my-6" />
        <div className="w-full hero-title-grid xl:flex items-center justify-between mt-8 xl:mt-0 xl:px-6 xl:pb-8">
          <Logos.Perceptron className="w-[20vw] md:w-[18vw] xl:w-[15vw] hero-title-logo-left" />
          <HeroTitle />
          <Logos.RKM className="w-[18vw] md:w-[16vw] xl:w-[12vw] hero-title-logo-right" />
        </div>
        <div className="grid hero-cards-grid">
          <HeroCardLeft />
          <HeroCTA />
          <HeroCardRight />
        </div>
      </section>
      <section
        id="about"
        className="about w-screen h-screen flex items-center justify-center text-9xl bg-gray-700 text-white"
      >
        about
      </section>

      <Events />

      <section className="about w-screen h-screen bg-pink-200 text-9xl">
        Schedule
      </section>
      <section
        id="gallery"
        className="about w-screen h-screen bg-green-200 text-9xl"
      >
        gallery
      </section>
    </main>
  );
}
