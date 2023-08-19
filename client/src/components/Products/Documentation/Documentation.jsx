import { Button, Typography } from "@mui/material";
import styles from './Documentation.module.css';
import { Link } from "react-router-dom";


export const Documentation = () => {
  return (
    <div id="Documentation" className={styles.container}>
        <Typography color={'inherit'}
            sx={{
                fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                fontSize:'40px',
                marginLeft:'190px',
                marginTop:'60px',
                fontStretch:'ultra-condensed',
                fontWeight:'600',
                letterSpacing:'0.5px',
                lineHeight:'39.96px',
                textRendering:'optimizeSpeed',
                fontFeatureSettings:'"smcp", "zero"',
                // color:' #394046'
            }}
        >DOCUMENTACIÓN</Typography>
        <div className={styles.fichaTec}>
            <Typography color={'#265c9e'}
                sx={{
                    fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                    fontSize:'22px',
                    fontWeight:'bold',
                    fontStretch:'ultra-condensed',
                    letterSpacing:'0.5px',
                    lineHeight:'39.96px',
                }}
            >Ficha Técnica - Español</Typography>
            <Button variant="contained"
                sx={{
                    borderRadius:7,
                    height:'30px',
                    backgroundColor:'#265c9e'
                }}>Descargar
            </Button>
        </div>
        <div className={styles.fichaTec}>
            <Typography color={'#265c9e'}
                sx={{
                    fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                    fontSize:'22px',
                    fontWeight:'bold',
                    fontStretch:'ultra-condensed',
                    letterSpacing:'0.5px',
                    lineHeight:'39.96px',
            }}>Ficha Técnica - English</Typography>
            <Button variant="contained" 
                sx={{
                    borderRadius:7,
                    height:'30px',
                    backgroundColor:'#265c9e'

                }}>Descargar
            </Button>
        </div>
        <br /><br />
        <Typography color={'inherit'} align="center"
            sx={{
                width:'100%',
                fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
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
                    width:'15%',
                    height:'40px',
                    background:'#265c9e',
                    borderRadius:'80px',
                    color:'#ffff',
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
