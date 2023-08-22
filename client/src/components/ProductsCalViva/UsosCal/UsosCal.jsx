import styles from './UsosCal.module.css';

export const UsosCal = () => {
    return (
        <div className={styles.contenedor}>
            <strong className={styles.title}>USOS DE LA CAL VIVA ALTA EN CALCIO</strong>
            <br /> <br />
            <p>La cal viva con alto contenido de calcio, o cal, es uno de los materiales alcalinos más efectivos que se usan comúnmente para neutralizar compuestos ácidos, ajustar el pH, eliminar impurezas, desinfectar, estabilizar lodos, eliminar contaminantes gaseosos de las corrientes de escape y secar/estabilizar suelos. Las aplicaciones incluyen:.
            </p>
            <br />
            <ul className={styles.lista}>
                <li>Fabricación de acero BOF y EAF como agente fundente para lograr propiedades físicas y químicas de escoria adecuadas, eliminando así las impurezas en el acero fundido</li>
                <li>Reduce los patógenos en los biosólidos agrícolas</li>
                <li>Reactivo para neutralización de ácidos y ajuste de pH</li>
                <li>Tratamiento de agua/eliminación de contaminantes</li>
                <li>Se utiliza para remediar sitios de lodos de desecho y neutralizar el drenaje ácido de la mina</li>
                <li>Procesamiento de minerales: controla la flotación ajustando el pH y/o consumiéndose en una reacción de metátesis</li>
                <li>Plantas de energía: reduce las emisiones de gases ácidos al medio ambiente, lo que se conoce como tratamiento de gases de combustión (FGT) o desulfuración de gases de combustión (FGD)</li>
                <li>Producción de papel: mejora la eficiencia de caustificación</li>
            </ul>
        </div>
      )
}

