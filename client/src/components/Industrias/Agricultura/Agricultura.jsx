import styles from './Agricultura.module.css';
import imagePrincipal from '../../../utils/agriculture6.png'
import animalFeed from '../../../utils/animalFeed.jpg';
import desinfection from '../../../utils/desinfection.jpg';
import sugar from '../../../utils/sugar.jpg';
import azucar from '../../../utils/azucar.jpg';



export const Agricultura = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.imagePinc}>
            <img src={imagePrincipal} alt="" />
        </div>
        <div className={styles.cardText}>
            <div className={styles.title1}>INDUSTRIA AGRÍCOLA</div>
            <div className={styles.textPrincipal}>Hoy en día, la agricultura es un negocio complejo con una variedad de necesidades. Ya sea aumentando el pH de su suelo, gestionando la salud de sus animales, controlando los desechos animales para controlar los olores, eliminando las impurezas del jugo en el proceso de azúcar, maximizando sus rendimientos o aumentando la eficiencia de su alimentación, obtener ganancias es su prioridad número uno. Vamos más allá de las simples transacciones; colaboramos con nuestros clientes a largo plazo, ofreciéndole el apoyo que necesita para crecer.</div>
        </div>
        <div className={styles.contenedorCards}>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImageVacasPollos}>
                    <img src={animalFeed} alt="" />
                </div>
                <div className={styles.textImagen}><p>Alimentación Animal</p></div>
            </div>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImageVacasPollos}>
                    <img src={desinfection} alt="" />
                </div>
                <div className={styles.textImagen}><p>Desinfección</p></div>
            </div>
            <div className={styles.contenedorInforCard2}>
                <div className={styles.cuadroImage2} style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(70, 130, 180, 0.8)), url(${sugar})` }}>
                    <div className={styles.textImagenSuelo}>Tratamiento del Suelo</div>
                    {/* Puedes agregar cualquier contenido adicional dentro de este div si es necesario */}
                </div>

            </div>
        </div>
        <div className={styles.sugarIndustry}>
            <img src={azucar} alt="azucar" />
            <div className={styles.textImagenAzucar}><p>Industria del Azucar</p></div>
        </div>

    </div>
  )
}
