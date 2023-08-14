import styles from './Contacto.module.css';
import Avatar from '@mui/material/Avatar';
import colombia from '../../utils/COLOMBIA.jpg'
import { Box, Typography } from '@mui/material';

export const InfoOficinas = () => {
  return (
    <div className={styles.oficinas}>
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
        <Typography>riocal@riocal.com.co</Typography>
        <Typography>604-5974265</Typography>
        <Typography>Calle 10 # 20E 170 <br />Medellín-Colombia</Typography>
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
        <Typography>riocal@riocal.com.co</Typography>
        <Typography>604-5974265</Typography>
        <Typography>Calle 10 # 20E 170 <br />Medellín-Colombia</Typography>
      </Box>

    </div>
  )
}
