import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaHome, FaGraduationCap, FaPlay, FaPhone, FaInfoCircle, FaBook, FaSearch, FaBars } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)           // for showing menu in mobile view , when its "true", menu will appear  and if "false" it will not appear



    return (
        <div>

            {/* menu (for larger screen) */}
            <div className='flex bg-[#1245A8] text-sm '>

                {/* left part */}
                <div className='w-1/3 flex flex-row justify-between h-auto bg-white px-4'>

                    <div className='flex flex-row justify-between gap-5'>
                        
                        <div className='flex justify-center items-center'>
                        <img onClick={() => { navigate('/') }} className='w-32 h-auto cursor-pointer' src={assets.logo_full} alt='' />
                        </div>

                        <div className='flex flex-col'>
                            <p>hello</p>
                            <p>hello</p>
                            <p>hello</p>
                            <p>hello</p>
                        </div>
                    </div>

                    <div>
                        <p>LOGO</p>
                    </div>

                </div>



                {/* right part */}
                <div className='flex items-center gap-16 py-5 px-7'>

                    {/* NavLink */}
                    <ul className='hidden text-white text-[16px] md:flex justify-between gap-5 lg:gap-13 font-bold'>
                        <NavLink to='/' className="text-decoration-none flex flex-col items-center hover:scale-105 ">
                            <li className='py-1'>Home</li>
                        </NavLink>
                        <NavLink to='/about-us' className="text-decoration-none flex flex-col items-center hover:scale-105 ">
                            <li className='py-1'>About Us</li>
                        </NavLink>
                        <NavLink to='/admission' className="text-decoration-none flex flex-col items-center hover:scale-105 ">
                            <li className='py-1 '>Admission</li>
                        </NavLink>
                        <NavLink to='/academics' className="text-decoration-none flex flex-col items-center hover:scale-105 ">
                            <li className='py-1 '>Academics</li>
                        </NavLink>
                        <NavLink to='/library' className="text-decoration-none flex flex-col items-center hover:scale-105 ">
                            <li className='py-1 '>Library</li>
                        </NavLink>
                        <NavLink to='/student-corner' className="text-decoration-none flex flex-col items-center hover:scale-105 ">
                            <li className='py-1'>Student Corner</li>
                        </NavLink>
                        <NavLink to='/gallery' className="text-decoration-none flex flex-col items-center hover:scale-105 ">
                            <li className='py-1'>Gallery</li>
                        </NavLink>
                        <NavLink to='/contact-us' className="text-decoration-none flex flex-col items-center hover:scale-105 ">
                            <li className='py-1'>Contact Us</li>
                        </NavLink>
                    </ul>
                </div>

            </div>




            {/* menu for mobile view */}
            {/* //code */}



        </div>
    )
}

export default Navbar