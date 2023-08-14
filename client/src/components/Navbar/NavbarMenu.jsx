import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Industrias = [ 'Mineria', 'Agriocultura', 'Métalugica', 'Construcción', 'Infraestructura', 'Alimentaria', 'Servicios Públicos']


export const NavbarMenu = () => {

    const lisItems = Industrias.map((ele, index)=>
        <a href='#' key={index}> {ele} </a>
    ) 

  return (
    <div className={styles.navbar}>
      <Link to={'/'} className={styles.links}>
        <a href="#inicio" className={styles.Subtitle}>Inicio</a>
      </Link>
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
          <a href="#news" className={styles.Subtitle}>Sostenible</a>
          <Link to={'/Contacto'} className={styles.Subtitle}>Contacto</Link>
    </div>
  )
}
