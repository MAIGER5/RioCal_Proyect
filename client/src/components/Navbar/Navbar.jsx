
import styles from './Navbar.module.css';
import logo from '../Utils/logo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavbarMenu } from './NavbarMenu';


export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = ()=> {
    setIsOpen(!isOpen);
  };

  const handleClick = ()=>{
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1245) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Limpiamos el evento al desmontar el componente para evitar problemas de memoria.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className={styles.Contenedor1}>
        <div className={styles.Barra}>
          <Link to={'/'} className={styles.links}>
            <div className={styles.Logo}>
                    <img src={logo} alt="logo RioCal" />
                    <p>Member of Carmeuse Group</p>
            </div>
          </Link>
          <NavbarMenu/>
        </div>
        <div className={styles.toggle_btn} onClick={toggleDropdown}>
          <Toolbar>
            <IconButton onClick={toggleDropdown}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <div className={styles.iconmenu}>
              {
                !isOpen? <MenuIcon />: <ClearIcon />
              } 
            </div>
            </IconButton>
          </Toolbar>
        </div>

      </div>
      <div className={isOpen? styles.navreponse1: styles.navreponse}>
        <a href="#inicio" className={styles.Subtitle}>Nosotros</a>
        <a href="#riocal" className={styles.RioCal}>RioCal +</a>
        <a href="#productos" className={styles.Subtitle}>Productos</a>
        <a href="#productos" className={styles.Subtitle}>Industria</a>
        <a href="#news" className={styles.Subtitle}>Sostenible</a>
        <Link to={'/Contacto'} className={styles.Subtitle}>Contacto</Link>
      </div>
    </div>
  )
}

