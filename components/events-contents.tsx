import React from "react";
import EventTitleSection from "./event-title-section";

const EventsContents = () => {
  return (
    <>
      <div className="event h-screen w-screen flex items-center justify-center text-8xl overflow-clip bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <EventTitleSection />
      </div>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="event h-screen w-screen flex items-center justify-center text-8xl bg-gradient-to-b from-slate-900 to-slate-950 text-white"
        >
          Event {i + 1}
        </div>
      ))}
    </>
  );
};

export default EventsContents;
