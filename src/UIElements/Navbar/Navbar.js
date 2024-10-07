import React from 'react';
import './Navbar.css'; // Asegúrate de que la ruta es correcta
import simpleLogo from './Images/simple-logo.png'
import logoName from './Images/logo-name.png'

export const Navbar = ({ isScrolling, setIsScrolling, language, setLanguage }) => {
    const isSpanish = language === "spanish";

    return (
        <div className={`scrollNav ${!true ? 'hidden' : ''}`}>
            <div className='leftNav'>
                <img src={simpleLogo} alt="simpleLogo" className="simpleLogo" />
                <img src={logoName} alt="logoName" className="logoName" />
            </div>
            <div className='centerNav'>
                <div className="filaContador1">
                    <div className="fechaContenedor1">
                        <div><p className="contadorNumero1">5</p></div>
                        <div><p className="contadorSubtitulo1">{isSpanish ? 'dias' : 'days'}</p></div>
                    </div>

                    {/* ahora 2 horas */}
                    <div className="fechaContenedor1">
                        <div><p className="contadorNumero1">2</p></div>
                        <div><p className="contadorSubtitulo1">{isSpanish ? 'horas' : 'hours'}</p></div>
                    </div>

                    {/* ahora 20 minutos */}
                    <div className="fechaContenedor1">
                        <div><p className="contadorNumero1">20</p></div>
                        <div><p className="contadorSubtitulo1">{isSpanish ? 'minutos' : 'minutes'}</p></div>
                    </div>
                </div>
            </div>
            <div className='rightNav'>
                <button className='navBarButton'>{isSpanish ? 'Quiero probar LokDis' : 'I want to try LokDis'}</button>
            </div>
        </div>
    );
};
