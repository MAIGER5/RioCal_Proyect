import { Button } from "@mui/material"
import styles from './CalDolomita.module.css'
import { Documentation } from "../Documentation/Documentation"
import { Produccion } from "../Produccion/Produccion"
import { PiedraImage } from "../PiedraImage/PiedraImage"
import { UsosCal } from "../UsosCal/UsosCal"
import { Mercados } from "../Mercados/Mercados"
import { PreguntasFrec } from "../PreguntasFrec/PreguntasFrec"
import { Link } from "react-router-dom"

export const CalDolomita = () => {
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
                        <p>Rio Cal proporciona cal viva dolomítica de calidad para aplicaciones industriales que requieren el equilibrio adecuado de contenido de calcio y magnesio. La cal viva dolomítica, conocida químicamente como óxido de calcio y magnesio (CaO•MgO), o comúnmente denominada dolima, se deriva de piedra caliza con un contenido de carbonato de magnesio del 35 % al 46 %. Nuestro material se prueba periódicamente en cuanto a calidad y consistencia, para garantizar las propiedades químicas y físicas adecuadas para aplicaciones industriales.
                        </p>
                        <br /><br />
                        <div className={styles.titleDescription}>Beneficios</div>

                        <ul className={styles.benefits}>
                            <li>Contenido de calcio y magnesio para necesidades de aplicación específicas.</li>
                            <li>Fuente eficiente para el ajuste del pH y el control de la acidez.</li>
                            <li>Pruebas de rutina para calidad y consistencia.</li>
                            <li>Disponible en una variedad de tamaños, desde guijarros hasta finos.</li>
                            <li>Ofrece ventajas de seguridad cuando se usa para reemplazar la soda cáustica.</li>

                        </ul>
                        <br />
                        <p>Para obtener información adicional, para ver nuestras hojas típicas de productos o para analizar la disponibilidad con nuestro grupo de ventas, comuníquese con nosotros..</p>
                        <br /><br />
                        <Link to={'/Contacto'}>
                            <Button
                                sx={{
                                width:'100%',
                                height:'40px',
                                color:'#ffff',
                                fontFamily: 'inherit',
                                fontSize:'12px',
                                backgroundColor:'#265c9e',
                                borderRadius:'80px',
                                '&:hover': {
                                    backgroundColor: '#50882b',
                                    borderColor: '#0062cc',
                                    boxShadow: 'none',
                                },
                                // '@media only screen and (max-width: 1000px)': {
                                //     width:'70%'
                                // }
                                }}
                            > Solicite una Cotización para Cal Dolomítica </Button>
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
