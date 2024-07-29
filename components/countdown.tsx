import React from 'react'
import { Bruno_Ace, Bruno_Ace_SC, Bungee, DM_Sans } from "next/font/google";

const font_main = Bungee({ subsets: ["latin"], weight: ["400"] });
const font_sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });
const font_sub_cap = Bruno_Ace_SC({ subsets: ["latin"], weight: ["400"] });
const font = DM_Sans({ subsets: ["latin"] });

const Countdown = () => {
  return (
    <div className={`${font_sub.className} text-gray-50 flex justify-around px-4 items-center`}>
      <div className="flex flex-col text-center text-xs">
        <p className="text-2xl">199</p>
        <p className="">Days</p>
      </div>:
      <div className="flex flex-col text-center text-xs">
        <p className="text-2xl">23</p>
        <p className="">Hours</p>
      </div>:
      <div className="flex flex-col text-center text-xs">
        <p className="text-2xl">59</p>
        <p className="">Minutes</p>
      </div>:
      <div className="flex flex-col text-center text-xs">
        <p className="text-2xl">59</p>
        <p className="">Seconds</p>
      </div>
    </div>
  )
}

export default Countdown
