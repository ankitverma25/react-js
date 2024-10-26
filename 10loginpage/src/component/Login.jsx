import React from 'react'

function Login() {
  return (
    <><div className="h-80 w-80 bg-yellow-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className='font-extrabold text-3xl'>Login</h1>

        <label htmlFor="username" className='text-sm font-bold'>USERNAME
            <input type="text" className='m-2 p-1' placeholder='username'/>
        </label>
    
    
    </div>
    
    
    </>
  )
}

export default Login