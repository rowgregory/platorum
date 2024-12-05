'use client'

import React from 'react'
import { Tilt } from 'react-tilt'

const charityEvents = ['bg-jz1', 'bg-jz2', 'bg-jz3', 'bg-jz4', 'bg-jz5', 'bg-jz6']

const JoeZippo = () => {
  return (
    <div id="zippo" className="px-4 py-16 relative bg-jz bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-screen-xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-12 gap-y-10 max-w-screen-xl w-full mx-auto items-center py-16 lg:py-32">
          <div className="col-span-12 lg:col-span-8 xl:col-span-7">
            <h1 data-aos="fade-up" className="text-shadow-1 text-4xl mb-3 great-vibes-regular">
              Charity Show & Scholarships
            </h1>
            <h2
              data-aos="fade-up"
              className="text-shadow-1 text-3xl sm:text-5xl raleway-black uppercase mb-6"
            >
              He is missed. He will never be forgotten.
            </h2>
            <p data-aos="fade-up" className="raleway-regular mb-7">
              In honor of Joseph Kelley Jr., the annual scholarship drive and memorial show to
              remember Joe given to a local student in his memory. Donations can be made on the{' '}
              <span
                className="text-pink-500 raleway-bold cursor-pointer duration-300 hover:text-pink-600"
                onClick={() =>
                  window.open(
                    'https://www.gofundme.com/f/joe-zippo-kelley-memorial-scholarship-fund?utm_campaign=p_cp+share-sheet&utm_medium=social&utm_source=facebook',
                    '_blank'
                  )
                }
              >
                GoFund Me Page
              </span>
              . In our hearts Joe-always.
            </p>
            <div className="grid grid-cols-12 gap-3 w-full">
              {charityEvents.map((event, i) => (
                <Tilt
                  options={{ scale: 1 }}
                  key={i}
                  className="col-span-12 sm:col-span-6 md:col-span-4"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-delay={i * 50}
                    className="aspect-square bg-black py-2"
                  >
                    <div
                      className={`${event} bg-center bg-contain bg-no-repeat w-full h-full aspect-[0.5/0.9]`}
                    ></div>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoeZippo
