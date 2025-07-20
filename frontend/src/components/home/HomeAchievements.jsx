import React from 'react'
import {
  FaTrophy,
  FaChalkboardTeacher,
  FaBuilding,
  FaRegClock
} from 'react-icons/fa'
import {motion} from 'framer-motion'

const achievements = [
  {
    value: "30+",
    label: "Awarded in Various Fields",
    icon: <FaTrophy className="absolute text-blue-900 opacity-10 text-[130px] z-0" />
  },
  {
    value: "25+",
    label: "Expert Faculties",
    icon: <FaChalkboardTeacher className="absolute text-blue-900 opacity-10 text-[130px] z-0" />
  },
  {
    value: "30+",
    label: "Recruiter Companies",
    icon: <FaBuilding className="absolute text-blue-900 opacity-10 text-[130px] z-0" />
  },
  {
    value: "15+",
    label: "Years Of Experience",
    icon: <FaRegClock className="absolute text-blue-900 opacity-10 text-[130px] z-0" />
  }
]

const HomeAchievements = () => {
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="flex flex-col justify-center items-center gap-10">
        <p className="text-4xl font-bold">Achievements</p>

        {/* card conatiner */}
        <div className="w-full text-center grid grid-cols-2 md:grid-cols-4 gap-4">

          {achievements.map((item, index) => (
            //--card---
            <div>
              
              <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                // viewport={{ once: false, amount: 0.3 }}
                key={index}
                className="relative flex flex-col items-center justify-center gap-3 p-6 py-10 bg-white overflow-hidden"
              >
                  {/* Background Icon */}
                  {item.icon}

                  {/* Foreground Content */}
                  <div className="relative z-10">
                    <p className="text-6xl text-blue-900 font-bold">{item.value}</p>
                  </div>
              </motion.div>
                
                {/* label */}
               <div className="relative z-10 font-medium text-gray-900 text-center">{item.label}</div>
            
            </div>
          ))}

          {/* {achievements.map((item, index) => (
<div className="relative z-10 font-medium text-gray-900 text-center">{item.label}</div>
          ))} */}

        </div>


      </div>
    </div>
  )
}

export default HomeAchievements
