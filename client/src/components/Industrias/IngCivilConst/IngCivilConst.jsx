import styles from './IngCivilConst.module.css';
import imagePrincipal from '../../../utils/construccion.webp'
import residual from '../../../utils/residual.png';
import estabilizacion from '../../../utils/estabilizacion.png';
import carretera from '../../../utils/carretera.jpg';
import concreto from '../../../utils/concreto.jpg';



export const IngCivilConst = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.imagePinc}>
            <img src={imagePrincipal} alt="" />
        </div>
        <div className={styles.cardText}>
            <div className={styles.title1}>INGENIERÍA CIVIL & CONSTRUCCIÓN</div>
            <div className={styles.textPrincipal}>Los proyectos civiles y de construcción son exigentes, rápidos y complejos. Nuestros productos simplifican su trabajo al mejorar los suelos problemáticos, fortalecer los cimientos, brindar consistencia a las mezclas de concreto y agregar longevidad a los pavimentos de asfalto. Aseguramos la calidad para cumplir con los estándares de la industria y contamos con una amplia red logística que nos permite hacer llegar nuestros productos a su proyecto rápidamente. Vamos más allá de las simples transacciones; colaboramos con nuestros clientes a largo plazo, ofreciéndole el apoyo que sus trabajos necesitan para tener éxito.</div>
        </div>
        <div className={styles.contenedorCards}>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={residual} alt="" />
                </div>
                <div className={styles.textImagen}><p>Secado de Subproductos &<br /> Materiales de Flujo <br />Residual</p></div>
            </div>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={estabilizacion} alt="" />
                </div>
                <div className={styles.textImagen}><p>Secado,<br /> Modificación & <br />Estabilización de Suelos</p></div>
            </div>
            <div className={styles.contenedorInforCard2}>
                <div className={styles.cuadroImage2} style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(70, 130, 180, 0.8)), url(${carretera})` }}>
                    <div className={styles.textImagen2}>Servicios de Fabricación & <br />Pavimentación de Asfalto</div>
                    {/* Puedes agregar cualquier contenido adicional dentro de este div si es necesario */}
                </div>

            </div>
        </div>
        <div className={styles.imagenGrande}>
            <img src={concreto} alt="petroquimica" />
            <div className={styles.textImagenGrande}><p>Fabricación de Hormigón</p></div>
        </div>

    </div>
  )
}
