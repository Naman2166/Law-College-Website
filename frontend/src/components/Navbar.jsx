import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);  // Toggle menu on mobile

    return (
        <div className="w-full">

            <div className='xl:flex xl:flex-row bg-[#023820] text-sm'>

                {/* ------------left part------------ */}
                <div className='flex justify-between items-center h-16 sm:h-20 bg-white px-2 lg:px-3 py-1 pr-6 lg:pr-4'>


                    {/* Navbar Image */}
                    <div>
                        <img src={assets.NavbarImage} className='h-16 lg:h-[60px] xl:h-[75px] w-auto' alt='Logo' />
                    </div>

                    
                        {/* Hamburger icon for mobile */}
                        <div className="xl:hidden flex items-center mr-0 md:mr-2">
                            <FaBars onClick={() => setShowMenu(!showMenu)} className="text-3xl md:text-4xl text-[#1245A8] cursor-pointer" />
                        </div>   

                </div>



                {/* --------------right part or  Desktop Menu---------------- */}
                <div className='hidden xl:flex flex-row items-center gap-16 py-3 px-7 mx-auto bg-[#023820]'>
                    <ul className='text-white text-[16px] lg:text-[14px] xl:text-[16px] flex justify-between gap-5 xl:gap-13 font-bold'>
                        <NavLink to='/' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 font-bold hover:font-extrabold hover:scale-105 whitespace-nowrap'>Home</li>
                        </NavLink>
                        <NavLink to='/about-us' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 font-bold hover:font-extrabold hover:scale-105 whitespace-nowrap'>About Us</li>
                        </NavLink>
                        <NavLink to='/admission' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 font-bold hover:font-extrabold hover:scale-105 whitespace-nowrap'>Admission</li>
                        </NavLink>
                        <NavLink to='/academics' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 font-bold hover:font-extrabold hover:scale-105 whitespace-nowrap'>Academics</li>
                        </NavLink>
                        <NavLink to='/library' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 font-bold hover:font-extrabold hover:scale-105 whitespace-nowrap'>Library</li>
                        </NavLink>
                        <NavLink to='/student-corner' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 font-bold hover:font-extrabold hover:scale-105 whitespace-nowrap'>Student Corner</li>
                        </NavLink>
                        <NavLink to='/gallery' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 font-bold hover:font-extrabold hover:scale-105 whitespace-nowrap'>Gallery</li>
                        </NavLink>
                        <NavLink to='/contact-us' className="text-decoration-none flex flex-col items-center hover:scale-105">
                            <li className='py-1 font-bold hover:font-extrabold hover:scale-105 whitespace-nowrap'>Contact Us</li>
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
