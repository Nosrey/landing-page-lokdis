import React, { useState, useEffect, useCallback, useRef } from 'react'
import styles from './styles/home.module.css'
import BlockFive from '../BlockFive/BlockFive'
import BlockFourth from '../BlockFourth/BlockFourth'
import BlockTwo from '../BlockTwo/BlockTwo';
import { Bloque1 } from '../Bloque-1/Bloque1'
import { Bloque3 } from '../Bloque-3/Bloque3'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import Carrousel from '../Carrousel/Carrousel';

export const Homepage = ({ language, setLanguage }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  const handleScroll = useCallback(() => {
    // Si ya estaba en estado "desplazando", limpiamos el timeout anterior
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Cambia el estado a "está desplazándose"
    setIsScrolling(true);

    // Define un timeout para ocultar el componente después de 1 segundo sin desplazamiento
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Tiempo en milisegundos (1 segundo en este caso)
  }, [scrollTimeout]);

  useEffect(() => {
    // Añade el evento de scroll cuando el componente se monta
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento de scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [handleScroll, scrollTimeout]);

  return (
    <div className={styles.fatherContainer}>
      <div className={styles.fatherContainer}>



        <Navbar setIsScrolling={setIsScrolling} isScrolling={isScrolling} language={language} setLanguage={setLanguage} />
        <Bloque1 language={language} setLanguage={setLanguage} />
        <BlockTwo language={language} setLanguage={setLanguage} />

        {/* Carrusel */}
        <div style={{
          marginTop: '-45vh',
          width: '100%',          
          position: 'relative',
          top: '50vh',
          zIndex: 1
        }}>
          <Carrousel />
        </div>

        <Bloque3 language={language} setLanguage={setLanguage} />

          {/* Carrusel */}
          <div style={{
          width: '100%',
          position: 'relative',
          top: '-35vh',
          zIndex: 1
        }}>
          <Carrousel />
        </div>
        
        <BlockFourth language={language} />
        <BlockFive language={language} />
        <Footer language={language} setLanguage={setLanguage} />
      </div>
    </div>
  )
}