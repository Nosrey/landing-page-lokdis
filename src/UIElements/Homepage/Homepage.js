import styles from './styles/home.module.css';
import BlockFive from '../BlockFive/BlockFive';
import BlockFourth from '../BlockFourth/BlockFourth';
import BlockTwo from '../BlockTwo/BlockTwo';
import { Bloque1 } from '../Bloque-1/Bloque1';
import { Bloque3 } from '../Bloque-3/Bloque3';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import Carrousel from '../Carrousel/Carrousel';
import { useState, useEffect, useCallback, useRef } from 'react';

export const Homepage = ({ language, setLanguage }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Nueva variable para la visibilidad del 10% inferior del componente
  const scrollTimeout = useRef(null);
  const mainDivRef = useRef(null); // Ref para el contenedor principal
  const observedRef = useRef(null); // Ref para el componente a observar

  const numberOfPerson = 214;

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
  }, []);

  // Hook para observar la visibilidad del 10% inferior del componente
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Se vuelve true cuando el componente es visible, incluso en un 10% de su parte inferior
          } else {
            setIsVisible(false); // False cuando no está visible
          }
        });
      },
      {
        root: null, // viewport como referencia
        threshold: [0.1], // Ajustamos para que active cuando el 10% del componente esté visible
      }
    );

    const observedElement = observedRef.current;
    if (observedElement) {
      observer.observe(observedElement); // Observamos el elemento
    }

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement); // Limpieza cuando se desmonta
      }
    };
  }, []);


  useEffect(() => {
    const mainDiv = mainDivRef.current;

    if (mainDiv) {
      // Añade el evento de scroll al div principal
      mainDiv.addEventListener('scroll', handleScroll);
    }

    // Limpia el evento de scroll cuando el componente se desmonta
    return () => {
      if (mainDiv) {
        mainDiv.removeEventListener('scroll', handleScroll);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);



  return (
    <div
      ref={mainDivRef}
      className={styles.fatherContainer}
    >
      <div style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        padding: '0.5rem',
        zIndex: 100
      }}>
        {`Current screen resolution: ${window.innerWidth} x ${window.innerHeight}`}
      </div>

      {/* Componente Navbar */}
      <Navbar setIsScrolling={setIsScrolling} isScrolling={isScrolling} language={language} setLanguage={setLanguage} numberOfPerson={numberOfPerson} />
      <Bloque1 language={language} setLanguage={setLanguage} numberOfPerson={numberOfPerson} />
      <BlockTwo language={language} />

      {/* Carrusel */}
      <div className={styles.carrusel1}>
        <Carrousel language={language} />
      </div>

      <Bloque3 language={language} setLanguage={setLanguage} />
      {/* Carrusel */}
      <div className={styles.carrusel2}>
        <Carrousel language={language} />
      </div>
      <BlockFourth language={language} />




      <BlockFive language={language} />

      <div ref={observedRef} className={styles.observedBlock}>
        {/* Este es el bloque que queremos observar */}
        <Footer language={language} setLanguage={setLanguage} isVisible={isVisible} />

        {/* Marcador para observar el final */}
        <div style={{ height: '1px' }} />
      </div>
    </div>
  );
};
