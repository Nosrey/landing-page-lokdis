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

let increase = true;


export const Homepage = ({ language, setLanguage }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Nueva variable para la visibilidad del 10% inferior del componente
  const [isHovering, setIsHovering] = useState(false); // Nueva variable para detectar el mouse
  const [numberOfPerson, setNumberOfPerson] = useState(0);
  const [newPerson, setNewPerson] = useState(true);
  const scrollTimeout = useRef(null);
  const mainDivRef = useRef(null); // Ref para el contenedor principal
  const observedRef = useRef(null); // Ref para el componente a observar

  // const URL = 'lokdis-contador-usuarios-git-main-nosreys-projects.vercel.app';

  const handleScroll = useCallback(() => {
    // Si ya estaba en estado "desplazando", limpiamos el timeout anterior
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Cambia el estado a "está desplazándose"
    setIsScrolling(true);

    // Define un timeout para ocultar el componente después de 1 segundo sin desplazamiento
    scrollTimeout.current = setTimeout(() => {
      if (!isHovering) { // Solo ocultar si no está el mouse sobre la navbar
        setIsScrolling(false);
      }
    }, 1000); // Tiempo en milisegundos (1 segundo en este caso)
  }, [isHovering]);

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

    // pide a URL/numero y en el objeto.numero asigna eso +1 a setNumberOfPerson
    // luego SOLO UNA VEZ al abrir la pagina SI Y SOLO SI newPerson es true (es decir al inicio, luego no mas) pide a URL/incrementar en un .post sin enviar nada mas, luego setea newPerson a false



    if (newPerson && increase) {
      fetch(`https://lokdis-contador-usuarios-git-main-nosreys-projects.vercel.app/numero`)
        .then((response) => response.json())
        .then((data) => {
          setNumberOfPerson(Number(data.numero) + Number(1));
          increase = false;
        })
        .then(() => {
          fetch(`https://lokdis-contador-usuarios-git-main-nosreys-projects.vercel.app/incrementar`, {
            method: 'POST',
          })
            .catch((error) => {
              console.error('Error incrementing number of persons:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching number of persons:', error);
        });



      setNewPerson(false);
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

  // Manejadores para cuando el mouse entra y sale de la navbar
  const handleMouseEnter = () => {
    console.log('mouse enter en navbar');
    setIsHovering(true);
    setIsScrolling(true); // Mostrar navbar cuando el mouse está sobre ella
  };

  const handleMouseLeave = () => {
    console.log('mouse leave en navbar');
    setIsHovering(false);
    setIsScrolling(false); // Ocultar navbar cuando el mouse sale de ella
  };

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
      <div
        onMouseEnter={handleMouseEnter} // Asegúrate de que los eventos estén directamente aquí
        onMouseLeave={handleMouseLeave}
      >
        <Navbar
          setIsScrolling={setIsScrolling}
          isScrolling={isScrolling}
          language={language}
          setLanguage={setLanguage}
          numberOfPerson={numberOfPerson}
        />
      </div>

      <Bloque1
        language={language}
        setLanguage={setLanguage}
        numberOfPerson={numberOfPerson}
      />
      <BlockTwo language={language} />

      {/* Carrusel */}
      <div className={styles.carrusel1}>
        <Carrousel language={language} />
      </div>

      <Bloque3 language={language} setLanguage={setLanguage} />

      <div className={styles.carrusel2}>
        <Carrousel language={language} />
      </div>

      <BlockFourth language={language} />
      <BlockFive language={language} />

      <div ref={observedRef} className={styles.observedBlock}>
        <Footer language={language} setLanguage={setLanguage} isVisible={isVisible} />

        {/* Marcador para observar el final */}
        <div style={{ height: '1px' }} />
      </div>
    </div>
  );
};
