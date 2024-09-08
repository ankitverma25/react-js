import { useState ,useCallback,useEffect,useRef} from 'react'


function App() {
  const [password,setPassword]=useState('')
  const[addnumber,setAddnumber]=useState(false)
  const[addchar,setAddchar]=useState(false)
  const [length, setLength] = useState(8)
  const passwordref=useRef(null)

  const copytoclip=useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)



  },[password])
  const passwordgenerator=useCallback(()=>{
    let pass=''
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const num='0123456789'
    const char='!@#$%^&*()_+'
    for(let i=0;i<length;i++){
      if (addnumber==true) {
        str=str+num;
      }
      if(addchar==true){
        str=str+char;
      }
      const random=str.charAt(Math.floor(Math.random()*str.length))
      pass=pass+random}
      setPassword(pass)

  },[length,addnumber,addchar,setPassword])

  useEffect(() => {
    passwordgenerator(); // Invoke the function
  }, [length,addchar,addnumber]);


  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  return (
 
  <>
    
  <div className="m-4 p-6 rounded-xl shadow-lg w-screen mx-auto bg-black ">
      <h1 className="text-xl font-bold mb-4 text-center">Password Generator</h1>
      <div className="flex flex-col items-center">
        <input 
          type="text" 
          className="w-72 p-2 border border-gray-300 rounded text-pink-500 bg-gray-50 mb-4" 
          placeholder="Your generated password" 
          readOnly value={password}
          ref={passwordref}
        />
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        onClick={copytoclip}>
          copy
        </button>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        onClick={passwordgenerator}>
          refresh
        </button>
        
      </div>
      <input type="range" id="length" min={4} max={100} value={length} onChange={handleLengthChange}/>length({length})<br/>
      <input type="checkbox" id="number" onClick={()=>{setAddnumber(!addnumber)}}/> number
      <input type="checkbox" id="character" onClick={()=>setAddchar(!addchar)}/>character
    </div>

  </>


  )
}

export default App

//project complete i have learn 3 react hooks from this project(useref,usecallback,useffect),its fun to run code 
