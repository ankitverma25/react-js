import React, { useEffect, useState } from 'react'



function Login() {
  
  
  const [login,setlogin]=useState(true)
  
  useEffect(()=>{
    console.log(login)
  }, [login])

  return (
    <>
    

    <div className="pt-14 h-80 w-80 bg-yellow-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">   
    
    <button onClick={()=>{(login==true)?setlogin(false):setlogin(true);}}> /\</button>
        {login?<h1 className='font-extrabold text-3xl'>Login</h1>:<h1 className={`font-extrabold text-3xl ${login?'invisible':'block'}`}>sign up</h1>}
        <label htmlFor="username" className='text-sm font-bold'>USERNAME
            <input type="text" className='m-2 p-1' placeholder='username'/>
        </label>
        <label htmlFor="password" className='text-sm font-bold '>PASSWORD
        <input type="text" className='m-2 p-1' placeholder='password' />
        </label>

        <button className=' outline rounded-md p-1 m-2' >Login</button>
    
    
    </div>
    
    </>
  )
}

export default Login