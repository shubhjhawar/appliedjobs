import React from 'react'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import LeftNav from "./LeftNav.jsx";

const Layout = ({children}) => {
  return (
    <div className='grid grid-cols-8 min-h-screen'>
      <div className="col-span-8 ">
        <Header />
      </div>

      <div className='lg:col-span-2 md:col-span-1 max-sm:hidden block'>
        <LeftNav />
      </div>

      <div className='col-span-6  sm:h-4/5' >
        {children}
      </div>

      <div className="col-span-8 max-sm:block hidden mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Layout