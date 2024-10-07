import React from "react";
import "./Bloque1.css";

import phoneView from "./Images/phoneView.png";
import arrow from './Images/arrow.gif';
import phoneSquare from './Images/phoneSquare.png';

export const Bloque1 = ({ language, setLanguage }) => {
  const isSpanish = language === "spanish";

  return (
    <div className="fondo">

      {/* <button
        onClick={() => setLanguage(isSpanish ? "english" : "spanish")}
        className="botonIdioma"
      >
        {isSpanish ? "cambiar" : "change"}
      </button> */}
      <div className="columnas">
        <div className="columnaSingular leftBloq1">

          {/* lado de contador */}
          <div className="filaContador">
            <p className="contador">{isSpanish ? "LokDis llega en" : "LokDis arrives in"}</p>
            {/* ahora 5 dias */}
            <div className="fechaContenedor">
              <div><p className="contadorNumero">5</p></div>
              <div><p className="contadorSubtitulo">{isSpanish ? "dias" : "days"}</p></div>
            </div>

            {/* ahora 2 horas */}
            <div className="fechaContenedor">
              <div><p className="contadorNumero">2</p></div>
              <div><p className="contadorSubtitulo">{isSpanish ? "horas" : "hours"}</p></div>
            </div>

            {/* ahora 20 minutos */}
            <div className="fechaContenedor">
              <div><p className="contadorNumero">20</p></div>
              <div><p className="contadorSubtitulo">{isSpanish ? "minutos" : "minutes"}</p></div>
            </div>
          </div>

          {/* lado izquierdo inferior */}
          <div>
            <div className="cajaVertical">
              <p className="subtitulo">{isSpanish ? "LokDis: Conéctate con la realidad" : "LokDis: Connect with reality"}</p>
              <p className="bloqueVerde">{isSpanish ? "Explora el mundo sin filtros" : "Explore the world without filters"}</p>
              <p className="textoPoppinsDefault" style={{}}>
                {isSpanish ? "Descubre LokDis, una app para ver el mundo real en la que podrás solicitar momentos y " : "Discover LokDis, an app to view the real world in which you can request unfiltered moments and "}
                <span>{isSpanish ? "vivir experiencias auténticas." : "live authentic experiences."}</span>
              </p>

              <img
                src={phoneSquare}
                alt="phoneView"
                className="phoneView2Bloq1"
              />
            </div>

            <p className="textoBienvenida">
              {isSpanish ? "Regístrate, si estás entre las 1000 primeras personas obtendrás 6 meses Premium de LokDis" : "3647 people are already impatient to join this collaborative community"}
            </p>
            <button className="boton">{isSpanish ? "¡Únete ahora!" : "Join the waiting list!"}</button>
          </div>
        </div>

        {/* lado derecho */}
        <div className="columnaSingular" style={{ width: "40%" }}>
          <img
            src={phoneView}
            alt="phoneView"
            className="phoneView"
          />
        </div>
      </div>
      <footer>
        <p className="textoFooter">{isSpanish ? "Explora, conecta y comparte el mundo en su forma más auténtica." : "Explore, connect and share the world in its most authentic form."}</p>
        <div className="arrowContainer">
          <p className="arrowText">Look at<br />this!</p>
          <img
            src={arrow}
            alt="arrow"
            className="arrow"
          />
        </div>
      </footer>
    </div>
  );
};