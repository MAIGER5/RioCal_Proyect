import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import styles from './CardSolutions.module.css';
import agricola from '../../../utils/agricola.webp'
import piedraGris from '../../../utils/piedraGris.jpg'
import { Boton3, Boton31 } from "../../Boton/Boton";
import { NavLink } from "react-router-dom";



export const CardSolutions = () => {
  return (
    <div className={styles.container}>
      <Card component={NavLink} to={'/PiedraCaliza'} className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none', textDecoration:'none' }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="22%"
              image={piedraGris}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} sx={{background:'#61993b', height:150, opacity:'93%'}}>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                color='#fafafa'
                fontFamily={'inherit'}
                >
              Carbonato de Calcio
              </Typography>
              <Typography variant="body2" color="#ffff"  fontFamily={'inherit'}
>
              Producto increíblemente versátil y usado en muchas industrias, desde la agricultura hasta la siderurgia
              </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card component={NavLink} to={'/CalesAgricolas'} className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none', textDecoration:'none'}}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="22%"
              image={agricola}
              alt="green iguana"
          />
          <CardContent className={styles.TextTarjet1} sx={{background:'#61993b', height:150, opacity:'93%'}}>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                color='#fafafa'
                fontFamily={'inherit'}
                >
              Cales Agricolas
              </Typography>
              <Typography 
                variant="body2" 
                color="#ffff"
                fontFamily={'inherit'}

              >
              Garantizamos y mantenemos la calidad de nuestros productos y de los procesos administrativos
              </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box 
        sx={{
          // background:'#0063b4', 
          height:'95%', 
          width:'40%', 
          opacity:'93%', 
          borderRadius:'2px',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          borderRight:'0.5px solid #a7bcb9',
        }}>
        <Grid
          sx={{
            width:'79%',
            height:'95%',
            // border:'1px solid red'

          }}
        >
          <Typography 
            gutterBottom 
            fontSize={'24px'} 
            component="div" 
            color='inherit' 
            fontFamily={'inherit'}
            marginBottom={'20px'}
          >
          TAMBIEN PUEDES ENCONTRAR CON NOSOTROS (Carbonato de Calcio y Cales Agrícolas)
          </Typography>
          <Typography 
            color='inherit' 
            fontFamily={'inherit'}
            marginBottom={'0px'}
            sx={{
              fontWeight:'500'
            }}
          >
          Enmienda de suelos <br />
          Fertilizante <br />
          Tratamientos fitosanitarios <br />
          Biocida <br />
          Alimentación animal <br />

          
          </Typography>
          <Boton31/>
        </Grid>
      </Box>
    </div>
  )
}
