'use client'

import Image from 'next/image'
import Card from '@/components/Card'

const DescriptionCard = ({ cloth }) => {
  const remainingImages = cloth.images.slice(4, 10)

  return (
    <>
      <Card cloth={cloth} id={'key'} display={true} />
      <div className="p-2 pt-0">
        <div className="p-0 bg-red-300 rounded-md ">
          <div className="p-2 pt-0">
            <div className="p-4 mt-4 justify-center">
              <h3 className="font-semibold pb-2 text-center">Images</h3>
              <div className="grid grid-cols-2 gap-4">
                {remainingImages.map((image, index) => (
                  <div
                    key={index}
                    className="col-span-1 h-full p-1 bg-white rounded-xl"
                  >
                    <Image
                      alt="displayImage"
                      src={image}
                      className="h-full w-full display-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DescriptionCard
