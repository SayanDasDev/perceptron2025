"use client";

import EventsContents from "./events-contents";

const EventsMobile = () => {

  return (
    <>
      <section id="events" className="flex overflow-clip">
        <div className="flex-col bg-gradient-to-b from-slate-900 to-slate-950 flex-nowrap w-[900%]">
          <EventsContents />
        </div>
      </section>
    </>
  );
};

export default EventsMobile;
