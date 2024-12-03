import React from 'react'
import AwesomeIcon from '../common/AwesomeIcon'
import { arrowRightIcon } from '@/app/lib/icons'
import { additionalServices } from '@/public/data/home.data'

const About = () => {
  return (
    <div id="about" className="relative w-full bg-about py-20 bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-4">
        <div className="grid grid-cols-12 gap-y-10 max-w-screen-xl w-full mx-auto items-center py-16 lg:py-32">
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <h1 data-aos="fade-up" className="text-shadow-1 text-4xl mb-3 great-vibes-regular">
              About Platorum
            </h1>
            <h2
              data-aos="fade-up"
              className="text-shadow-1 text-4xl sm:text-5xl raleway-black uppercase mb-6 break-words"
            >
              Music promotion, management, and event support experts.
            </h2>
            <p data-aos="fade-up" className="raleway-regular text-gray-300 mb-7">
              Platorum is a premier music business consultancy dedicated to enhancing the industry.
              We specialize in concert promotion, artist management, event organization, and tour
              support, ensuring seamless and successful experiences.
            </p>
            <p data-aos="fade-up" className="raleway-regular text-gray-300 mb-12">
              With a deep understanding of the music world, Platorum helps artists and events thrive
              by offering tailored solutions. Our expertise empowers musicians and promoters to
              reach their full potential and create unforgettable moments.
            </p>
            <div className="grid grid-cols-12 gap-7">
              {additionalServices.map((service, i) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  key={i}
                  className="col-span-12 sm:col-span-6 flex items-center gap-x-3 group"
                >
                  <AwesomeIcon
                    icon={arrowRightIcon}
                    className="w-4 h-4 text-[#FF1F8E] duration-500 group-hover:translate-x-1 group-hover:-translate-y-4 group-hover:rotate-[410deg]"
                  />
                  <span className="text-gray-300 raleway-regular duration-500 group-hover:text-[#FF1F8E]">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
