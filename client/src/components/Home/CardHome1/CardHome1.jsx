import styles from './CardHome1.module.css'
import piedra from '../../../utils/piedra1.jpg';
import principal from '../../../utils/uno.jpg' 
import planta from '../../../utils/planta.jpg';
import { Link } from 'react-router-dom';

export const CardHome1 = () => {
    return (
        <div className={styles.ContenedorTarjetas}>
            <Link to={'/Calviva'} className={styles.contenedorInforCard}>
                <div className={styles.textImagen}><p>Cal Viva</p></div>
                <div className={styles.cuadroImage}>
                    <img src={piedra} alt="" />
                </div>
            </Link>
            <Link to={'/CalHidratada'} className={styles.contenedorInforCard}>
                <div className={styles.textImagen}><p>Cal Hidratada</p></div>
                <div className={styles.cuadroImage}>
                    <img src={planta} alt="" />
                </div>
            </Link>
            <Link to={'/CalDolomita'} className={styles.contenedorInforCard}>
                <div className={styles.textImagen}><p>Cal Dolomita</p></div>
                <div className={styles.cuadroImage}>
                    <img src={principal} alt="" />
                </div>
            </Link>
        </div>       
    )
}
