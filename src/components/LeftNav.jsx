import React, { useState } from "react"

const LeftNav = () => {
  const [isFirst, setIsFirst] = useState(true);

  console.log(isFirst);

  return (
    <div className="bg-purple-400 p-8 lg:px-20 md:px-10 h-screen w-full">
      <button
       type="button"
       onClick={() => setIsFirst(true)}
       className="w-full h-16 flex items-center justify-center"
      >
      <div className={`flex flex-1 lg:gap-4 ${isFirst ? 'bg-purple-800 text-white' : 'bg-gray-300'} rounded-full my-2 hover:shadow-2xl`}>
        <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-100 shadow-sm m-1 text-black'>P</div>
        <div className='flex-grow flex items-center max-lg:hidden mr-4 font-semibold'>Pallavee</div> 
      </div>

      </button>

      <button
       type="button"
       onClick={() => setIsFirst(false)}
       className="w-full h-16 flex items-center justify-center"
      >
        <div className={`flex flex-1 lg:gap-4 ${isFirst ? 'bg-gray-300' : 'bg-purple-800 text-white'} rounded-full my-2 hover:shadow-2xl`}>
          <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-100 shadow-sm m-1 text-black'>S</div>
          <div className='flex-grow flex items-center max-lg:hidden mr-4 font-semibold'>Shubh</div> 
        </div>
      </button>
    </div>
  )
}

export default LeftNav