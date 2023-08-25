import styles from './RioCalMas.module.css'
import imgPincipal from '../../utils/prin12.png'
import { Boton5, Boton6, Boton7, Boton8 } from '../Boton/Boton'
import { Typography } from '@mui/material'

export const RioCalMas = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagenPrincipal}>
        <div className={styles.TextPrincipal}>
          <h4 id={styles.titulo1}>IMPACTAMOS LA VIDA COTIDIANA CON NUESTROS PRODUCTOS</h4>
          <h2 id={styles.titulo2}>HAZ QUE TU VISIÓN <br />SEA UNA REALIDAD.</h2>
          <div>
            <Boton5/>
            <Boton6/>
          </div>
        </div>
        <div className={styles.imagenSecond}>
          <img src={imgPincipal} alt="" />
        </div>
      </div>
      <div  className={styles.contenedorHorizontal}>
        <h5 id={styles.titulo3}>Construimos nuestro negocio sobre la base de la confianza y la integridad. Colaboramos con las personas a las que servimos: nuestros clientes, nuestras comunidades y nuestra gente.</h5>
        <Boton7 className={styles.marcas}/>
        <Boton8 className={styles.marcas}/>
      </div>
    </div>
  )
}
