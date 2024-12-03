import React from 'react'

const Banner = () => {
  return (
    <div className="w-full h-screen lg:h-[900px] relative z-0">
      <div className="bg-banner bg-center bg-cover bg-no-repeat w-full h-full object-cover" />
      <div className="absolute z-10 top-1/2 bg-black/20 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col w-full h-full flex justify-center items-center px-4">
        <div className="lg:mb-36">
          <h1
            data-aos="slide-left"
            className="text-3xl md:text-4xl lg:text-5xl mb-2 text-center great-vibes-regular"
          >
            Music, Tours, Support
          </h1>
          <h2
            data-aos="slide-right"
            className="initial-slide-position text-shadow-1 text-4xl 350:text-5xl md:text-6xl lg:text-7xl raleway-black text-center uppercase"
          >
            Expert Consulting for Music Success
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Banner
