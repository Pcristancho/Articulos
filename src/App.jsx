import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './componentes/compartidos/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout></Layout>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn moreAAAAAAAAAAAAAA
      </p> */}
    </>
  )
}

export default App
