'use client'

const Description = ({ cloth }) => {
  return (
    <div className="p-2">
      {/* Description Section */}
      <div className="p-4 rounded-md font-serif italic">
        {/* Iterate through the description object */}
        <p className="italic">*🌷Lehenga Choli🌷*</p>
        <div className="pt-3 pb-2">
          <hr className="bg-red-300 h-[2px]" />
        </div>
        <p className="italic">
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
              <strong>{key}:</strong> {value}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Description
