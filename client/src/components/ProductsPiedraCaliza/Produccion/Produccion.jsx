import { Link } from 'react-router-dom';
import styles from './Produccion.module.css';

export const Produccion = () => {
  return (
    <div id='Especificaciones' className={styles.contenedor}>

        <strong className={styles.title}>PRODUCCIÓN DE PIEDRA CALIZA</strong>
        <br /> <br />
        <p>Carmeuse proporciona piedra caliza con alto contenido de calcio hecha de 95% o más de carbonato de calcio puro a través de una gran red de minas aéreas y subterráneas. La piedra caliza con alto contenido de calcio se produce en una variedad de tamaños para satisfacer las necesidades de nuestros clientes, ya sea como piedra en bruto o como carbonato de calcio molido. Para obtener información adicional sobre la producción de carbonato de calcio molido.
.
        <br /><br />
        <div className={styles.formula}>PRESIÓN</div> 
        <div className={styles.formula}>CaO∙MgO + 2H2O to Ca(OH)2 + Mg(OH)2 + Heat</div> 
        
        </p>
        <br /><br /><br />
        <div className={styles.especificaciones}>
            <strong className={styles.especificacionesTitle}>Especificaciones</strong>
            <p>Los rangos típicos se encuentran a continuación.</p>
            <br />
            <strong className={styles.rango}>Pureza de CaCO3: <br /> <span>95-98%</span> </strong>
            <br />
            <strong className={styles.rango}>Dimensionamiento: <br /> <span>2,5” hasta 7 micras</span></strong>
            <br />
            <p>Para obtener una lista completa de las especificaciones del producto, <Link to={'/Contacto'} className={styles.resaltado}>comuníquese </Link> con nosotros para obtener las Fichas Técnicas del producto.</p>
        </div>


    </div>
  )
}
