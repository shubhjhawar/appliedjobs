import React from 'react'

const LeftNav = () => {
  return (
    <div className="bg-purple-400 p-8 lg:px-20 md:px-10 h-screen">
      <div className='flex flex-1 lg:gap-4'>
        <div className='flex-grow '>Logo</div>
        <div className='flex-grow max-lg:hidden'>Pallavee</div> 
      </div>
      <div className='flex flex-1 lg:gap-4'>
        <div className='flex-grow'>Logo</div>
        <div className='flex-grow max-lg:hidden'>Shubh</div> 
      </div>
    </div>
  )
}

export default LeftNav