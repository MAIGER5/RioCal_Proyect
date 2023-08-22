import styles from './UsosCal.module.css';

export const UsosCal = () => {
    return (
        <div className={styles.contenedor}>
            <strong className={styles.title}>USOS DE LA CAL VIVA ALTA EN CALCIO</strong>
            <br /> <br />
            <p>La cal hidratada con alto contenido de calcio es uno de los reactivos más eficaces para la neutralización de ácidos y el ajuste del pH.
            </p>
            <br />
            <ul className={styles.lista}>
                <li><strong>Agricultura- </strong>la cal hidratada con alto contenido de calcio es un material fácil de usar para la desinfección agrícola de lechos de animales en establos y gallineros.</li>
                <li><strong>Tratamiento de Agua- </strong>ayuda a eliminar una amplia variedad de contaminantes del agua para mejorar la calidad, ajustar el pH y reducir los metales pesados ​​en las aguas residuales.</li>
                <li><strong>Tratamiento de Gases de Combustión- </strong>utiliza en aplicaciones de lavado en seco para reducir los gases ácidos y los metales pesados.</li>
                <li><strong>Hierro y Acero- </strong>la cal hidratada se usa en las fundiciones de hierro y acero como un recubrimiento de cal en los moldes para evitar que se peguen y proporcionar una protección temporal contra la corrosión de los productos terminados. También se utiliza en el tratamiento de agua en acerías.</li>
                <li><strong>Construcción - </strong>La cal hidratada es un aditivo anti-desprendimiento comprobado para mitigar los agregados susceptibles a la humedad en mezclas asfálticas calientes y tibias, lo que aumenta el rendimiento y la expectativa de vida de los pavimentos.</li>
                <li><strong>Procesamiento Químico - </strong>se utiliza como fuente de álcali, para ajustar el pH, como acelerante o en una reacción de metátesis.</li>
                <li><strong>No Ferrosos - </strong>la cal hidratada se utiliza en las instalaciones de procesamiento de minerales para reaccionar y/o separar componentes valiosos como el cobre, el oro o el litio de su roca madre o salmuera..</li>

            </ul>
        </div>
      )
}

