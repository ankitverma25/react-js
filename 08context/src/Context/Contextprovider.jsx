import React, { useState } from 'react'
import Usercontext from './Usercontext'

function Contextprovider({children}) {
    const [user,setUser]=useState(null)
  return (

    <Usercontext.Provider value={{user,setUser}}>
        {children}
    </Usercontext.Provider>



  )
}

export default Contextprovider