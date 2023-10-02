
import styles from './Home.module.css';
import { Link } from 'react-router-dom'
import Carousel from '@itseasy21/react-elastic-carousel';
import principalHome from '../../utils/principalHome.jpg'
import carmeus1 from '../../utils/carmeus1.jpg'
import carmeus2 from '../../utils/carmeus2.webp'
import CalViva from '../../utils/viva.jpg';
import CalDolomita from '../../utils/dolomitas.webp' 
import hidratada from '../../utils/hidratada1.webp';
import caliza from '../../utils/caliza2.webp';
import neutramol from '../../utils/neutramol.webp';
// import { CardHome1 } from './CardHome1/CardHome1';
import { CardHorizontal } from './CardHorizontal/CardHorizontal';
import { CardProductos } from './CardProductos/CardProductos';
import { CardSolutions } from './CardSolutions/CardSolutions';
import { CardDiference } from './CardDiference/CardDiference';
import logoCarmesus from '../../utils/logo.png';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextMobileStepper from './ResponsiveHome/ResTabPanel';
import { CardCarrusel } from './Carusel/CardCarrusel';


// const inforCardCarrusel = [
//   {
//     id:1,
//     image:{CalViva},
//     title:'Cal Viva'
//   },
//   {
//     id:2,
//     image:{CalDolomita},
//     title:'Cal Dolomita'
//   },
//   {
//     id:3,
//     image:{hidratada},
//     title:'Cal Hidratada'
//   },
//   {
//     id:4,
//     image:{caliza},
//     title:'Carbonato de Calcio'
//   },
// ]

export const Home = () => {

  const breakPoints = [
    {width:1, itemsToShow:1},
    {width:500, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
  ]

  return (
    <div className={styles.container}>
      <div className={styles.imagePinc}>
        <img src={principalHome} alt="" />
        <div className={styles.resenaPrincipal}>
          <h1>GENERAMOS VALOR PARA LA INDUSTRIA <br /> Y LA VIDA COTIDIANA </h1>
          <div className={styles.leyendaH4}>
            <h4>Proporcionamos productos de alta calidad, contribuyendo al éxito de nuestros clientes industriales e impactamos positivamente la vida cotidiana de las personas. Nuestro pròposito es brindar soluciones de alta calidad</h4>
          </div>
          <Link to={'/Productos'} className={styles.botontext}>NUESTRA HISTORIA</Link>
        </div>
      </div>
      <section className={styles.leyendaCarmeus}>
        <div className={styles.puntasBorder1}></div>
        <div className={styles.puntasBorder2}></div>
        <div className={styles.logoCarmeus}>
          <img src={logoCarmesus} alt="logoCarmeus" />
        </div>
        <section className={styles.sectionCarmeus}>
          <div className={styles.divCarmeus}> <img src={carmeus1} alt="" /></div>
          <div id={styles.divCarmeus2} className={styles.divCarmeus}> <img src={carmeus2} alt="" /></div>
          <div className={styles.growCarmeus}>RIO CAL miembro del grupo Carmeuse, líder mundial en la producción de cales y productos a base de minerales necesarios para una variedad de aplicación industriales <br /> <br /> Trabajamos con la máxima excelencia, buscando ofrecer soluciones y productos innovadores a nuestros clientes, desarrollando habilidades y oportunidades de crecimiento para todos los empleados que forman parte de este proyecto. Construimos nuestro negocio sobre la base de la confianza y la integridad. Impactamos la vida cotidiana de nuestros clientes, nuestras comunidades y personas.</div>
          <h4 className={styles.botonCarmeusInternational}>Descubre <br /> Carmeuse Internacional</h4>
        </section>
      </section>
      <div className={styles.titleProductos}>Productos</div>
      <div className={styles.productos}>
        <div className={styles.productosDivs}> <p>Industrias</p> <ArrowForwardIosIcon className={styles.flecha}/></div>
        <div id={styles.divdiferente} className={styles.productosDivs}><p>Productos</p> <ArrowForwardIosIcon className={styles.flecha}/></div>
        <div className={styles.productosDivs}><p>RioCal +</p> <ArrowForwardIosIcon className={styles.flecha}/></div>

      </div>
      <div id={styles.carruselContainer} className={styles.tarjetasOcultar}>
        <Carousel breakPoints={breakPoints}>
          <CardCarrusel image={CalViva} title='Cal Viva'/>
          <CardCarrusel image={CalDolomita} title='Cal Dolomita'/>
          <CardCarrusel image={hidratada} title='Cal Hidratada'/>
          <CardCarrusel image={neutramol} title='Neutramol'/>
          <CardCarrusel image={caliza} title='Carbonato de Calcio'/>
          <CardCarrusel image={caliza} title='Cal Agrícola'/>
        </Carousel>
      </div>
      <div className={styles.titleProductos}>Explora nuestros productos destacados</div>
      <div className={styles.tarjetasOcultar}>
        <CardProductos/>
      </div>
      <div className={styles.titleProductos}>Otros productos industriales y agrícolas</div>
      <div className={styles.tarjetasOcultar}>
        <CardSolutions/>
      </div>
      <div className={styles.titleResponsiveOtrosProductos}>Descrubre otros Productos</div>
      <div className={styles.TabPanelResponsive}>
        <TextMobileStepper/>
      </div>
      <div className={styles.tarjetasOcultar}>
        <CardDiference/>
      </div>
      <div className={styles.tarjetasOcultar}>
        <CardHorizontal/>
      </div>
      <div className={styles.titleResponsiveOtrosSolucions}><h4>NUESTRAS SOLUCIONES <br /> QUE HACEN LA DIFERENCIA</h4>
      </div>
      <div className={styles.textResponsiveOtrosSolucions}>Las pruebas técnicas de laboratorios y la aplicación de técnicas de control estadístico son fundamentales para garantizar la calidad y fiabilidad de los productos y procesos industriales. Los métodos de ensayo utilizados en estos laboratorios se basan en rigurosos estándares y protocolos, permitiendo evaluar y medir de manera precisa diversas propiedades y características. 
      </div>
      <h4 className={styles.botonTextos}>Explora Más</h4>
      <div className={styles.titleResponsiveOtrosSolucions}><h4>PRODUCTOS CON VALOR AGREGADO</h4>
      </div>
      <div className={styles.textResponsiveOtrosSolucions}>Las pruebas técnicas de laboratorios y la aplicación de técnicas de control estadístico son fundamentales para garantizar la calidad y fiabilidad de los productos y procesos industriales. Los métodos de ensayo utilizados en estos laboratorios se basan en rigurosos estándares y protocolos, permitiendo evaluar y medir de manera precisa diversas propiedades y características. 
      </div>
      <h4 className={styles.botonTextos}>Neutramol</h4>
      <div className={styles.imageContact}>
        <img src={carmeus2} alt="" />
        <div className={styles.textContact}>EMPIEZA A CRECER CON NOSOTROS AHORA</div>
        <div className={styles.botonContact}>Contactanos</div>
      </div>
    </div>
  ) 
}
