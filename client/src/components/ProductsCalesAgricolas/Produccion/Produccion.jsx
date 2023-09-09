import { Link } from 'react-router-dom';
import styles from './Produccion.module.css';

export const Produccion = () => {
  return (
    <div id='Especificaciones' className={styles.contenedor}>
        <strong className={styles.title}>PRODUCCIÓN DE CAL HIDRATADA ALTA EN CALCIO</strong>
        <br /><br />
        <p>La cal tipo S o "cal hidratada especial" es una cal dolomítica hidratada que se utiliza en diversas aplicaciones industriales, agrícolas y en materiales de construcción como morteros. A veces también se le conoce como "Cal de albañil" o "Cal hidratada de acabado". Las marcas de Carmeuse para este producto incluyen Miracle Morta-Lok® y Miracle Lime-Cote®. La cal tipo S debe alcanzar un valor de retención de agua mínimo del 85%.
        <br /><br />
        La cal tipo SA o "cal hidratada inclusor de aire especial" es una cal hidratada que es adecuada para usar en morteros, en capas raspadas y marrones de yeso de cemento, estuco y agregados al concreto de cemento Portland. El nombre comercial de Carmeuse para este producto es Miracle E-Z Spread®.
        <br /><br />
        Según la Asociación Nacional de Cal, no se hace distinción entre la cal Tipo S y la Tipo SA en función de la naturaleza y el origen de la piedra caliza, pero la distinción clave es el contenido máximo de aire de los morteros de cemento y cal. Cuando se hace con cal hidratada Tipos SA el contenido máximo de aire es 14%; con cal hidratada Tipos S, 7%.
        <br /><br />
        Para obtener información adicional relacionada con la cal hidratada dolomítica tipo S, haga clic aquí.
        <br /><br /><br />
        </p>
        <strong className={styles.title}>PRODUCCIÓN DE CAL HIDRATADA ALTA EN CALCIO</strong>
        <br /> <br />
        <p>Type S dolomitic hydrated lime is produced by adding a controlled amount of water to dolomitic quicklime in a hydrator, operated under elevated pressure. The result is a dry hydrate containing calcium hydroxide (Ca(OH)2) and magnesium hydroxide (Mg(OH)2).
        <br /><br />
        <div className={styles.formula}>PRESIÓN</div> 
        <div className={styles.formula}>CaO∙MgO + 2H2O to Ca(OH)2 + Mg(OH)2 + Heat</div> 
        <br /><br />
        Para garantizar un almacenamiento adecuado, la cal hidratada dolomítica debe protegerse de los elementos durante el envío y la manipulación del material, hasta que se necesite para su aplicación. Para soluciones de almacenamiento y manipulación de cal hidratada dolomítica, conozca nuestra recomendaciones <strong className={styles.resaltado}>Riocal +</strong>.
        </p>
        <br /><br /><br />
        <div className={styles.especificaciones}>
            <strong className={styles.especificacionesTitle}>Especificaciones</strong>
            <p>Los rangos típicos se encuentran a continuación.</p>
            <br />
            <strong className={styles.rango}>Químico: <br /> <span>Ca(OH)2:   55.5 – 58.5%</span> <span>Mg(OH)2:   38.5-41.5%</span> </strong>
            <br />
            <strong className={styles.rango}>Dimensionamiento: <br /> <span>85-90% Passing 325 Mesh</span></strong>
            <br />
            <strong className={styles.rango}>Tipo S: <br /> <span>85% Minimum Water Retention Value</span> <br /> <span> menor a 7% Air Entrainment</span> </strong>
            <br />
            <strong className={styles.rango}>Dimensionamiento: <br /> <span>85-90% Passing 325 Mesh</span></strong>
            <br />
            <p>Para obtener una lista completa de las especificaciones del producto, <Link to={'/Contacto'} className={styles.resaltado}>comuníquese </Link> con nosotros para obtener las Fichas Técnicas del producto.</p>
        </div>


    </div>
  )
}
