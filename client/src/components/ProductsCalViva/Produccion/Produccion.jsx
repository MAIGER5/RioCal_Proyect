import { Link } from 'react-router-dom';
import styles from './Produccion.module.css';

export const Produccion = () => {
  return (
    <div id='Especificaciones' className={styles.contenedor}>
        <strong className={styles.title}>PRODUCCIÓN DE CAL VIVA ALTA EN CALCIO</strong>
        <br /> <br />
        <p>La cal viva con alto contenido de calcio (CaO) se produce cuando la piedra caliza, o carbonato de calcio (CaCO3), se calienta en un horno a través del proceso de calcinación.
        <br /><br />
        <div className={styles.formula}>CaCo3 + heat a Cao = CO2</div> 
        <br />
        Una vez que la piedra caliza con alto contenido de calcio se extrae de nuestras canteras y minas subterráneas, se transporta y procesa a través de una serie de trituradoras para alcanzar el tamaño deseado. Luego, el material se calienta en un horno de cal a temperaturas extremadamente altas para producir cal viva con alto contenido de calcio. Carmeuse ofrece una variedad de tamaños de cal viva con alto contenido de calcio para satisfacer las necesidades de su aplicación, con entrega desde nuestra amplia red de plantas. Para tallas y disponibilidad, <Link to={'/Contacto'} className={styles.resaltado}>contactanos </Link>.
        <br /><br />
        La cal viva con alto contenido de calcio no tiene una vida útil prolongada porque reacciona rápidamente con la humedad y otros compuestos en el aire ambiente. Por lo tanto, debe protegerse de los elementos desde la producción hasta el final del uso en la aplicación especificada. Una vez que se produce la cal viva, se almacena en un silo, luego se transfiere a un recipiente cerrado (camión, tren o barcaza) para el transporte y luego se descarga en un silo para el almacenamiento en el sitio hasta que se extrae para su procesamiento. La mayor parte de la transferencia se realiza con neumáticos. Para recibir asistencia de expertos con sus sistemas de manejo de cal, conozca nuestros servicios <strong className={styles.resaltado}>Riocal +</strong>.
        </p>
        <br /><br />
        <div className={styles.especificaciones}>
            <strong className={styles.especificacionesTitle}>Especificaciones</strong>
            <p>Los rangos típicos se encuentran a continuación.</p>
   
            <p>Debido a la composición química del óxido de calcio, se utiliza en una amplia variedad de productos y aplicaciones. Las especificaciones básicas se enumeran para su conveniencia, pero contáctenos por correo electrónico o por teléfono para obtener más orientación.
            </p>
            <br />
            <strong className={styles.rango}>Rango de contenido de calcio (CaO): <span>93-97%</span></strong>
            <strong className={styles.rango}>Rango de tamaño: <span>2 ¼” down to 0”</span></strong>
            <strong className={styles.rango}>Reactividad: <span >30-50 °C mínimo aumento de calor de 3 minutos</span></strong>
            <br />
            <p>Para obtener una lista completa de las especificaciones del producto, <Link to={'/Contacto'} className={styles.resaltado}>comuníquese </Link> con nosotros para obtener las Fichas Técnicas del producto.</p>
        </div>


    </div>
  )
}
