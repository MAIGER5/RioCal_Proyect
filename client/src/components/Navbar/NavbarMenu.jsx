import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Industrias = ['Agricultura', 'Químico', 'Ing. Civil & Const', 'Medio Ambiente','Tratamiento de Gases', 'Métalurgica', 'No Ferrosos', 'PCC & Papel']

const paths = ['Agricultura', 'Quimico', 'IngCivilConst', 'MedioAmbiente', 'FlueGas', 'Metalurgica', 'NoFerrosos', 'PulpaPapel'];

const Productos = ['Cal Viva', 'Cal Hidratada', 'Cal Dolomita', 'Cal Hidratada 10KG','Cal Hidratada Tipo E', 'Cal Viva 25KG']

const paths1 = ['Calviva', 'CalHidratada', 'CalDolomita', 'CalHidratada10Kg', 'CalHidratadaTipoE', 'Calviva25Kg'];


export const NavbarMenu = () => {

  const lisItemsIndustry = Industrias.map((ele, index)=>{

    for (let i = 0; i < paths.length; i++) {
      if ( index == i) {
        var direccion = paths[i];
      } 
    }
    return <a href='#' key={index}> <Link to={direccion} className={styles.LinkedA}>{ele} </Link> </a>
  }
  ) 
  const lisItemsProducts = Productos.map((ele, index)=>{

    for (let i = 0; i < paths1.length; i++) {
      if ( index == i) {
        var direccion = paths1[i];
      } 
    }
    return <a href='#' key={index}> <Link to={direccion} className={styles.LinkedA}>{ele} </Link> </a>
  }
  ) 

  return (
    <div className={styles.navbar}>
      <Link to={'/'} className={styles.links}>
        <a href="#inicio" className={styles.Subtitle}>Inicio</a>
      </Link>
      <Link to={'RioCalMas'}>
        <a href="#riocal" className={styles.RioCal}>RioCal +</a>
      </Link>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Productos
          <i className="fa fa-caret-down"></i>
        </button>
        <div className={styles.dropdownContent}>
          {lisItemsProducts}
        </div>
      </div>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Industria
          <i className="fa fa-caret-down"></i>
        </button>
        <div className={styles.dropdownContent}>
          {lisItemsIndustry}
        </div>
      </div>
      <a href="#news" className={styles.Subtitle}>Sostenible</a>
      <Link to={'/Contacto'} className={styles.Subtitle}>Contacto</Link>
    </div>
  )
}
