import Contextprovider from './Context/Contextprovider'
import Login from './component/Login'
import Greeting from './component/Greeting'


function App() {

  return (
   <Contextprovider>
    <Login/>
    <Greeting/>
    
   </Contextprovider>
  )
}

export default App
