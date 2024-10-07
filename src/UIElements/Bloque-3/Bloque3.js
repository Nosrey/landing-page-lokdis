import React from 'react'
import places from './Images/places.png'
import tabletImage from './Images/tabletImage.png'
import curvedArrow from './Images/curvedArrow.gif'
import curvedArrow2 from './Images/curvedArrow2.gif'
import curvedArrow3 from './Images/curvedArrow3.gif'
import './Bloque3.css'

export const Bloque3 = ({ language, setLanguage }) => {
    const isSpanish = language === "spanish";

    return (
        <div className='fondo3'>
            <div className='bloqueCabecera'>
                <h2 className='subtituloPoppins'>
                    {isSpanish ? '¿Te cansaste de tanto filtro y postureo en redes sociales?' : 'Are you tired of doing it for the gram?'}
                </h2>
                <p className="textoNormalPoppins texto1Bloque3">
                    {isSpanish ? <>Conecta con<span className='fondoAzulBloque3'>la realidad que te importa</span></> : <>Connect with<span className='fondoAzulBloque3'>the reality that matters to you</span></>}
                </p>
                <p className="textoNormalPoppins">
                    {isSpanish
                        ? 'Explora cualquier rincón del mundo conectando con personas que te muestran lo que están viendo. ¿Te gustaría saber cuántas personas hay en la playa o si un evento ya ha comenzado? Descúbrelo con LokDis.'
                        : 'Explore any corner of the world by connecting with people who are willing to show you what they are seeing. Would you like to know how many people are on the beach or if an event has already started? Find out with LokDis.'
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
                        <img src={curvedArrow3} alt="curvedArrow" className="arrowbloque2 arrowImage3" />
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

            <div className='placesContainerMobile'>
                <img src={tabletImage} alt="places" className="placesMobile" />
            </div>
        </div>
    )
}
