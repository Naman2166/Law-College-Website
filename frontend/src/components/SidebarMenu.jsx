// src/components/SidebarMenu.jsx
import React from 'react'
import { Link } from 'react-router-dom' // Optional, if you're using routing

const SidebarMenu = () => {
  const menuItems = [
    { label: 'About the Institution', path: '/about/institution' },
    { label: 'Vision and Mission', path: '/about/vision' },
    { label: 'What makes SSK Law College Special', path: '/about/special' },
    { label: 'Founder Message', path: '/about/founder' },
    { label: "Principal's Message", path: '/about/principal' },
    { label: 'Committees', path: '/about/committees' },
  ]

  return (
    <div className="bg-gray-100 shadow-md w-full max-w-md">
      {menuItems.map((item, index) => (
        <Link 
          key={index} 
          to={item.path} 
          className="flex justify-end py-2 px-3 rounded hover:bg-white text-gray-800 font-medium pt-16px pl-32px"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default SidebarMenu
