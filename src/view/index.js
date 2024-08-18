import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import ContactUs from './Components/ContactUs'

function View() {
  return (
    <>
    <div>
    <Routes>
       
       <Route path='/' element={<Home />} />
       <Route path='about' element={<About />} />
       <Route path='contactUs' element={<ContactUs />} />

       
     </Routes>
    </div>
    </>
  )
}

export default View
