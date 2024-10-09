import React from 'react';
import './Navbar.css'; // Asegúrate de que la ruta es correcta
import simpleLogo from './Images/simple-logo.png'
import logoName from './Images/logo-name.png'

export const Navbar = ({ isScrolling, setIsScrolling, language, setLanguage, numberOfPerson }) => {
    const isSpanish = language === "spanish";

    return (
        <div className={`scrollNav ${!isScrolling ? 'hidden' : ''}`}>
            <div className='leftNav'>
                <img src={simpleLogo} alt="simpleLogo" className="simpleLogo" />
                <img src={logoName} alt="logoName" className="logoName" />
            </div>
            <div className='centerNav'>
                <div className='grupoTextoNumberNav'>
                    <p className="numberPersonNav">+ {numberOfPerson}</p>
                    <p className='navbarText textLargoNav'>{isSpanish ? 'ya forman parte de LokDis' : 'are already part of LokDis'}</p>
                    <p className='navbarText textCortoNav'>{isSpanish ? 'ya se han unido' : 'have joined'}</p>
                </div>
            </div>
            <div className='rightNav'>
                <button className='navBarButton'>{isSpanish ? 'Quiero probar LokDis' : 'I want to try LokDis'}</button>
            </div>
        </div>
    );
};