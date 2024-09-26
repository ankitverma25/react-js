import React, { useContext } from 'react'
import Usercontext from '../Context/Usercontext'

function Greeting() {

    const {user}=useContext(Usercontext)
    if (!user){
        return <h1>Please login to view this page</h1>
    }
    else{
    return (
    <>

    <div>{user.username}</div>
    
    </>
  )}
}

export default Greeting