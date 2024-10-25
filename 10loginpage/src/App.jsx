import { useEffect, useState } from "react"
import { Contextprovider1 } from "./context/context"
import Themebtn from "./component/themebtn";


function App() {
  const [theme,setTheme]=useState('light')

  const dark=()=>{
    setTheme('dark');

  }
  const light=()=>{
    setTheme('light');

  }
  useEffect(() => {
      const themechange=document.querySelector('html');
      themechange.classList.remove('dark','light');
      themechange.classList.add(theme)

  }, [theme])
  

  return (
    <Contextprovider1 value={{theme,dark,light}}>
      
      <div className="w-screen h-screen bg-slate-900" > ankit</div>
      <Themebtn/>

      
      

    </Contextprovider1>
  )
}

export default App
