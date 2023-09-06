import React, {useContext, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { Context } from '../App';
import { styles } from '../styles';

const Footer = () => {
  const {user} = useParams();
  const[theme, setTheme] = useContext(Context);

  return (
    <div className={`${theme ? styles.footerContainerLight : styles.footerContainerDark} flex flex-1 justify-center items-center w-full px-4 gap-x-2`}>
      <Link to="/pallavee" 

        className='flex flex-col w-2/3 items-center justify-center h-20'
      >
        <div className={`${styles.footerBtnLayout} ${
            user === 'pallavee'
              ? theme
                ? 'bg-purple-800 text-white'
                : 'bg-black text-white'
              : theme
                ? 'bg-gray-300'
                : 'bg-zinc-300'
          } `}>
          <p className='font-semibold uppercase'>Pallavee</p>
        </div>
      </Link>

      <Link to="/shubh" 
        className='flex flex-col w-2/3 items-center justify-center h-20'
      >
        <div className={`${styles.footerBtnLayout} ${
            user === 'shubh'
              ? theme
                ? 'bg-purple-800 text-white'
                : 'bg-black text-white'
              : theme
                ? 'bg-gray-300'
                : 'bg-zinc-300'
          } `}>
          <p className='font-semibold uppercase'>Shubh</p>
        </div>
      </Link>
    </div>
  )
}

export default Footer