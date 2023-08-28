import styles from './Rio_Cal_Mas.module.css';
import CalHidratadaBlanquearPromical from '../../utils/_DSC4615.jpg'
import CalHidratadaBlanquearProcecal from '../../utils/_DSC4618.jpg'
import CalHidratadaIndustrial from '../../utils/_DSC4610.jpg'
import CalHidratadaTipoN from '../../utils/_DSC4614.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Rio_Cal_Mas = () => {
  return (
    <div className={styles.container}>
        <section className={styles.layout}>
            <div className={styles.tarjet}>
                <div className={styles.card}>
                    <img src={CalHidratadaBlanquearPromical} alt="" />
                </div>
                <div className={styles.textTarjet}>
                    Cal Hidradata para Blanquear Promical
                </div>
                <div className={styles.peso}>
                    10 kg
                </div>
                <div className={styles.carrito}>
                    <p>Agregar al Carrito</p>
                    <ShoppingCartIcon color='action'/>
                </div>
            </div>
            <div className={styles.tarjet}>
                <div className={styles.card}>
                    <img src={CalHidratadaBlanquearProcecal} alt="" />
                </div>
                <div className={styles.textTarjet}>
                Cal Hidradata para Blanquear Procecal
                </div>
                <div className={styles.peso}>
                    10 kg
                </div>
                <div className={styles.carrito}>
                    <p>Agregar al Carrito</p>
                    <ShoppingCartIcon color='action'/>
                </div>
            </div>
            <div className={styles.tarjet}>
                <div className={styles.card}>
                    <img src={CalHidratadaIndustrial} alt="" />
                </div>
                <div className={styles.textTarjet}>
                Cal Hidradata Industrial
                </div>
                <div className={styles.peso}>
                    25 kg
                </div>
                <div className={styles.carrito}>
                    <p>Agregar al Carrito</p>
                    <ShoppingCartIcon color='action'/>
                </div>
            </div>
            <div className={styles.tarjet}>
                <div className={styles.card}>
                    <img src={CalHidratadaTipoN} alt="" />
                </div>
                <div className={styles.textTarjet}>
                Cal Hidradata Tipo N
                </div>
                <div className={styles.peso}>
                    25 kg
                </div>
                <div className={styles.carrito}>
                    <p>Agregar al Carrito</p>
                    <ShoppingCartIcon color='action'/>
                </div>
            </div>
            
        </section>
    </div>
  )
}
