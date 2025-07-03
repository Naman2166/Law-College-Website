import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      className='text-white bg-cover bg-center w-full px-6 sm:px-10 min-h-[300px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[440px] xl:min-h-[460px]'
      style={{ backgroundImage: `url(${assets.FooterBg})`}}
    >
      <div className='grid grid-cols-2 md:flex md:flex-row justify-evenly gap-12 sm:gap-16 py-20 sm:px-5 text-sm'>

        {/* Left Section */}
        <div>
          <p className="text-xl font-bold mb-3">Get In Touch With Us</p>
          <hr className="mb-3 border-gray-400" />
          <ul className="flex flex-col text-gray-300 gap-4">
            <li className="flex flex-col sm:flex-row items-start gap-2">
              <FaMapMarkerAlt className="text-lg mt-1" />
              <span>
                Samarth Vidya Sankul, Vishnupuri, Talegaon Dabhade, <br />
                Pune, Maharashtra 410507
              </span>
            </li>
            <li className="flex flex-col sm:flex-row items-start gap-2">
              <FaPhoneAlt className="text-lg" />
              <span>020-6291934548 / 34 / 33 / 9168290808</span>
            </li>
            <li className="flex flex-col sm:flex-row items-start gap-2">
              <FaEnvelope className="text-lg" />
              <span>blcpune2003@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Center Section */}
        <div>
          <p className='text-xl font-bold mb-3'>Quick Links</p>
          <hr className='mb-3 border-gray-400' />
          <ul className='flex flex-col text-gray-300 gap-2 mb-6'>
            <li onClick={()=>scrollTo(0,0)}><Link to="/about-us" className='hover:underline'>About</Link></li>
            <li onClick={()=>scrollTo(0,0)}><Link to="/academics" className='hover:underline'>Academics</Link></li>
            <li onClick={()=>scrollTo(0,0)}><Link to="/admission" className='hover:underline'>Admission</Link></li>
            <li onClick={()=>scrollTo(0,0)}><Link to="/gallery" className='hover:underline'>Gallery</Link></li>
            <li onClick={()=>scrollTo(0,0)}><Link to="/contact-us" className='hover:underline'>Contact Us</Link></li>
          </ul>

          <div>
            <p className='text-xl font-bold mb-3'>SSKLC's</p>
            <hr className='mb-3 border-gray-400' />
            <ul className='flex flex-col text-gray-300'>
              <li><Link to="/frontend/src/pages/AboutUs.jsx" className='hover:underline'>About SSKLC's</Link></li>
            </ul>
          </div>
        </div>

        {/* Important Links Section */}
        <div>
          <p className='text-xl font-bold mb-3'>Important Links</p>
          <hr className='mb-3 border-gray-400' />
          <ul className='flex flex-col text-gray-300 gap-2 mb-6'>
            <li><a href="https://www.barcouncilofindia.org/" target="_blank" rel="noopener noreferrer" className='hover:underline'>Bar Council of India (BCI)</a></li>
            <li><a href="https://www.ugc.ac.in/" target="_blank" rel="noopener noreferrer" className='hover:underline'>UGC</a></li>
            <li><Link to="/anti-ragging" className='hover:underline'>Anti-Ragging Policy</Link></li>
            <li><a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer" className='hover:underline'>NAAC</a></li>
            <li><Link to="/emergency-helpline" className='hover:underline'>Emergency Helpline</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='flex flex-col md:flex-row gap-12 sm:gap-8 md:block'>
          <div>
            <p className='text-xl font-bold mb-3 whitespace-nowrap'>Student Corner</p>
            <hr className='mb-3 border-gray-400' />
            <ul className='flex flex-col gap-2 text-gray-300 mb-6'>
              <li onClick={()=>scrollTo(0,0)}><Link to="/syllabus" className='hover:underline'>Syllabus</Link></li>
              <li onClick={()=>scrollTo(0,0)}><Link to="/library" className='hover:underline'>Library</Link></li>
              <li onClick={()=>scrollTo(0,0)}><Link to="/committee" className='hover:underline'>Committee</Link></li>
              <li onClick={()=>scrollTo(0,0)}><Link to="/admission" className='hover:underline'>Admission</Link></li>
              <li onClick={()=>scrollTo(0,0)}><Link to="/infrastructure" className='hover:underline'>Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-bold mb-3 whitespace-normal'>Follow us on social media</p>
            <hr className='mb-3 border-gray-400' />
            <ul className='flex flex-row gap-3 text-gray-300'>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="hover:text-blue-500 text-2xl cursor-pointer" /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-500 text-2xl cursor-pointer" /></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="hover:text-red-500 text-2xl cursor-pointer" /></a>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;
