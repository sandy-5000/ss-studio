'use client'

import Button from '@/components/Button'
import Card from '@/components/Card'
import { saree_1, saree_2 } from '@/utils/temp'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'
import Image from 'next/image'
import cs2 from '@/assets/cs2.png'

const SCROLL = {
  LENGTH: 308,
  TYPE: {
    RIGHT: 1,
    LEFT: -1,
  },
}

const Page = () => {
  const scroll = (divClass, direction) => {
    let container = document.querySelector(`.${divClass}`)
    container.scrollLeft += SCROLL.LENGTH * direction
  }

  return (
    <div className="h-main-screen  w-screen p-4 md:px-8 lg:p-8 lg:px-16">
      <div className="flex justify-center pb-5 pt-3">
        <Image
          alt="displayImage"
          src={cs2}
          className="h-full w-full display-image"
          style={{ height: '200px', width: '300px' }}
        />
      </div>
    </div>
  )
}

export default Page
