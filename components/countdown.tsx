import useFonts from '@/hooks/useFonts'
import React from 'react'

const Countdown = () => {

  const { font_sub } = useFonts()

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
