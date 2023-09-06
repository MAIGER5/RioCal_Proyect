import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import styles from './Calidad.module.css';
import calidad from '../../utils/calidad1.jpg'
import carro from '../../utils/carro1.png'
import { NavLink } from "react-router-dom";

export const SubCalidad = () => {
  return (
    <div className={styles.contenedor}>
      <Card className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none' }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="22%"
              image={carro}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} sx={{background:'#0063b4', height:150, opacity:'93%'}}>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                color='#fafafa'
                fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
              >
              Lizard
              </Typography>
              <Typography variant="body2" color="#ffff" fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
              </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card component={NavLink} to={'/Calidad'} className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none', textDecoration:'none'}}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="22%"
              image={calidad}
              alt="green iguana"
          />
          <CardContent className={styles.TextTarjet1} sx={{background:'#0063b4', height:150, opacity:'93%'}}>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                color='#fafafa'
                fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
              >
              Calidad
              </Typography>
              <Typography 
                variant="body2" 
                color="#ffff"
                fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}

              >
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
              </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none' }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="22%"
              image={carro}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} sx={{background:'#0063b4', height:150, opacity:'93%'}}>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                color='#fafafa'
                fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
              >
              Lizard
              </Typography>
              <Typography variant="body2" color="#ffff" fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
>
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
              </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
