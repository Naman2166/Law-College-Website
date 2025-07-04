import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const HomeHeader = () => {
  const navigate = useNavigate()

  return (
    <div
      className="bg-cover bg-center flex justify-center items-center w-full px-3 py-9 sm:px-6 sm:py-10 md:px-10 lg:px-20 min-h-[350px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[550px] xl:min-h-[570px]"
      style={{ backgroundImage: `url(${assets.HomeHeaderBgImage})` }}
    >
      <div className=" flex flex-row justify-between items-center gap-5 sm:gap-10 md:gap-20 max-w-7xl mx-auto">

        {/* Left Content */}
        <div className="text-white text-center md:text-left flex flex-col justify-center items-center gap-8 sm:gap-14">
          <p className="text-[28px] sm:text-4xl md:text-4xl lg:text-[44px] xl:text-6xl text-center  font-semibold leading-tight">
            Your Legal Journey <br className="hidden md:block" /> Begins Here
          </p>

          <div className='text-center flex flex-col justify-center items-center gap-5'>
          <button
            onClick={() => navigate('/admission')}
            className="flex flex-row justify-center items-center gap-3 sm:gap-5 bg-[#07149f] hover:bg-[#061183] text-[20px] whitespace-nowrap sm:whitespace-normal sm:text-3xl md:text-3xl lg:text-[42px] xl:text-5xl font-semibold rounded-md cursor-pointer px-5 py-3 sm:px-6 sm:py-4 md:py-5 md:px-8 lg:py-6 lg:px-12 xl:px-14 xl:py-6 transition-all duration-300 mx-auto md:mx-0"
          >
            <p className='whitespace-nowrap'>ADMISSION OPEN </p> 
            {/* blinking star image */}
            <img src={assets.blinkingNew} className='w-7 h-7 sm:w-8 sm:h-8 lg:w-12 lg:h-12 '  alt=''/>
          </button>

          <p className="text-2xl sm:text-4xl md:text-4xl lg:text-[44px] xl:text-6xl text-center text-yellow-300 font-semibold">
            For LL.B. Course
          </p>
          </div>

        </div>


        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src={assets.HomeHeaderImage}
            alt="Header Illustration"
            className="xl:mt-8 lg:mt-5 h-[240px] w-[310px] xs:h-60 xs:w-60 sm:h-96 sm:w-80 md:w-auto md:h-[400px] lg:h-[500px] xl:h-[460px]"
          />
        </div>
      </div>

    </div>
  )
}

export default HomeHeader
