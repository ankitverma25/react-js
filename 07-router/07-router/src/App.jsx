import { useState } from 'react'
import Header from './component/Header'
import {Outlet } from 'react-router-dom';
import Footer from '../../src/component/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Header/>
    <Outlets/>
    <Footer/>
    



   </>
  )
}

export default App
