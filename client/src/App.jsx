import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { AcordeonIndustrias } from './components/Navbar/AcordeonIndustrias'

function App() {

  return (
    <BrowserRouter>
      <Navbar  />
      {/* <AcordeonIndustrias/> */}
    </BrowserRouter>
  )
}

export default App
