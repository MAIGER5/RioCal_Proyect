import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { CalViva } from './components/Products/CalViva/CalViva'
import { Footer } from './components/Footer/Footer'
import { Contacto } from './components/Contacto/Contacto'
import { Agricultura } from './components/Industrias/Agricultura/Agricultura'
import { Quimico } from './components/Industrias/Quimico/Quimico'
import { IngCivilConst } from './components/Industrias/IngCivilConst/IngCivilConst'
import { MedioAmbiente } from './components/Industrias/MedioAmbiente/MedioAmbiente'
import { FlueGas } from './components/Industrias/FlueGas/FlueGas.jsx'
import { Metalurgica } from './components/Industrias/Metalurgica/Metalurgica'
import { NoFerrosos } from './components/Industrias/NoFerrosos/NoFerrosos.jsx'
import { PulpaPapel } from './components/Industrias/PulpaPapel/PulpaPapel.jsx'

function App() {

  return (
    <BrowserRouter>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Calviva' element={<CalViva/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Agricultura' element={<Agricultura/>}/>
        <Route path='/Quimico' element={<Quimico/>}/>
        <Route path='/IngCivilConst' element={<IngCivilConst/>}/>
        <Route path='/MedioAmbiente' element={<MedioAmbiente/>}/>
        <Route path='/FlueGas' element={<FlueGas/>}/>
        <Route path='/Metalurgica' element={<Metalurgica/>}/>
        <Route path='/NoFerrosos' element={<NoFerrosos/>}/>
        <Route path='/PulpaPapel' element={<PulpaPapel/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
