
import styles from './Home.module.css';
import principalHome from '../../utils/principalHome.jpg'
import { CardHome1 } from './CardHome1/CardHome1';
import { CardHorizontal } from './CardHorizontal/CardHorizontal';
import { CardProductos } from './CardProductos/CardProductos';
import { CardSolutions } from './CardSolutions/CardSolutions';
import { CardDiference } from './CardDiference/CardDiference';
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
          <h1>IMPACTAMOS LA VIDA COTIDIANA </h1>
          <h4>Crece con Nosotros</h4>
          <div className={styles.botontext}>Descubre nuestras soluciones</div>
        </div>
      </div>
      {/* <div className={styles.titlePrincipal}>NUESTRO PRODUCTOS IMPACTAN </div> */}
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
      <CardProductos/>
      <CardSolutions/>
      <CardDiference/>
      <CardHorizontal/>
        
    </div>
  ) 
}
