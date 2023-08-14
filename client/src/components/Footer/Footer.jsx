import styles from './Footer.module.css'
import logo from '../Utils/logo.png'
import azulFooter from '../../utils/azulFooter.jpg';
import { CardMedia } from '@mui/material'
import { Boton, Boton2 } from '../Boton/Boton';

export const Footer = () => {
  return (
    <div className={styles.todo}>
        <div className={styles.growing}>
            <img src={azulFooter} alt="azucar" />
            <div className={styles.textImagenGrow}>
                <p>Te Ayudamos a<br /> <br />crecer tu Negocio ahora</p>
                <Boton/>
            </div>
            {/* <div className={styles.textImagenGrow}><p>tu Negocio ahora</p></div> */}
        </div>

        <div className={styles.container}>
            <div className={styles.containerInterno}>
                <div className={styles.Grid1}>
                    <CardMedia
                        component="img"
                        image={logo}
                        alt="logo"
                        sx={{
                        width:'200px',
                        height:'50px',
                        marginBottom:'40px'
                        }}
                    />
                    <p>RioCal Acelera el Esfuerzo de Descarbonización con un Diseño de Planta de Cal NET-CERO</p>
                </div>
                <div className={styles.Grid2}>
                    <p className={styles.titulo}>Ubicación</p>
                    <p className={styles.mapa}>Ver mapa</p>
                    <p>Medellín - Colombia</p>
                    <p>Kra 84F # 3D 255</p>
                    <p>riocal.com.co</p>
                    <p>riocal@riocalcom.co</p>
                </div>
                <div className={styles.Grid3}>
                <p className={styles.titulo}>Links</p>
                    <p className={styles.Links}>Financiera</p>
                    <p className={styles.Links}>Contable</p>
                    <p className={styles.Links}>Comercial</p>
                    <p className={styles.Links}>Compras </p>
                    <p className={styles.Links}>Despachos </p>
                </div>
                <div className={styles.Grid4}>
                <p className={styles.titulo}>Contactos</p>
                    <p>+57 3025678954</p>
                    <p>+57 3216989541</p>
                    <p>+57 604453269</p>
                    <Boton2/>
                </div>
            </div>
        </div>
    </div>
  )
}
