import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScheduleData } from "@/config/schedule";
import ScheduleCard from "./schedule-card";
import useFonts from "@/hooks/useFonts";
import ScheduleCardMobile from "./schedule-card-mobile";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  useGSAP(() => {
    gsap.set(".right-content:not(:first-child)", { opacity: 0, y: 50 });

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
    gsap.to(".left .left-content", {
      opacity: 0.5,
      scaleX: 0.9,
      duration: 0.5,
    });

    gsap.to(`.left .left-content:nth-child(${activeIndex + 1})`, {
      opacity: 1,
      scaleX: 1,
      x: "10%",
      duration: 0.5,
    });

    gsap.to(`.right-content:nth-child(${activeIndex + 1})`, {
      opacity: 1,
      y: 0,
      stagger: 0.5,
      ease: "power2.inOut",
    });
  };

  const resetTitleOpacity = (index: number) => {
    gsap.to(`.right-content:nth-child(${index + 1})`, {
      opacity: 0,
      y: 50,
      ease: "power2.inOut",
    });
  };

  const {mono} = useFonts();

  return (
    <section
      id="schedule"
      className="schedule w-screen overflow-y-clip bg-slate-950 text-slate-300 text-9xl flex"
    >
      <div className="left max-sm:w-full w-1/2 pt-[25%] pb-[15%] px-6 font-size-md">
        {ScheduleData.map((data, index) => (
          <div key={index} className={`${mono.className} left-content h-[25dvh] schedule-title text-left`}>
            <p className="max-sm:hidden">{data.title}</p>
            <ScheduleCardMobile data={data} />
          </div>
        ))}
      </div>
      <div className="right relative max-sm:hidden h-dvh w-1/2 flex items-center justify-center">
        {ScheduleData.map((data, i) => (
          <div
            key={i}
            className="right-content absolute w-[40dvw] h-[75dvh] bg-gradient-to-bl from-gray-900 to-gray-950 border-8 border-primary rounded-[2rem] p-8 overflow-clip event-card-shadow"
          >
            <ScheduleCard data={data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
