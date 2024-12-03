'use client'

import React from 'react'
import { ourServices } from '@/public/data/home.data'
import { Tilt } from 'react-tilt'

const WhatWeOffer = () => {
  return (
    <div
      id="our-services"
      className="w-full relative bg-whatWeOffer py-40 bg-center bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-4">
        <div className="max-w-screen-xl w-full mx-auto">
          <h1
            data-aos="fade-up"
            className="text-shadow-1 text-4xl mb-2 text-center great-vibes-regular"
          >
            Our Services
          </h1>
          <h2
            data-aos="fade-up"
            className="text-shadow-1 text-5xl raleway-black text-center uppercase mb-5"
          >
            What We Offer
          </h2>
          <h3
            data-aos="fade-up"
            className="railway-regular text-gray-300 text-center mb-10 max-w-xl mx-auto"
          >
            Offering expert music business consulting, tour support, concert planning, A&R services,
            and fundraising to help artists achieve success.
          </h3>
          <div className="grid grid-cols-12 gap-y-5 sm:gap-x-5 relative z-50">
            {ourServices.map((service, i) => (
              <Tilt
                options={{ scale: 1 }}
                key={i}
                className="col-span-12 sm:col-span-6 lg:col-span-3"
              >
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="p-6 flex justify-end flex-col bg-cover bg-center bg-no-repeat w-full aspect-square lg:aspect-[2/3]"
                  style={{ backgroundImage: `url(${service.img})` }}
                >
                  <div className="text-2xl raleway-bold mb-2">{service.title}</div>
                  <div className="raleway-regular mb-10">{service.text}</div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:block bg-bottom-fade w-full h-[400px] absolute bottom-0 left-0" />
    </div>
  )
}

export default WhatWeOffer
