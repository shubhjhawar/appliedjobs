import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../App";
import { styles } from "../styles";

const LeftNav = () => {
  const {user} = useParams();
  const[theme, setTheme] = useContext(Context);

  return (
    <div className={`${theme ? styles.leftNavContainerLight : styles.leftNavContainerDark } p-8 lg:px-20 md:px-10 h-screen w-full`}>
      <Link to="/pallavee"
        className="w-full h-16 flex items-center justify-center"
      >
        <div className={`flex flex-1 lg:gap-4 ${
            user === 'pallavee'
              ? theme
                ? 'bg-purple-800 text-white'
                : 'bg-black text-white'
              : theme
                ? 'bg-gray-300'
                : 'bg-zinc-300'
          } rounded-full my-2 hover:shadow-2xl`}>
          <div className={`${styles.btnImg}`}>P</div>
          <div className={`${styles.btntext}`}>Pallavee</div> 
        </div>
      </Link>

      <Link to="/shubh"
        className="w-full h-16 flex items-center justify-center"
        >     
          <div className={`flex flex-1 lg:gap-4 ${
            user === 'shubh'
              ? theme
                ? 'bg-purple-800 text-white'
                : 'bg-black text-white'
              : theme
              ? 'bg-gray-300'
              : 'bg-zinc-300'
          } rounded-full my-2 hover:shadow-2xl`}>
          <div className={`${styles.btnImg}`}>S</div>
          <div className={`${styles.btntext}`}>Shubh</div> 
        </div>
      </Link>

    </div>
  )
}

export default LeftNav