import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';

const Footer = () => {
  const {user} = useParams();

  return (
    <div className="bg-purple-400 flex flex-1 justify-center items-center w-full px-4 gap-x-2">
      <Link to="/pallavee" 

        className='flex flex-col w-2/3 items-center justify-center h-20'
      >
        <div className={`flex flex-col justify-center ${user=='pallavee' ? 'bg-purple-800 text-white' : 'bg-gray-300'} px-10 h-1/2 rounded-lg hover:shadow-2xl`}>
          <p className='font-semibold uppercase'>Pallavee</p>
        </div>
      </Link>

      <Link to="/shubh" 
        className='flex flex-col w-2/3 items-center justify-center h-20'
      >
        <div className={`flex flex-col justify-center ${user=='shubh' ? 'bg-purple-800 text-white' : 'bg-gray-300'} px-10 h-1/2 rounded-lg hover:shadow-2xl`}>
          <p className='font-semibold uppercase'>Shubh</p>
        </div>
      </Link>
    </div>
  )
}

export default Footer