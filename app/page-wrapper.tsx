'use client'

import Aos from 'aos'
import React, { ReactNode, useEffect } from 'react'
import { ScrollProvider } from './components/ScrollProvider'
import ScrollToTopButton from './components/ScrollToTopButton'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 500,
      easing: 'ease-in-out',
      once: false,
      anchorPlacement: 'top-bottom'
    })

    Aos.refresh()
  }, [])

  return (
    <ScrollProvider>
      {children}
      <ScrollToTopButton />
    </ScrollProvider>
  )
}

export default PageWrapper
