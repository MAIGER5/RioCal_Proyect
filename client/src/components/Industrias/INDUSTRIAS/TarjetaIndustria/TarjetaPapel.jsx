import React from 'react';
import images from '../../../../utils/paper.jpg'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


export const TarjetaPapel = () => {
    
    return (
        <Card 
            sx={{ 
                display: 'flex', 
                width:'60%', height:'190px', 
                margin:'auto', 
                backgroundColor:'#265c9e',
                marginTop:'90px',
                overflow:'hidden',
                borderRadius:'2px',
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
            }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', width:'60%' }}>
            <CardContent 
                sx={{ 
                    flex: '1 0 auto' 
                }}
            >
              <Typography component="div" variant="h5" align='center'>
                PCC & <br /> Papel
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
                <DescriptionOutlinedIcon className='IconClass'/>
            </Box>
          </Box>
          <CardMedia 
            component="img"
            image={images}
            alt="Live from space album cover"
            sx={{ 
                width: '100%',
                objectFit:'cover',
                objectPosition:'top' 
            }}
          />
        </Card>
      );
}
