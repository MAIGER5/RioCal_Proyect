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
                    fontSize={'24px'} 
                    component="div" 
                    color='#393e46' 
                    fontFamily={'inherit'}
                    marginBottom={'20px'}
                    marginTop={'20px'}
                >
                NUESTRAS SOLUCIONES QUE HACEN LA DIFERENCIA
                </Typography>
                <Typography 

                    color='#393e46' 
                    fontFamily={'inherit'}
                    marginBottom={'0px'}
                    sx={{
                        fontWeight:'400'
                      }}
                >
                    Pruebas técnicas de laboratorios<br />
                    Métodos de ensayo <br />
                    Técnica de control estadístico <br />
                    Estandarización de porcesos <br />
                    Sistemas automaticos <br />
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
                        background:'#0067b3', 
                        height:150, 
                        opacity:'93%'
                    }}
                >
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="div" 
                        color='#fafafa'
                        fontFamily={'inherit'}
                    >
                    Calidad
                    </Typography>
                    <Typography variant="body2" color="#ffff" fontFamily={'inherit'}           sx={{fontWeight:'400'}}
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
                        background: '#0067b3',
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
                        fontFamily={'inherit'}
                    >
                    Sistemas para Llenado y Cargue
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="#ffff"
                        fontFamily={'inherit'}
                
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
