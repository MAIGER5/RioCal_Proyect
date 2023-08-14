import { Button, Typography } from '@mui/material'
import styles from './Contacto.module.css';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';


export const Findoffice = () => {
  return (
    <div className={styles.findoffice}>
        <div className={styles.boxes}>
            <div className={styles.iconFone}>
                <PhoneForwardedIcon fontSize='inherit' color='success'/>
            </div>
            <Typography align='center'
                sx={{
                    color:'#0063b4',
                    fontFamily: 'Oxygen, sans-serif',
                    fontStretch:'extra-condensed',
                    letterSpacing:'1.1px',
                    fontSize:'30px',
                    fontWeight:600
                }}
            >¿Algún problema urgente o buscas hablar con alguien?</Typography>
            <br /><br />
            <Typography align='center'
                sx={{
                    color:'#394046',
                    fontFamily: 'Oxygen, sans-serif',
                    fontStretch:'extra-condensed',
                    letterSpacing:'1.1px',
                    
                }}
            >Si desea comunicarse con nosotros con urgencia, llame a la oficina más cercana a su ubicación</Typography><br /><br />

        </div>
        <div className={styles.buton}>
            <Button 
                sx={{
                width:'100%',
                height:'50px',
                background:'#0063b4',
                borderRadius:'80px',
                color:'#ffff',
                fontFamily:'Oxygen, sans-serif',
                textTransform:'inherit',
                fontWeight:600,
                '&:hover': {
                    backgroundColor: '#50882b',
                    borderColor: '#0062cc',
                    boxShadow: 'none',
                },
                }}
            >Encontrar una Oficina</Button>
        </div>
    </div>
  )
}
