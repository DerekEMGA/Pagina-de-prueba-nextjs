import React, { useState, useEffect } from 'react';
import BurguerButton from './BurgerButton';
import logo from "../../public/logos/Logo White.png";
import Image from 'next/image';
import styles from '../../styles/navbar.module.css';
import styled from 'styled-components';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  // Función para manejar el clic en el botón de hamburguesa
  const handleClick = () => {
    setClicked(!clicked);
  };

  // Función para manejar el clic en los enlaces
  const handleLinkClick = () => {
    // Si el menú de hamburguesa está activo, cerrarlo
    if (clicked) {
      setClicked(false);
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setClicked(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.nav}>
      <Image alt="Logo" src={logo}  width={90} height={40} style={{ marginRight: 'auto' }} />
      <div className={`${styles.links} ${clicked ? styles.active : ''}`}>
        <a href="#login" onClick={handleLinkClick}>about us</a>
        <a href="#2" onClick={handleLinkClick}>our services</a>
        <a href="#sdad" onClick={handleLinkClick}>portfolio</a>
        <a href="#12312" onClick={handleLinkClick}>contact</a>
      </div>
      <div className={styles.burguer}>
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>
      <div className={`${styles.bgDiv} ${clicked ? styles.active : ''}`} onClick={handleClick}></div>
    </nav>
  );
}

export default Navbar;
