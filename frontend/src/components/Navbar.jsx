import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);        //mobile view
  const [isMenuOpen, setIsMenuOpen] = useState(false);    //desktop view
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);      //Active page for showing dropdown menu
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);     //for mobile submenu


  const bottomNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us', arrow: true },
    { to: '/admission', label: 'Admission', arrow: true },
    { to: '/academics', label: 'Academics' },
    { to: '/library', label: 'Library' },
    { to: '/student-corner', label: 'Student Corner', arrow: true },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact-us', label: 'Contact Us' },
  ];


  const TopNavLinks = [
    // { label: 'Pune', icon: <FaMapMarkerAlt /> },
    { label: '+91-7030082408', icon: <FaPhoneAlt /> },
    { label: 'adv.sskvm@gmail.com', icon: <FaEnvelope /> },
    // { to: 'https://www.ugc.ac.in/', label: 'UGC' },
    // { to: 'https://www.instagram.com', label: '', icon: <FaInstagram /> },
    // { to: "https://www.facebook.com", label: '', icon: <FaFacebookF /> },
  ];


  const subMenus = {
    'About Us': [
      { label: 'About the Institution', to: '/about-us#about-institution' },
      { label: 'Vision and Mission ', to: '/about-us#vision-mission' },
      { label: 'What makes SSK Law College Special', to: '/about-us#special' },
      { label: 'Secretary Desk', to: '/about-us#secretary-desk' },
      { label: "Principal's Message", to: '/about-us#principal-message' },
      { label: 'NMVPM Trust', to: '/about-us#nmvpm-trust' },         //new
      { label: 'Affiliations & Recognitions', to: '/about-us#affiliations-recognitions' },  //new
    ],
    'Admission': [
      { label: 'Eligibility', to: '/admission#eligibility' },
      { label: 'Admission Procedure', to: '/admission#admission-procedure' },
      { label: 'Fee Structure', to: '/admission#fee-structure' },
      { label: 'Fee Refund Policy', to: '/admission#refund-policy' },      //new
      { label: 'Rules and Regulations', to: '/admission#rules' },
      { label: 'Document Required', to: '/admission#document-required' },      //new
      { label: 'Information Brochure', to: '/admission#information-brochure' },   //new
    ],
    'Student Corner': [
      { label: 'Sports Facilty', to: '/student-corner#sports-facility' },     //new
      { label: 'Hospital MOU', to: '/student-corner#hospital-mou' },       //new
      { label: 'Hostel Details', to: '/student-corner#hostel-details' },     //new
      { label: 'Transport', to: '/student-corner#transport' },         //new
    ],
  };

  //logo word spacing (responsive)
  const wordSpacingStyle = window.innerWidth < 640
  ? '0px'
  : window.innerWidth < 768
  ? '1px'
  : '1px';



  return (
    <div className=" w-full fixed top-0 left-0 z-50 shadow-sm shadow-gray-500 bg-white">

      {/* Moving Top Nav */}
      {/* <div className="hidden lg:flex justify-end items-center gap-16 py-0.5 bg-[#05052e] overflow-hidden">
        <motion.p
          className="text-white whitespace-nowrap"
          animate={{ x: ['100%', '-750%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear'
          }}
        >
          Admission open 2025-2026
        </motion.p>
      </div> */}


      {/* Top Navbar */}
      <div className="hidden lg:flex justify-end items-center gap-16 py-0.5 bg-[#05052e] ">   {/* original : bg-[#0b0360]*/}
        <ul
          className="text-white text-[13px] flex flex-wrap gap-8 xl:gap-8 px-16">
          {TopNavLinks.map(({ to = '#', label, icon }, index) => (
            <div className="flex items-center" key={label + index}>
              <NavLink
                to={to}
                onClick={() => scrollTo(0, 0)}
                className={({ isActive }) =>
                  `text-decoration flex flex-row items-center hover:scale-105 transition-all ease-in-out duration-300 ${isActive ? '' : ''
                  }`}
              >
                <li className="py-1 whitespace-nowrap flex items-center justify-center gap-2">
                  {icon && <span className="text-[13px] pt-0.5">{icon}</span>}
                  {label}
                </li>
              </NavLink>

              {/* Add divider only if it's not the last item */}
              {index !== TopNavLinks.length - 1 && (
                <div className="mx-4 text-gray-400 text-[16px]">|</div>
              )}
            </div>
          ))}
        </ul>
      </div>



      {/* old :- bottom nav,  new :- middle + bottom nav */}
      <div className="lg:flex lg:flex-col justify-between  text-sm bg-white">               {/* previous color : bg-[#0b0360] */}

        {/* old :- Left part , new :- middle nav*/}
        <div className="flex justify-between lg:justify-center items-center h-[58px] sm:h-[75px] md:h-[85px] lg:h-[110px] xl:h-[110px] px-2 sm:px-1.5 lg:px-2 pt-1 sm:pt-0 pb-0 bg-white">
          {/* Logo */}


          {/*desktop view middle nav*/}
          <div className='flex justify-center gap-x-1 sm:gap-x-1.5 md:gap-x-2.5 lg:gap-x-5 md:p-1'>
            
            <img
              src={assets.logo}
              className="h-[44px] sm:h-[64px] md:h-[70px] lg:h-[105px] w-auto cursor-pointer"
              alt="Logo"
              onClick={() => navigate("/")}
            />

            <div className='flex flex-col items-center justify-center gap-y-0.5 sm:gap-1 '>
              <p className='text-green-900 text-[5.5px] sm:text-[7px] md:text-[8px] lg:text-[13px] font-semibold' style={{ wordSpacing: wordSpacingStyle }}>Nutan Maharashtra Vidya Prasarak Mandal's</p>
              <p className='text-blue-700 text-[7.5px] sm:text-[9px] md:text-[10px] lg:text-[19px] font-bold' style={{ wordSpacing: wordSpacingStyle }}>Late. Adv. Ku. Shalaka Santosh Khandge Law College</p>
              <p className='text-black text-[5.5px] sm:text-[7px] md:text-[8px] lg:text-[13px] font-semibold text-center leading-tight' style={{ wordSpacing: '0.5px' }}>Affliate to Savitribai Phule Pune University, Recognized by <br/> Govt. of Maharashtra & Bar Council of India</p>
            </div>

            <img
              src={assets.NavLogo_right}
              className="h-[46px] sm:h-[64px] md:h-[70px] lg:h-[105px] w-auto cursor-pointer"
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </div>



          {/*Mobile view middle nav */}
          {/* <div className='hidden'>
            <img
              src={assets.NavbarImage}
              className="h-[50px] sm:h-[64px] md:h-[70px] lg:h-[110px] w-auto lg:w-[485px] cursor-pointer"
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </div> */}


          {/* Hamburger Icon */}
          <div className="lg:hidden flex items-center">
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-3xl sm:text-4xl text-[#1245A8] cursor-pointer"
            />
          </div>
        </div>


        {/* NavLinks => old :- Right part , new :- bottom nav */}

        <div className="relative hidden lg:flex justify-center items-center gap-16  py-3 px-5 bg-[#05052e]">
          <ul className="text-gray-100 text-[14px] flex flex-wrap gap-8 xl:gap-12 font-semibold">
            {bottomNavLinks.map(({ to, label, arrow }, index) => (
              <div
                key={to}
                className="relative flex flex-col items-center"
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setIsMenuOpen(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsMenuOpen(false);
                }}
              >

                {/* Navlink */}
                <NavLink
                  to={to}
                  onClick={() => scrollTo(0, 0)}
                  className={({ isActive }) =>
                    `text-decoration-none flex flex-col items-center hover:scale-105 transition-all ease-in-out duration-300 px-1 ${isActive
                      ? "underline underline-offset-8 decoration-2 decoration-gray-400"
                      : ""
                    }`
                  }
                >

                  {/* Navlink & arrow icon */}
                  <div className="flex items-center gap-1.5">
                    <li className="py-3 whitespace-nowrap">{label}</li>
                    {arrow &&
                      (hoveredIndex === index ? (
                        <FaChevronUp className="text-gray-100" />
                      ) : (
                        <FaChevronDown className="text-gray-100" />
                      ))}
                  </div>
                </NavLink>


                {/* Submenu Dropdown */}
                <AnimatePresence>
                  {arrow &&
                    isMenuOpen &&
                    hoveredIndex === index &&
                    subMenus[label] && (
                      <motion.div
                        initial={{ y: '10%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
                        exit={{ y: '4%', opacity: 0, transition: { duration: 0.3 } }}
                        className="absolute top-full -mt-2 pt-3 w-60 bg-transparent">
                        <div className='bg-white rounded-b-lg shadow-lg z-50 py-0 border-t-[5px] border-t-[#1245A8]'>      {/* original : border-t-[#0d0d5a] */}
                          {subMenus[label].map((item, idx) => (
                            <motion.div
                              key={idx}
                              onClick={() => {
                                setActiveIndex(idx);
                                setIsMenuOpen(false);
                                navigate(item.to);
                              }}
                              className={` flex flex-col cursor-pointer text-[13px] font-normal text-gray-900 hover:bg-gray-200 hover:text-gray-800 hover:font-semibold  transition ${activeIndex === idx
                                ? ""
                                : ""
                                }`}
                            >
                              <p className='border-b border-b-gray-500 py-4 px-2 mx-3'> {item.label} </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>

              </div>
            ))}
          </ul>

        </div>



        {/* Mobile Sidebar Menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 200, damping: 30 }}
              className="lg:hidden fixed inset-y-0 right-0 w-[60%] bg-gray-50 text-gray-900 px-4 py-4 font-semibold text-[15px] z-50 flex flex-col gap-3 shadow-md"
            >

              <div className="flex items-center justify-between  pb-[0.6rem] border-b border-b-gray-500 ">

                <img
                  src={assets.logo}
                  alt="logo"
                  className="h-7 w-auto cursor-pointer"
                  onClick={() => {
                    setShowMenu(false);
                    navigate('/');
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowMenu(false)}
                  className="text-3xl font-bold"
                >
                  ×
                </button>
              </div>


              {bottomNavLinks.map(({ to, label, arrow }) => (
                <div key={to} className="w-full px-1 ">
                  <div
                    onClick={() => {
                      if (arrow) {
                        setOpenMobileDropdown(openMobileDropdown === label ? null : label);
                      } else {
                        setShowMenu(false);
                        navigate(to);
                      }
                    }}
                    className="flex items-center justify-between py-2 cursor-pointer text-gray-800 hover:text-blue-800"
                  >
                    <span className="font-semibold">{label}</span>
                    {arrow && (
                      openMobileDropdown === label
                        ? <FaChevronUp className="text-gray-600" />
                        : <FaChevronDown className="text-gray-600" />
                    )}
                  </div>

                  {/* Mobile Submenu dropdown */}
                  <AnimatePresence>
                    {arrow && openMobileDropdown === label && subMenus[label] && (
                      <motion.div
                        initial={{ opacity: 0.5, y: -7 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0.5, y: -7 }}
                        transition={{ duration: 0.4 }}
                        className="px-4 py-2 flex flex-col gap-2"
                      >

                        {subMenus[label].map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setShowMenu(false);
                              setOpenMobileDropdown(null);
                              navigate(item.to);
                              scrollTo(0, 0)
                            }}
                            className="text-sm text-gray-600 hover:text-blue-700 py-1 "
                          >
                            {item.label}
                            {/* <hr className='text-gray-400 mt-1' /> */}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>


                </div>
              ))}


            </motion.div>
          )}
        </AnimatePresence>



      </div>


    </div>
  );
};

export default Navbar;
