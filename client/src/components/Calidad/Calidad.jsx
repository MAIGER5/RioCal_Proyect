import { Boton10, Boton9 } from '../Boton/Boton'
import styles from './Calidad.module.css'

export const Calidad = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerImg}>
            <p id={styles.CalidadDeProcesos}>CALIDAD DE PROCESOS</p>
            <p id={styles.CalidadDeProcesos1}>Ofrecemos a nuestros Clientes  la mejor <br />experiencia de uso posible
            </p>
            <div className={styles.boton}>
                <Boton9 />
                <Boton10 />
            </div>
        </div>
        <section className={styles.layout}>
            <div className={styles.grow1}>1</div>
            <div className={styles.grow2}>2</div>
            <div className={styles.grow3}>3</div>
        </section>
    </div>
  )
}
