import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Colorbar from './components/colorbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Colorbar/>
    </>
  )
}

export default App
