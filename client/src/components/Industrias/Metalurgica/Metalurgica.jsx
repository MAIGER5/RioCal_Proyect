import styles from './Metalurgica.module.css';
import imagePrincipal from '../../../utils/Metalurgica.jpg'
import agua2 from '../../../utils/agua2.webp';
import solidification from '../../../utils/solidification.webp';
import fundicion from '../../../utils/fundicion.jpg';



export const Metalurgica = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.imagePinc}>
            <img src={imagePrincipal} alt="" />
        </div>
        <div className={styles.cardText}>
            <div className={styles.title1}>HIERRO & ACERO (Metalúrgica & Siderúrgica)</div>
            <div className={styles.textPrincipal}>La cal es un componente crítico en el proceso de fabricación de acero. Ya sea como agente fundente para la química adecuada de la escoria, protegiendo los sinterizados del mineral de hierro, extendiendo la vida útil del refractario, manteniendo la química del cromo en el acero inoxidable, como lubricante en el proceso de fundición o cumpliendo con las normas ambientales del aire y el agua, la calidad y el suministro de su cal afecta su resultado final. Nuestra experiencia y conocimientos en la industria del acero le brindan una variedad de soluciones para satisfacer sus necesidades.</div>
        </div>
        <div className={styles.contenedorCards}>
            <div className={styles.contenedorInforCard}>
                <div className={styles.textImagen}><p>Fundición <br /><br /><br /> <p className={styles.textoInternoImagen}>Rio Cal ofrece una variedad de productos a base de cal y soluciones de servicios avanzados para abordar los muchos desafíos que enfrenta en el proceso de fabricación de acero.</p></p></div>
                
            </div>
            <div className={styles.contenedorInforCard}>
                <div className={styles.textImagen1}><p>Desulfuración de <br /><br /> Metales Calientes <p className={styles.textoInternoImagen}>Inyección de cal Soluciones de productos: cal viva con alto contenido de calcio l cal molida fluidizada con o sin magnesio.</p></p></div>
            </div>
            <div className={styles.contenedorInforCard2}>
                <div className={styles.cuadroImage2} style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(70, 130, 180, 0.8)), url(${fundicion})` }}>
                    {/* Puedes agregar cualquier contenido adicional dentro de este div si es necesario */}
                    <div className={styles.textImagen2}><p>Metalúrgica & Siderúrgica </p></div>
                </div>

            </div>
        </div>

        

    </div>
  )
}
