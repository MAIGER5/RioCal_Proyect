import styles from './Navbar.module.css'
import logo from '../Utils/logo.png'

export const Navbar = () => {
  return (
    <div className={styles.Contenedor}>
        <div className={styles.Navbar}>
            <div className={styles.Logo}>
                <img src={logo} alt="logo RioCal" />
            </div>
            <div className={styles.Menu}>
                <p className={styles.OpcionMenu}>Nuestra Empresa</p>
                <p className={styles.OpcionMenu}>Industrias</p>
                <p className={styles.OpcionMenu}>Productos</p>
                <p className={styles.RioCal}>RioCal +</p>
                <p className={styles.OpcionMenu}>Sostenibilidad</p>
                <p className={styles.OpcionMenu}>Contacto</p>
            </div>
        </div>
    </div>
  )
}
