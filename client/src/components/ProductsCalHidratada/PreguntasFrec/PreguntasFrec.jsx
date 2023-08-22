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

                    >La cal hidratada generalmente se considera más segura que la cáustica ya que la cal tiene un pH de 12,45 a 25°C en comparación con la cáustica que tiene un pH de 14. Como resultado, el contacto de la piel con la cal hidratada rara vez es un peligro para la salud, pero siempre lo es con la cáustica. . Sin embargo, se debe usar el EPP adecuado en todo momento y se debe tener cuidado para proteger adecuadamente los ojos del contacto con la cal hidratada. Para obtener un resumen completo de las pautas de seguridad al usar cal hidratada, consulte nuestra Hoja de datos de seguridad.
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
                <Typography variant='p' className={styles.Typography}>¿Debo usar cal viva, cal hidratada o lechada de cal?</Typography>
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
                <Typography variant='p' className={styles.Typography}>¿Cuál es la diferencia entre la cal hidratada alta en calcio y la cal hidratada dolomítica?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  variant='p' className={styles.TypographyDos}

                    >La cal hidratada con alto contenido de calcio se produce a partir de cal viva con alto contenido de calcio. La cal hidratada dolomítica, incluidos el tipo S y el tipo SA, se produce a partir de cal viva dolomítica, que se produce a partir de caliza dolomítica. Esta es piedra caliza con hasta aproximadamente el 43% del peso de la piedra como carbonato de magnesio, a diferencia de la piedra caliza con alto contenido de calcio que contiene menos del 5% de carbonato de magnesio.
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
