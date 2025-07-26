import React from 'react'
import { assets } from '../../assets/assets'

const HomeCollegeLife = () => {
  return (
    <div className="w-full mb-15 py-14 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="flex flex-col gap-4">
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold [word-spacing:8px] text-blue-900 text-center sm:text-left">
          COLLEGE LIFE
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 px-4">
          {[assets.Gallery1, assets.Gallery2, assets.Gallery3, assets.Gallery4, assets.Gallery5, assets.Gallery6, assets.Gallery7].map((src, idx) => (
            <div
              key={idx}
              className={`w-full overflow-hidden rounded-lg shadow-md ${idx === 3 ? 'row-span-2 h-[360px] sm:h-[420px] md:h-[490px]' : 'h-44 sm:h-52 md:h-60'
                }`}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default HomeCollegeLife
