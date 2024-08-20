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
          scrub: 0.4,
          snap: {
            snapTo: 1 / (events.length - 1),
            duration: 0.005,
            delay: 0.01,
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
      {/* Dummy 100vh spacers added for each 100% offset in the end*/}
      <div className="w-screen h-[500vh]" />
    </>
  );
};

export default Events;
