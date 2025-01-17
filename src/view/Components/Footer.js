import React from 'react'
import { IconName } from "react-icons/hi";
import { GrLocationPin } from "react-icons/gr";
import { BsTelephoneInbound } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
  return (
    <div id="footer">
      <div className="p-6 bg-gray-100  text-[#42474B] w-full mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h2>
    <h3 className='font-semibold mb-2 text-[#001F4D]'>SMEC PVT. LTD.</h3>
    <div className="space-y-4 ">
        {/* <div className="flex items-center  gap-2">
            <GrLocationPin />
            <span className="text-gray-700">86 Milan Appartments Pitampura, Delhi, 110034</span>
        </div> */}
        <div className="flex items-center  gap-2">
        <IoMailOutline />
            <a href="mailto:write2mec@gmail.com" className="text-blue-600 hover:underline">info@smecindia.co.in</a>
        </div>
        <div className="flex items-center gap-2">
            <BsTelephoneInbound />
            <div className='flex flex-row '>
            <a href="tel:+91 9560347342" className="text-blue-600 hover:underline">+91 9654767163
              <span className='mx-2'>,</span>
            </a>
            <a href="tel:+91 9560347342" className="text-blue-600 hover:underline">+91 9560347342</a>

            </div>
            
        </div>
    </div>
</div>
    </div>
  )
}

export default Footer
