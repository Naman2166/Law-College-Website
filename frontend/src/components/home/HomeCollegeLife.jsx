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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <img src={assets.CL11} alt="" className="w-full max-w-full h-auto rounded-md" />
            <img src={assets.CL10} alt="" className="w-full max-w-full h-auto rounded-md" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <img src={assets.CL9} alt="" className="w-full max-w-full h-auto rounded-md" />
            <img src={assets.CL8} alt="" className="w-full max-w-full h-auto rounded-md" />
            <img src={assets.CL7} alt="" className="w-full max-w-full h-auto rounded-md" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <img src={assets.CL6} alt="" className="w-full max-w-full h-auto rounded-md" />
            <img src={assets.CL5} alt="" className="w-full max-w-full h-auto rounded-md" />
            <img src={assets.CL4} alt="" className="w-full max-w-full h-auto rounded-md" />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col sm:flex-col lg:flex-col gap-4">
            <img src={assets.CL3} alt="" className="w-full max-w-full h-auto rounded-md" />
            <img src={assets.CL2} alt="" className="w-full max-w-full h-auto rounded-md" />
            <img src={assets.CL1} alt="" className="w-full max-w-full h-auto rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCollegeLife
