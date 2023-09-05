import styles from './Rio_Cal_Mas.module.css';
import CalHidratadaBlanquearPromical from '../../utils/_DSC4615.jpg'
import CalHidratadaBlanquearProcecal from '../../utils/_DSC4618.jpg'
import CalHidratadaIndustrial from '../../utils/_DSC4610.jpg'
import CalHidratadaTipoN from '../../utils/_DSC4614.jpg';
import riocalMas from '../../utils/prin13.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Boton10, Boton11, Boton9 } from '../Boton/Boton';


export const Rio_Cal_Mas = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgPrincipal}>
            <img src={riocalMas} alt="" />
            {/* <div className={styles.textoImgPrincipal}>Rio Cal +</div> */}
            <div className={styles.textoImgPrincipalSegundo}>HAZ PARTE DE LA RED RIO CAL +</div>
            <div className={styles.textoImgPrincipalTercero}>La Red de distribución más grande de Colomia de Cales Hidratadas
            </div>
            <div className={styles.boton}>
                <Boton9 />
                <Boton10 />
            </div>
        </div>
        <div className={styles.cuadroPesos}>
            <div className={styles.dentroCuadroPesos1}> 
                <p id={styles.titleCuadroPesos1}>18 Años en el Mercado de las Cales Hidratadas</p>
                <p id={styles.parrafoCuadroPesos1}>Nuestros productos se encuentran posicionados como las mejores Cales del mercado</p>
                <Boton11/>
            </div>
            <div className={styles.dentroCuadroPesos2}>
                <div className={styles.TextoPesos}>10 <br /> KG</div>
                <div className={styles.TextoPesos}>25 <br /> KG</div>
                <div className={styles.TextoPesos}>1 <br /> TON</div>
            </div>
        </div>
        {/* <div className={styles.cardText}>
            <div className={styles.title1}>RIO CAL + </div>
            <div className={styles.textPrincipal}>Haz parte de la Red de distribución  Mas grande de Colombia de Cales Hidratadas.</div>
        </div> */}
        <section className={styles.layout}>
            <Link to={'/Promical10kg'} className={styles.tarjet}>
                <div className={styles.card}>
                    <img src={CalHidratadaBlanquearPromical} alt="" />
                </div>
                <div className={styles.textTarjet}>
                    Cal Hidradata para Blanquear Promical
                </div>
                <div className={styles.peso}>
                    10 kg
                </div>
                <div className={styles.carrito}>
                    <p>Agregar al Carrito</p>
                    <ShoppingCartIcon color='action'/>
                </div>
            </Link>
            <Link to={'/Procecal10kg'} className={styles.tarjet}>
                <div className={styles.card}>
                    <img src={CalHidratadaBlanquearProcecal} alt="" />
                </div>
                <div className={styles.textTarjet}>
                Cal Hidradata para Blanquear Procecal
                </div>
                <div className={styles.peso}>
                    10 kg
                </div>
                <div className={styles.carrito}>
                    <p>Agregar al Carrito</p>
                    <ShoppingCartIcon color='action'/>
                </div>
            </Link>
            <Link className={styles.tarjet}>
                <div className={styles.card}>
                    <img src={CalHidratadaIndustrial} alt="" />
                </div>
                <div className={styles.textTarjet}>
                Cal Hidradata Industrial
                </div>
                <div className={styles.peso}>
                    25 kg
                </div>
                <div className={styles.carrito}>
                    <p>Agregar al Carrito</p>
                    <ShoppingCartIcon color='action'/>
                </div>
            </Link>
            <Link className={styles.tarjet}>
                <div className={styles.card}>
                    <img src={CalHidratadaTipoN} alt="" />
                </div>
                <div className={styles.textTarjet}>
                Cal Hidradata Tipo N
                </div>
                <div className={styles.peso}>
                    25 kg
                </div>
                <div className={styles.carrito}>
                    <p>Agregar al Carrito</p>
                    <ShoppingCartIcon color='action'/>
                </div>
            </Link>
            
        </section>
    </div>
  )
}
