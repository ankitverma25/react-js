import React from "react"
import Clrbtn from "./clrbtn"

function Colorbar(){
    return(
        <>
        
        <div className="Colorbar">
        <Clrbtn colorname="green"/>
        <Clrbtn colorname="blue"/>
        <Clrbtn colorname="red"/>
        <Clrbtn colorname="purple"/>
        </div>
       
        </>

    )
}

export default Colorbar