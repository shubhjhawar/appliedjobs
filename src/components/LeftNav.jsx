import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";


const LeftNav = () => {
  const {user} = useParams();

  return (
    <div className="bg-purple-400 p-8 lg:px-20 md:px-10 h-screen w-full">
      <Link to="/pallavee"
        className="w-full h-16 flex items-center justify-center"
      >
        <div className={`flex flex-1 lg:gap-4 ${user=='pallavee' ? 'bg-purple-800 text-white' : 'bg-gray-300'}  rounded-full my-2 hover:shadow-2xl`}>
          <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-100 shadow-sm m-1 text-black'>P</div>
          <div className='flex-grow flex items-center max-lg:hidden mr-4 font-semibold'>Pallavee</div> 
        </div>
      </Link>

      <Link to="/shubh"
        className="w-full h-16 flex items-center justify-center"
        >     
          <div className={`flex flex-1 lg:gap-4 ${user=='shubh' ? 'bg-purple-800 text-white' : 'bg-gray-300'} rounded-full my-2 hover:shadow-2xl`}>
            <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-100 shadow-sm m-1 text-black'>S</div>
            <div className='flex-grow flex items-center max-lg:hidden mr-4 font-semibold'>Shubh</div> 
          </div>
      </Link>

    </div>
  )
}

export default LeftNav