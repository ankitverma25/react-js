import { useEffect, useState } from "react"
import { Themeprovider } from "./context/context"
import Themebtn from "./component/themebtn"

function App() {
  const [theme,setTheme]=useState('light')

  const darktheme=()=>{
    setTheme('dark')
  }
  const lighttheme=()=>{
    setTheme('light')
    }

  useEffect(() => {
    const storedTheme=document.querySelector('html')
    storedTheme.classList.remove('dark','light')
    storedTheme.classList.add(theme)
  
  }, [theme])
  

  return (

    <Themeprovider value={{theme,darktheme,lighttheme}}>


      <div className="h-screen w-screen dark:bg-slate-600 bg-slate-200">


        <Themebtn/>
      </div>
    </Themeprovider>
  )
}

export default App
