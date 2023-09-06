import React, {useContext, useState} from 'react';
import logo from '../assets/logo-color.svg';
import logoDark from '../assets/logo-white.svg';
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import { styles } from '../styles';
import { Context } from '../App';

const Header = () => {
  const[theme, setTheme] = useContext(Context);

  return (
    <div className={`${theme ? styles.headerContainerLight : styles.headerContainerDark} shadow-2xl p-8 lg:px-20 md:px-10`}>
      <div className="flex flex-1 justify-between">
        <Link to="/" className='flex inline-flex gap-4 items-center'>
          <div>
            <img
              src={theme ? logo : logoDark}
              alt="logo"
              className='h-[40px] w-[40px] rounded-full shadow-sm'
            />
          </div>
          <div className={`${theme ? styles.TextLight : styles.TextDark } max-md:hidden font-semibold text-2xl px-1`}>
            JobTrackr
          </div>
        </Link>

        <div className='flex flex-col justify-center'>
          <p className={`hidden lg:block ${theme ? styles.TextLight : styles.TextDark } font-semibold text-4xl uppercase  px-4 py-1 underline `}>We have Got This!</p>
        </div>

        <div className="flex flex-col justify-center">
          <Toggle />
        </div>

      </div>
    </div>
  )
}

export default Header