import React from "react";
import { useState } from 'react'

function Clrbtn({colorname})
{

    const [color,setcolor]=useState('white');
    document.body.style.backgroundColor=color;

    return(

            
        <button onClick={()=>setcolor(colorname)} style={{backgroundColor:color,color:"black"}}>{colorname}</button>
    
        

    )
 }
export default Clrbtn