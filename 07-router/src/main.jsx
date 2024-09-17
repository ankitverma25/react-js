import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'

const router=createBrowserRouter([{
  path: '/',
  element: <App />,
  children:[{
    path:'',
    element:<Home/>,
  },
  {
    path:'about',
    element:<About/>,  
  },
{
  path:'contact',
  element:<Contact/>
}]
}]

)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
