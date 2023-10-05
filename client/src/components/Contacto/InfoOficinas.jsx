import styles from './Contacto.module.css';
import Avatar from '@mui/material/Avatar';
import colombia from '../../utils/COLOMBIA.jpg'
import { Link } from 'react-router-dom'
import { Box,Typography } from '@mui/material';
import map from '../../utils/map.png'

export const InfoOficinas = () => {
  return (
    <div id='oficinas' className={styles.oficinas}>
      <Typography 
        sx={{
          color:'#394046',
          fontSize:'30px',
          fontFamily: 'inherit',
          fontStretch:'extra-condensed',
          letterSpacing:'1.1px',
          marginLeft:'10%',
          fontWeight:600,
          
        }}
      >Nuestras Oficinas</Typography>
      <Box className={styles.ofiDiv}
        sx={{
          marginBlock:'50px',
          '@media only screen and (max-width:1000px)':{
            display:'flex',
            flexDirection:'column',
            alignItems:'start',
            justifyContent:'space-between',
            height:'300px'
          },
          '& .MuiTypography-root': { 
            color:'#394046',
            fontFamily: 'inherit',
            fontStretch:'extra-condensed',
            letterSpacing:'1.1px',
          }
        }}
      >
        <Avatar alt="colombia" src={colombia} marg/>
        <Typography>Area Comercial</Typography>
        {/* <Typography>riocal@riocal.com.co</Typography> */}
        <Typography>604-4407400 <br /> 3188355014</Typography>
        <Typography>contacto@carmeuse.com.co</Typography>
        <Typography>Kra 39 # 5A 95 <br />Medellín-Colombia</Typography>
        <Link to={'/MyComponent'} className={styles.maps}> <img src={map} alt="" /> </Link>

      </Box>
      <div className={styles.lineDivisor}></div>
      <Box className={styles.ofiDiv}
        sx={{
          marginBlock:'50px',
          '@media only screen and (max-width:1000px)':{
            display:'flex',
            flexDirection:'column',
            alignItems:'start',
            justifyContent:'space-between',
            height:'300px'
          },
          '& .MuiTypography-root': { 
            color:'#394046',
            fontFamily: 'inherit',
            fontStretch:'extra-condensed',
            letterSpacing:'1.1px',
          }
        }}
      >
        <Avatar alt="colombia" src={colombia} marg/>
        <Typography>Area Comercial</Typography>
        {/* <Typography>riocal@riocal.com.co</Typography> */}
        <Typography>604-4407400</Typography>
        <Typography>contacto@carmeuse.com.co</Typography>
        <Typography>Kra 39 # 5A 95 <br />Medellín-Colombia</Typography>
        <Link to={'/MyComponent'} className={styles.maps}> <img src={map} alt="" /> </Link>

      </Box>

    </div>
  )
}
