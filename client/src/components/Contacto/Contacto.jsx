import styles from './Contacto.module.css'
import contactImg from '../../utils/maps.png'
// import { Formulario } from './Formulario'
// import { CardContact } from './CardContact'
import { InfoOficinas } from './InfoOficinas'
import { Findoffice } from './Findoffice'
import { FormularioContacto } from './FormularioContacto'
import { Box, CardContent, Grid, Typography } from '@mui/material'



export const Contacto = () => {


  return (
    <Box className={styles.contenedor}>
        <div className={styles.images}>
            <img src={contactImg} alt="" />
            <div className={styles.cardText}>
              <div className={styles.title1}>CONTACTANOS</div>
              <div className={styles.textPrincipal}>Estamos aquí para responder cualquier pregunta y/o inquietud que pueda tener. Es solo a través de asociaciones cercanas y una conversación continua con nuestros clientes que podemos abordar mejor sus necesidades. <br /> <br />Para preguntas generales, llame al 412-995-5500. <br /> <br /> Para conocer precios y disponibilidad de productos, llame al 1-866-780-0974.   </div>
           </div>
        </div>

        <div className={styles.titles}>
          <Grid 
            sx={{
              '@media only screen and (max-width:600px)':{
                width:'90%',
                marginBlock:'50px',
                fontSize:'20px'
              },
              '@media only screen and (min-width:601px) and (max-width:1000px)':{
                width:'90%',
                marginBlock:'50px',
                fontSize:'30px'
              },
            }}  
          
          >NUESTRO EQUIPO ESTA AQUÍ PARA AYUDARTE</Grid>
        </div>
        <div className={styles.formulario}>
          <Grid  container spacing={3} component={'div'} 
            sx={{
              width:'80%',
              height:'600px',
              margin:'auto',
              marginTop:'60px',
              // '@media only screen and (max-width:600px)':{
              //   display:'block',
              //   spacing:1,
              // },
              // border:'1px solid red'

            }}
          >
            <Grid item xs={7} component={'div'} className={styles.FormularioContacto}
              sx={{
                height:'100%',
                // '@media only screen and (max-width:600px)':{
                //   xs:12,
                //   width:'90%'
                // },
                // border:'1px solid green'
              }}
            >
              <FormularioContacto/>
            </Grid>
            <Grid item xs component={'div'} className={styles.Findoffice}
              sx={{
                height:'100%',
                // border:'1px solid red'
              }}
            >
              <Findoffice/>
            </Grid>
          </Grid>
        </div>
        <div className={styles.onlyScreenMax}>
          <FormularioContacto/>
        </div>
        <div className={styles.onlyScreenMax}>
          <Findoffice/>
        </div>
        <InfoOficinas/>
    </Box>
  )
}
