import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import styles from './Calidad.module.css';
import calidad from '../../utils/calidad1.jpg'
import carro from '../../utils/carro1.png'
import { NavLink } from "react-router-dom";

export const SubCalidad = () => {
  return (
    <div className={styles.contenedor}>
      <Card className={styles.ContenedorTarjet1} 
        sx={{ 
          maxWidth: '24%', 
          background:'none' 
        }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="18%"
              image={carro}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} 
            sx={{
              background:'#0063b4', 
              height:210,
              opacity:'93%'
            }}>

              <ul className={styles.list}>
                <li>Mejoramos la capacidad de los procesos para cumplir las espectativas de nuestros clientes sin problemas de calidad</li>
                <li>Aumentamos la eficiencia del proceso, para reducir los tiempos de inactividad, la interrupción del producto y las quejas de los clientes</li>
              </ul>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.ContenedorTarjet1} 
        sx={{ 
          maxWidth: '24%', 
          background:'none' 
        }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="18%"
              image={carro}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} 
            sx={{
              background:'#0063b4', 
              height:210,
              opacity:'93%'
            }}>

              <ul className={styles.list}>
                <li>Mejoramos la capacidad de los procesos para cumplir las espectativas de nuestros clientes sin problemas de calidad</li>
                <li>Aumentamos la eficiencia del proceso, para reducir los tiempos de inactividad, la interrupción del producto y las quejas de los clientes</li>
              </ul>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.ContenedorTarjet1} 
        sx={{ 
          maxWidth: '24%', 
          background:'none' 
        }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="18%"
              image={carro}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} 
            sx={{
              background:'#0063b4', 
              height:210,
              opacity:'93%'
            }}>

              <ul className={styles.list}>
                <li>Mejoramos la capacidad de los procesos para cumplir las espectativas de nuestros clientes sin problemas de calidad</li>
                <li>Aumentamos la eficiencia del proceso, para reducir los tiempos de inactividad, la interrupción del producto y las quejas de los clientes</li>
              </ul>
          </CardContent>
        </CardActionArea>
      </Card>
     
    </div>
  )
}
