import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { CalViva } from './components/ProductsCalviva/CalViva/CalViva'
import { CalHidratada } from './components/ProductsCalHidratada/CalHidratada/CalHidratada'
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
import { CalDolomita } from './components/ProductsCalDolomita/CalDolomita/CalDolomita'
import { Rio_Cal_Mas } from './components/RIO_CAL-MAS/Rio_Cal_Mas'
import { Promical10kg } from './components/RIO_CAL-MAS/Promical10kg/Promical10kg'
import { Procecal10kg } from './components/RIO_CAL-MAS/Procecal10kg/Procecal10kg'
import { Calidad } from './components/Calidad/Calidad'
import { PiedraCaliza } from './components/ProductsPiedraCaliza/PiedraCaliza/PiedraCaliza'
import { CalesAgricolas } from './components/ProductsCalesAgricolas/CalesAgricolas/CalesAgricolas';
import { Productos } from './components/Productos/Productos'
import { Industrias } from './components/Industrias/INDUSTRIAS/industrias'
import MyComponent from './components/Contacto/Maps/MyComponent'
import { Float } from './components/PRUEBA_FLOTA/Float'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Calviva' element={<CalViva/>}/>
        <Route path='/Calviva25Kg' element={<CalViva/>}/>
        <Route path='/CalHidratada' element={<CalHidratada/>}/>
        <Route path='/CalHidratada10Kg' element={<CalHidratada/>}/>
        <Route path='/CalHidratadaTipoE' element={<CalHidratada/>}/>
        <Route path='/CalDolomita' element={<CalDolomita/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Agricultura' element={<Agricultura/>}/>
        <Route path='/Quimico' element={<Quimico/>}/>
        <Route path='/IngCivilConst' element={<IngCivilConst/>}/>
        <Route path='/MedioAmbiente' element={<MedioAmbiente/>}/>
        <Route path='/FlueGas' element={<FlueGas/>}/>
        <Route path='/Metalurgica' element={<Metalurgica/>}/>
        <Route path='/NoFerrosos' element={<NoFerrosos/>}/>
        <Route path='/PulpaPapel' element={<PulpaPapel/>}/>
        <Route path='/RioCalMas' element={<Rio_Cal_Mas/>}/>
        <Route path='/Promical10kg' element={<Promical10kg/>}/>
        <Route path='/Procecal10kg' element={<Procecal10kg/>}/>
        <Route path='/Calidad' element={<Calidad/>}/>
        <Route path='/PiedraCaliza' element={<PiedraCaliza/>}/>
        <Route path='/CalesAgricolas' element={<CalesAgricolas/>}/>
        <Route path='/Productos' element={<Productos/>}/>
        <Route path='/Industrias' element={<Industrias/>}/>
        <Route path='/MyComponent' element={<MyComponent/>}/>
        <Route path='/Float' element={<Float/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
