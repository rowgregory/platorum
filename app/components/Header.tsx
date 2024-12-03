'use client'

import React from 'react'
import { useScroll } from './ScrollProvider'

const Header = () => {
  const scrollToTarget = useScroll()

  return (
    <div className="w-full absolute flex flex-col items-center justify-center py-4 z-40 left-1/2 transform -translate-x-1/2">
      <div
        data-aos="slide-down"
        className="bg-logo bg-contain bg-no-repeat w-60 sm:w-80 h-[60px] ml-6"
      ></div>
      <div className="flex items-center gap-x-4">
        <button
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500 duration-100"
          data-aos="slide-right"
          onClick={() => {
            if (scrollToTarget) {
              scrollToTarget('our-services', 100)
            }
          }}
        >
          Services
        </button>
        <button
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500 duration-100"
          data-aos="slide-right"
          onClick={() => {
            if (scrollToTarget) {
              scrollToTarget('about', 100)
            }
          }}
        >
          About
        </button>
        <button
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500 duration-100"
          data-aos="slide-up"
          onClick={() => {
            if (scrollToTarget) {
              scrollToTarget('options', 100)
            }
          }}
        >
          Options
        </button>
        <button
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500 duration-100"
          data-aos="slide-left"
          onClick={() => {
            if (scrollToTarget) {
              scrollToTarget('story', 100)
            }
          }}
        >
          Story
        </button>
        <button
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500 duration-100"
          data-aos="slide-left"
          onClick={() => {
            if (scrollToTarget) {
              scrollToTarget('events', 100)
            }
          }}
        >
          Events
        </button>
      </div>
    </div>
  )
}

export default Header
