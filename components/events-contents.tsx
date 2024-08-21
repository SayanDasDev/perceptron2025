import React from "react";
import EventTitleSection from "./event-title-section";
import EventCard from "./event-card";
import { eventsData } from "@/config/events";

const EventsContents = () => {
  return (
    <>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl overflow-clip bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <EventTitleSection />
      </div>
      {eventsData.map((_, i) => (
        <div
          key={i}
          className="event h-screen w-screen flex items-center justify-center text-8xl bg-gradient-to-b from-slate-900 to-slate-950 text-white"
        >
          <EventCard item={eventsData[i]} eventNumber={i}/>
        </div>
      ))}
    </>
  );
};

export default EventsContents;
