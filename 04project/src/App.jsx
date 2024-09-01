import { useState } from 'react'

import Colorbar from './components/colorbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Colorbar/>
    </>
  )
}

export default App
