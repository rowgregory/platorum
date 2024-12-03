'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { chevronUpIcon } from '../lib/icons'
import useAtTopOfPage from '../hooks/useAtTopOfPage'

const ScrollToTopButton = () => {
  const isAtTop = useAtTopOfPage()

  return (
    <div
      onClick={() =>
        window.scrollTo({
          behavior: 'smooth',
          top: 0
        })
      }
      className={`${
        isAtTop ? 'translate-x-14' : 'translate-x-0'
      } fixed bottom-3 right-3 z-30 p-2 bg-zinc-800 flex items-center justify-center duration-200 cursor-pointer hover:bg-pink-500`}
    >
      <FontAwesomeIcon icon={chevronUpIcon} className="text-white w-2.5 h-2.5" />
    </div>
  )
}

export default ScrollToTopButton
