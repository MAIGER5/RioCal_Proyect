import styles from './Float.module.css'
import Carousel from '@itseasy21/react-elastic-carousel';

const infoCard = [
  {
    id:1,
    // image:'',
    titel:'UNO',
    // ruta:''
  },
  {
    id:2,
    // image:'',
    titel:'DOS',
    // ruta:''
  },
  {
    id:3,
    // image:'',
    titel:'TRES',
    // ruta:''
  },
  {
    id:4,
    // image:'',
    titel:'CUATRO',
    // ruta:''
  },
  {
    id:5,
    // image:'',
    titel:'CINCO',
    // ruta:''
  },
  {
    id:6,
    // image:'',
    titel:'SEIS',
    // ruta:''
  },
  {
    id:7,
    // image:'',
    titel:'SIETE',
    // ruta:''
  },
]


export const Float = () => {
  const breakPoints = [
    {width:1, itemsToShow:1},
    {width:500, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
  ]
  return (
    <div className={styles.contenedorGenral}>
      <div className={styles.container}>
          <div className={styles.div1}>1</div>
          <div className={styles.div2}>2</div>
          <div className={styles.div3}>3</div>
      </div>
      <div className={styles.contenedorCarrusel}>
        <Carousel breakPoints={breakPoints}>
          {infoCard.map(info => <div key={info.id} className={styles.carruselCard}> {info.titel}</div>)}
        </Carousel>
      </div>
    </div>
  )
}
