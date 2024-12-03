import React from 'react'
import AwesomeIcon from '../common/AwesomeIcon'
import { additionalServicesCards } from '@/public/data/home.data'

const AdditionalServices = () => {
  return (
    <div id="options" className="px-4 py-28">
      <div className="max-w-screen-xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-12 gap-y-5 sm:gap-5">
          <div data-aos="fade-up" className="col-span-12 lg:col-span-6">
            <h1 className="text-shadow-1 text-4xl mb-3 great-vibes-regular">Additional Services</h1>
            <h2 className="text-shadow-1 text-5xl raleway-black uppercase mb-6">
              Unlock More <br /> Service Options
            </h2>
            <span className="text-gray-300 raleway-regular break-words">
              Discover a range of services designed to elevate your projects to new heights. From
              seamless event coordination to unmatched artist support, we&apos;re here to make your
              goals a reality.
            </span>
          </div>
          {additionalServicesCards.map((service, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 100}
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-3 group relative flex flex-col justify-center items-center aspect-[4/3] lg:aspect-square border-2 p-5 border-pink-500 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-0 h-0 bg-pink-500 group-hover:w-full group-hover:h-full group-hover:animate-squareIn transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-0 h-0 bg-pink-500 group-hover:w-full group-hover:h-full group-hover:animate-squareIn transition-all duration-500"></div>
              <AwesomeIcon
                icon={service.icon}
                className="w-10 h-10 mb-4 z-10 group-hover:animate-jiggle group-hover:text-black"
              />
              <span className="uppercase raleway-bold text-xl text-center mb-4 z-10 group-hover:text-black duration-500">
                {service.title}
              </span>
              <span className="raleway-regular text-center z-10 group-hover:text-black duration-500">
                {service.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdditionalServices
