import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Typography } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import GasMeterOutlinedIcon from '@mui/icons-material/GasMeterOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const Industrias = ['Agrícola', 'Química', 'Ing. Civil & Const', 'Medio Ambiente','Tratamiento de Gases', 'Métalurgica', 'No Ferrosos', 'PCC & Papel']

const IndustriasIcon = [<AgricultureIcon/>, <ScienceOutlinedIcon/>, <EngineeringOutlinedIcon/>, <WaterDropOutlinedIcon/>, <ConfirmationNumberOutlinedIcon/>, <GasMeterOutlinedIcon/>, <DescriptionOutlinedIcon/>, <DescriptionOutlinedIcon/>]

const paths = ['Agricultura', 'Quimico', 'IngCivilConst', 'MedioAmbiente', 'FlueGas', 'Metalurgica', 'NoFerrosos', 'PulpaPapel'];

const Productos = ['Cal Viva', 'Cal Hidratada', 'Cal Dolomita', 'Cal Hidratada 10KG','Cal Hidratada Tipo E', 'Cal Viva 25KG']

const paths1 = ['Calviva', 'CalHidratada', 'CalDolomita', 'CalHidratada10Kg', 'CalHidratadaTipoE', 'Calviva25Kg'];


export const NavbarMenu = () => {

  const lisItemsIndustry = Industrias.map((ele, index)=>{

    for (let i = 0; i < paths.length; i++) {
      if ( index == i) {
        var direccion = paths[i];
        var icons = IndustriasIcon[i]
      } 
    }
    return <a href='#' key={index}> <Link to={direccion} className={styles.LinkedA}> {icons} {ele} </Link> </a>
  }
  ) 
  const lisItemsProducts = Productos.map((ele, index)=>{

    for (let i = 0; i < paths1.length; i++) {
      if ( index == i) {
        var direccion = paths1[i];
      } 
    }
    return <a href='#' key={index}> <Link to={direccion} className={styles.LinkedA}> { ele} </Link> </a>
  }
  ) 

  return (
    <div className={styles.navbar}>
      <Link to={'/'} className={styles.links}>
        <a href="#inicio" className={styles.Subtitle}>Inicio</a>
      </Link>
      <Typography component={NavLink} to={'/RioCalMas'}
        sx={{
          letterSpacing:'1.5px',
          width:'110px',
          backgroundColor:'#61993b',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          color:'white',
          fontFamily:'inherit',
          fontSize:'11px',
          '&:hover':{
            backgroundColor:'inherit',
            color:'white'
          }
        }}  
      >RioCal +</Typography>
      <div className={styles.dropdown}>
        <Link to={'/Productos'}>
          <button className={styles.dropbtn}>Productos
            <i className="fa fa-caret-down"></i>
          </button>
        </Link>
        <div className={styles.dropdownContent}>
          {lisItemsProducts}
        </div>
      </div>
      <div className={styles.dropdown}>
        <Link to={'/Industrias'}>
          <button className={styles.dropbtn}>Industria
            <i className="fa fa-caret-down"></i>
          </button>
        </Link>
        <div className={styles.dropdownContent}>
          {lisItemsIndustry}
        </div>
      </div>
      <a href="#news" className={styles.Subtitle}>Sostenible</a>
      <Link to={'/Contacto'} className={styles.Subtitle}>Contacto</Link>
    </div>
  )
}
