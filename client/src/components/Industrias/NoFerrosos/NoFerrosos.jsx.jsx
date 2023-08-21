import styles from './NoFerrosos.module.css';
import imagePrincipal from '../../../utils/NoFerrosos.jpg'
import NoFerrosos2 from '../../../utils/NoFerrosos2.jpg';
import oro from '../../../utils/oro.jpg';


export const NoFerrosos = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.imagePinc}>
            <img src={imagePrincipal} alt="" />
        </div>
        <div className={styles.cardText}>
            <div className={styles.title1}>Mineria & <br /> No Ferrosos</div>
        </div>
        <div className={styles.contenedorCards}>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={oro} alt="" />
                </div>
                <div className={styles.textImagen}><p>Procesamiento & <br /> Refinación de Minerales</p></div>
            </div>
            <div className={styles.contenedorInforCard2}>
                <div className={styles.cuadroImage2} style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(70, 130, 180, 0.8)), url(${NoFerrosos2})` }}>
                    {/* Puedes agregar cualquier contenido adicional dentro de este div si es necesario */}
                    <div className={styles.textImagen2}><p>No Ferrosos</p></div>
                </div>
            </div>
        </div>
        <div className={styles.cardTextFinal}>
            <div className={styles.titleFinal}>No Ferrosos</div>
            <div className={styles.textFinal}>Rio Cal ofrece productos que son esenciales para las industrias de procesamiento de minerales y no ferrosos. Estos productos proporcionan una fuente de calcio, álcali, desecante, agente caustificante, agente saponificante, agente aglutinante, floculante, precipitante y agente fundente. Estas materias primas y servicios adjuntos ayudan a que su negocio crezca a través de la construcción de relaciones junto con la calidad de nuestros productos y personas. Hacemos hincapié en obtener el producto correcto a tiempo, siempre.</div>
        </div>

    </div>
  )
}
