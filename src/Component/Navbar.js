import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import {IconMoonFilled} from "@tabler/icons-react";
import {IconMoon} from "@tabler/icons-react";
import { useTheme } from './ThemeContext';

const Navbar = () => {
 
    const {theme,toggle}= useTheme();
   
 return (
         <div className={`flex flex-row justify-between text-xl items-center font-semibold  ${theme?"text-white bg-black":"text-black bg-white"}`}>
           
         <i className=""> <a href="/Home">BMICalc</a></i>
         <div className='flex '>
          {
            theme ? <button onClick={()=>toggle()}><IconMoon size={40} /> </button>:
         <IconMoonFilled size={40} onClick={()=>toggle()}/> 
          }
         </div>
        
         </div>
       )

  
}

export default Navbar;