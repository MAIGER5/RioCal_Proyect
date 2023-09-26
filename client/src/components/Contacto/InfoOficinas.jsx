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
          fontFamily: 'Oxygen, sans-serif',
          fontStretch:'extra-condensed',
          letterSpacing:'1.1px',
          marginLeft:'150px',
          fontWeight:600
        }}
      >Nuestras Oficinas</Typography>
      <Box className={styles.ofiDiv}
        sx={{
          '& .MuiTypography-root': { 
            color:'#394046',
            fontFamily: 'Oxygen, sans-serif',
            fontStretch:'extra-condensed',
            letterSpacing:'1.1px',
        }
        }}
      >
        <Avatar alt="colombia" src={colombia} marg/>
        <Typography>Area Comercial</Typography>
        {/* <Typography>riocal@riocal.com.co</Typography> */}
        <Typography>604-5974265</Typography>
        <Typography>Calle 10 # 20E 170 <br />Medellín-Colombia</Typography>
        <Link to={'/MyComponent'} className={styles.maps}> <img src={map} alt="" /> </Link>

      </Box>
      <div className={styles.lineDivisor}></div>
      <Box className={styles.ofiDiv}
        sx={{
          '& .MuiTypography-root': { 
            color:'#394046',
            fontFamily: 'Oxygen, sans-serif',
            fontStretch:'extra-condensed',
            letterSpacing:'1.1px',
        }
        }}
      >
        <Avatar alt="colombia" src={colombia} marg/>
        <Typography>Area Comercial</Typography>
        {/* <Typography>riocal@riocal.com.co</Typography> */}
        <Typography>604-5974265</Typography>
        <Typography>Calle 10 # 20E 170 <br />Medellín-Colombia</Typography>
        <Link to={'/MyComponent'} className={styles.maps}> <img src={map} alt="" /> </Link>

      </Box>

    </div>
  )
}
