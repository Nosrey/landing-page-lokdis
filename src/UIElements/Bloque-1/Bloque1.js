import React from "react";
import "./Bloque1.css";

import phoneView from "./Images/phoneView.png";
import arrow from './Images/arrow.gif';

export const Bloque1 = () => {
  return (
    <div
      className="fondo"
    >
      <div className="columnas" style={{ height: "70vh" }}>
        <div className="columnaSingular" style={{ width: "35vw" }}>

          {/* lado de contador */}
          <div className="filaContador">
            <p className="contador">LokDis llega en </p>
            {/* ahora 5 dias */}
            <div className="fechaContenedor">
              <div><p className="contadorNumero">5</p></div>
              <div><p className="contadorSubtitulo">dias</p></div>
            </div>

            {/* ahora 2 horas */}
            <div className="fechaContenedor">
              <div><p className="contadorNumero">2</p></div>
              <div><p className="contadorSubtitulo">horas</p></div>
            </div>

            {/* ahora 20 minutos */}
            <div className="fechaContenedor">
              <div><p className="contadorNumero">20</p></div>
              <div><p className="contadorSubtitulo">minutos</p></div>
            </div>
          </div>

          {/* lado izquierdo inferior */}
          <div >
            <div className="cajaVertical">
              <p className="subtitulo">LokDis: Conéctate con la realidad</p>
              <p className="bloqueVerde">Explora el mundo sin filtros</p>
              <p className="textoPoppinsDefault" style={{ fontSize: "15px", marginBottom: "2.5vh" }}>Descubre LokDis, una app para ver el mundo real en la que podrás solicitar momentos y <span>vivir experiencias auténticas.</span></p>
            </div>

            <p className="textoBienvenida">
              Regístrate, si estás entre las 1000 primeras personas
              obtendrás 6 meses Premium de LokDis
            </p>
            <button className="boton">¡Únete ahora!</button>
          </div>
        </div>

        {/* lado derecho */}
        <div className="columnaSingular">
          <img
            src={phoneView}
            alt="phoneView"
            className="phoneView"
          />
        </div>
      </div>
      <footer>
        <p className="textoFooter">Explora, conecta y comparte el mundo en su forma más auténtica.</p>
        <div className="arrowContainer">
          <p className="arrowText">Look at<br />this!</p>
          <img
            src={arrow}
            alt="arrow"
            className="arrow"
            height={"100px"}
          />
        </div>
      </footer>
    </div>
  );
};
