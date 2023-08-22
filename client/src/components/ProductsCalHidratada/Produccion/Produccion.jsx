import { Link } from 'react-router-dom';
import styles from './Produccion.module.css';

export const Produccion = () => {
  return (
    <div id='Especificaciones' className={styles.contenedor}>
        <strong className={styles.title}>PRODUCCIÓN DE CAL HIDRATADA ALTA EN CALCIO</strong>
        <br /> <br />
        <p>La cal hidratada (Ca(OH)2) se produce cuando la cal viva (CaO) se mezcla con una cantidad de agua cuidadosamente controlada. Esto produce un producto de hidróxido de calcio seco que está casi libre de humedad y, como resultado, es fácil de manipular y almacenar.
        <br /><br />
        <div className={styles.formula}>CaO + H2O -- Ca(OH)2 + heat</div> 
        <br />
        Después de que nuestra piedra caliza haya sido extraída, triturada y calcinada en un horno para producir cal viva, puede procesarse más a través de una reacción exotérmica en un hidratador, para formar hidróxido de calcio (Ca(OH)2) o cal hidratada. Este proceso agrega aproximadamente un 33% de agua a la cal viva; sin embargo, su forma final como hidróxido de calcio sigue siendo un polvo seco.
        {/* <Link to={'/Contacto'} className={styles.resaltado}>contactanos </Link>. */}
        <br /><br />
        La cal hidratada con alto contenido de calcio también se conoce como cal apagada, pero no la confunda con la lechada húmeda derivada del proceso de apagado. Si bien la cal viva en polvo está seca, se puede procesar de una manera diferente para producir un producto en suspensión.
        <br /><br />
        Tenga en cuenta que el término “cal” se refiere tanto a la cal viva como a la cal hidratada, por lo tanto, cuando sea necesaria una diferenciación, los productos deben denominarse cal viva o cal hidratada.
        <br /><br />
        Para garantizar un almacenamiento adecuado, la cal hidratada con alto contenido de calcio debe protegerse de los elementos durante el envío y la manipulación del material, hasta que se necesite para su aplicación. Para soluciones de almacenamiento y manipulación de cal hidratada, conozca nuestros servicios <strong className={styles.resaltado}>Riocal +</strong>.
        </p>
        <br /><br />
        <div className={styles.especificaciones}>
            <strong className={styles.especificacionesTitle}>Especificaciones</strong>
            <p>Los rangos típicos se encuentran a continuación.</p>
   
            <p>Debido a la composición química del óxido de calcio, se utiliza en una amplia variedad de productos y aplicaciones. Las especificaciones básicas se enumeran para su conveniencia, pero contáctenos por correo electrónico o por teléfono para obtener más orientación.
            </p>
            <br />
            <strong className={styles.rango}>Químico: <span>94.0 - 97.0% Ca(OH)2</span></strong>
            <strong className={styles.rango}>Dimensionamiento: <span>92-97% Passing 325 Mesh</span></strong>
            <br />
            <p>Para obtener una lista completa de las especificaciones del producto, <Link to={'/Contacto'} className={styles.resaltado}>comuníquese </Link> con nosotros para obtener las Fichas Técnicas del producto.</p>
        </div>


    </div>
  )
}
