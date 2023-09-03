import React, {useState} from 'react';

const Footer = () => {
  const [isFirst, setIsFirst] = useState(true);
  console.log(isFirst);
  return (
    <div className="bg-purple-400 flex flex-1 justify-center items-center w-full px-4 gap-x-2">
      <button
        type="button"
        onClick={()=>setIsFirst(true)}
        className='flex flex-col w-2/3 items-center justify-center h-20'
      >
        <div className={`flex flex-col justify-center px-10 h-1/2 ${isFirst ? 'bg-purple-800 text-white' : 'bg-gray-300'} rounded-lg hover:shadow-2xl`}>
          <p className='font-semibold uppercase'>Pallavee</p>
        </div>
      </button>

      <button
        type="button"
        onClick={()=>setIsFirst(false)}
        className='flex flex-col w-2/3 items-center justify-center  rounded-lg h-20'
      >
        <div className={`flex flex-col justify-center px-10 h-1/2 ${isFirst ? 'bg-gray-300' : 'bg-purple-800 text-white'} rounded-lg hover:shadow-2xl`}>
          <p className='font-semibold uppercase'>Shubh</p>
        </div>
      </button>
    </div>
  )
}

export default Footer