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
      <Typography 
        marginLeft={'25px'} 
        variant='h4' 
        component={'h1'} 
        color={'#222831'}
        fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
        display={'flex'}
      >Explora nuestros productos más vendidos
      </Typography>
      <div className={styles.conboxes}>
        <Link to={'Promical10kg'} className={styles.box1}> 
          <Typography 
            variant='body2' 
            fontSize={'25px'} 
            color={'#ffff'} 
            fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}

          >CAL Hidratada 10KG </Typography>
        </Link>
        <Link className={styles.box2}>
          <Typography 
            variant='body2' 
            fontSize={'25px'} 
            color={'#ffff'} 
            fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
          >CAL Hidratada Tipo A</Typography>
        </Link>
        <Link className={styles.box3}>
          <Typography 
            variant='body2' 
            fontSize={'25px'} 
            color={'#ffff'} 
            fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}

          >CAL Hidratada Tipo B</Typography>
        </Link>
      </div>
    </div>
  )
}
