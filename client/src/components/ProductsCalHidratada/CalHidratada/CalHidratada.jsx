import { Button } from "@mui/material"
import styles from './CalHidratada.module.css'
import { Documentation } from "../Documentation/Documentation"
import { Produccion } from "../Produccion/Produccion"
import { PiedraImage } from "../PiedraImage/PiedraImage"
import { UsosCal } from "../UsosCal/UsosCal"
import { Mercados } from "../Mercados/Mercados"
import { PreguntasFrec } from "../PreguntasFrec/PreguntasFrec"
import { Link } from "react-router-dom"

export const CalHidratada = () => {
  return (
    <div className={styles.boxPrincipal}>
        <div className={styles.contenedorPrincipal}>
            <div className={styles.container}>
                <div className={styles.tituloPrincipal}>CAL HIDRATADA</div>
                <div className={styles.containerInterno}>
                    <div className={styles.titles}>
                        <a href="#Documentation">Documentación</a>
                        <a href="#Especificaciones">Usos y Especificaciones</a>
                        <a href="#Mercados">Relación de Mercados</a>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.titleDescription}>Descripción</div>
                        <br />
                        <p>La cal hidratada, conocida químicamente como hidróxido de calcio (Ca(OH)2), o cal apagada, es un polvo blanco seco derivado de la cal viva que se ha mezclado con agua. La cal hidratada con alto contenido de calcio Rio Cal está disponible como producto seco a granel o en bolsa y se utiliza en una variedad de aplicaciones industriales, incluido el tratamiento de gases de combustión, el tratamiento de agua, la fabricación de acero, la construcción y otras.
                        </p>
                        <br /><br />
                        <div className={styles.titleDescription}>Beneficios</div>

                        <ul className={styles.benefits}>
                            <li>Alto contenido de calcio para un rendimiento superior</li>
                            <li>Alta pureza constante para obtener un rendimiento crítico por cada tonelada</li>
                            <li>Libera muy poco calor exotérmico cuando entra en contacto con el agua, lo que lo hace más fácil y seguro de usar en ciertas aplicaciones en comparación con la cal viva o la soda cáustica con alto contenido de calcio.</li>
                            <li>Varios grados disponibles para satisfacer sus necesidades específicas</li>
                            <li>Entregado en el sitio y listo para usar </li>
                        </ul>
                        <br /><br />
                        <p>Para obtener información adicional, para ver nuestras fichas técnicas de productos o para analizar la disponibilidad con nuestro grupo de ventas, comuníquese con nosotros.</p>
                        <br /><br />
                        <Link to={'/Contacto'}>
                            <Button
                                sx={{
                                width:'250px',
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
                                }}
                            > SOLICITAR CAL HIDRATADA</Button>
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
