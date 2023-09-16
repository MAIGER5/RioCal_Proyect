import styles from './Industrias.module.css';
import imagePrincipal from '../../../utils/industria.webp'
import { TarjetaAgricola } from './TarjetaIndustria/TarjetaAgricola';
import { TarjetaGases } from './TarjetaIndustria/TarjetaGases';
import { TarjetaQuimica } from './TarjetaIndustria/TarjetaQuimica';
import { TarjetaIngenieria } from './TarjetaIndustria/TarjetaIngenieria';
import { TarjetaMedioAmbiente } from './TarjetaIndustria/TarjetaMedioAmbiente';
import { TarjetaMetalurgia } from './TarjetaIndustria/TarjetaMetalurgica';
import { TarjetaNoFerrosos } from './TarjetaIndustria/TarjetaNoferroso';
import { TarjetaPapel } from './TarjetaIndustria/TarjetaPapel';




export const Industrias = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.imagePinc}>
            <img src={imagePrincipal} alt="" />
        </div>
        <div className={styles.cardText}>
            <div className={styles.title1}>ENTENDIENDO LAS NECESIDADES DE SU MERCADO</div>
            <div className={styles.textPrincipal}>Rio Cal  trabaja con usted para comprender las necesidades específicas de su mercado, de modo que podamos brindarle las soluciones adecuadas para satisfacer sus necesidades. <br /> <br /> Haga clic y explore las diversas aplicaciones por mercados a continuación para obtener más información sobre los materiales y servicios de rendimiento que ofrecemos para abordar sus necesidades particulares.   </div>
        </div>
        <div className={styles.tarjetasIndustries}>
            <TarjetaAgricola/>
            <TarjetaGases/>
            <TarjetaQuimica/>
            <TarjetaIngenieria/>
            <TarjetaMedioAmbiente/>
            <TarjetaMetalurgia/>
            <TarjetaNoFerrosos/>
            <TarjetaPapel/>
        </div>
        
    </div>
  )
}
