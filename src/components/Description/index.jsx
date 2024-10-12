'use client'

const Description = ({ cloth }) => {
  return (
    <div className="p-2">
      {/* Description Section */}
      <div className="p-4 rounded-md">
        {/* Iterate through the description object */}
        <p className="italic">*🌷Lehenga Choli🌷*</p>
        <div className="pt-3 pb-2">
          <hr className="bg-red-300 h-[2px]" />
        </div>
        <p className="text-sm font-normal pb-2">
          Subtle shades, bold heritage: Kalamkari Dola silk charm 🪸
        </p>
        {Object.entries(cloth.description).map(([key, value], index) => (
          <>
            {(index === 6 || index === 9) && (
              <div className="pt-3 pb-2">
                <hr className="bg-red-300 h-[2px]" />
              </div>
            )}

            <div key={key} className="mb-2">
              <strong className="text-xs capitalize pr-1">{key}:</strong>{' '}
              <span className="text-xs font-[450]">{value}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Description
