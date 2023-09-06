import React, { useContext } from 'react';
import { Context } from '../App';
import { styles } from '../styles';

const Home = () => {
  const[theme, setTheme] = useContext(Context);
  return (
    <div className="w-full h-grow">
        <div className={`${theme ? styles.homeContainerLight : styles.homeContainerDark } border-2 flex flex-col items-center justify-center rounded-xl p-10 m-10 h-[90%] shadow-2xl`}>
            <div className={`${theme ? styles.TextLight : styles.TextDark } text-5xl font-bold mb-10`}>Who are you?</div>
            <div className='text-red-400 font-semibold text-2xl'>Check your Progress</div>
        </div>
    </div>
  )
}

export default Home