import { Button } from "@mui/material"
import styles from './PiedraCaliza.module.css'
import { Documentation } from "../Documentation/Documentation"
import { Produccion } from "../Produccion/Produccion"
import { PiedraImage } from "../PiedraImage/PiedraImage"
import { UsosCal } from "../UsosCal/UsosCal"
import { Mercados } from "../Mercados/Mercados"
import { PreguntasFrec } from "../PreguntasFrec/PreguntasFrec"
import { Link } from "react-router-dom"

export const PiedraCaliza = () => {
  return (
    <div className={styles.boxPrincipal}>
        <div className={styles.contenedorPrincipal}>
            <div className={styles.container}>
                <div className={styles.tituloPrincipal}>PIEDRA CALIZA</div>
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
                        <p>La piedra caliza es una roca sedimentaria natural que está compuesta casi en su totalidad por carbonato de calcio (CaCO3), que se considera piedra caliza con alto contenido de calcio. Es increíblemente versátil y se utiliza en muchas industrias, desde la agricultura hasta la siderurgia, debido a sus propiedades beneficiosas y su alto contenido de calcio.
                        </p>
                        <br /><br />
                        <div className={styles.titleDescription}>Beneficios</div>

                        <ul className={styles.benefits}>
                            <li>Versátil en su uso en todas las industrias debido a su alto contenido de calcio.</li>
                            <li>Disponible como piedra en bruto para procesamiento adicional o como carbonato de calcio molido.</li>
                            <li>Agrega resistencia y durabilidad en varias aplicaciones.</li>
           
                        </ul>
                        <br />
                        <p>Para obtener información adicional, para ver nuestras hojas típicas de productos o para analizar la disponibilidad con nuestro grupo de ventas, comuníquese con nosotros..</p>
                        <br /><br />
                        <Link to={'/Contacto'}>
                            <Button
                                sx={{
                                width:'500px',
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
                            > Solicite una Cotización para Piedra Caliza</Button>
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
        {/* <PreguntasFrec/> */}
    </div>
  )
}
