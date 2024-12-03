import React from 'react'
import { pastEvents, upcomingEvents } from '@/public/data/home.data'

const OurEvents = () => {
  return (
    <section id="events" className="px-4 py-28">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col">
        <h1 data-aos="fade-up" className="text-shadow-1 text-4xl mb-3 great-vibes-regular">
          Our Events
        </h1>
        <h2
          data-aos="fade-up"
          className="text-shadow-1 text-5xl raleway-black uppercase mb-6 sm:text-left"
        >
          Upcoming Events
        </h2>
        <p data-aos="fade-up" className="raleway-regular mb-12 max-w-xl w-full">
          Get ready for some awesome upcoming events with Platorum—live music, great vibes, and
          unforgettable nights you won&apos;t want to miss!
        </p>

        <div className="grid grid-cols-12 gap-y-8 md:gap-8 w-full mb-16">
          {upcomingEvents.map((event, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 100}
              key={i}
              className={`col-span-12 md:col-span-6 xl:col-span-12 border-2 ${
                i % 2 === 0 ? 'border-pink-600' : 'border-zinc-500'
              } py-7 px-10 flex items-center flex-col xl:flex-row gap-x-10`}
            >
              <div className="flex flex-col items-center">
                <div className="raleway-light text-3xl">{event.monthDay}</div>
                <div className="raleway-bold text-[42px]">{event.year}</div>
              </div>
              <div
                className="aspect-[2/3] w-full max-w-80 h-full max-h-52 bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${event.img})` }}
              ></div>
              <div className="flex flex-col max-w-sm xl:max-w-md">
                <h1 className="text-2xl uppercase raleway-bold mb-5 text-center xl:text-left mt-5 xl:mt-0">
                  {event.eventTitle}
                </h1>
                <span className="raleway-light mb-2">Artist: {event.artist}</span>
                <span className="raleway-light mb-2">Tickets: {event.ticketPrice}</span>
                <span className="raleway-light mb-2">Date: {event.date}</span>
                <span className="raleway-light mb-2">Doors Open: {event.doorsOpen}</span>
              </div>
            </div>
          ))}
        </div>
        <span className="flex self-start mb-3 uppercase text-zinc-500 text-2xl raleway-bold">
          Past Events
        </span>
        <div className="grid grid-cols-12 gap-y-8 md:gap-8 w-full">
          {pastEvents.map((event, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 100}
              key={i}
              className={`col-span-12 md:col-span-6 xl:col-span-12 border-2 ${
                i % 2 === 0 ? 'border-zinc-600' : 'border-pink-500'
              } py-7 px-10 flex items-center flex-col xl:flex-row gap-x-10`}
            >
              <div className="flex flex-col items-center">
                <div className="raleway-light text-3xl">{event.monthDay}</div>
                <div className="raleway-bold text-[42px]">{event.year}</div>
              </div>
              <div
                className="aspect-[2/3] w-full max-w-80 h-full max-h-52 bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${event.img})` }}
              ></div>
              <div className="flex flex-col max-w-sm xl:max-w-md">
                <h1 className="text-2xl uppercase raleway-bold mb-5 text-center xl:text-left mt-5 xl:mt-0">
                  {event.eventTitle}
                </h1>
                <span className="raleway-light mb-2">Artist: {event.artist}</span>
                <span className="raleway-light mb-2">Tickets: {event.ticketPrice}</span>
                <span className="raleway-light mb-2">Date: {event.date}</span>
                <span className="raleway-light mb-2">Doors Open: {event.doorsOpen}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurEvents
