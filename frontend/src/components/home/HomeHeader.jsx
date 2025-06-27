import React from 'react'
import { assets } from '../../assets/assets'
import { FaSearch, FaArrowRight } from "react-icons/fa";



const HomeHeader = () => {
  return (
    <div
      className='flex flex-col md:flex-row flex-wrap bg-cover bg-center px-6 md:px-10 lg:px-20 w-auto h-72 md:min-h-[440px] lg:min-h-[570px] xl:min-h-[671px]'
      style={{ backgroundImage: `url(${assets.HomePageBgImage})` }} >
    </div>
  )
}

export default HomeHeader