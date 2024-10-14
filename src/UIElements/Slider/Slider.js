import React, { useState, useEffect } from "react";

import "./custom.slider.css";
import rightArrowSlider from '../Bloque-3/Images/rightArrowSlider.png'
import leftArrowSlider from '../Bloque-3/Images/leftArrowSlider.png'
import arrow from '../Bloque-3/Images/curvedArrow2.gif'

function CustomCarousel({ children, isSpanish }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  const textsSpanish = [  
    <>¿Está funcionando la noria de la fuente de Neptuno en Berlín?</>,
    <>¿Hay sitios de souvenirs en Victoria, Malta?</>,
    <>¿Hay mucha gente paseando por Burdeos?</>,
    <>¿Hay mucha gente en la playa?</>
]

const textsEnglish = [
    <>Is the Neptune Fountain Ferris wheel in Berlin working?</>,
    <>How does the souvenir market in Victoria, Malta look like now?</>,
    <>Is it a good time to be in Bordeaux?</>,
    <>Are there many people on the beach?</>
]

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }

  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >

      {children.map((item, index) => {
        return (
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            key={index}
          >
            <div className="rowSlider">
              <p className="sliderTitleText">
                {isSpanish ? textsSpanish[index] : textsEnglish[index]}
              </p>
              <img src={arrow} alt="arrow" id="arrowSlider" />
            </div>
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {/* {">"} */}
        <img src={rightArrowSlider} alt="rightArrowSlider" className="sliderArrow rightSlider" />
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {/* {"<"} */}
        <img src={leftArrowSlider} alt="leftArrowSlider" className="sliderArrow leftSlider" />
      </button>
    </div>
  );
}

export default CustomCarousel;