import React from 'react'
import './Footer.css'
import logo from './Images/logo.png'
import ig from './Images/ig.webp'
import tiktok from './Images/tiktok.webp'

export const Footer = ({ language, setLanguage }) => {
    const isSpanish = language === "spanish";

    return (
        <div className="main">
            <div className="leftSide">
                <img src={logo} alt="logo" className="logo" />
                <p className="textFooter">
                    © 2024 LokDis. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
                </p>
            </div>
            <div className="rightSide">
                <p className="textFooter" style={{ marginBottom: "10px" }}>
                    {isSpanish ? "¡Síguenos!" : "Follow us!"}
                </p>
                <div className='rightSideSocialIcons'>
                    <button className='ig'>
                        <img src={ig} alt="instagram"  />
                    </button>
                    <button className='tiktok'>
                        <img src={tiktok} alt="tiktok" />
                    </button>
                </div>
            </div>
        </div>
    )
}