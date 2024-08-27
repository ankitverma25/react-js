import './App.css'
import { useState } from 'react';

function App() {
  let [value, setValue] = useState(0)
  let [msg,setmsg]=useState('')
  function inc(){
    if (value>=8) {
      setmsg("You have reached the maximum value")
      return; 
    }
    setValue(value+1)
  }
  function dec(){
    if (value<=0) {
      setmsg("You have reached the minimum value");
      return;
  
    }
    setValue(value-1)
  }

  return (
    <>
    <h1>hello guys</h1>
    <h3>counter{value}</h3>

    <button onClick={inc}>add value {value}</button>
    <br />
    <button onClick={dec}>remove value {value}</button>
    <p>{msg}</p>
    </>
  )
}

export default App
