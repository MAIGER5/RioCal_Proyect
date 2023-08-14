import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import styles from '../CardHome1/CardHome1.module.css'
import planta from '../../../utils/planta.jpg'

export const CardHome2 = () => {
  return (
    <div className={styles.ContenedorTarjet1}>
      <Card  sx={{ maxWidth: 345, background:'none' }}>
        <CardActionArea>
            <CardContent sx={{background:'#0063b4', height:150, opacity:'93%'}}>
                <Typography gutterBottom variant="h5" component="div" color='#fafafa'>
                CAL Hidratada
                </Typography>
                <Typography variant="body2" color="#ffff">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="180"
                image={planta}
                alt="green iguana"
            />
        </CardActionArea>
      </Card>
    </div>
)
}
                                            
