import styles from './Productos.module.css'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const Productos = () => {
  return (
    <div id="principio" className={styles.boxPrincipal}>
        <div className={styles.contenedorPrincipal}>
            <div  className={styles.container}>
                <div className={styles.tituloPrincipal}>PRODUCTOS</div>
                <br /><br />
                <div className={styles.containerInterno}>
                    <div className={styles.titles}>
                        <a href="#cales">CALES</a>
                        <a href="#especiales">CALES ESPECIALES</a>
                        <a href="#piedra">PIEDRA</a>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.titleDescription}>Descripción</div>
                        <br />
                        <p>Rio Cal es un fabricante líder de cal, piedra caliza y productos especiales de cal, que son esenciales para una amplia gama de servicios e industrias. <br /> <br />Todo comienza con la piedra caliza procedente de nuestras canteras y minas. Nuestro equipo global de expertos altamente calificados puede asociarse con nuestros clientes para determinar la solución de cal o piedra caliza óptima para satisfacer sus necesidades..
                        </p>
                        <br /><br />

                        <br /><br />
                        <Link to={'/Contacto'}>
                            <Button
                                sx={{
                                    width:'290px',
                                    height:'40px',
                                    color:'#ffff',
                                    fontFamily: 'PFDinTextPro-Regular,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif',
                                    fontSize:'15px',
                                    fontWeight:600,
                                    backgroundColor:'#265c9e',
                                    borderRadius:'80px',
                                    marginBottom:'50px',
                                    '&:hover': {
                                        backgroundColor: '#50882b',
                                        borderColor: '#0062cc',
                                        boxShadow: 'none',
                                },
                            }}
                            > CONTACTANOS </Button>
                        </Link>
                    </div>
                </div>
            <div id="cales" className={styles.subtitles}>CALES</div>
            <section  className={styles.layout}>
                <Link to={'/CalHidratada'} className={styles.cuadro} id={styles.uno}><h3>Cal Hidratada</h3></Link>
                <Link to={'/CalViva'} className={styles.cuadro} id={styles.dos}>Cal Viva</Link>
                <Link to={'/CalDolomita'} className={styles.cuadro} id={styles.tres}>Cal Dolomita</Link>
                <Link to={'/CalesAgricolas'} className={styles.cuadro} id={styles.cuatro}>Cal Agrícola</Link>
            </section>
            <a href='#principio'> <FileUploadIcon  className={styles.IconClass}/> </a>


            <div id="especiales" className={styles.subtitles}>CALES ESPECIALES</div>
            <section  className={styles.layout}>
                <Link className={styles.cuadro} id={styles.seis}>Cal Hidratada Tipo A</Link>
                <Link className={styles.cuadro} id={styles.siete}>Cal Hidratada Tipo B</Link>
                <Link to={'/Promical10kg'} className={styles.cuadro} id={styles.cuatro}>Cal Hidratada 10KG</Link>
            </section>
            <a href='#principio'> <FileUploadIcon  className={styles.IconClass}/> </a>


            <div id="piedra" className={styles.subtitles}>PIEDRA</div>
            <section className={styles.layout}>
                <Link to={'/PiedraCaliza'} className={styles.cuadro} id={styles.ocho}>Piedra Caliza</Link>
            </section>
            <a href='#principio'> <FileUploadIcon  className={styles.IconClass}/> </a>

        
            </div>
        </div>
        {/* <Documentation/>
        <Produccion/>
        <PiedraImage/>
        <UsosCal/>
        <Mercados/>
        <PreguntasFrec/> */}
    </div>
  )
}
