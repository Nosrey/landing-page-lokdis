import React from 'react'
import places from './Images/places.png'
import curvedArrow from './Images/curvedArrow.png'
import './Bloque3.css'

export const Bloque3 = () => {
    return (
        <div>
            <div>
                <h2>¿Te cansaste de tanto filtro y postureo en redes sociales?</h2>
                <b>En Lokdis ¡Todo es real!</b>
                <p className='textoBloque'>Mira las cosas tal y como son.</p>
            </div>

            <div>
                <div>
                    <div>
                        <img src={curvedArrow} alt="curvedArrow" />
                        <p>¿Ya empezó el concierto?</p>
                    </div>
                    <div>
                        <img src={curvedArrow} alt="curvedArrow" />
                        <p>Cuánta gente hay en la playa del inglés</p>
                    </div>
                    <div>
                        <img src={curvedArrow} alt="curvedArrow" />
                        <p>¿La calle X sigue cortada?</p>
                    </div>
                </div>
                <img src={places} alt="places" />
            </div>
        </div>
    )
}