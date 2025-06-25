import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);  // Toggle menu on mobile

    return (
        <div className="w-full">

            {/* Top Navbar */}
            <div className='xl:flex xl:flex-row bg-[#1245A8] text-sm'>

                <div className='flex justify-between items-center h-16 sm:h-20 bg-white px-2 lg:px-4 py-3 pr-6 lg:pr-16 xl:[clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)]'>

                    {/* Left - college Logo and Info */}
                    <div className='flex justify-center items-center gap-1 md:gap-3'>
                        <img className='w-10 md:w-14 h-auto cursor-pointer' src={assets.college_logo} alt='' />

                        <div className='flex flex-col items-start justify-center text-[5.5px] sm:text-[6px] lg:text-[6.5px]'>
                            <p className='text-red-600 text-[7px] sm:text-[8.5px] lg:text-[9px] font-semibold'>Sri Balaji Society's</p>
                            <p className='text-orange-600 text-[8.5px] sm:text-[10px] lg:text-[10.5px] font-semibold'>Balaji Law College (BLC) - Pune</p>
                            <p className='font-medium font-semibold'>Affiliated to SavitriBai Phule Pune University, Recognised <br /> by Government of Maharastra & Bar Council of India</p>
                            <p className='text-blue-900 text-[8px] sm:text-[9px] lg:text-[9.5px] font-semibold'>NAAC Accredited <span className='sm:mx-1'> | </span> AISHE CODE : C-42094</p>
                        </div>

                        {/* vertical line */}
                        <div className="border-l-1 border-gray-400 h-9 md:h-10"></div>

                        {/* university logo */}
                        <img className='w-10 sm:w-14 h-auto cursor-pointer ml-2 lg:ml-5' src={assets.university_logo} alt='' />
                    </div>

                    
                    
                        {/* Hamburger icon for mobile */}
                        <div className="xl:hidden flex items-center mr-0 md:mr-2">
                            <FaBars onClick={() => setShowMenu(!showMenu)} className="text-3xl md:text-4xl text-[#1245A8] cursor-pointer" />
                        </div>
                    

                </div>


                {/* Desktop Menu */}
                <div className='hidden xl:flex flex-row items-center gap-16 py-3 px-7 mx-auto bg-[#1245A8]'>
                    <ul className='text-white text-[16px] lg:text-[14px] xl:text-[16px] flex justify-between gap-5 xl:gap-13 font-bold'>
                        <NavLink to='/' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 hover:text-black font-bold whitespace-nowrap'>Home</li>
                        </NavLink>
                        <NavLink to='/about-us' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 hover:text-black font-bold whitespace-nowrap'>About Us</li>
                        </NavLink>
                        <NavLink to='/admission' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 hover:text-black font-bold whitespace-nowrap'>Admission</li>
                        </NavLink>
                        <NavLink to='/academics' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 hover:text-black font-bold whitespace-nowrap'>Academics</li>
                        </NavLink>
                        <NavLink to='/library' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 hover:text-black font-bold whitespace-nowrap'>Library</li>
                        </NavLink>
                        <NavLink to='/student-corner' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 hover:text-black font-bold whitespace-nowrap'>Student Corner</li>
                        </NavLink>
                        <NavLink to='/gallery' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 hover:text-black font-bold whitespace-nowrap'>Gallery</li>
                        </NavLink>
                        <NavLink to='/contact-us' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 hover:text-black font-bold whitespace-nowrap'>Contact Us</li>
                        </NavLink>
                    </ul>
                </div>

                {/* Mobile Menu (only when showMenu is true) */}
                {showMenu && (
                    <div className='xl:hidden flex flex-col items-start gap-4 bg-[#1245A8] text-white px-6 py-4 font-semibold text-[15px]'>
                        <NavLink to='/' onClick={() => setShowMenu(false)} className="hover:text-black font-bold " >Home</NavLink>
                        <NavLink to='/about-us' onClick={() => setShowMenu(false)} className="hover:text-black font-bold" >About Us</NavLink>
                        <NavLink to='/admission' onClick={() => setShowMenu(false)} className="hover:text-black font-bold" >Academics</NavLink>
                        <NavLink to='/library' onClick={() => setShowMenu(false)} className="hover:text-black font-bold" >Library</NavLink>
                        <NavLink to='/student-corner' onClick={() => setShowMenu(false)} className="hover:text-black font-bold" >Student Corner</NavLink>
                        <NavLink to='/gallery' onClick={() => setShowMenu(false)} className="hover:text-black font-bold" >Gallery</NavLink>
                        <NavLink to='/contact-us' onClick={() => setShowMenu(false)} className="hover:text-black font-bold" >Contact Us</NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
