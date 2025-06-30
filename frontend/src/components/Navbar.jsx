import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
    { to: '/admission', label: 'Admission' },
    { to: '/academics', label: 'Academics' },
    { to: '/library', label: 'Library' },
    { to: '/student-corner', label: 'Student Corner' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-md bg-white">
      <div className="lg:flex lg:flex-col text-sm bg-white">
        
        {/* Top Row */}
        <div className="flex justify-between items-center h-16 sm:h-20 px-4 lg:px-4 py-2 bg-white">
          {/* Logo */}
          <div>
            <img
              src={assets.NavbarImage}
              className="h-12 sm:h-16 md:h-18 lg:h-20 w-auto"
              alt="Logo"
            />
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex gap-4 items-center">
            <button
              onClick={() => navigate('/contact-us')}
              className="bg-white  text-[#0b0360] border-2 border-[#0b0360] cursor-pointer px-6 py-2 rounded-md text-sm font-semibold hover:scale-105  transition duration-300"
            >
              Enquire Now
            </button>
            <button
              onClick={() => navigate('/contact-us')}
              className="bg-[#0b0360] text-white border-2 border-[#0b0360] px-6 py-2 cursor-pointer rounded-md text-sm font-semibold hover:scale-105  transition duration-300"
            >
              Apply Now
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden flex items-center">
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-3xl sm:text-3xl text-[#1245A8] mr-1 cursor-pointer"
            />
          </div>
        </div>


        {/* Desktop Nav */}
        <div className="hidden lg:flex justify-center items-center gap-16 py-3 px-7 bg-[#0b0360]">
          <ul className="text-white text-[15px] flex flex-wrap gap-10 xl:gap-12 font-semibold">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={()=>scrollTo(0,0)}
                className={({ isActive }) =>
                  `text-decoration-none flex flex-col items-center hover:scale-105 transition-all ease-in-out duration-300 ${
                    isActive
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
          <div className="lg:hidden flex flex-col items-start gap-6 bg-[#0b0360] text-gray-200 px-6 py-4 font-semibold text-[15px]">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `hover:text-white hover:scale-110 ${
                    isActive
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
