import { Button } from "@mui/material"
import styles from './CalesAgricolas.module.css'
import { Documentation } from "../Documentation/Documentation"
import { Produccion } from "../Produccion/Produccion"
import { PiedraImage } from "../PiedraImage/PiedraImage"
import { UsosCal } from "../UsosCal/UsosCal"
import { Mercados } from "../Mercados/Mercados"
import { PreguntasFrec } from "../PreguntasFrec/PreguntasFrec"
import { Link } from "react-router-dom"

export const CalesAgricolas= () => {
  return (
    <div className={styles.boxPrincipal}>
        <div className={styles.contenedorPrincipal}>
            <div className={styles.container}>
                <div className={styles.tituloPrincipal}>CAL DOLOMITA</div>
                <br /><br />
                <div className={styles.containerInterno}>
                    <div className={styles.titles}>
                        <a href="#Documentation">Documentación</a>
                        <a href="#Especificaciones">Usos y Especificaciones</a>
                        <a href="#Mercados">Relación de Mercados</a>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.titleDescription}>Descripción</div>
                        <br />
                        <p>La cal dolomítica se utiliza en diversas aplicaciones industriales, agrícolas y en materiales de construcción como morteros. Hay cuatro tipos de cal hidratada que se utilizan en aplicaciones de construcción: Tipo N, Tipo NA, Tipo S y Tipo SA. Rio Cal produce Tipo S y Tipo SA.
                        </p>
                        <br /><br />
                        <div className={styles.titleDescription}>Beneficios</div>

                        <ul className={styles.benefits}>
                            <li>Cumple con las especificaciones ASTM C207 - Tipo S</li>
                            <li>Mejor trabajabilidad y elasticidad.</li>
                            <li>Imparte baja penetración o fuga de agua al producto terminado.</li>
                            <li>Fuerza flexible</li>
                            <li>Ahorro de costos en comparación con el cemento de mampostería tradicional</li>
                            <li>Agrega fuerza de unión y resistencia sísmica</li>
                            <li>Ideal para mezclar lotes pequeños o grandes. </li>
                        </ul>
                        <br />
                        <p>La cal hidratada tipo S y la cal hidratada tipo SA están disponibles en bolsas de 50 libras, súper sacos o a granel. Para obtener información adicional, para ver nuestras hojas típicas de productos o para analizar la disponibilidad con nuestro grupo de ventas, comuníquese con nosotros..</p>
                        <br /><br />
                        <Link to={'/Contacto'}>
                            <Button
                                sx={{
                                width:'550px',
                                height:'40px',
                                color:'#ffff',
                                fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                                fontSize:'12px',
                                backgroundColor:'#265c9e',
                                borderRadius:'80px',
                                '&:hover': {
                                    backgroundColor: '#50882b',
                                    borderColor: '#0062cc',
                                    boxShadow: 'none',
                                },
                                }}
                            > Solicite una Cotización para Cal Hidratada Dolomítica (Tipos S/SA)</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Documentation/>
        <Produccion/>
        <PiedraImage/>
        <UsosCal/>
        <Mercados/>
        <PreguntasFrec/>
    </div>
  )
}
