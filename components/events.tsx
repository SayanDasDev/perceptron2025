"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EventsContents from "./events-contents";

const Events = () => {
  const container = useRef<HTMLDivElement | null>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!isMounted) return;

      let events = gsap.utils.toArray(".event");

      gsap.to(".event", {
        xPercent: -100 * (events.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (events.length - 1),
            duration: 0.05,
          },
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "500%",
        },
      });
    },
    { scope: container, dependencies: [isMounted] }
  );

  return (
    <>
      <section id="events" className="flex">
        <div ref={container} className="flex flex-nowrap w-[900%]">
          <EventsContents />
        </div>
      </section>
      {/* Dummy sections added for each 100% offset in the end*/}
      <section className="about w-screen h-screen" />
      <section className="about w-screen h-screen" />
      <section className="about w-screen h-screen" />
      <section className="about w-screen h-screen" />
      <section className="about w-screen h-screen" />
    </>
  );
};

export default Events;
