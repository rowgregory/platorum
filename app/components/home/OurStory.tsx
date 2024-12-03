import React from 'react'
import AwesomeIcon from '../common/AwesomeIcon'
import { plusIcon } from '@/app/lib/icons'
import { ourStory } from '@/public/data/home.data'

const OurStory = () => {
  return (
    <div id="story" className="relative w-full bg-our-story  py-20 bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 px-4">
        <div className="grid grid-cols-12 gap-y-10 max-w-screen-xl w-full mx-auto items-center py-16 lg:py-32">
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <h1 data-aos="fade-up" className="text-shadow-1 text-4xl mb-3 great-vibes-regular">
              Our Story
            </h1>
            <h2
              data-aos="fade-up"
              className="text-shadow-1 text-3xl sm:text-5xl raleway-black uppercase mb-6"
            >
              Unforgettable Events, Tailored for You
            </h2>
            <p data-aos="fade-up" className="raleway-regular mb-7">
              Every celebration deserves a personal touch. At Platorum, we specialize in crafting
              unique experiences that reflect your style and leave lasting memories. Let’s make your
              next event truly one of a kind.
            </p>
            <div className="grid grid-cols-12 gap-y-7 sm:gap-7 w-full">
              {ourStory.map((story, i) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  key={i}
                  className="col-span-12 sm:col-span-6 flex items-center flex-col gap-x-3 group"
                >
                  <span className="raleway-bold duration-500 text-5xl mb-3 flex items-start">
                    {story.value}{' '}
                    <AwesomeIcon icon={plusIcon} className="w-4 h-4 text-pink-500 mt-4 ml-1" />
                  </span>
                  <span className="raleway-regular">{story.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
