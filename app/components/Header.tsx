'use client'

import React from 'react'
import { useScroll } from './ScrollProvider'

const Header = () => {
  const scrollToTarget = useScroll()

  return (
    <div className="w-full absolute flex flex-col items-center justify-center py-4 z-40 left-1/2 transform -translate-x-1/2">
      <div
        data-aos="slide-down"
        className="bg-logo bg-contain bg-no-repeat w-[300px] h-[60px]"
      ></div>
      <div className="flex items-center justify-center gap-y-1 gap-x-4 flex-wrap">
        <button
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500"
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
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500"
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
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500"
          data-aos="slide-right"
          onClick={() => {
            if (scrollToTarget) {
              scrollToTarget('options', 100)
            }
          }}
        >
          Options
        </button>
        <button
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500"
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
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500"
          data-aos="slide-left"
          onClick={() => {
            if (scrollToTarget) {
              scrollToTarget('events', 100)
            }
          }}
        >
          Events
        </button>
        <button
          className="initial-slide-position text-sm text-zinc-100 raleway-regular hover:text-pink-500"
          data-aos="slide-left"
          onClick={() => {
            if (scrollToTarget) {
              scrollToTarget('zippo', 100)
            }
          }}
        >
          Zippo
        </button>
      </div>
    </div>
  )
}

export default Header
