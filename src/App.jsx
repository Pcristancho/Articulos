import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './componentes/compartidos/Layout'
import Memoria from './servicios/Memoria'
import { Route, Routes } from 'react-router-dom'
import Lista from './lista/Lista'
import TiendasOficiales from './lista/TiendasOficiales'
import NoEncontrado from './componentes/compartidos/NoEncontrado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Memoria>

        {/* <Layout></Layout> */}
        <Routes>
          <Route path='/' element={<Layout></Layout>} >
          <Route index element={<Lista></Lista>} />
          <Route path="/articulos" element={<Lista></Lista>} />
          <Route path="/Tiendas" element={<TiendasOficiales/>}/>
          <Route path="*" element={<NoEncontrado></NoEncontrado>} />
          </Route>
        </Routes>
      </Memoria>
           

        
    </>
  )
}

export default App
