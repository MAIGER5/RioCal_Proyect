import { Button } from "@mui/material"
import styles from './CalViva.module.css'
import { Documentation } from "../Documentation/Documentation"
import { Produccion } from "../Produccion/Produccion"
import { PiedraImage } from "../PiedraImage/PiedraImage"
import { UsosCal } from "../UsosCal/UsosCal"
import { Mercados } from "../Mercados/Mercados"
import { PreguntasFrec } from "../PreguntasFrec/PreguntasFrec"
import { Link } from "react-router-dom"

export const CalViva = () => {
  return (
    <div className={styles.boxPrincipal}>
        <div className={styles.contenedorPrincipal}>
            <div className={styles.container}>
                <div className={styles.tituloPrincipal}>CAL VIVA</div>
                <div className={styles.containerInterno}>
                    <div className={styles.titles}>
                        <a href="#Documentation">Documentación</a>
                        <a href="#Especificaciones">Usos y Especificaciones</a>
                        <a href="#Mercados">Relación de Mercados</a>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.titleDescription}>Descripción</div>
                        <br />
                        <p>Como productor líder de cal viva con alto contenido de calcio, Rio Cal trabaja con usted para ofrecerle un producto de alto rendimiento que satisfaga sus necesidades específicas. La cal viva con alto contenido de calcio, conocida químicamente como óxido de calcio (CaO), o comúnmente conocida como cal, es un compuesto químico ampliamente utilizado que se origina a partir del carbonato de calcio (también conocido como piedra caliza). La cal viva se compone principalmente de calcio, magnesio y pequeñas cantidades de otros compuestos químicos dependiendo de la formación de la piedra caliza de origen.
                        <br /><br />
                        Nuestra cal viva con alto contenido de calcio se deriva de depósitos selectos de piedra caliza con alto contenido de calcio que no contienen más del 5 % de contenido de magnesio. La calidad y la consistencia de nuestro material se prueban de forma rutinaria para garantizar las propiedades químicas y físicas adecuadas para las aplicaciones industriales.</p>
                        <br /><br />
                        <div className={styles.titleDescription}>Beneficios</div>

                        <ul className={styles.benefits}>
                            <li>El alto contenido de calcio (CaO) proporciona un rendimiento superior para las necesidades de la aplicación</li>
                            <li>Fuente eficiente para el ajuste del PH y el control de la acidez</li>
                            <li>Uno de los materiales alcalinos más rentables, en comparación con el cáustico y otros</li>
                            <li>Pruebas de rutina para calidad y consistencia</li>
                            <li>Fácilmente disponible a través de nuestra red de plantas en una variedad de tamaños, desde guijarros hasta finos </li>
                            <li>Ventajas de seguridad frente a la soda cáustica </li>
                        </ul>
                        <br /><br />
                        <p>Para obtener información adicional, para ver nuestras fichas técnicas de productos o para analizar la disponibilidad con nuestro grupo de ventas, comuníquese con nosotros.</p>
                        <br /><br />
                        <Link to={'/Contacto'}>
                            <Button
                                sx={{
                                width:'205px',
                                height:'40px',
                                color:'#ffff',
                                fontFamily: 'inherit',
                                fontSize:'15px',
                                backgroundColor:'#265c9e',
                                borderRadius:'80px',
                                '&:hover': {
                                    backgroundColor: '#50882b',
                                    borderColor: '#0062cc',
                                    boxShadow: 'none',
                                },
                                }}
                            > SOLICITAR CAL VIVA</Button>
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
