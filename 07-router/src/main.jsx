import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Github from './component/Github.jsx'
import User from './component/User.jsx'

// const router=createBrowserRouter([{
//   path: '/',
//   element: <App />,
//   children:[{
//     path:'',
//     element:<Home/>,
//   },
//   {
//     path:'about',
//     element:<About/>,  
//   },
// {
//   path:'contact',
//   element:<Contact/>
// }]
// }]

// )

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='github' element={<Github/>}/>
      <Route path='user/:userid' element={<User/>}/>

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
