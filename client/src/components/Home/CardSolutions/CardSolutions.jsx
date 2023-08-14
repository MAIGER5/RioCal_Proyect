import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import styles from './CardSolutions.module.css';
import calidad from '../../../utils/calidad.jpg'
import carro from '../../../utils/carro.jpg'



export const CardSolutions = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none' }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="200"
              image={carro}
              alt="green iguana"
          />
          <CardContent sx={{background:'#0063b4', height:240, opacity:'93%'}}>
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
      <Card className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none' }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="200"
              image={calidad}
              alt="green iguana"
          />
          <CardContent sx={{background:'#0063b4', height:240, opacity:'93%'}}>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div" 
                color='#fafafa'
                fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
              >
              Lizard
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
          // border:'1px solid red'
        }}>
        <Grid
          sx={{
            width:'75%',
            height:'95%',
            // border:'1px solid red'

          }}
        >
          <Typography 
            gutterBottom 
            variant="h3" 
            component="div" 
            color='#222831' 
            fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
            marginBottom={'20px'}
          >
          SOLUCIONES PARA SATISFACER LAS NECESIDADES DE SU NEGOCIO
          </Typography>
          <Typography 
            variant="h6" 
            color='#222831' 
            fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
            marginBottom={'30px'}
          >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          </Typography>
          <Button 
            sx={{
              width:'50%',
              height:'12%',
              background:'#50882b',
              borderRadius:'80px',
              color:'#ffff',
              '&:hover': {
                backgroundColor: '#0063b4',
                borderColor: '#0062cc',
                boxShadow: 'none',
              },
            }}
          > <Typography>Nuestro Mercado</Typography></Button>
        </Grid>
      </Box>

    </div>
  )
}
