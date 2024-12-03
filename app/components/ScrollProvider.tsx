// context/ScrollContext.js
import React, { createContext, ReactNode, useContext } from 'react'

type ScrollContextType = (id: string, offset?: number) => void

const ScrollContext = createContext<ScrollContextType | null>(null)

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const scrollToSection = (id: string, offset = 0) => {
    const target = document.getElementById(id)
    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      })
    }
  }

  return <ScrollContext.Provider value={scrollToSection}>{children}</ScrollContext.Provider>
}

export const useScroll = () => {
  return useContext(ScrollContext)
}
