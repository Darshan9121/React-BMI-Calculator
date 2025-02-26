import React, { useState,useEffect ,forwardRef, useImperativeHandle} from 'react';
import {IconRulerMeasure2} from "@tabler/icons-react";
import {IconScaleOutline} from "@tabler/icons-react";

const InputFied = (props,ref) => {

  const [inpName,setName]=useState("weight");
  const [inpValue,setValue]=useState(50);

  let name = props.type.name;
  useEffect(()=>{
    
        setValue(50);
    setName(name);

   
   

  },[inpName])

  useImperativeHandle(ref, () => ({ 
    getData:()=>{
      return Number(inpValue);
    },
  }));
   
    const change=(name,value)=>{
      setName(name);
      setValue(Number(value));
    }



    if(name == "weight"){
      
  return (
    <div className='flex flex-row   items-center  justify-normal  py-4 border border-solid border-zinc-300 rounded-lg'>
      <IconRulerMeasure2 size={100}/>
    <div className=' w-fit flex flex-col justify-center items-center px-10  py-2'>

        <p className='font-bold text-6xl'>{inpValue}</p>
        <input type='range' value={inpValue} min={10} max={200} className=" w-full reh-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={(e)=>change(name,e.target.value)} />
        <p className='font-bold text-2xl'>cm</p>
        </div> 
    </div>
  )
}
else if(name == "height"){
    return(
        <div className=' w-fit flex flex-row justify-evenly gap-12 items-center px-10 py-2 border border-solid border-zinc-300 rounded-lg' >
            <button  className='font-extrabold text-5xl'  onClick={() => setValue(inpValue-1)}>&lt;</button>
        <div className=' w-fit flex flex-col justify-center items-center  '>
            <IconScaleOutline size={50}/>
            
         <p className='font-bold text-6xl'>{inpValue}</p> 
         <p className='font-bold text-2xl'>Kg</p>
            
        </div>
        <button className='font-extrabold text-5xl' onClick={() => setValue(inpValue+1)}>&gt;</button>
    </div>
    )
}
}

export default forwardRef(InputFied);