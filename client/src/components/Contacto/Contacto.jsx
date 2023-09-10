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
        </div>
        <Box
          sx={{
            position:'absolute',
            top:'250px',
            left:'80%',
            transform:'translate(-50%, -0%)',
            width:' 30%',
            height: '25%',
            backgroundColor: 'primary.dark',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            opacity:'90%',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <CardContent
            sx={{
              width:'75%'
            }}
          >
            <Typography 
              align='left'
              sx={{
                  fontWeight:600,
                  fontSize:'32px',
                  marginBottom:'20px'
              }}
            >CONTACTANOS</Typography>
            <Typography 
              sx={{
                  fontWeight:400,
                  fontSize:'15px',
              }}
            >
              Estamos aquí para responder cualquier pregunta y/o inquietud que pueda tener. Es solo a través de asociaciones cercanas y una conversación continua con nuestros clientes que podemos abordar mejor sus necesidades. <br /> <br />Para preguntas generales, llame al 412-995-5500. <br /> <br /> Para conocer precios y disponibilidad de productos, llame al 1-866-780-0974.
            </Typography>         
          </CardContent>
        </Box>

  
        <Grid className={styles.titles}>NUESTRO EQUIPO ESTA AQUÍ PARA AYUDARTE</Grid>
        <Grid container spacing={3}
          sx={{
            width:'80%',
            height:'600px',
            margin:'auto',
            marginTop:'60px',
          }}
        >
          <Grid item xs={7}
            sx={{
              height:'100%',
              // border:'1px solid green'
            }}
          >
            <FormularioContacto/>
          </Grid>
          <Grid item xs
            sx={{
              height:'100%',
              // border:'1px solid red'
            }}
          >
            <Findoffice/>
          </Grid>
      </Grid>
        {/* <CardContact/> */}
        <InfoOficinas/>
    </Box>
  )
}
