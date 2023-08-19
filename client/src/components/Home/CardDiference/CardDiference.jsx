import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import styles from './CardDiference.module.css';
import cargue from '../../../utils/cargue1.png'
import silo from '../../../utils/silo1.jpg'
import { Boton2, Boton3 } from "../../Boton/Boton";

export const CardDiference = () => {
    return (
        <div className={styles.container}>
            <Box 
            sx={{
            // background:'#0063b4', 
            height:'95%', 
            width:'45%', 
            opacity:'93%', 
            borderRadius:'2px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            border:'1px solid #a7bcb9',
            // background:'#d9dad7'
            }}>
            <Grid
            sx={{
                width:'70%',
                height:'95%',
                // border:'1px solid red'
        
            }}
            >
            <Typography 
                gutterBottom 
                variant="h4" 
                component="div" 
                color='#222831' 
                fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
                marginBottom={'20px'}
                marginTop={'20px'}
            >
            NUESTRAS SOLUCIONES QUE HACEN LA DIFERENCIA
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
            <Boton3/>
            </Grid>
        </Box>
        <Card className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none' }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="200"
                image={cargue}
                alt="green iguana"
            />
            <CardContent 
                sx={{
                    background:'#477728', 
                    height:240, 
                    opacity:'93%'
                }}
            >
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
                image={silo}
                alt="green iguana"
            />
            <CardContent 
                sx={{
                    // background:'#0063b4', 
                    height:240, 
                    opacity:'93%',
                    background: '#477728',
                    // background: 'linear-gradient(90deg,#79b353 0%, #559055 90%)',
                    // background: '-webkit-linear-gradient(90deg,#79b353 0%, #559055 90%)',
                    // background: '-moz-linear-gradient(90deg,#79b353 0%, #559055 90%)',
                }}
            >
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
        </div>
      )
}
