import React from 'react'
import './Footer.css'
import logo from './Images/logo.png'
import ig from './Images/ig.webp'
import facebook from './Images/facebook.webp';
import reddit from './Images/reddit.webp';
import usaFlag from './Images/usaFlag.webp'
import spanishFlag from './Images/spanishFlag.webp'


export const Footer = ({ language, setLanguage, isVisible }) => {
    const isSpanish = language === "spanish";

    const handleLanguageChange = (event) => {
        console.log('seteando idioma, vengo de: ', language)
        setLanguage(event.target.checked ? "english" : "spanish");
    };

    const redirectUrl = (objective) => {

        switch (objective) {
            case 'instagram':
                window.open('https://www.instagram.com/heylokdis/');
                break;
            case 'facebook':
                window.open('https://www.facebook.com/profile.php?id=61563963720953');
                break;
            case 'reddit':
                window.open('https://www.reddit.com/user/Heylokdis/');
                break;
            default:
                window.open('https://b6j96f1eelu.typeform.com/to/mlppGgt6', '_blank');
                break;
        }
    }

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
                        <button className='fb' onClick={() => redirectUrl('facebook')}>
                            <img src={facebook} alt="facebook" />
                        </button>
                        <button className='ig' onClick={() => redirectUrl('instagram')}>
                            <img src={ig} alt="instagram" />
                        </button>
                        <button className='reddit' onClick={() => redirectUrl('reddit')}>
                            <img src={reddit} alt="reddit" />
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