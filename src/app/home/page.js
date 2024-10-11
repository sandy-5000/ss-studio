'use client'

import Button from '@/components/Button'
import Card from '@/components/Card'
import { saree_1, saree_2 } from '@/utils/temp'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'

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
    <div className="h-main-screen w-screen p-4 md:px-8 lg:p-8 lg:px-16">
      <div className="pb-2">
        <p className="uppercase text-sm font-semibold">
          <span className="underline text-red-400">Top picks</span>
          <span className="text-slate-800"> For you </span>
        </p>
      </div>

      <div
        className="top-picks pb-2 w-full flex justify-start overflow-x-scroll"
        style={{
          mask: 'linear-gradient(90deg, transparent, white 0.5%, white 99.5%, transparent)',
        }}
      >
        <Card id="top-picks_card_1" cloth={saree_1} />
        <Card id="top-picks_card_2" cloth={saree_2} />
        <Card id="top-picks_card_3" cloth={saree_1} />
        <Card id="top-picks_card_4" cloth={saree_2} />
        <Card id="top-picks_card_5" cloth={saree_1} />
        <Card id="top-picks_card_6" cloth={saree_2} />
        <Card id="top-picks_card_7" cloth={saree_1} />
        <Card id="top-picks_card_8" cloth={saree_2} />
        <Card id="top-picks_card_9" cloth={saree_1} />
        <Card id="top-picks_card_10" cloth={saree_2} />
        <Card id="top-picks_card_11" cloth={saree_1} />
        <Card id="top-picks_card_12" cloth={saree_2} />
      </div>
      <div className="flex justify-between px-2">
        <Button
          leftIcon={<FaAnglesLeft className="text-md pt-[1px]" />}
          label="left"
          onClick={() => scroll('top-picks', SCROLL.TYPE.LEFT)}
        />
        <Button
          rightIcon={<FaAnglesRight className="text-md pt-[1px]" />}
          label="right"
          onClick={() => scroll('top-picks', SCROLL.TYPE.RIGHT)}
        />
      </div>
    </div>
  )
}

export default Page
