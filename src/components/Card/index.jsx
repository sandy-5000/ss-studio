'use client'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Button from '@/components/Button/Icon'
import Link from 'next/link'
import { ROUTES } from '@/utils/routes'

const SCROLL = {
  LENGTH: 290,
  TYPE: {
    RIGHT: 1,
    LEFT: -1,
  },
}

const Card = ({ id, cloth, display }) => {
  const displayImages = !!display ? cloth.images : cloth.images.slice(0, 4)

  const scroll = (divId, direction) => {
    let container = document.querySelector(`#${divId}`)
    container.scrollLeft += SCROLL.LENGTH * direction
  }

  return (
    <div className="p-2">
      <div className="p-0 bg-red-300 rounded-md ">
        <div
          id={id}
          className="display-card-container w-[300px] aspect-square p-2 flex justify-start overflow-x-scroll"
        >
          {displayImages.map((image, index) => (
            <div key={`image_${index}`} className="p-1">
              <Link href={ROUTES.DETAILS}>
                <div className="w-[280px] aspect-square flex justify-center">
                  <div className="h-full p-1 bg-white rounded-xl">
                    <Image
                      alt="displayImage"
                      src={image}
                      className="h-full w-full display-image"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="p-1 px-3 flex justify-between">
          <Button
            icon={
              <FaAngleLeft
                onClick={() => scroll(id, SCROLL.TYPE.LEFT)}
                className="text-md"
              />
            }
          />
          <Button
            icon={
              <FaAngleRight
                onClick={() => scroll(id, SCROLL.TYPE.RIGHT)}
                className="text-md"
              />
            }
          />
        </div>
        <div className="p-2 pt-0">
          <div className="w-full p-1 bg-white rounded-md">
            <p className="uppercase text-slate-800 text-xs font-semibold text-center">
              {cloth.name}
            </p>
            <p className="capitalize text-slate-800 text-xs font-semibold text-center">
              Price: {cloth.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
