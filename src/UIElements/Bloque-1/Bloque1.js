import React from "react";
import "./Bloque1.css";
import ReactPlayer from 'react-player'
// import phoneView from "./Images/phoneView.png";
import arrow from './Images/arrow.gif';
// import phoneSquare from './Images/phoneSquare.png';
import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
// import video from '../Assets/video.mp4';

export const Bloque1 = ({ language, setLanguage, numberOfPerson }) => {
  const isSpanish = language === "spanish";
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const containerRef = useRef(null);

  const redirectUrl = () => {
    if (language === 'spanish') {
      window.open('https://b6j96f1eelu.typeform.com/to/b0NPKpIT', '_blank');
    } else {
      window.open('https://b6j96f1eelu.typeform.com/to/mlppGgt6', '_blank');
    }
  }


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);



  return (
    <div className="fondo">

      <div className="columnas">
        <div className="columnaSingular leftBloq1">

          {/* lado de contador */}
          <div className="filaContador">

            {/* <p className="contador">{isSpanish ? `${numberOfPerson} personas ya forman parte de Lokdis` : `${numberOfPerson} people are already part of Lokdis`}</p> */}

            <p className="contador">{isSpanish ? <><span className="numberBloq1">{numberOfPerson}</span>  personas ya forman parte de Lokdis</> : <><span className="numberBloq1">{numberOfPerson}</span>  people are already part of Lokdis</>}</p>

          </div>

          {/* lado izquierdo inferior */}
          <div>
            <div className="cajaVertical">
              <p className="subtitulo">{isSpanish ? "LokDis: Conéctate con la realidad" : "LokDis: Connect with reality"}</p>
              <p className="bloqueVerde">{isSpanish ? "Explora el mundo sin filtros" : "Explore the world without filters"}</p>
              <p className="textoPoppinsDefault" style={{}}>
                {isSpanish ? "Descubre LokDis, una app para ver el mundo real en la que podrás solicitar momentos y " : "Discover LokDis, an app to view the real world in which you can request unfiltered moments and "}
                <span>{isSpanish ? "vivir experiencias auténticas." : "live authentic experiences."}</span>
              </p>
              {window.innerWidth <= 500 &&
                <div className='phoneView2Bloq1' style={{ margin: '25px 0' }}>
                  {loading && <div className="spinnerBloq1"></div>}
                  <div className="phone-frame" style={{ margin: '0', display: loading ? 'none' : 'block' }}>
                    <div className="phone-content">
                      <ReactPlayer
                        url='https://vimeo.com/1023344517'
                        controls={false}
                        playing={true}
                        loop={true}
                        volume={isMuted ? 0 : 1}
                        onReady={() => setLoading(false)}
                        width='100%'
                        height='100%'
                      />
                    </div>
                  </div>
                </div>



              }
              <button
                style={{ margin: '0px auto 10px auto', display: (!loading && window.innerWidth <= 500) ? 'block' : 'none' }}
                onClick={() => setIsMuted(!isMuted)}
                className={`botonPhone mute-switch ${isMuted ? 'muted' : 'unmuted'}`}
              >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>


            </div>

            <p className="textoBienvenida">
              {isSpanish ? "Regístrate, si estás entre las 1000 primeras personas obtendrás 6 meses Premium de LokDis" : "3647 people are already impatient to join this collaborative community"}
            </p>
            <button onClick={redirectUrl} className="boton">{isSpanish ? "¡Únete ahora!" : "Join the waiting list!"}</button>
          </div>
        </div>

        {/* lado derecho */}
        <div className="columnaSingular rightBloq1" style={{ width: "40%", position: 'relative' }} ref={containerRef}>
          {/* <img
            src={phoneView}
            alt="phoneView"
            className="phoneView"
          /> */}


          <div className='phoneDeskBloq1'>
            {loading && <div className="spinnerBloq1"></div>}
            {window.innerWidth > 500 &&

              <div className="phone-frame" style={{ display: loading ? 'none' : 'block' }}>
                <ReactPlayer
                  url='https://vimeo.com/1023344517'
                  controls={false}
                  playing={true}
                  loop={true}
                  volume={isMuted ? 0 : 1}
                  onReady={() => setLoading(false)}
                  width='100%'
                  height='100%'
                />
              </div>
            }
          </div>

          <button
            style={{ display: (!loading && window.innerWidth > 500) ? 'block' : 'none' }}
            onClick={() => setIsMuted(!isMuted)}
            className={`botonDesk mute-switch ${isMuted ? 'muted' : 'unmuted'}`}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          {/* <video
            autoPlay
            playsInline
            className="phoneView"
            src={video}
            >
            </video>           */}
        </div>
      </div>
      <footer>
        <p className="textoFooter">{isSpanish ? "Explora, conecta y comparte el mundo en su forma más auténtica." : "Explore, connect and share the world in its most authentic form."}</p>
        <div className="arrowContainer">
          <p className="arrowText">Look at<br />this!</p>
          <img
            src={arrow}
            alt="arrow"
            className="arrow"
          />
        </div>
      </footer>
    </div>
  );
};