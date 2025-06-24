import React from 'react'
import { assets } from '../../assets/assets'
import { FaSearch, FaArrowRight } from "react-icons/fa";



const HomeHeader = () => {
  return (
    <div
      className='flex flex-col md:flex-row flex-wrap bg-cover bg-center px-6 md:px-10 lg:px-20 min-h-[670px]'
      style={{ backgroundImage: `url(${assets.HomeHeaderBgImage})` }} >


      {/* -------------- Left Side  -------------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[8vw] '>

        <p className='mx-auto md:mx-0 text-3xl md:text-4xl lg:text-5xl text-amber-800 font-medium leading-tight md:leading-tight lg:leading-tight '>
          Pursue a <br/> Career in Law
        </p>
        

        {/* Search Bar */}
        <p className='bg-orange-600 text-white px-4 py-2'>Admission Open</p>
  
        
        <p className='text-3xl'>for <span className='font-bold'>B.A.LL.B</span> & <span className='font-bold'>B.A.LL.B</span>  </p>
        

      </div>

    </div>
  )
}

export default HomeHeader