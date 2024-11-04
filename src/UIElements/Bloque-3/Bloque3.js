import React from 'react'
import places from './Images/places.png'
import curvedArrow from './Images/curvedArrow.gif'
import curvedArrow2 from './Images/curvedArrow2.gif'
import curvedArrow3 from './Images/curvedArrow3.gif'

import f1 from './Images/f1.webp'
import f2 from './Images/f2.webp'
import f3 from './Images/f3.webp'
import f4 from './Images/f4.webp'
import logoLokdis from '../Assets/logo-lokdis.png';
import './Bloque3.css'
import CustomSlider from '../Slider/Slider';
import { useEffect, useRef } from 'react';

export const Bloque3 = ({ language, setLanguage }) => {
    const isSpanish = language === "spanish";
    const images = [
        {
            imgURL: f1,
            imgAlt: "img-1",
            imgInfo: "texto de prueba",
        },
        {
            imgURL: f2,
            imgAlt: "img-2",
            imgInfo: "texto de prueba",
        },
        {
            imgURL: f3,
            imgAlt: "img-3",
            imgInfo: "texto de prueba",
        },
        {
            imgURL: f4,
            imgAlt: "img-4",
            imgInfo: "texto de prueba",
        }
    ];

    const containerRef = useRef(null);

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
        <div className='fondo3'>
            <div className='bloqueCabecera' ref={containerRef}>
                <h2 className='subtituloPoppins'>
                    {isSpanish ? '¿Te cansaste de tanto filtro y postureo en redes sociales?' : 'Are you tired of doing it for the gram?'}
                </h2>
              
                <p className="textoNormalPoppins">
                    {isSpanish
                        ? <>Explora <span className='colorGreenTextBloq3'>cualquier rincón del mundo</span> conectando con personas que te muestran lo que están viendo. ¿Te gustaría saber cuántas personas hay en la playa o si un evento ya ha comenzado? Descúbrelo con LokDis.</>
                        : <>Explore <span className='colorGreenTextBloq3'>any corner of the world</span> by connecting with people who are willing to show you what they are seeing. Would you like to know how many people are on the beach or if an event has already started? Find out with LokDis.</>
                    }
                </p>
                <p className="textoNormalPoppinsMobile">
                    {isSpanish
                        ? <>Explora <span className='colorGreenTextBloq3'>cualquier rincón del mundo</span> conectando con personas que te muestran lo que están viendo.</>
                        : <>Explore <span className='colorGreenTextBloq3'>any corner of the world</span> by connecting with people who are willing to show you what they are seeing.</>
                    }
                </p>

                <p className="textoNormalPoppinsMobile texto2Bloque3">
                    {isSpanish
                        ? <>¿Te gustaría saber cuántas personas hay en la playa o si un evento ya ha comenzado? Descúbrelo con LokDis.</>
                        : <>Would you like to know how many people are on the beach or if an event has already started? Find out with LokDis.</>
                    }
                </p>
            </div>

            <div className="sliderBloq3">
                <CustomSlider isSpanish={isSpanish}>
                    {images.map((image, index) => {
                        return <img key={index} src={image.imgURL} alt={image.imgAlt} style={{ width: '80%' }} />;
                    })}
                </CustomSlider>
            </div>

            <div className='ctnLokdisDesk' >
                <img src={logoLokdis} alt='Logo Lokdis' />
            </div>

            <div className="placesContainer">
                <div className='bloqueFlechas'>
                    <div className='arrowBox arrow1'>
                        <p className="arrowText3" style={{ marginBottom: "0vh" }}>
                            {isSpanish
                                ? <>¿Está funcionando la <br />noria de la fuente de <br />Neptuno en Berlín?</>
                                : <>Is the Neptune Fountain <br />Ferris wheel in Berlin working?</>
                            }
                        </p>
                        <img src={curvedArrow2} alt="curvedArrow" className="arrowbloque2 arrowImage1" />
                    </div>
                    <div className='arrowBox arrow2'>
                        <p className="arrowText3" style={{ marginBottom: "1vh", transform: "rotate(-15deg)" }}>
                            {isSpanish
                                ? <>¿Hay sitios de <br />souvenirs en <br />Victoria, <br />Malta?</>
                                : <>How does the souvenir <br />market in Victoria, <br />Malta look like now?</>
                            }
                        </p>
                        <img src={curvedArrow} alt="curvedArrow" className="arrowbloque2 arrowImage2" />
                    </div>
                    <div className='arrowBox arrow3'>
                        <p className="arrowText3" style={{ marginBottom: "1vh", transform: "rotate(-8deg)" }}>
                            {isSpanish
                                ? <>¿Hay mucha gente <br />paseando por <br />Burdeos?</>
                                : <>Is it a good time <br />to be in Bordeaux?</>
                            }
                        </p>
                        <img src={curvedArrow} alt="curvedArrow" className="arrowbloque2 arrowImage3" />
                    </div>
                    <div className='arrowBox arrow4'>
                        <img src={curvedArrow2} alt="curvedArrow" className="arrowbloque2 arrowImage4" />
                        <p className="arrowText3">
                            {isSpanish
                                ? <>¿Hay mucha gente <br />en la playa?</>
                                : <>Are there many <br />people on the beach?</>
                            }
                        </p>
                    </div>
                </div>
                <img src={places} alt="places" className="places" />
            </div>

            <div className='ctnLokdis' >
                <img src={logoLokdis} alt='Logo Lokdis' />
            </div>
        </div>
    )
}
