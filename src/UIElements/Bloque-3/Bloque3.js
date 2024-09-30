import React from 'react'
import places from './Images/places.png'
import curvedArrow from './Images/curvedArrow.gif'
import curvedArrow2 from './Images/curvedArrow2.gif'
import curvedArrow3 from './Images/curvedArrow3.gif'
import './Bloque3.css'

export const Bloque3 = () => {
    return (
        <div className='fondo'>
            <div className='bloqueCabecera'>
                <h2 className='subtituloPoppins'>¿Te cansaste de tanto filtro y postureo en redes sociales?</h2>
                <p className="textoNormalPoppins" style={{ lineHeight: "45px" }}>Conecta con la realidad que te importa</p>
                <p className="textoNormalPoppins" style={{ fontSize: "16px", marginTop: "0" }}>Explora cualquier rincón del mundo conectando con personas que te muestran lo que están viendo.
                    ¿Te gustaría saber cuántas personas hay en la playa o si un evento ya ha comenzado? Descúbrelo con LokDis.</p>
            </div>

            <div className="placesContainer">
                <div className='bloqueFlechas'>
                    <div className='arrowBox arrow1'>
                        <p className="arrowText" style={{ marginBottom: "0vh"}}>¿Está funcionando la <br/>noria de la fuente de <br/>Neptuno en Berlín?</p>
                        <img src={curvedArrow2} alt="curvedArrow" className="arrow arrowImage1" />
                    </div>
                    <div className='arrowBox arrow2'>
                        <p className="arrowText" style={{ marginBottom: "1vh", transform: "rotate(-15deg)" }}>¿Hay sitios de <br/>souvenirs en <br/>Victoria, <br/>Malta?</p>
                        <img src={curvedArrow} alt="curvedArrow" className="arrow arrowImage2" />
                    </div>
                    <div className='arrowBox arrow3'>
                        <p className="arrowText" style={{ marginBottom: "1vh", transform: "rotate(-8deg)" }}>¿Hay mucha gente <br/>paseando por <br/>burdeos?</p>
                        <img src={curvedArrow3} alt="curvedArrow" className="arrow arrowImage3" />
                    </div>
                    <div className='arrowBox arrow4'>
                        <img src={curvedArrow2} alt="curvedArrow" className="arrow arrowImage4" />
                        <p className="arrowText" >¿Hay mucha gente <br/>en la playa?</p>
                    </div>
                </div>
                <img src={places} alt="places" className="places" />
            </div>
        </div>
    )
}