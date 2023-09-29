import styles from './CardProductos.module.css';
import { Link } from 'react-router-dom'
import { Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const CardProductos = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.conboxes}>
        <Link className={styles.box1}>
          <Typography 
            variant='body2' 
            fontSize={'25px'} 
            color={'#ffff'} 
            fontFamily={'inherit'}
            borderBottom={'3px solid white'}
          >CAL Hidratada Tipo A</Typography>
        </Link>
        <Link className={styles.box2}>
          <Typography 
            variant='body2' 
            fontSize={'25px'} 
            color={'#ffff'} 
            fontFamily={'inherit'}
            borderBottom={'3px solid white'}
          >CAL Hidratada Tipo B</Typography>
        </Link>
        <Link to={'Promical10kg'} className={styles.box1}> 
          <Typography 
            variant='body2' 
            fontSize={'25px'} 
            color={'#ffff'} 
            fontFamily={'inherit'}
            borderBottom={'3px solid white'}

          >CAL Hidratada 10KG </Typography>
        </Link>
      </div>
    </div>
  )
}
