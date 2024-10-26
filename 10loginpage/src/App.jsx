import { useEffect, useState } from "react"
import { Contextprovider1 } from "./context/context"
import Themebtn from "./component/Themebtn"
import Login from "./component/Login"


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
      console.log(1)
  },[theme])
  

  return (
    <Contextprovider1 value={{theme,dark,light}}>
      
      <div className="h-screen w-screen dark:bg-slate-600 bg-slate-200">
      <Themebtn/>
      <Login/>
      </div>


    </Contextprovider1>
  )
}

export default App
