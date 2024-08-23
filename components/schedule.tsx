import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScheduleData } from "@/config/schedule";
import ScheduleCard from "./schedule-card";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  useGSAP(() => {
    // Initial setup for schedule-content elements
    gsap.set(".schedule-content:not(:first-child)", { opacity: 0, y: 50 });

    // Create ScrollTriggers for each schedule title
    ScheduleData.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: `.schedule-title:nth-child(${i + 1})`,
        start: "top center",
        end: "bottom center",
        onEnter: () => handleTitleOpacity(i),
        onEnterBack: () => handleTitleOpacity(i),
        onLeave: () => resetTitleOpacity(i),
        onLeaveBack: () => resetTitleOpacity(i),
        invalidateOnRefresh: true,
      });
    });

    // Pin and scroll the right side content
    ScrollTrigger.create({
      trigger: ".schedule",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      scrub: 2,
      invalidateOnRefresh: true,
    });
  });

  const handleTitleOpacity = (activeIndex: number) => {
    // Set opacity and scale of all titles to 0.5
    gsap.to(".left div", {
      opacity: 0.5,
      scaleX: 0.9,
      duration: 0.5,
    });

    // Set opacity and scale of the active title to 1
    gsap.to(`.left div:nth-child(${activeIndex + 1})`, {
      opacity: 1,
      scaleX: 1,
      x: "10%",
      duration: 0.5,
    });

    // Animate the corresponding schedule content
    gsap.to(`.schedule-content:nth-child(${activeIndex + 1})`, {
      opacity: 1,
      y: 0,
      stagger: 0.5,
      ease: "power2.inOut",
    });
  };

  const resetTitleOpacity = (index: number) => {
    // Reset the schedule content when it leaves the viewport
    gsap.to(`.schedule-content:nth-child(${index + 1})`, {
      opacity: 0,
      y: 50,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      id="schedule"
      className="schedule w-screen overflow-y-clip bg-slate-950 text-slate-300 text-9xl flex"
    >
      <div className="left w-1/2 pt-[25%] pb-[15%] px-6 font-size-md">
        {ScheduleData.map((data, index) => (
          <div key={index} className="h-[25dvh] schedule-title text-left">
            {data.title}
          </div>
        ))}
      </div>
      <div className="right relative max-sm:hidden h-dvh w-1/2 flex items-center justify-center">
        {ScheduleData.map((data, i) => (
          <div
            key={i}
            className="schedule-content absolute w-[40dvw] h-[75dvh] bg-gradient-to-bl from-gray-900 to-gray-950 border-8 border-primary rounded-[2rem] p-8 overflow-clip event-card-shadow"
          >
            <ScheduleCard data={ScheduleData[i]} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
