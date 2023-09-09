import styles from './PiedraImage.module.css'
import dolomita from '../../../utils/dolomita1.webp'
import CalViva from '../../../utils/CalViva.webp'

export const PiedraImage = () => {
  return (
    <div className={styles.container}>
        <img src={CalViva} alt="hidratada" className={styles.piedra}/>
        <img src={dolomita} alt="hidratada1" className={styles.piedra} />
    </div>
  )
}
