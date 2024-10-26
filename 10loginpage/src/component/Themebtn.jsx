import React from 'react'
import usetheme from '../context/context'

function Themebtn() {
    const{theme,light,dark}=usetheme();
    const themechange=(e)=>{
        const themecheck=e.currentTarget.checked;

        if(themecheck){
            dark();
        }
        else{
            light();
        }

    }


  return (
    <div className=" w-7 h-5 bg-gray-700 p-[1px] rounded-2xl relative top-1 ml-2">
      <label className="relative inline-flex items-center cursor-pointer">
    <span className={`translate-y-[1px] text-sm relative w-3 h-3 rounded-2xl bg-white duration-500 ${theme=='dark'?'translate-x-3 bg-neutral-950':'translate-x-0'} font-medium text-gray-900`}>
        <input className="invisible" type="checkbox" name="check" value={''} onChange={themechange} checked={theme==='dark'}/>
    </span>
    </label>
    </div>
  )
}

export default Themebtn