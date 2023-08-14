import styles from './CardProductos.module.css';
import { Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const CardProductos = () => {
  return (
    <div className={styles.contenedor}>
      <Typography 
        marginLeft={'30px'} 
        variant='h4' 
        component={'h1'} 
        color={'#222831'}
        fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
        display={'flex'}
      >Explora Nuestros Productos Más Vendidos
      </Typography>
      <div className={styles.conboxes}>
        <div className={styles.box1}> 
          <Typography 
            variant='body2' 
            fontSize={'28px'} 
            color={'#ffff'} 
            fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}

          >CAL Hidratada 10KG </Typography>
        </div>
        <div className={styles.box2}>
          <Typography 
            variant='body2' 
            fontSize={'28px'} 
            color={'#ffff'} 
            fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
          >CAL Hidratada tipo E</Typography>
        </div>
        <div className={styles.box3}>
          <Typography 
            variant='body2' 
            fontSize={'28px'} 
            color={'#ffff'} 
            fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}

          >CAL Viva 25KG</Typography>
        </div>
      </div>
    </div>
  )
}
