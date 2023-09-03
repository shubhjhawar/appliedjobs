import React from 'react';
import logo from '../assets/logo-color.svg';

const Header = () => {
  return (
    <div className="bg-blue-400 p-8 lg:px-20 md:px-10">
      <div className="flex flex-1 justify-between">
      <div className='flex inline-flex gap-4 items-center'>
        <div>
          <img
            src={logo}
            alt="logo"
            className='h-[40px] w-[40px] rounded-full shadow-sm'
          />
        </div>
        <div className='max-md:hidden font-semibold text-2xl px-1'>
          JobTrackr
        </div>
      </div>

      <div className='flex flex-col justify-center'>
        <p className="hidden lg:block font-semibold text-4xl uppercase bg-[#A7F3D0] rounded-xl px-4 py-1 shadow-lg ">We have Got This!</p>
      </div>

      <div>
        day/night mode
      </div>
      </div>
    </div>
  )
}

export default Header