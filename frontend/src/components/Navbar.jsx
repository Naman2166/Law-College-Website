import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const bottomNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
    { to: '/admission', label: 'Admission' },
    { to: '/academics', label: 'Academics' },
    { to: '/library', label: 'Library' },
    { to: '/student-corner', label: 'Student Corner' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact-us', label: 'Contact Us' },
  ];


  const TopNavLinks = [
    { label: '+91 68298088', icon: <FaPhoneAlt /> },
    { label: '6291934548 ', icon: <FaPhoneAlt /> },
    { label: 'blcpune2003@gmail.com', icon: <FaEnvelope /> },
    { to:'https://www.naac.gov.in/' , label: 'NAAC' },
    { to:'https://www.ugc.ac.in/' , label: 'UGC' },
    { to: 'https://www.instagram.com', label: '', icon: <FaInstagram  /> },
    { to: "https://www.facebook.com", label: '', icon: <FaFacebookF  /> },
  ];





  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-md bg-white">
      <div className="lg:flex lg:flex-col text-sm bg-white">


        {/* Top Nav */}
        <div className="hidden lg:flex justify-center items-center gap-16 py-0.5 px-7 bg-[#0b0360]">
          <ul className="text-white text-[13px] flex flex-wrap gap-10 xl:gap-12 ">
            {TopNavLinks.map(({ to = '#', label, icon }, index) => (
              <NavLink
                key={label + index}
                to={to}
                onClick={() => scrollTo(0, 0)}
                className={({ isActive }) =>
                  `text-decoration-none flex flex-col items-center hover:scale-105 transition-all ease-in-out duration-300 ${isActive ? '' : ''}` }
              >
                <li className="py-1 whitespace-nowrap flex items-center justify-center gap-2">
                  {icon && <span className="text-sm pt-0.5 pb-0">{icon}</span>}
                  {label}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>



        {/* Middle nav */}
        <div className="flex justify-between lg:justify-center items-center h-15 sm:h-20 px-3.5 lg:px-4 pt-1.5 pb-0 bg-white">
          {/* Logo */}
          <div>
            <img
              src={assets.NavbarImage}
              className="h-13 sm:h-16 md:h-18 lg:h-[85px] w-auto"
              alt="Logo"
            />
          </div>


          {/* Hamburger Icon */}
          <div className="lg:hidden flex items-center">
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-3xl sm:text-3xl text-[#1245A8] mr-1 cursor-pointer"
            />
          </div>
        </div>


        {/* Desktop Nav / Bottom nav */}
        <div className="hidden lg:flex justify-center items-center gap-16 py-3 px-7 bg-[#0b0360]">
          <ul className="text-white text-[15px] flex flex-wrap gap-10 xl:gap-14 font-semibold">
            {bottomNavLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => scrollTo(0, 0)}
                className={({ isActive }) =>
                  `text-decoration-none flex flex-col items-center hover:scale-105 transition-all ease-in-out duration-300 ${isActive
                    ? 'underline underline-offset-8 decoration-2 decoration-gray-300'
                    : ''
                  }`
                }
              >
                <li className="py-1 whitespace-nowrap">{label}</li>
              </NavLink>
            ))}
          </ul>
        </div>


        {/* Mobile Menu */}
        {showMenu && (
          <div className="lg:hidden flex flex-col items-start gap-6 bg-[#0b0360] text-gray-200 px-6 py-4 font-semibold text-[15px] z-50">
            {bottomNavLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `hover:text-white hover:scale-110 ${isActive
                    ? 'underline underline-offset-4 decoration-white'
                    : ''
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
