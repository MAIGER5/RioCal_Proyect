import styles from './PiedraImage.module.css'
import piedra1 from '../../../utils/piedra1.png'
import piedra2 from '../../../utils/piedra2.png'

export const PiedraImage = () => {
  return (
    <div className={styles.container}>
        <img src={piedra1} alt="piedra1" className={styles.piedra}/>
        <img src={piedra2} alt="piedra2" className={styles.piedra} />
    </div>
  )
}
