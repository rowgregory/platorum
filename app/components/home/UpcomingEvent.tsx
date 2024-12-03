'use client'

import React from 'react'
import useCountdown from '@/app/hooks/useCountdown'

const UpcomingEvent = () => {
  const targetDate = new Date('2024-12-25T00:00:00')
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <div
      data-aos="zoom-in"
      className="px-4 -mt-4 350:-mt-48 z-10 max-w-screen-xl w-full mx-auto relative initial-flip-position"
    >
      <div className="p-7 lg:p-12 bg-zinc-800/20 backdrop-blur-xl">
        <div className="grid grid-cols-12 gap-y-7 lg:gap-x-16 items-center">
          <h3 className="col-span-12 lg:col-span-4 raleway-bold text-3xl uppercase text-shadow-1 mb-5 lg:mb-0 text-center">
            Upcoming Big Event
          </h3>
          <div className="col-span-6 lg:col-span-2 flex items-center flex-col justify-center">
            <span className="raleway-regular">Days</span>
            <span className="raleway-bold text-5xl">{days}</span>
          </div>
          <div className="col-span-6 lg:col-span-2 flex items-center flex-col justify-center">
            <span className="raleway-regular">Hours</span>
            <span className="raleway-bold text-5xl">{hours}</span>
          </div>
          <div className="col-span-6 lg:col-span-2 flex items-center flex-col justify-center">
            <span className="raleway-regular">Minutes</span>
            <span className="raleway-bold text-5xl">{minutes}</span>
          </div>
          <div className="col-span-6 lg:col-span-2 flex items-center flex-col justify-center">
            <span className="raleway-regular">Seconds</span>
            <span className="raleway-bold text-5xl">{seconds}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvent
