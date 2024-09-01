import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="rounded-lg w-auto h-auto  m-1 p-1 border-slate-800"><h1>password generator</h1>
    <input type="text" className='min-w-52 text-pink-500' readOnly/>
    
    
    
    
    </div>
 
    </>
  )
}

export default App
