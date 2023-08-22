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
                <Typography variant='p' color={'#47525c'} className={styles.Typography}>¿Cuál es la diferencia entre Cal viva (alto contenido de calcio) y la Cal viva dolómita?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='p' className={styles.TypographyDos}

                    >Todo se reduce al nivel de carbonato de calcio frente a carbonato de magnesio en la piedra caliza de origen. “Calcio alto” indica una alta concentración de carbonato de calcio, con carbonato de magnesio que oscila entre 0 y 5%; “dolomítico” indica niveles mucho más altos de carbonato de magnesio, que van del 35 al 46%..
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
                <Typography variant='p' className={styles.Typography}>¿Se debe usar Cal viva, hidratada o lechada de cal?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography variant='p' className={styles.TypographyDos}>
                Al evaluar qué producto de cal se adapta mejor a sus necesidades, se deben tener en cuenta varias cosas:
                <br /><br />
                    ■  Pureza y calidad de las materias primas <br />
                    ■  Cumplimiento ambiental <br />
                    ■  Equipo existente en el sitio <br />
                    ■  Costos de almacenamiento y transporte <br />
                    ■  Rendimiento del proceso <br />
                    ■  Especificaciones finales del productobr
                <Typography></Typography>
                
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
