'use client'
import Image from 'next/image'

const Card = ({ cloth }) => {
  const displayImages = cloth.images.slice(0, 4)

  return (
    <div className="p-2">
      <div className="p-0 bg-red-300 rounded-md ">
        <div className="w-[300px] aspect-square p-2 flex justify-start overflow-x-scroll">
          {displayImages.map((image, index) => (
            <div key={`image_${index}`} className="p-1">
              <div className="w-[280px] aspect-square flex justify-center">
                <div className="h-full p-1 bg-white rounded-xl">
                  <Image
                    alt="displayImage"
                    src={image}
                    className="h-full w-full display-image"
                  />
                </div>
              </div>
            </div>
          ))}
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
