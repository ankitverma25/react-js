import React, { useContext } from 'react'
import { useState } from 'react'
import Usercontext from '../Context/Usercontext';

function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const {setUser}=useContext(Usercontext)

    const SubmitEvent=(e)=>{
        e.preventDefault();
        setUser({username,password});
    }
    const valueclear=(e)=>{
      e.preventDefault();
      setUsername("")
      setPassword("")


    }
  return (
  <>
    <div>Login</div>
    <input placeholder='username' type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
    <input placeholder='password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button onClick={SubmitEvent}>Login</button>
    <button onClick={valueclear}>clear</button>
    </>
  )
}

export default Login