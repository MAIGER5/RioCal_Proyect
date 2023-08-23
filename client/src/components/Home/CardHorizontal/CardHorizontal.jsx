import styles from './CardHorizontal.module.css';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import tierra from '../../../utils/planet.png'


export const CardHorizontal = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.container}>
        <Card className={styles.ContenedorTarjet1} sx={{ maxWidth: '55%', background:'none'}}>
          <CardActionArea >
            <CardMedia
                component="img"
                image={tierra}
                alt="planeta"
                sx={{
                  width:'100%',
                  height:'100%',
                  opacity:'80%'
                }}
            />
            </CardActionArea>
        </Card>
        <CardContent 
        sx={{
        // background:'#0063b4', 
          height:'95%', 
          width:'35%', 
          opacity:'93%', 
          borderRadius:'2px',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          marginBlockStart:'60px'
          // border:'1px solid red'
        }}>
        <Grid
        sx={{
            width:'90%',
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
        <Typography 
              fontSize={'32px'} 
              color={'#0063b4'}
              fontWeight={'100px'}
              width={450}
              lineHeight={'normal'}
            >RioCal Acelera el Esfuerzo de Descarbonización con un Diseño de Planta de Cal NET-CERO</Typography>
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
            width:'70%',
            height:'9%',
            fontSize:'15px',
            background:'#0063b4',
            borderRadius:'80px',
            color:'#ffff',
            '&:hover': {
                backgroundColor: '#50882b',
                borderColor: '#0062cc',
                boxShadow: 'none',
            },
            }}
        > Sostenibilidad</Button>
        </Grid>
        </CardContent>
      </div>
    </div>
  )
}
