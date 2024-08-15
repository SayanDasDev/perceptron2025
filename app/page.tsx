"use client"
import Events from "@/components/events";
import HeroCardLeft from "@/components/hero-card-left";
import HeroCardRight from "@/components/hero-card-right";
import HeroCTA from "@/components/hero-cta";
import HeroTitle from "@/components/hero-title";
import { Logos } from "@/components/logos";
import NavMenu from "@/components/nav-menu";
import Navbar from "@/components/navbar";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const container = useRef<HTMLDivElement | null>(null);
  const eventsContainer = useRef<HTMLDivElement | null>(null);
  
  useGSAP(() => {
    gsap.to('.event', {
      transform: 'translateX(-1100%)',
      scrollTrigger: {
        trigger: eventsContainer.current,
        scroller: 'body',
        scrub: 2,
        // snap: 1 / 12,
        markers: true,  
        pin: true,
        start: 'top 0%',
        end: 'top -1200%',
      },
    })
    
  }, []);

  return (
    <main className="no-scrollbar overflow-x-hidden">
      <section id="hero" className="hero w-screen h-screen grid grid-rows-[80px_25dvh_1fr] md:grid-rows-[80px_30dvh_1fr] xl:grid-rows-[80px_1fr_280px]">
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
      <section id="about"  className="about w-screen h-screen flex items-center justify-center text-9xl bg-gray-700 text-white">
        about
      </section>
      <section ref={eventsContainer} id="events" className="flex w-[1200%]">
        <Events />
      </section>
      <section id="schedule" className="about w-screen h-screen text-9xl">
        Schedule
      </section>
      <section id="gallery" className="about w-screen h-screen text-9xl">
        gallery
      </section>
      <NavMenu />
    </main>
  );
}
