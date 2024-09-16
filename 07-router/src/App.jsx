
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <>
    <div className='bg-gray-100 text-8xl'>hello</div>
     <Header/>
     <Outlet/>


    </>
  )
}

export default App
