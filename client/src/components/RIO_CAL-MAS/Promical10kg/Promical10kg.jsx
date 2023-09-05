import styles from './Promical10kg.module.css'
import imageCal from '../../../utils/CalHidratadaBlanquearPromical.png'
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


export const Promical10kg = () => {
  return (
    <div className={styles.container}>
      <section className={styles.imageContenedor}> 
        <img src={imageCal} alt="" />
      </section>
      <div className={styles.cardText}>
        <h3>Cal Hidratada para Blanquear(Promical)</h3>
        <h3>COP$ 0.00 <Link to={'/Contacto'} className={styles.clickComprar}>Click para Contactar un Comercial</Link></h3>
        <h4> <LocalShippingIcon sx={{marginRight:'11px', fontSize:'31px'}}/> Envío Incluido o Recogida en planta por el cliente)</h4>
        <h5>Despacho Mínimo: 10ton previa programación con el departamento de operaciones. Aplica sábado, domingo y festivos. <br /><br />
        La cal hidratada, conocida químicamente como hidróxido de calcio (Ca(OH)2), o cal apagada, es un polvo blanco seco derivado de la cal viva que se ha mezclado con agua. La cal hidratada con alto contenido de calcio. En Rio Cal está disponible como producto seco a granel o en bolsa y se utiliza en una variedad de aplicaciones industriales, incluido el tratamiento de gases de combustión, el tratamiento de agua, la fabricación de acero, la construcción entre otras..</h5>
        <h4 className={styles.titleDescription}>Beneficios</h4>

        <ul className={styles.benefits}>
            <li>Alto contenido de calcio para un rendimiento superior</li>
            <li>Alta pureza constante para obtener un rendimiento crítico por cada tonelada</li>
            <li>Libera muy poco calor exotérmico cuando entra en contacto con el agua, lo que lo hace más fácil y seguro de usar en ciertas aplicaciones en comparación con la cal viva o la soda cáustica con alto contenido de calcio.</li>

        </ul>
      </div>
    </div>
  )
}
