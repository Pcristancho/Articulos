import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layer from './componentes/compartidos/Layer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layer></Layer>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn moreAAAAAAAAAAAAAA
      </p> */}
    </>
  )
}

export default App
