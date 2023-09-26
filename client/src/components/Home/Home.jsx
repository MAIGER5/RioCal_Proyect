
import styles from './Home.module.css';
import { Link } from 'react-router-dom'
import principalHome from '../../utils/principalHome.jpg'
import carmeus1 from '../../utils/carmeus1.jpg'
import carmeus2 from '../../utils/carmeus2.webp'
import { CardHome1 } from './CardHome1/CardHome1';
import { CardHorizontal } from './CardHorizontal/CardHorizontal';
import { CardProductos } from './CardProductos/CardProductos';
import { CardSolutions } from './CardSolutions/CardSolutions';
import { CardDiference } from './CardDiference/CardDiference';
import logoCarmesus from '../../utils/logo.png';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagePinc}>
        <img src={principalHome} alt="" />
        <div className={styles.resenaPrincipal}>
          <h1>GENERAMOS VALOR PARA LA INDUSTRIA Y LA VIDA COTIDIANA </h1>
          <div className={styles.leyendaH4}>
            <h4>Proporcionamos productos de alta calidad, contribuyendo al éxito de nuestros clientes industriales e impactamos positivamente la vida cotidiana de las personas. Nuestro pròposito es brindar soluciones de alta calidad</h4>
          </div>
          <Link to={'/Productos'} className={styles.botontext}>NUESTRA HISTORIA</Link>
        </div>
      </div>
      <section className={styles.leyendaCarmeus}>
        <div className={styles.puntasBorder1}></div>
        <div className={styles.puntasBorder2}></div>
        {/* <div id={styles.grow1} className={styles.grow}> */}
            {/* <Typography 
              color={'#323e48'}
              sx={{
                fontFamily:'inherit',
                fontSize:'60px',
                fontWeight:400,
                // marginBottom:'20px',
              }}
            >Bienvenidos</Typography> */}
            <div className={styles.logoCarmeus}>
              <img src={logoCarmesus} alt="logoCarmeus" />
            </div>

        {/* </div> */}
        {/* <div  className={styles.grow}>
            <Typography 
              component={Button} 
              color={'white'}
              sx={{
                width:'50%',
                marginBlock:'20px',
                fontSize:'50px',
                fontFamily:'inherit',
                fontWeight:700,
                // backgroundColor:'#CFD2D3',  //GREY5
                backgroundColor:'#7b868a',  //GREY3
                // backgroundColor:'#a2a9ad',  //GREY 4
                // backgroundColor:'#ce5f28',  //NARANJA
                // backgroundColor:'#ce5f28',
                borderRadius:'50px'

                // border:'2px solid #1d252c',
              }}
            >Acerca de Nosotros</Typography>
        </div> */}
        {/* <div id={styles.grow2} className={styles.grow}>
          <Typography
            sx={{
              color:'#1d252c',
              fontFamily:'inherit',
              textAlign:'center'
            }}
          >proporcionamos productos de alta calidad, contribuyendo al éxito de nuestros clientes industriales e impactamos positivamente la vida cotidiana de las personas. <br />Nuestro pròposito es brindar soluciones de alta calidad</Typography>
        </div> */}

        <section className={styles.sectionCarmeus}>
          <div className={styles.divCarmeus}> <img src={carmeus1} alt="" /></div>
          <div className={styles.divCarmeus}> <img src={carmeus2} alt="" /></div>
          <div className={styles.growCarmeus}>RIO CAL miembro del grupo Carmeuse, líder mundial en la producción de cales y productos a base de minerales necesarios para una variedad de aplicación industriales <br /> <br /> Trabajamos con la máxima excelencia, buscando ofrecer soluciones y productos innovadores a nuestros clientes, desarrollando habilidades y oportunidades de crecimiento para todos los empleados que forman parte de este proyecto. Construimos nuestro negocio sobre la base de la confianza y la integridad. Impactamos la vida cotidiana de nuestros clientes, nuestras comunidades y personas.</div>
        </section>
      </section>
      {/* <div className={styles.titlePrincipal}>NUESTRO PRODUCTOS IMPACTAN </div> */}
      <div className={styles.titleProductos}>Productos</div>
      <CardHome1 className={styles.tarjetasMargin}/>
      {/* <div className={styles.cardHorizontal}>
        <div className={styles.texSutentabilidad}>
        <Typography 
        fontSize={'30px'} 
        color={'#ffff'}
        fontWeight={'100px'}
        width={'450px'}
        lineHeight={'normal'}
        >RioCal Acelera el Esfuerzo de Descarbonización con un Diseño de Planta de Cal NET-CERO</Typography>
        </div>
      </div> */}
      <div className={styles.titleProductos}>Explora nuestros productos destacados</div>
      <CardProductos/>
      <div className={styles.titleProductos}>Otros productos industriales y agrícolas</div>
      <CardSolutions/>
      <CardDiference/>
      <CardHorizontal/>
        
    </div>
  ) 
}
