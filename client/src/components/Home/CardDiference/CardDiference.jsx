import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import styles from './CardDiference.module.css';
import cargue from '../../../utils/cargue1.png'
import silo from '../../../utils/silo1.jpg';
import calidad from '../../../utils/calidad1.jpg'

import { Boton3 } from "../../Boton/Boton";
import { NavLink } from "react-router-dom";

export const CardDiference = () => {
    return (
        <div className={styles.container}>
            <Box 
                sx={{
                // background:'#0063b4', 
                height:'95%', 
                width:'43%', 
                opacity:'93%', 
                borderRadius:'2px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderLeft:'0.5px solid #a7bcb9',
                // background:'#d9dad7'
                }}>
                <Grid
                sx={{
                    width:'80%',
                    height:'95%',
                    // border:'1px solid red'
                
                }}
                >
                <Typography 
                    gutterBottom 
                    fontSize={'28px'} 
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
                    marginBottom={'10px'}
                >
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
                <Boton3/>
                </Grid>
            </Box>
            <Card component={NavLink} to={'/Calidad'} className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none', textDecoration:'none' }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="22%"
                    image={calidad}
                    alt="green iguana"
                />
                <CardContent className={styles.TextTarjet1}
                    sx={{
                        background:'#477728', 
                        height:150, 
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
                    Calidad
                    </Typography>
                    <Typography variant="body2" color="#ffff" fontFamily={'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif'}
            >
                    Garantizamos y mantenemos la calidad de nuestros productos y de los procesos administrativos
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            <Card className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none' }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="22%"
                    image={silo}
                    alt="green iguana"
                />
                <CardContent className={styles.TextTarjet1}
                    sx={{
                        // background:'#0063b4', 
                        height:150, 
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
                    Sistemas para Llenado y Cargue
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
