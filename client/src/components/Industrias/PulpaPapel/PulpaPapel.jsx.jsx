import styles from './PulpaPapel.module.css';
import imagePrincipal from '../../../utils/paper.jpg'
import pulpa from '../../../utils/pulpa.webp';
import paper1 from '../../../utils/paper1.jpg';
import paper2 from '../../../utils/paper2.jpg';
import concreto from '../../../utils/concreto.jpg';



export const PulpaPapel = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.imagePinc}>
            <img src={imagePrincipal} alt="" />
        </div>
        <div className={styles.cardText}>
            <div className={styles.title1}>PULPA & PAPEL</div>
            <div className={styles.textPrincipal}>La producción de papel requiere grandes cantidades de carbonato de calcio precipitado para maximizar la blancura, opacidad y consistencia del papel. La cal viva regenera la sosa cáustica de la fabricación de pulpa, sirve como agente blanqueador para la pulpa y trata el agua residual producida durante la producción de pulpa. La cal viva también ayuda a los fabricantes de pulpa a disolver los elementos de madera que no son de celulosa. Nuestra experiencia y conocimientos le brindan una variedad de soluciones para satisfacer sus necesidades..</div>
        </div>
        <div className={styles.contenedorCards}>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={pulpa} alt="" />
                </div>
                <div className={styles.textImagen}><p>Pulpa de Papel</p></div>
            </div>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={paper1} alt="" />
                </div>
                <div className={styles.textImagen}><p>Papel</p></div>
            </div>
            <div className={styles.contenedorInforCard2}>
                <div className={styles.cuadroImage2} style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(70, 130, 180, 0.8)), url(${paper2})` }}>
                    <div className={styles.textImagen2}>Rio Cal ofrece una variedad de productos a base de cal y soluciones de servicios avanzados para hacer frente a los muchos desafíos que enfrenta en su planta de pulpa y papel</div>
                    {/* Puedes agregar cualquier contenido adicional dentro de este div si es necesario */}
                </div>

            </div>
        </div>

    </div>
  )
}
