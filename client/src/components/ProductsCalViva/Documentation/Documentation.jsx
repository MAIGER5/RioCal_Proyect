import { Button, Typography } from "@mui/material";
import styles from './Documentation.module.css';
import { Link } from "react-router-dom";


export const Documentation = () => {
  return (
    <div id="Documentation" className={styles.container}>
        <Typography color={'inherit'}
            sx={{
                fontFamily: 'inherit',
                fontSize:'40px',
                marginLeft:'60px',
                marginTop:'40px',
                fontStretch:'ultra-condensed',
                fontWeight:'600',
                letterSpacing:'0.5px',
                lineHeight:'39.96px',
                textRendering:'optimizeSpeed',
                fontFeatureSettings:'"smcp", "zero"',
                '@media only screen and (max-width:1000px)':{
                    fontSize:'25px',
                    marginLeft:0,
                    textAlign:'center',
                    marginBottom:'30px'
                }
                // color:' #394046'
            }}
        >DOCUMENTACIÓN</Typography>
        <div className={styles.fichaTec}>
            <Typography color={'#265c9e'}
                sx={{
                    fontFamily: 'inherit',
                    fontSize:'22px',
                    fontWeight:'bold',
                    fontStretch:'ultra-condensed',
                    letterSpacing:'0.5px',
                    lineHeight:'39.96px',
                    '@media only screen and (max-width:1000px)':{
                        fontSize:'16px',
                        lineHeight:'24px',
                    }
                }}
            >Ficha Técnica - Español</Typography>
            <Button variant="contained"
                sx={{
                    borderRadius:7,
                    height:'30px',
                    backgroundColor:'#265c9e',
                    '@media only screen and (max-width:1000px)':{
                        width:'120px',
                        fontSize:'12px'
                    }
                }}>Descargar
            </Button>
        </div>
        <div className={styles.fichaTec}>
            <Typography color={'#265c9e'}
                sx={{
                    fontFamily: 'inherit',
                    fontSize:'22px',
                    fontWeight:'bold',
                    fontStretch:'ultra-condensed',
                    letterSpacing:'0.5px',
                    lineHeight:'39.96px',
                    '@media only screen and (max-width:1000px)':{
                        fontSize:'16px',
                        lineHeight:'24px'
                    }
            }}>Ficha Técnica - English</Typography>
            <Button variant="contained" 
                sx={{
                    borderRadius:7,
                    height:'30px',
                    backgroundColor:'#265c9e',
                    '@media only screen and (max-width:1000px)':{
                        width:'120px',
                        fontSize:'12px'
                    }

                }}>Descargar
            </Button>
        </div>
        <br /><br />
        <Typography color={'inherit'} align="center"
            sx={{
                margin:'auto',
                width:'90%',
                fontFamily: 'inherit',
                fontSize:'17px',
                fontWeight:'lighter',
                letterSpacing:'1px',
                lineHeight:'28px',
                textRendering:'optimizelegibility',
                fontStretch:'ultra-condensed',
            }}
        >Para obtener información adicional de nuestras fichas técnicas o para analizar la disponibilidad con nuestro grupo de ventas, comuníquese con nosotros.
        </Typography>
        <Link to={'/Contacto'} className={styles.links} >
            <div className={styles.buttonContact}>  
                <Button
                    sx={{
                    width:'185px',
                    height:'40px',
                    background:'#265c9e',
                    borderRadius:'80px',
                    color:'#ffff',
                    marginTop:'30px',
                    '&:hover': {
                        backgroundColor: '#50882b',
                        borderColor: '#0062cc',
                        boxShadow: 'none',
                    },
                    }}
                > <Typography >CONTACTANOS</Typography></Button>
            </div>
        </Link>
    </div>
  )
}
