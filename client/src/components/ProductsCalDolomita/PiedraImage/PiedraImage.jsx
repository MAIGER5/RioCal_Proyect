import styles from './PiedraImage.module.css'
import dolomita from '../../../utils/dolomita1.webp'
import CalViva from '../../../utils/viva.jpg'

export const PiedraImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.piedra}>
        <img src={CalViva} alt="hidratada" />
      </div>
      <div className={styles.piedra}>
        <img src={dolomita} alt="hidratada1"/>
      </div>
    </div>
  )
}
