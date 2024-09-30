import React from 'react'
import './Footer.css'
import logo from './Images/logo.png'
import ig from './Images/ig.webp'
import tiktok from './Images/tiktok.webp'

export const Footer = () => {
    return (
        <div className="main">
            <div className="leftSide">
                <img src={logo} alt="logo" className="logo" />
                <p className="textFooter">© 2024 LokDis. Todos los derechos reservados.</p>
            </div>
            <div className="rightSide">
                <p className="textFooter" style={{marginBottom: "10px"}}>¡Síguenos!</p>
                <div className='rightSideSocialIcons'>

                    <img src={ig} alt="instagram" className='ig' />
                    <img src={tiktok} alt="tiktok" className='tiktok' />
                </div>
            </div>
        </div>
    )
}
