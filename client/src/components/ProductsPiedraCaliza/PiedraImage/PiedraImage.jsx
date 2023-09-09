import styles from './PiedraImage.module.css'
import caliza1 from '../../../utils/caliza1.webp'
import caliza2 from '../../../utils/caliza2.webp'

export const PiedraImage = () => {
  return (
    <div className={styles.container}>
        <img src={caliza1} alt="hidratada" className={styles.piedra}/>
        <img src={caliza2} alt="hidratada1" className={styles.piedra} />
    </div>
  )
}
