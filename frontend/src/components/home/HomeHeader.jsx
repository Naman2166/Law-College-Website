import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import useIsMobile from '../../hooks/useIsMobile'


const HomeHeader = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();       //defined  in src/hooks/useMobile.js
  

  //motion for mobile and desktop screen
  const containerMotion = {
    initial: isMobile
      ? { scale: 1, opacity: 1 }
      : { scale: 1.08, opacity: 0.8 },
    whileInView: { scale: 1, opacity: 1 },
    transition: {
      duration: isMobile ? 0.7 : 1.5,
      ease: 'easeOut',
    },
  };




  return (
    <motion.div
      initial={containerMotion.initial}
      whileInView={containerMotion.whileInView}
      transition={containerMotion.transition}
      className="bg-cover max-lg:bg-center flex justify-center lg:justify-start items-center w-full px-8 py-9
        sm:px-6 sm:py-10 md:px-10 lg:px-10 min-h-[350px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[550px] xl:min-h-[570px]"
      style={{ backgroundImage: `url(${assets.Law2})` }}
    >
      <div className="flex flex-row justify-center lg:justify-start items-center gap-5 sm:gap-10 md:gap-20 max-w-7xl w-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-white text-center flex flex-col justify-center items-center gap-8 sm:gap-14"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[28px] sm:text-4xl md:text-4xl lg:text-[40px] xl:text-[55px] font-semibold leading-tight"
          >
            Your Legal Journey <br className="hidden md:block" /> Begins Here
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center flex flex-col justify-center items-center gap-5"
          >
            <button
              onClick={() => navigate('/admission')}
              className="flex flex-row justify-center items-center gap-3 sm:gap-5 bg-[#09024f] hover:bg-[#061183] text-[20px] 
              whitespace-nowrap sm:whitespace-normal sm:text-3xl md:text-3xl lg:text-[35px] xl:text-[37px] font-semibold rounded-md 
              cursor-pointer px-5 py-3 sm:px-6 sm:py-4 md:py-5 md:px-8 lg:py-4 lg:px-10 xl:px-10 xl:py-4 transition-all duration-300"
            >
              <p className="whitespace-nowrap">ADMISSION OPEN</p>
            </button>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-4xl lg:text-[44px] xl:text-[52px] text-amber-400 sm:text-amber-500 font-semibold"
            >
              For LL.B. Course
            </motion.p>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default HomeHeader







 {/*  Right Image */}
        {/* <div className="flex justify-center items-center">
          <img
            src={assets.HomeHeaderImage}
            alt="Header Illustration"
            className="xl:mt-8 lg:mt-5 h-[240px] w-[310px] xs:h-60 xs:w-60 sm:h-96 sm:w-80 md:w-auto md:h-[400px] lg:h-[420px] xl:h-[440px]"
          />
        </div> */}