import styles from './Calidad.module.css'
import { Boton10, Boton12, Boton13, Boton14, Boton9 } from '../Boton/Boton'
import { SubCalidad } from './SubCalidad'
import laboratorio from '../../utils/laboratorio.png'


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
            <div className={styles.imgLaboratorio}>
              <img  src={laboratorio} alt="" />
            </div>
        </div>
        <section className={styles.layout}>
            <div className={styles.grow1}>
              <h1 className={styles.titleGrow}>SPC</h1>
              <h5 className={styles.textGorw}>Aseguramos la calidad de nuestros productos a traves de SPC Técnica de Control Estadistico de Procesos</h5>
              <div className={styles.boton12}>
                <Boton12/>
              </div>
            </div>
            <div className={styles.grow2}>
            <h1 className={styles.titleGrow}>TA</h1>
              <h5 className={styles.textGorw}>Empleamos Técnicas y Procedimientos de análisis internos y en laboratorios externos certificados</h5>
              <div className={styles.boton12}>
                <Boton13/>
              </div>
            </div>
            <div className={styles.grow3}>
            <h1 className={styles.titleGrow}>PHVA</h1>
              <h5 className={styles.textGorw}>Procesos dearrollados a traves del ciclo Planear - Hacer - Verificar y Actuar</h5>
              <div className={styles.boton12}>
                <Boton14/>
              </div>
            </div>
        </section>
        <SubCalidad/>
    </div>
  )
}
