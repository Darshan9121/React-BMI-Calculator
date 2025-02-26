import {React} from 'react';
import {IconClipboardHeart} from "@tabler/icons-react";
import {Link} from "react-router-dom";

const Result = (props) => {
  return (
 

        <div className=' w-fit flex flex-col justify-center items-center px-24 py-4 border border-solid border-zinc-300 rounded-lg'>
          <IconClipboardHeart size={100}/>
        <p className='font-bold text-4xl'>Your BMI Is {props.value}!</p>
       
        </div>
   
  )
}

export default Result