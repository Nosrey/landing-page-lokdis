

import styles from './styles/blocktwo.module.css';
import stylesSmall from './styles/blocktwoSmall.module.css';
import stylesMedium from './styles/blocktwoMedium.module.css';
import stylesLarge from './styles/blocktwoLarge.module.css';
import eyesImage from '../Assets/eye-block-2.png';
import blockTwoImageBoxOne from '../Assets/boxOneBlockTwo.png';
import blockTwoImageBoxTwo from '../Assets/boxTwoBlockTwo.png';
import iconoImageBlockTwo from '../Assets/icono-block-2.png';
import userMapImageBlockTwo from '../Assets/usuario-mapa-block-2.png';
import { useEffect, useRef } from 'react';
import avatar3 from '../Assets/avatar3.png';

const BlockTwo = ({ language }) => {


    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        entry.target.classList.add(styles.active);
                    }
                });
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        const container = containerRef.current;
        if (container) {
            observer.observe(container);
        }

        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    }, []);

    return (
        <div className={`${styles.firstContainer} ${stylesSmall.firstContainer} ${stylesMedium.firstContainer} ${stylesLarge.firstContainer}`}  >

            <div className={`${styles.avatares} ${stylesSmall.avatares} ${stylesMedium.avatares} ${stylesLarge.avatares} `}>
                <div className={`${styles.containerAvatar3Desk} ${stylesSmall.containerAvatar3Desk} ${stylesMedium.containerAvatar3Desk} ${stylesLarge.containerAvatar3Desk}`} >
                    <img src={avatar3} alt="avatar tres" className={`${styles.avatar3} ${styles.avatarStyle} ${stylesSmall.avatar3} ${stylesSmall.avatarStyle} ${stylesMedium.avatar3} ${stylesMedium.avatarStyle} ${stylesSmall.avatarStyle} ${stylesLarge.avatar3} ${stylesLarge.avatarStyle}`} />
                </div>
            </div>

            <div className={`${styles.containerPhotos} ${stylesSmall.containerPhotos} ${stylesMedium.containerPhotos} ${stylesLarge.containerPhotos}`} >
                <img className={`${styles.iconoGirl} ${stylesSmall.iconoGirl} ${stylesMedium.iconoGirl} ${stylesLarge.iconoGirl} `} src={iconoImageBlockTwo} alt="icono" />
                <img className={`${styles.iconoUserMap} ${stylesMedium.iconoUserMap} ${stylesSmall.iconoUserMap} ${stylesLarge.iconoUserMap}`} src={userMapImageBlockTwo} alt="user-map" />
                <div className={`${styles.boxTwo} ${stylesSmall.boxTwo} ${stylesMedium.boxTwo} ${stylesLarge.boxTwo}`} >
                    <img src={blockTwoImageBoxTwo} alt="" />
                </div>
                <div className={`${styles.boxOne} ${stylesSmall.boxOne} ${stylesMedium.boxOne} ${stylesLarge.boxOne}`} >
                    <img src={blockTwoImageBoxOne} alt="" />
                </div>
            </div>
            <div className={`${styles.leftContainer} ${stylesSmall.leftContainer} ${stylesMedium.leftContainer} ${stylesLarge.leftContainer}`}>
                <div className={`${styles.defineContainerText} ${stylesSmall.defineContainerText} ${stylesMedium.defineContainerText} ${stylesLarge.defineContainerText} `}>
                    <div className={`${styles.containerTextMoreImage} ${stylesSmall.containerTextMoreImage} ${stylesMedium.containerTextMoreImage} ${stylesLarge.containerTextMoreImage}`}>
                        {language === 'spanish' ? <h1 className={`${styles.firstTextLeftContainer} ${stylesSmall.firstTextLeftContainer}  ${stylesMedium.firstTextLeftContainer}  ${stylesLarge.firstTextLeftContainer}`}>
                            Una app para descubrir
                        </h1> : <h1 className={`${styles.firstTextLeftContainerEnglish} ${stylesSmall.firstTextLeftContainerEnglish} ${stylesMedium.firstTextLeftContainerEnglish} ${stylesLarge.firstTextLeftContainerEnglish}`}>
                            An application to discover                        </h1>}
                        <img className={`${styles.eyesImage} ${stylesSmall.eyesImage} ${stylesMedium.eyesImage} ${stylesLarge.eyesImage}`} src={eyesImage} alt='eyes-small-image' />
                    </div>
                    <div className={`${styles.contenedorLetterBlueContainer} ${stylesSmall.contenedorLetterBlueContainer} ${stylesMedium.contenedorLetterBlueContainer} ${stylesLarge.contenedorLetterBlueContainer}`} >
                        {language === 'spanish' ? <span className={`${styles.secondTextLeftContainer} ${stylesSmall.secondTextLeftContainer} ${stylesMedium.secondTextLeftContainer} ${stylesLarge.secondTextLeftContainer}`}>
                            el mundo
                        </span> : <span className={`${styles.secondTextLeftContainer} ${stylesSmall.secondTextLeftContainer} ${stylesMedium.secondTextLeftContainer} ${stylesLarge.secondTextLeftContainer}`}>
                            the world
                        </span>}

                        {language === 'spanish' ? <span className={`${styles.thirdText} ${stylesSmall.thirdText} ${stylesMedium.thirdText} ${stylesLarge.thirdText}`} >
                            sin filtros ni ediciones
                        </span> : <span className={`${styles.thirdText} ${stylesSmall.thirdText} ${stylesMedium.thirdText} ${stylesLarge.thirdText}`} >
                            without filters or edits
                        </span>}

                    </div>
                    {language === 'spanish' ? <h3 className={`${styles.textH3} ${stylesSmall.textH3}  ${stylesMedium.textH3}  ${stylesLarge.textH3}`}>¡Lo que ves es lo que es!</h3> :
                        <h3 className={`${styles.textH3} ${stylesSmall.textH3} ${stylesMedium.textH3} ${stylesLarge.textH3} `}>What you see is what it is!</h3>}
                </div>

                <div className={`${styles.containerPhotosMovil} ${stylesSmall.containerPhotosMovil} ${stylesMedium.containerPhotosMovil}`}>

                    <img className={`${styles.iconoGirl} ${stylesSmall.iconoGirl} ${stylesMedium.iconoGirl}`} src={iconoImageBlockTwo} alt="icono" />
                    <img className={`${styles.iconoUserMap} ${stylesSmall.iconoUserMap} ${stylesMedium.iconoUserMap}`} src={userMapImageBlockTwo} alt="user-map" />


                    <div className={`${styles.boxTwo} ${stylesSmall.boxTwo} ${stylesMedium.boxTwo}`} >
                        <img src={blockTwoImageBoxTwo} alt="" />

                    </div>
                    <div className={`${styles.boxOne} ${stylesSmall.boxOne} ${stylesMedium.boxTwo}`} >
                        <img src={blockTwoImageBoxOne} alt="" />
                    </div>

                </div>

                <div ref={containerRef} className={`${styles.containerLetterParagraph} ${stylesSmall.containerLetterParagraph} ${stylesMedium.containerLetterParagraph} ${stylesLarge.containerLetterParagraph}`} >
                    {language === 'spanish' ? <p className={`${styles.letterParagraph} ${stylesSmall.letterParagraph} ${stylesMedium.letterParagraph} ${stylesLarge.letterParagraph} `} >En LokDis podrás
                        <span className={`${styles.fourthText} ${stylesSmall.fourthText} ${stylesMedium.fourthText} ${stylesLarge.fourthText}`}> solicitar y compartir videos y fotos </span>
                        de lugares <span className={`${styles.fourthText} ${stylesSmall.fourthText} ${stylesMedium.fourthText} ${stylesLarge.fourthText}`}> en tiempo real </span>
                        con personas de todo el mundo. No hay espacio para montajes ni retoques,
                        lo que ves es lo que es. </p> : <p className={`${styles.letterParagraph} ${stylesSmall.letterParagraph} ${stylesMedium.letterParagraph} ${stylesLarge.letterParagraph}`} >With LokDis you can
                        <span className={`${styles.fourthText} ${stylesSmall.fourthText} ${stylesMedium.fourthText} ${stylesLarge.fourthText}`}> request videos and photos </span>
                        of places <span className={`${styles.fourthText} ${stylesSmall.fourthText} ${stylesMedium.fourthText} ${stylesLarge.fourthText}`}> in real time </span>
                        from people around the world. There is no room for editing or retouching, what you see is what it is. </p>}
                </div>

                <div className={`${styles.containerAdditionalText} ${stylesSmall.containerAdditionalText} ${stylesMedium.containerAdditionalText} ${stylesLarge.containerAdditionalText}`} >
                    {language !== 'spanish' ? <span className={`${styles.additionalText} ${stylesSmall.additionalText} ${stylesMedium.additionalText} ${stylesLarge.additionalText}`}>A 100% authentic and unedited experience </span> : <span className={`${styles.additionalText} ${stylesSmall.additionalText} ${stylesMedium.additionalText} ${stylesLarge.additionalText}`}>Una experiencia 100% auténtica y sin ediciones</span>}
                </div>


            </div>
            <div className={`${styles.avatares} ${stylesSmall.avatares}`}>

                <div className={`${styles.containerAvatar3} ${stylesSmall.containerAvatar3}`} >
                    <img src={avatar3} alt="avatar tres" className={`${styles.avatar3} ${styles.avatarStyle} ${stylesSmall.avatar3} ${stylesSmall.avatarStyle}`} />
                </div>
            </div>




        </div>
    )

}


export default BlockTwo;