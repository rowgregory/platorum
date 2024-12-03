'use client'

import React from 'react'
import AwesomeIcon from './common/AwesomeIcon'
import { chevronUpIcon, facebookIcon, linkedinIcon } from '../lib/icons'
import { contactInfoBlockData } from '@/public/data/home.data'

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-center bg-no-repeat px-4 pt-40 pb-8 w-full">
      <div className="max-w-screen-xl w-full mx-auto relative z-20">
        <section className="grid grid-cols-12 gap-y-10 md:gap-x-10 items-center mb-16">
          <div
            data-aos="fade-up"
            className="col-span-12 md:col-span-4 bg-logo bg-contain bg-no-repeat w-60 sm:w-80 h-[60px]"
          ></div>
          <div
            data-aos="fade-up"
            onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
            className="col-span-12 md:col-span-4 flex md:justify-center"
          >
            <AwesomeIcon
              icon={chevronUpIcon}
              className="w-6 h-6 hover:text-pink-500 duration-200"
            />
          </div>
          <div
            data-aos="fade-up"
            className="col-span-12 md:col-span-4 flex items-center md:justify-end gap-x-6"
          >
            <AwesomeIcon
              onClick={() => window.open('https://www.facebook.com/platorumllc', '_blank')}
              icon={facebookIcon}
              className="w-6 h-6 cursor-pointer hover:text-pink-500 duration-200"
            />
            <AwesomeIcon
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/stu-ginsburg-a0aa7ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                  '_blank'
                )
              }
              icon={linkedinIcon}
              className="w-6 h-6 cursor-pointer hover:text-pink-500 duration-200"
            />
          </div>
        </section>
        <section className="grid grid-cols-12 gap-y-8 sm:gap-x-8 mb-36">
          {contactInfoBlockData.map(({ icon, titleKey, textKey, onClick, className }, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`col-span-12 sm:col-span-6 lg:col-span-3 flex gap-x-4 ${className}`}
              onClick={onClick}
            >
              <AwesomeIcon icon={icon} className="text-pink-500 w-7 h-7" />
              <div className="flex flex-col">
                <p className="text-xl raleway-bold uppercase">{titleKey}</p>
                <p className="text-[#aaa] raleway-regular text-[15px]">{textKey}</p>
              </div>
            </div>
          ))}
        </section>
        <div className="w-full border-b-[1px] border-b-white/10 my-6"></div>
        <section className="flex items-center justify-center w-full ">
          <div className="text-[15px] raleway-regular">&copy;&nbsp;{new Date().getFullYear()}</div>
          <span className="h-8 w-[1px] bg-pink-500 mx-4" />
          <button
            onClick={() => window.open('https://sqysh.io', '_blank')}
            className="text-[15px] raleway-regular duration-200 hover:text-pink-500"
          >
            Sqysh
          </button>
        </section>
      </div>
    </footer>
  )
}

export default Footer
