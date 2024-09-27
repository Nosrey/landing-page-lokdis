import React from "react";
import "./Bloque1.css";
import icon1 from "./Images/icon1.png";
import logo from "./Images/logo.png";
import phoneView from "./Images/phoneView.png";
import arrow from './Images/arrow.gif';

export const Bloque1 = () => {
  return (
    <div
      className="fondo"
    >
      <div className="columnas" style={{ height: "70vh" }}>
        <div className="columnaSingular" style={{ width: "35vw" }}>

          <div>
            <img
              src={icon1}
              alt="prettyViews"
              className="icon1"
            />
          </div>

          <div>
            <div className="fila">
              <img
                src={logo}
                alt="logo"
                className="logo"
              />
              <p className="rockSaltText">
                Look at<br />this!
              </p>
            </div>

            <p className="textoBienvenida">
              Vive <span className="textoBienvenidaBold">experiencias auténticas</span>, en tiempo real, sin barreras, junto a una comunidad global que te permite descubrir y <span className="textoBienvenidaContraste">compartir la realidad</span> como nunca antes
            </p>
            <button className="boton">Quiero probar LokDis</button>
          </div>
        </div>
        <div className="columnaSingular">
          <img
            src={phoneView}
            alt="phoneView"
            className="phoneView"
          />
        </div>
      </div>
      <footer>
        <img
          src={arrow}
          alt="arrow"
          className="arrow"
          height={"100px"}
        />
        <p className="footerText">Explora, conecta y comparte el<br />mundo en su forma más auténtica</p>
      </footer>
    </div>
  );
};
