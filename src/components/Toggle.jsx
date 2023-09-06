import React, {useContext} from 'react';
import { Context } from '../App';

const Toggle = () => {
  const[theme, setTheme] = useContext(Context);

  return (
    <label className={`relative inline-block w-16 h-8 rounded-full transition duration-400 ease-in-out ${theme ? "bg-gray-600" : "bg-white"}`}>
        <input 
            type="checkbox" 
            onChange={()=>setTheme((theme) => !theme)}
            className='opacity-0 w-0 h-0 absolute '  
        />
        <span className={`m-1`}>
            <span
            className={`slider:before w-6 h-6 py-3 top-1 absolute rounded-full transition-transform duration-400 ease-in-out ${
                theme ? "bg-white transform translate-x-0" : "bg-gray-600 transform translate-x-8"
            }`}
            ></span>
        </span>
    </label>
  )
}

export default Toggle