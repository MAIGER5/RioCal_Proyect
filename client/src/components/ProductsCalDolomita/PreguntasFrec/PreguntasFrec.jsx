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
                <Typography variant='p' color={'#47525c'} className={styles.Typography}>¿Es peligrosa la cal hidratada alta en calcio?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='p' className={styles.TypographyDos}

                    >
                    Hay precauciones de seguridad específicas que deben tomarse al manipular, almacenar y usar cal en cualquier forma. Se deben seguir las normas de seguridad adecuadas en todo momento. Para obtener un resumen completo de las pautas de seguridad al usar cal hidratada, consulte nuestra Hoja de datos de seguridad.
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
                <Typography variant='p' className={styles.Typography}>¿La cal hidratada tipo S es lo mismo que la cal?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant='p' className={styles.TypographyDos}>
                El tipo S es una cal dolomítica hidratada
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
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant='p' className={styles.Typography}>¿La cal hidratada dolomítica es lo mismo que la cal hidratada?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  variant='p' className={styles.TypographyDos}

                    >La cal hidratada dolomítica contiene un % más alto de magnesio y un % más bajo de calcio en comparación con la cal hidratada con alto contenido de calcio.
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
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography variant='p' className={styles.Typography}>¿Las especificaciones anteriores son consistentes para todas las ubicaciones?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  variant='p' className={styles.TypographyDos}

                    >Las especificaciones del producto variarán según la ubicación. Para obtener más información, incluida la disponibilidad y los productos típicos de su área, comuníquese con nuestro equipo.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  );
}
