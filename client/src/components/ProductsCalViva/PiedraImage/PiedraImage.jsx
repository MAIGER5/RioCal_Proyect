import styles from './PiedraImage.module.css'
import piedra1 from '../../../utils/piedra1.png'
import piedra2 from '../../../utils/piedra2.png'

export const PiedraImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.piedra}>
        <img src={piedra1} alt="piedra1" />
      </div>
      <div className={styles.piedra}>
        <img src={piedra2} alt="piedra2"/>
      </div>
    </div>
  )
}
