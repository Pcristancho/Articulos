import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './componentes/compartidos/Layout'
import Memoria from './servicios/Memoria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Memoria>
        <Layout></Layout>
      </Memoria>
           

        
    </>
  )
}

export default App
