import { useState } from 'react'


function App() {
  const [password,setPassword]=useState('')
  const[addnumber,setAddnumber]=useState(false)
  const[addchar,setAddchar]=useState(false)

  


  const [length, setLength] = useState(8)
  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  return (
 
  <>
    <h1 className=" font-bold underline">
      Hello world!
    </h1>
  <div className="m-4 p-6 rounded-xl shadow-lg max-w-sm mx-auto bg-black ">
      <h1 className="text-xl font-bold mb-4 text-center">Password Generator</h1>
      <div className="flex flex-col items-center">
        <input 
          type="text" 
          className="min-w-full p-2 border border-gray-300 rounded text-pink-500 bg-gray-50 mb-4" 
          placeholder="Your generated password" 
          readOnly value={password}
        />
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          copy
        </button>
      </div>
      <input type="range" id="length" min={4} max={100} value={length} onChange={handleLengthChange}/>length({length})<br/>
      <input type="checkbox" id="number" onClick={()=>{number=true}}/> number
      <input type="checkbox" id="character" onClick={()=>character=true}/>character
    </div>
  </>


  )
}

export default App
