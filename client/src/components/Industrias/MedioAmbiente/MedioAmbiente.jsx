import styles from './MedioAmbiente.module.css';
import imagePrincipal from '../../../utils/ambiente.jpg'
import agua2 from '../../../utils/agua2.webp';
import estabilizacion from '../../../utils/estabilizacion.png';
import animalWaste from '../../../utils/animalWaste.jpg';
import agua1 from '../../../utils/agua1.jpg';



export const MedioAmbiente = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.imagePinc}>
            <img src={imagePrincipal} alt="" />
        </div>
        <div className={styles.cardText}>
            <div className={styles.title1}>AMBIENTE</div>
            <div className={styles.textPrincipal}>Las regulaciones ambientales más estrictas requieren que las empresas presten mucha atención a la calidad de su agua, corrientes de desechos y suelos contaminados. La conversión de agua natural en agua potable implica una serie de procesos, desde la eliminación de impurezas y ciertos metales hasta el ablandamiento o mineralización posterior al tratamiento. Las descargas de aguas residuales, ya sean lodos o animales, plantean otro gran desafío de tratamiento. Nuestra experiencia y conocimientos le brindan una variedad de soluciones para satisfacer sus necesidades.</div>
        </div>
        <div className={styles.contenedorCards}>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={agua2} alt="" />
                </div>
                <div className={styles.textImagen}><p>Industria del Agua</p></div>
            </div>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={estabilizacion} alt="" />
                </div>
                <div className={styles.textImagen}><p>Solidificación</p></div>
            </div>
            <div className={styles.contenedorInforCard2}>
                <div className={styles.cuadroImage2} style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(70, 130, 180, 0.8)), url(${animalWaste})` }}>
                    {/* Puedes agregar cualquier contenido adicional dentro de este div si es necesario */}
                    <div className={styles.textImagen2}><p>Desecho Animal</p></div>
                </div>

            </div>
        </div>
        <div className={styles.imagesecondline}>
            <div className={styles.imagenGrande}>
                <img src={agua1} alt="agua1" />
                <div className={styles.textImagenGrande}><p>Aguas residuales municipales y biosólidos</p></div>
            </div>
            <div className={styles.imagenGrande2}>
                <img src={agua1} alt="agua1" />
                <div className={styles.textImagenGrande2}><p>Aguas residuales municipales y biosólidos</p></div>
            </div>
        </div>
        

    </div>
  )
}
