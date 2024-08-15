"use client"

import { useLayoutEffect } from "react";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';


const Events = () => {

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(".event", {
            xPercent: -800,
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              pin: true,
              scrub: 1,
              snap: {
                snapTo: 1 / 8,
                duration: 0.05
              },
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "300%"
            }
          });
  }, {scope: container})

  return (
    <div ref={container} className="flex flex-nowrap w-[900%]">
      <div className="event h-screen w-screen flex items-center justify-center text-8xl bg-red-200">Event 1</div>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl bg-cyan-200">Event 2</div>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl bg-amber-200">Event 3</div>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl bg-red-200">Event 4</div>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl bg-cyan-200">Event 5</div>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl bg-amber-200">Event 6</div>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl bg-red-200">Event 7</div>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl bg-cyan-200">Event 8</div>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl bg-amber-200">Event 9</div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default Events
