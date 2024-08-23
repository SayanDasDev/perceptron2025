import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScheduleData } from "@/config/schedule";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  useGSAP(() => {
    gsap.set(".schedule-content:not(:first-child)", { opacity: 0,  y: 50 });

    ScrollTrigger.create({
      trigger: ".schedule",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      scrub: 2,
      snap: {
        snapTo: 1 / (ScheduleData.length - 1),
        duration: 0.5,
        delay: 0.0001,
      },
      animation: gsap.to(".schedule-content:not(:first-child)", {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        ease: "power2.inOut",
      }),
    });
  });

  return (
    <section
      id="schedule"
      className="schedule w-screen overflow-y-clip bg-slate-950 text-slate-300 text-9xl flex"
    >
      <div className="left w-1/4 md:w-1/2 pt-[25%] pb-[15%] font-size-md">
        {ScheduleData.map((data, index) => (
          <div 
            key={index} 
            className="h-[25dvh]"
          >
            {data.title}
          </div>
        ))}
      </div>
      <div className="right relative h-dvh w-3/4 md:w-1/2 flex items-center justify-center">
        {ScheduleData.map((data, i) => (
          <div
            key={i}
            className="schedule-content absolute w-[40dvw] h-[75dvh] bg-gradient-to-b  from-slate-900 to-slate-950 border-8 border-primary rounded-[2rem] p-8 overflow-clip event-card-shadow"
          >
            {data.startDate}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
