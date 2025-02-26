import React, { useEffect, useMemo, useRef, useState } from 'react';
import InputFied from "./Component/Input";
import Navbar from "./Component/Navbar";
import Result from "./Component/Result";
import { useTheme } from './Component/ThemeContext';


const Home = () => {
  const [res ,setResult]=useState(null);
  const {theme,toggle} = useTheme();
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
    const calculate = ()=>{
        // window.location.pathname="/result";
        let width = Number(ref.current.getData());
        let height = Number(ref2.current.getData());
        console.log("width:", typeof(width),width,"height:",typeof( height),height);
       let ans = Math.floor(width/Math.pow(height/100,2));
        setResult(ans);
        // console.log(ans);
        
        
    }
    


    
  return (
    
   
     
                <div className={`${!theme?"text-black bg-white":"text-white bg-black"} p-8`}>
                  <div className='flex flex-col gap-5'>
                  <Navbar />
                  {
                    res == null ? (
                  
                  <div className='flex flex-col gap-3 justify-center items-center'>
                  <InputFied type={{name:"weight"}} ref={ref} name={"weight"} onChange={(e)=>console.log(e.target.value,e.target.value)
                  }/>
                  <InputFied type={{name:"height"}} ref={ref2} name={"height"} onChange={(e)=>console.log(e.target.value,e.target.value)
                  }/>
                  <button className='px-20 py-6 border border-solid border-zinc-400 text-2xl rounded-md font-semibold' onClick={calculate} >Calculate BMI</button>
                  </div>
                    )
                 : <div className='flex flex-col gap-3 justify-center items-center'><Result value={res}/>
                 <button onClick={()=>{
                  setResult(null);
                 }}>Home</button></div>
                  }
              </div>
              </div>
      
   
   
  )
}

export default Home