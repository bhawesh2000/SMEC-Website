import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';

function Header() {
  return (
    <div className="bg-[#001F4D] p-2 w-full">
    <nav className="flex justify-between items-center ">
      <div className="flex items-center">
        <img src="/img/SMEC_logo.png" alt="Logo" className="h-14 w-auto  rounded-full  object-contain" />
      </div>
      
      <div className="flex space-x-4 mr-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? ' text-[#32cedc] font-bold'
              : 'text-white font-bold hover:text-[#85daf6]'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-[#32cedc] font-bold'
              : 'text-white font-bold hover:text-[#85daf6]'
          }
        >
          About Us
        </NavLink>
        <Link
          to="footer"
          smooth={true} 
          duration={500}
          className="text-white font-bold hover:text-[#85daf6]"
         
        >
          Contact Us
        </Link>
        
        
      </div>
    </nav>
  </div>
  )
}

export default Header
