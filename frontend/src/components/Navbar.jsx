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
            <div className='lg:flex lg:flex-row  bg-[#1245A8] text-sm'>

                <div className='flex justify-between items-center h-20 bg-white px-4 py-3 pr-16 lg:[clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)]'>

                    {/* Left - college Logo and Info */}
                    <div className='flex justify-center items-center gap-3'>
                        <img className='w-14 h-auto cursor-pointer' src={assets.college_logo} alt='' />

                        <div className='flex flex-col items-start justify-center text-[6px] lg:text-[6.5px]'>
                            <p className='text-red-600 text-[8.5px] lg:text-[9px] font-semibold'>Sri Balaji Society's</p>
                            <p className='text-orange-600 text-[10px] lg:text-[10.5px] font-semibold'>Balaji Law College (BLC) - Pune</p>
                            <p className='font-medium font-semibold'>Affiliated to SavitriBai Phule Pune University, Recognised <br /> by Government of Maharastra & Bar Council of India</p>
                            <p className='text-blue-900 text-[9px] lg:text-[9.5px] font-semibold'>NAAC Accredited <span className='mx-1'> | </span> AISHE CODE : C-42094</p>
                        </div>

                        {/* vertical line */}
                        <div className="border-l-1  border-gray-400 h-10"></div>

                        {/* university logo */}
                        <img className='w-14 h-auto cursor-pointer ml-2 lg:ml-5' src={assets.university_logo} alt='' />
                    </div>

                    {/* Right - University Logo */}
                    <div>
                        {/* Hamburger icon for mobile */}
                        <div className="lg:hidden flex items-center mr-2">
                            <FaBars onClick={() => setShowMenu(!showMenu)} className="text-4xl text-[#1245A8] cursor-pointer" />
                        </div>
                    </div>

                </div>


                {/* Desktop Menu */}
                <div className='hidden lg:flex  items-center  gap-16 py-3 px-7 mx-auto bg-[#1245A8]'>
                    <ul className='text-white text-[16px] flex justify-between  gap-5 lg:gap-13 font-bold'>
                        <NavLink to='/' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1'>Home</li>
                        </NavLink>
                        <NavLink to='/about-us' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1'>About Us</li>
                        </NavLink>
                        <NavLink to='/admission' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1'>Admission</li>
                        </NavLink>
                        <NavLink to='/academics' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1'>Academics</li>
                        </NavLink>
                        <NavLink to='/library' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1'>Library</li>
                        </NavLink>
                        <NavLink to='/student-corner' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1'>Student Corner</li>
                        </NavLink>
                        <NavLink to='/gallery' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1'>Gallery</li>
                        </NavLink>
                        <NavLink to='/contact-us' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1'>Contact Us</li>
                        </NavLink>
                    </ul>
                </div>

                {/* Mobile Menu (only when showMenu is true) */}
                {showMenu && (
                    <div className='lg:hidden flex flex-col items-start gap-4 bg-[#1245A8] text-white px-6 py-4 font-semibold text-[15px]'>
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
