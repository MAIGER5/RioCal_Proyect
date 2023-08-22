import styles from './PiedraImage.module.css'
import hidratada from '../../../utils/hidratada.jpg'
import hidratada1 from '../../../utils/hidratada1.jpg'

export const PiedraImage = () => {
  return (
    <div className={styles.container}>
        <img src={hidratada} alt="hidratada" className={styles.piedra}/>
        <img src={hidratada1} alt="hidratada1" className={styles.piedra} />
    </div>
  )
}
