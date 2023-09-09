import styles from './Quimico.module.css';
import imagePrincipal from '../../../utils/Quimico.jpg'
import sales from '../../../utils/sales.png';
import arena from '../../../utils/arena.jpg';
import plastic from '../../../utils/plastic.jpg';
import petroquimica from '../../../utils/petroquimica.jpg';



export const Quimico = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.imagePinc}>
            <img src={imagePrincipal} alt="" />
        </div>
        <div className={styles.cardText}>
            <div className={styles.title1}>INDUSTRIA QUÍMICA</div>
            <div className={styles.textPrincipal}>Rio Cal ofrece productos esenciales para la industria química. Nuestros productos proporcionan una fuente de calcio, álcali, desecante, agente caustificante, agente saponificante, agente aglutinante, floculante, precipitante, agente fundente, agente formador de vidrio, degradador de materia orgánica, lubricante, relleno y agente hidrolizante.
.</div>
        </div>
        <div className={styles.contenedorCards}>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={sales} alt="" />
                </div>
                <div className={styles.textImagen}><p>Sales de Calcio & Orgánicos</p></div>
            </div>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={arena} alt="" />
                </div>
                <div className={styles.textImagen}><p>Fertilizantes</p></div>
            </div>
            <div className={styles.contenedorInforCard2}>
                <div className={styles.cuadroImage2} style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(70, 130, 180, 0.8)), url(${plastic})` }}>
                    <div className={styles.textImagen2}>Plástico & Caucho</div>
                    {/* Puedes agregar cualquier contenido adicional dentro de este div si es necesario */}
                </div>

            </div>
        </div>
        <div className={styles.imagenGrande}>
            <img src={petroquimica} alt="petroquimica" />
            <div className={styles.textImagenGrande}><p>Petroquímica y Gas de Petróleo</p></div>
        </div>

    </div>
  )
}
