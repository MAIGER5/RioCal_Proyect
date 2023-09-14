import styles from './CardHome1.module.css'
import CalViva from '../../../utils/viva.jpg';
import CalDolomita from '../../../utils/dolomitas.webp' 
import hidratada from '../../../utils/hidratada1.webp';
import caliza from '../../../utils/caliza2.webp';
import { Link } from 'react-router-dom';


export const CardHome1 = () => {
    return (
        <div className={styles.ContenedorTarjetas}>
            <Link to={'/Calviva'} className={styles.contenedorInforCard}>
                {/* <div className={styles.textImagen}><p>Cal Viva</p></div> */}
                <div className={styles.cuadroImage}>
                    <img src={CalViva} alt="" />
                    <h3>CAL VIVA</h3>
                </div>
            </Link>
            <Link to={'/CalHidratada'} className={styles.contenedorInforCard}>
                {/* <div className={styles.textImagen}><p>Cal Hidratada</p></div> */}
                <div className={styles.cuadroImage}>
                    <img src={hidratada} alt="" />
                    <h3>CAL HIDRATADA</h3>
                    {/* <div className={styles.cuadroImageHover}></div> */}
                </div>
            </Link>
            <Link to={'/CalDolomita'} className={styles.contenedorInforCard}>
                {/* <div className={styles.textImagen}><p>Cal Dolomita</p></div> */}
                <div className={styles.cuadroImage}>
                    <img src={CalDolomita} alt="" />
                    <h3>CAL DOLOMITA</h3>
                </div>
            </Link>
            <Link to={'/CalDolomita'} className={styles.contenedorInforCard}>
                {/* <div className={styles.textImagen}><p>Cal Dolomita</p></div> */}
                <div className={styles.cuadroImage}>
                    <img src={caliza} alt="" />
                    <h3>CAL AGRICOLA</h3>
                </div>
            </Link>
        </div>       
    )
}
