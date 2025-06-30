import React from 'react'
import { assets } from '../../assets/assets'

const HomePrincipleMessage = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-16 bg-white">

      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-10">

        {/* Text Section - 60% */}
        <div className="w-full lg:w-[50%] space-y-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-black">Principle's Message</h1>

          <p className="text-md sm:text-[13px] text-gray-600 font-medium ">
          I am pleased and enthusiastic to welcome you in Late.Adv. Ku. Shalaka Santosh Khandge Law for the 2025–26 academic
 year. As the principal of this esteemed college, I will endeavor to cultivate a community where both students and staff
 can flourish in an environment that prioritizes integrity, equity, and ethical thinking. Alongside obtaining the requisite technical skills and knowledge for legal practice, our college fosters in its students a deep commitment to social justice and an aspiration to effectuate constructive change in the world. Guiding our students to achieve their utmost potential is the primary vocation of our educators, who are all experienced scholars and professionals.  I trust you will embark on your academic endeavor with a positive and resolute mindset, prepared to confront any challenges that arise. Remember that mastering the intricacies of the law constitutes only half the challenge; the other half involves understanding the extensive implications the law has on individuals and communities.  We must consistently pursue the highest standards of academic rigor, ethical conduct, and professional excellence.
          </p>

          <button className='bg-green-900 text-sm text-white px-3 py-1.5  rounded-sm'>Read More</button>
        </div>


        {/* Image Section - 40% */}
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center">
          <img
            src={assets.sns}
            alt="About Us"
            className="w-[70%] h-auto object-cover rounded-md shadow-lg"
            loading="lazy"
          />
          <h1 className='text-lg font-bold text-blue-700 mt-1'>Dr S.N.Sapali</h1>
          <p className='font-light text-sm'>B.S.L., L.L.B., L.L.M., SET, PH.D - Principal</p>
        </div>

      </div>
    </div>
  )
}

export default HomePrincipleMessage