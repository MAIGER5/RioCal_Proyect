import styles from './Rio_Cal_Mas.module.css';
import CalHidratadaBlanquearPromical from '../../utils/_DSC4615.jpg'
import CalHidratadaBlanquearProcecal from '../../utils/_DSC4618.jpg'
import CalHidratadaIndustrial from '../../utils/_DSC4610.jpg'
import CalHidratadaTipoN from '../../utils/_DSC4614.jpg'

export const Rio_Cal_Mas = () => {
  return (
    <div className={styles.container}>
        <section className={styles.layout}>
            <div className={styles.card}>
                <img src={CalHidratadaBlanquearPromical} alt="" />
            </div>
            <div className={styles.card}>
                <img src={CalHidratadaBlanquearProcecal} alt="" />
            </div>
            <div className={styles.card}>
                <img src={CalHidratadaIndustrial} alt="" />
            </div>
            <div className={styles.card}>
                <img src={CalHidratadaTipoN} alt="" />
            </div>
        </section>
    </div>
  )
}
