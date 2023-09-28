import React from 'react';
import styles from '../CardSolutions/CardSolutions.module.css';
import piedraGris from '../../../utils/piedraGris.jpg'
import dolomita from '../../../utils/dolomitas.webp'
import agricola from '../../../utils/agricola.webp'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { NavLink } from 'react-router-dom';

const steps = [
  {
    label: 'Cales Dolomitas',
    description: `Cal para aplicaciones industriales que requieren el equilibrio adecuado de contenido de calcio y magnesio.`,
    imagen: dolomita,
    linke:'/CalDolomita',
    backgrounde:'#0067B3'
  },
  {
    label: 'Carbonato de Calcio',
    description: `Producto increíblemente versátil y usado en muchas industrias, desde la agricultura hasta la siderurgia`,
    imagen: piedraGris,
    linke:'/PiedraCaliza',
    backgrounde:'#0067B3'
  },
  {
    label: 'Cales Agricolas',
    description:
      'Garantizamos y mantenemos la calidad de nuestros productos y de los procesos administrativos',
    imagen: agricola,
    linke:'/CalesAgricolas',
    backgrounde:'#61993b'

  }
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', flexGrow: 1 }}>
      <Card component={NavLink} to={steps[activeStep].linke} className={styles.ContenedorTarjet1} sx={{ maxWidth: '25%', background:'none', textDecoration:'none' }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="22%"
              image={steps[activeStep].imagen}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} sx={{background:steps[activeStep].backgrounde, height:150, opacity:'93%'}}>
              <Typography 
                gutterBottom 
                variant="h6" 
                component="div" 
                color='#fafafa'
                fontFamily={'inherit'}
                >
              {steps[activeStep].label}
              </Typography>
              <Typography variant="body2" fontWeight={4300} fontSize={'14px'} color="#ffff"  fontFamily={'inherit'}
>
              {steps[activeStep].description}
              </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}