
import styles from './Navbar.module.css';
import logo from '../Utils/logo.png';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavbarMenu } from './NavbarMenu';


export const Navbar = () => {


  const location = useLocation();
  const rutacontacto = '/'

  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = ()=> {
    setIsOpen(!isOpen);

  };

  const handleClick = ()=>{
    setIsOpen(false);
  };

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1245) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);


    // Limpiamos el evento al desmontar el componente para evitar problemas de memoria.
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <div>

      <div className={`${styles.Contenedor1} ${
        (location.pathname == rutacontacto && scrolled)
        ? styles.scrolled 
        : location.pathname != rutacontacto
        ? styles.scrolledContenedor1
        : isOpen
        ? styles.scrolled:
        ''}`}>
        <div className={styles.Barra}>
          <Link to={'/'} className={styles.links}>
            <div className={`${styles.Logo} ${
              (location.pathname == rutacontacto && scrolled)
              ? styles.scrolledLogo 
              : location.pathname != rutacontacto
              ? styles.scrolledLogo
              :isOpen
              ? styles.scrolledLogo:
              ''}`
              }>
                <img src={logo} alt="logo RioCal" />
                <p className={`${styles.logoP} ${
                  (location.pathname == rutacontacto && scrolled)
                  ? styles.scrolledLogoP 
                  :location.pathname != rutacontacto
                  ? styles.scrolledLogoP
                  : isOpen
                  ? styles.scrolledLogoP:
                  ''}`}>Member of Carmeuse Group</p>
            </div>
          </Link>
          <NavbarMenu scrolled={scrolled}/>
        </div>
        <div className={styles.toggle_btn} onClick={toggleDropdown}>
          <Toolbar>
            <IconButton onClick={toggleDropdown}
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
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
      <div className={
        (isOpen && location.pathname == rutacontacto)
        ? styles.navreponse1
        :(location.pathname != rutacontacto && isOpen)
        ? styles.navreponse2
        :styles.navreponse
        }>
        <div className={styles.navreponseMenu}>
          <Link className={styles.likMenuResonse} onClick={handleClick}>
            <a href="#inicio" className={styles.Subtitle}>Nosotros</a>
          </Link>
          <Link to={'/RioCalMas'} className={styles.likMenuResonse} onClick={handleClick}>
            <a href="#riocal" className={styles.Subtitle}>RioCal +</a>
          </Link>
          <Link to={'/Productos'} className={styles.likMenuResonse} onClick={handleClick}>
            <a href="#productos" className={styles.Subtitle}>Productos</a>
          </Link>
          <Link to={'/Industrias'} className={styles.likMenuResonse} onClick={handleClick}>
            <a href="#productos" className={styles.Subtitle}>Industria</a>
          </Link>
          <Link className={styles.likMenuResonse} onClick={handleClick}>
            <a href="#news" className={styles.Subtitle}>Sostenible</a>
          </Link>
          <Link to={'/Contacto'} className={styles.likMenuResonse} onClick={handleClick} >
            <a href="#news" className={styles.Subtitle}>Contacto</a>
          </Link>
        </div>
        <div className={isOpen? styles.navresponseContactanos: styles.navreponse}>
          <p>Contactanos</p>
        </div>
      </div>
    </div>
  )
}


