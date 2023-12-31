import React from 'react'
import styles from './CardCarrusel.module.css'
import { Link } from 'react-router-dom';


export const CardCarrusel = ({image, title, route}) => {
  return (
    <Link to={route} className={styles.contenedorInforCard}>
        {/* <div className={styles.textImagen}><p>Cal Viva</p></div> */}
        <div className={styles.cuadroImage}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    </Link>
  )
}
