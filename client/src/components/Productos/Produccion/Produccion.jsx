import { Link } from 'react-router-dom';
import styles from './Produccion.module.css';

export const Produccion = () => {
  return (
    <div id='Especificaciones' className={styles.contenedor}>

        <strong className={styles.title}>PRODUCCIÓN DE CAL DOLOMITA</strong>
        <br /> <br />
        <p>La cal viva dolomítica (CaO•MgO) se produce cuando la piedra caliza dolomítica, también conocida como dolomita o carbonato de calcio y magnesio (CaCO3 • MgCO3), se calienta en un horno mediante el proceso de calcinación.</p>
        <br />
        <div className={styles.formula}>CaCO3 • MgCO3 + heat a  CaO • MgO + 2 CO2</div> 
        <br />
        <p>A partir de nuestras minas subterráneas y a cielo abierto, la piedra caliza dolomítica que contiene altos niveles de magnesio se recolecta, transporta, luego se tritura, se clasifica y se alimenta a través de un horno de cal donde se calienta a temperaturas extremadamente altas. El óxido de calcio y magnesio resultante (CaO•MgO) se conoce con muchos nombres, incluidos cal dolomítica, cal dolomítica, dolima y, por supuesto, cal viva dolomítica.</p>
        <p>
        Al igual que con otros productos de cal viva, la cal viva dolomítica reaccionará a la humedad, por lo que es importante protegerla durante todo el proceso de producción y manipulación. Después de la producción, la cal viva dolomítica se almacena en un silo y luego se guarda en un recipiente cerrado para su transporte por camión, ferrocarril o barcaza. En su destino, la cal viva se traslada a un silo propio para su almacenamiento hasta su necesidad para la aplicación. Para determinar si sus sistemas de manejo de cal están funcionando al máximo, conozca nuestro <strong className={styles.resaltado}>Riocal +</strong>
        </p>
        <br /><br /><br />
        <div className={styles.especificaciones}>
            <strong className={styles.especificacionesTitle}>Especificaciones</strong>
            <p>Los rangos típicos se encuentran a continuación.</p>
            <br />
            <strong className={styles.rango}>Rango de contenido de calcio (CaO): <br /> <span>Ca(OH)2:   56-59%</span> </strong>
            <br />
            <strong className={styles.rango}>Rango de contenido de magnesio (MgO): <br /> <span>37-41%</span></strong>
            <br />
            <strong className={styles.rango}>Rango de tamaño: <br /> <span>2 ¼” down to 0”</span> </strong>
            <br />
            <br />
            <p>Para obtener una lista completa de las especificaciones del producto, <Link to={'/Contacto'} className={styles.resaltado}>comuníquese </Link> con nosotros para obtener las Fichas Técnicas del producto.</p>
        </div>


    </div>
  )
}
