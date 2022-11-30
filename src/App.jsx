
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Odontologos from "./pages/Odontologos"
import Home from "./pages/Home"


function App() {
 
  return (

    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/odontologos" element={<Odontologos />} />
          <Route path="/nuevosOdontologos" element={<Odontologos />} />
          <Route path="/modificarOdontologo" element={<Odontologos />} />
          <Route path="/eliminarOdontologo" element={<Odontologos />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
