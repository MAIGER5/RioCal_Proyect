import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './CardHome1.module.css'
import piedra from '../../../utils/piedra.png'
import { Link } from 'react-router-dom';

export const CardHome1 = () => {
    return (
        <Link to={'Calviva'} className={styles.link}>
            <div className={styles.ContenedorTarjet1}>
                <Card sx={{ maxWidth: 345, background:'none' }}>
                    <CardActionArea>
                        <CardContent sx={{background:'#0063b4', height:150, opacity:'93%'}}>
                            <Typography gutterBottom variant="h5" component="div" color='#fafafa' sx={{textDecoration: 'none'}}>
                            CAL Viva
                            </Typography>
                            <Typography variant="body2" color="#ffff">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="180"
                            image={piedra}
                            alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
            </div>
        </Link>
    )
}
