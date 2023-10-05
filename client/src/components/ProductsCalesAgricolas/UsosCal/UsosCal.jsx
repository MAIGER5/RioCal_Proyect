import styles from './UsosCal.module.css';

export const UsosCal = () => {
    return (
        <div className={styles.contenedor}>
            <strong className={styles.title}>USOS DE LA CAL DOLOMITA</strong>
            <br /> <br />
            <p>Muchos procesos y sistemas industriales requieren cal viva dolomítica, o doli, para aplicaciones específicas, que incluyen:</p>
            <br />
            <ul className={styles.lista}>
                <li><strong>Fabricación de acero BOF y EAF</strong>– utilizado en combinación con cal con alto contenido de calcio como agente fundente para lograr las propiedades físicas y químicas adecuadas de la escoria; El contenido adecuado de magnesio protege el refractario.</li><br />
                <li><strong>Fabricación de hidróxido de Ca-Mg:</strong>– contenido máximo de calcio y magnesio.</li><br />
                <li><strong>Producción de fibra de vidrio:</strong>– sirve como fundente para modificar la viscosidad, prevenir la desvitrificación y aumentar la durabilidad del producto final y la resistencia al desgaste químico.</li>
    
            </ul>
            <p>Para obtener información adicional, para ver nuestras hojas típicas de productos o para analizar la disponibilidad con nuestro grupo de ventas, comuníquese con nosotros.</p>
        </div>
      )
}

