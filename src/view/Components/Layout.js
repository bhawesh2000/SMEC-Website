import React from 'react'
import Header from './Header'
import View from '..'
import Footer from './Footer'

function Layout() {
  return (
    <>
    
    <div className="flex flex-col h-screen gap-4">
      <div className=' fixed top-0 left-0 right-0 z-50'>
        <Header />
      </div>
      <div className=" grid mt-24 ">
        <View />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </>
    
  )
}

export default Layout
