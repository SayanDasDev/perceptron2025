import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useFonts from "@/hooks/useFonts";
import { TeamData } from "@/config/team";
import TeamCard from "./team-card";
import TeamCardMobile from "./team-card-mobile";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useGSAP(() => {
    gsap.set(".right-content:not(:first-child)", { opacity: 0, y: 50 });

    TeamData.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: `.team-title:nth-child(${i + 1})`,
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
      trigger: ".team",
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
      zIndex: 100,
      stagger: 0.5,
      ease: "power2.inOut",
    });
  };

  const resetTitleOpacity = (index: number) => {
    gsap.to(`.right-content:nth-child(${index + 1})`, {
      opacity: 0,
      y: 50,
      zIndex: -100,
      ease: "power2.inOut",
    });
  };

  const {mono} = useFonts();

  return (
    <section
      id="team"
      className="team w-screen overflow-y-clip bg-slate-950 text-slate-300 text-9xl flex"
    >
      <div className="left max-sm:w-full w-1/2 pt-[25%] pb-[15%] px-6 font-size-md">
        {TeamData.map((data, index) => (
          <div key={index} className={`${mono.className} left-content h-[25dvh] team-title text-left`}>
            <p className="max-sm:hidden">{data.name}</p>
            <TeamCardMobile data={data} />
          </div>
        ))}
      </div>
      <div className="right relative max-sm:hidden h-dvh w-1/2 flex items-center justify-center">
        {TeamData.map((data, i) => (
          <div
            key={i}
            className="right-content absolute w-[40dvw] h-[75dvh] bg-gradient-to-bl from-gray-900 to-gray-950 border-8 border-primary rounded-[2rem] p-8 overflow-clip event-card-shadow"
          >
            <TeamCard data={data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
