import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import image from '../../utils/contact1.jpg'

export const CardContact = () => {

    return (
        <Grid container
            sx={{
                position:'absolute',
                top:'440px',
                marginBottom:'200px',
                display:'felx',
                justifyContent:'center',
                width:'100%',
                // border:'1px solid blue',
                '& .MuiTypography-root': { 
                    color:'#394046',
                    fontFamily: 'Oxygen, sans-serif',
                    fontStretch:'extra-condensed',
                    letterSpacing:'1.1px',
                }
                
            }}
        >
            <Card 
                sx={{
                    display:'flex',
                    alignItems:'center',
                    width:'58%',
                    borderRadius:6,
                    border: '0.3125em solid #e8e8f0',
                    background:'#ffff',
                    opacity:'90%',
                    boxShadow:'none'
                    
                    
                }}
            >
                <CardMedia
                    component='img'
                    image={image}
                    sx={{maxWidth:'40%',
                        height:'100%',
                    }}
                    
                />
                <Box 
                    sx={{
                        // border: '2px solid green',
                        width:550,
                        marginLeft:3,
    
                    }}
                >
                    <CardContent>
                        <Typography 
                            sx={{
                                fontWeight:600,
                                fontSize:'32px',
                                marginBottom:'10px'
                            }}
                        >CONTACTANOS</Typography>
                        <Typography 
                            sx={{
                                fontWeight:400,
                                fontSize:'15px',
                            }}
                        >Estamos aquí para responder cualquier pregunta y/o inquietud que pueda tener. Es solo a través de asociaciones cercanas y una conversación continua con nuestros clientes que podemos abordar mejor sus necesidades. <br /> <br />Si tiene preguntas generales, llame al 412-995-5500. <br /> Para conocer los precios y la disponibilidad de los productos, llame al
                        1-866-780-0974.</Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
      )
}
