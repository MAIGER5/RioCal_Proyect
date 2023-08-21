import styles from './FlueGas.module.css';
import imagePrincipal from '../../../utils/desulfuration.jpg'
import AplicationIndustrial from '../../../utils/AplicationIndustrial.jpg';
import incinerator from '../../../utils/incinerator.jpg';
import refractario from '../../../utils/refractario.jpg';


export const FlueGas = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.imagePinc}>
            <img src={imagePrincipal} alt="" />
        </div>
        <div className={styles.cardText}>
            <div className={styles.title1}>Tratamiento de Gases de Combustión</div>
            <div className={styles.textPrincipal}>Rio Cal tiene la reputación y el reconocimiento como líder en el tratamiento de gases de combustión (FGT). Desarrollamos fuertes alianzas y relaciones con nuestros clientes que cuentan con procesos FGT. Ofrecemos a nuestros clientes que usan cal y productos de piedra caliza de grado químico opciones para ser suministrados desde múltiples instalaciones dentro de nuestra red de distribución, lo que reduce el costo total y proporciona ahorros significativos.</div>
        </div>
        <div className={styles.contenedorCards}>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={AplicationIndustrial} alt="" />
                </div>
                <div className={styles.textImagen}><p>Aplicación Industrial</p></div>
            </div>
            <div className={styles.contenedorInforCard}>
                <div className={styles.cuadroImagepequeñas}>
                    <img src={incinerator} alt="" />
                </div>
                <div className={styles.textImagen}><p>Incineradoras</p></div>
            </div>
            <div className={styles.contenedorInforCard2}>
                <div className={styles.cuadroImage2} style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(70, 130, 180, 0.8)), url(${refractario})` }}>
                    {/* Puedes agregar cualquier contenido adicional dentro de este div si es necesario */}
                    <div className={styles.textImagen2}><p>Utilidades & Calderas</p></div>
                </div>

            </div>
        </div>
        

    </div>
  )
}
