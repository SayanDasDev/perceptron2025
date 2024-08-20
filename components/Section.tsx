import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


const Section = () => {

  useGSAP(()=>{
    ScrollTrigger.create({
      trigger: ".schedule",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    })
  })

  return (
    <section className="schedule w-screen overflow-y-clip bg-pink-200 text-9xl flex">
      <div className="left w-1/2">
      <div className='h-dvh'>
          1st
        </div>
      <div className='h-dvh'>
          2nd
        </div>
      <div className='h-dvh'>
          Third
        </div>
      </div>
      <div className="right w-1/2">
        <div className='h-dvh'>
          Event
        </div>
      </div>
    </section>
  )
}

export default Section
