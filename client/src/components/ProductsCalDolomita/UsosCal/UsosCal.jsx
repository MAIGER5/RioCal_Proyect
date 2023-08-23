import styles from './UsosCal.module.css';

export const UsosCal = () => {
    return (
        <div className={styles.contenedor}>
            <strong className={styles.title}>USOS DE LA CAL HIDRATADA ALTA EN CALCIO</strong>
            <br /> <br />
            <p>La cal tipo S se puede utilizar en las siguientes aplicaciones:.</p>
            <br />
            <ul className={styles.lista}>
                <li>Adición de elasticidad y durabilidad al mortero.</li>
                <li>Tratamiento de cenizas volantes.</li>
                <li>Tratamiento de aguas residuales.</li>
                <li>Procesamiento químico.</li>
            </ul>
            <p>Para obtener información adicional, para ver nuestras hojas típicas de productos o para analizar la disponibilidad con nuestro grupo de ventas, comuníquese con nosotros.</p>
        </div>
      )
}

