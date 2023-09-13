import styles from './PreguntasFrec.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const PreguntasFrec = () => {

  return (
    <div className={styles.container}>
        <Typography variant='p' className={styles.Typography} fontSize={'50px'} width={'20%'}>FAQs</Typography>
        <div className={styles.Accordiones}>
            <Accordion 
                sx={{
                    '& .MuiTypography-root':{
                        color:'#47525c',
                    }
                }}
            >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant='p' color={'#47525c'} className={styles.Typography}>¿Cuál es la diferencia entre la cal viva con alto contenido de calcio y la cal viva dolomítica?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='p' className={styles.TypographyDos}

                    >
                    Todo se reduce al nivel de carbonato de calcio versus carbonato de magnesio en la piedra caliza de origen. “Alto calcio” indica una alta concentración de carbonato de calcio, con carbonato de magnesio que alcanza hasta el 5%; "dolomítico" indica niveles de carbonato de magnesio mucho más altos, que oscilan entre el 35 y el 46%.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    '& .MuiTypography-root':{
                        color:'#47525c',
                    }
                }}
            >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography variant='p' className={styles.Typography}>¿Las especificaciones anteriores son consistentes para todas las ubicaciones?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant='p' className={styles.TypographyDos}>
                Las especificaciones del producto variarán según la ubicación. Para obtener más información, incluida la disponibilidad y los productos típicos para su área, comuníquese con nuestro equipo.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  );
}
