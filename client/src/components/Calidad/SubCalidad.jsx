import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import styles from './Calidad.module.css';
import calidad from '../../utils/calidad1.jpg'
import spc from '../../utils/spc.webp'
import phva from '../../utils/phva.jpg'
import { NavLink } from "react-router-dom";

export const SubCalidad = () => {
  return (
    <div className={styles.contenedor}>
      <Card className={styles.ContenedorTarjet1} 
        sx={{ 
          width: '27%', 
          background:'none',
          '@media only screen and (max-width:1000px)':{
            width:'95%',
            marginBottom:'70px'
          }
        }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="18%"
              image={spc}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                objectFit:'fill'
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} 
            sx={{
              background:'#748599', 
              height:250,
              opacity:'93%'
            }}>

              <ul className={styles.list}>
                <li>Mejoramos la capacidad de los procesos para cumplir las expectativas de nuestros clientes sin problemas de calidad</li>
                <li>Aumentamos la eficiencia del proceso, para reducir los tiempos de inactividad, la interrupción del producto y las quejas de los clientes</li>
              </ul>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.ContenedorTarjet1} 
        sx={{ 
          width: '27%', 
          background:'none',
          '@media only screen and (max-width:1000px)':{
            width:'95%',
            marginBottom:'70px'
          }
        }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="18%"
              image={calidad}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} 
            sx={{
              background:'#748599', 
              height:250,
              opacity:'93%'
            }}>

              <ul className={styles.list}>
              <li>Usamos métodos de ensayo que nos proporcionan procedimientos analíticos precisos y fiables para determinar los componentes químicos de la piedra caliza, cal viva y cal hidratada</li>
                <li>Los resultados obtenidos son utilizados en relación con las especificaciones del cliente</li>
              </ul>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.ContenedorTarjet1} 
        sx={{ 
          width: '27%', 
          background:'none',
          '@media only screen and (max-width:1000px)':{
            width:'95%',
            marginBottom:'70px'
          }
        }}>
        <CardActionArea>
          <CardMedia
              component="img"
              height="18%"
              image={phva}
              alt="green iguana"
              sx={{
                imageRendering:'-webkit-optimize-contrast',
                // imageRendering:'pixelated'
              }}
          />
          <CardContent className={styles.TextTarjet1} 
            sx={{
              background:'#748599', 
              height:250,
              opacity:'93%'
            }}>

              <ul className={styles.list}>
                <li>Los procesos de mejora continua en base al ciclo PHVA incrementan el nivel de productividad de nuestras plantas, y nos permiten proyectar períodos de producción, con el objetivo de planear y ejecutar mantenimiento preventivo y correctivo sin afectar la disponibilidad de producto </li>
              </ul>
          </CardContent>
        </CardActionArea>
      </Card>
     
    </div>
  )
}
