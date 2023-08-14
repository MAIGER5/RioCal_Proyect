import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import styles from '../CardHome1/CardHome1.module.css'
import principal from '../../../utils/uno.jpg' 

export const CardHome3 = () => {
  return (
    <div className={styles.ContenedorTarjet1}>
      <Card  sx={{ maxWidth: 345, background:'none' }}>
        <CardActionArea>
            <CardContent sx={{background:'#0063b4', height:150, opacity:'93%'}}>
                <Typography gutterBottom variant="h5" component="div" color='#fafafa'>
                CAL Dolomita
                </Typography>
                <Typography variant="body2" color="#ffff">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="180"
                image={principal}
                alt="green iguana"
            />
        </CardActionArea>
      </Card>
    </div>
)
}
