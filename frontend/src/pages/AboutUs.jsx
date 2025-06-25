// src/pages/AboutUs.jsx
import React from 'react'
import { assets } from '../assets/assets'
import SidebarMenu from '../components/SidebarMenu'

const AboutUs = () => {
  return (
    <div className="">
      {/* Top Image */}
      <div className="">
        <img 
          src={assets.about} 
          alt="About Us" 
          className="w-full h-auto shadow-md"
        />
      </div>
      {/* Sidebar-like Navigation (below image) */}
      <SidebarMenu />
    </div>
  )
}

export default AboutUs
