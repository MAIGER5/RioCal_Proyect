import styles from './Navbar.module.css'
import logo from '../Utils/logo.png'
import { AcordeonIndustrias } from './AcordeonIndustrias'
import { useState } from 'react'

const Industrias = [ 'Mineria', 'Agriocultura', 'Métalugica', 'Construcción', 'Infraestructura', 'Alimentaria', 'Servicios Públicos']


export const Navbar = () => {

  const lisItems = Industrias.map((ele, index)=>
    <a href='#' key={index}> {ele} </a>
  ) 
  const [ able, setAble] = useState(false);

  const handleClick = ()=> {
    setAble(!able);
  }

  return (
    <div className={styles.Contenedor}>
      <div className={styles.Barra}>
        <div className={styles.Logo}>
                <img src={logo} alt="logo RioCal" />
        </div>
        <div class={styles.navbar}>
          <a href="#inicio" className={styles.Subtitle}>Inicio</a>
          <a href="#riocal" className={styles.RioCal}>RioCal +</a>
          <a href="#productos" className={styles.Subtitle}>Productos</a>
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Industria
              <i className="fa fa-caret-down"></i>
            </button>
            <div className={styles.dropdownContent}>
              {lisItems}
            </div>
          </div>
          <a href="#news" className={styles.Subtitle}>Sostenibilidad</a>
          <a href="#news" className={styles.Subtitle}>Contacto</a>
        </div>
      </div>
    </div>
  )
}

