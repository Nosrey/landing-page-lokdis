import React from 'react'
import './Footer.css'
import logo from './Images/logo.png'
import ig from './Images/ig.webp'
import tiktok from './Images/tiktok.webp'
// facebook from './Images/facebook.webp';
// reddit from './Images/reddit.webp';
import usaFlag from './Images/usaFlag.webp'
import spanishFlag from './Images/spanishFlag.webp'
import arrow from './Images/curvedArrow2.gif'


export const Footer = ({ language, setLanguage, isVisible }) => {
    const isSpanish = language === "spanish";

    const handleLanguageChange = (event) => {
        console.log('seteando idioma, vengo de: ', language)
        setLanguage(event.target.checked ? "english" : "spanish");
    };

    return (
        <div>
            <div className="mainFooter">
                <div className="leftSideFooter">
                    <img src={logo} alt="logo" className="logo" />
                    <p className="textFooter">
                        © 2024 LokDis. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
                    </p>
                </div>
                <div className="centerFooter">
                    <div className="languageSwitch">
                        <label className={isVisible ? 'switchLabelInFooter' : 'switchLabel'}>
                            <div className='columnFooter'>
                                <img
                                    src={spanishFlag}
                                    alt="spanishFlag"
                                    className={`footerFlag ${isSpanish ? 'active' : 'inactive'}`}
                                />
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={!isSpanish}
                                    onChange={handleLanguageChange}
                                />
                                <span className="sliderFooter round"></span>
                            </label>
                            <div className='columnFooter'>
                                <img
                                    src={usaFlag}
                                    alt="usaFlag"
                                    className={`footerFlag ${isSpanish ? 'inactive' : 'active'}`}
                                />
                            </div>
                        </label>
                    </div>
                </div>
                <div className="rightSideFooter">
                    <div className='rightSideSocialIcons'>
                        {/* <p className="textFooter" style={{ marginBottom: "10px" }}>
                    {isSpanish ? "¡Síguenos!" : "Follow us!"}
                </p> */}
                        {/* <img src={arrow} alt='arrow' className='footerArrow' /> */}
                        <button className='ig'>
                            <img src={ig} alt="instagram" />
                        </button>
                        <button className='tiktok'>
                            <img src={tiktok} alt="tiktok" />
                        </button>
                    </div>
                </div>

            </div>
            <p className="textFooterMobile">
                © 2024 LokDis. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
        </div>
    )
}