import styles from './Contacto.module.css'
import contactImg from '../../utils/contact.png'
import { Formulario } from './Formulario'
import { CardContact } from './CardContact'
import { InfoOficinas } from './InfoOficinas'
import { Findoffice } from './Findoffice'



export const Contacto = () => {

  
  return (
    <div className={styles.contenedor}>
        <div className={styles.images}>
            <img src={contactImg} alt="" />
        </div>
        <div className={styles.titles}>NUESTRO EQUIPO ESTA AQUÍ PARA AYUDARTE</div>
        <CardContact/>
        <Formulario/>
        <Findoffice/>
        <InfoOficinas/>
    </div>
  )
}
