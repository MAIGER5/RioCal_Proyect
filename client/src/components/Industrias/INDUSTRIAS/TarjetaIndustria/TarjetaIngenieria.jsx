import React from 'react';
import images from '../../../../utils/construccion.webp'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import { NavLink } from 'react-router-dom';


export const TarjetaIngenieria = () => {
    
    return (
        <Card component={NavLink} to={'/IngCivilConst'}
            sx={{ 
                display: 'flex', 
                width:'60%', height:'190px', 
                margin:'auto', 
                backgroundColor:'#265c9e',
                marginTop:'90px',
                overflow:'hidden',
                borderRadius:'2px',
                textDecoration:'none',
                '& .MuiTypography-root': { 
                    fontFamily: 'inherit',
                    fontSize:'31px',
                    // fontWeight:'li',
                    fontStretch:'ultra-condensed',
                    letterSpacing:'0.5px',
                    lineHeight:'39.96px',
                    color:'white',
                    transition:'color 0.6s'
                    
                },
                '& .IconClass': {
                    fontSize: '70px',
                    color: 'white',
                    transition:'color 0.6s',

                },
                '@media only screen and (max-width:400px)': {
                  width:'80%',
                  '& .MuiTypography-root': {
                    fontSize: '18px', 
                    lineHeight:'25px' // Cambio del tamaño de la typography
                  },
                },
                '@media only screen and (min-width:401px) and (max-width:700px)': {
                  width:'80%',
                  '& .MuiTypography-root': {
                    fontSize: '22px', 
                    lineHeight:'25px' // Cambio del tamaño de la typography
                  }
                }
            }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', width:'40%' }}>
            <CardContent 
                sx={{ 
                    flex: '1 0 auto' 
                }}
            >
              <Typography component="div" variant="h5" align='center'>
                Ingeniería Civil <br /> & Contrucción
              </Typography>
            </CardContent>
            <Box 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent:'center',
                    pl: 1, pb: 1 
                }}
            >
                <EngineeringOutlinedIcon className='IconClass'/>
            </Box>
          </Box>
          <CardMedia 
            component="img"
            image={images}
            alt="Live from space album cover"
            sx={{ 
                width: '60%',
                objectFit:'cover',
                objectPosition:'center' 
            }}
          />
        </Card>
      );
}
