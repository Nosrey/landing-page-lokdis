

import styles from './styles/blockTwo.module.css';
import eyesImage from '../Assets/eyes-small-size.png';
import blockTwoImageBoxOne from '../Assets/boxOneBlockTwo.png';
import blockTwoImageBoxTwo from '../Assets/boxTwoBlockTwo.png';
import iconoImageBlockTwo from '../Assets/icono-block-2.png';
import userMapImageBlockTwo from '../Assets/usuario-mapa-block-2.png';
import { useEffect } from 'react';

const BlockTwo = ({ language, setLanguage }) => {




    useEffect(() => {
        // Este useEffect se ejecuta cuando 'lang' cambia
        setLanguage('spanish')
        console.log(language); // Verás el valor actualizado de 'lang' aquí

    }, []);


    return (
        <div className={styles.firstContainer}>

            <div className={styles.containerPhotos} >
                <img className={styles.iconoGirl} src={iconoImageBlockTwo} alt="icono" />
                <img className={styles.iconoUserMap} src={userMapImageBlockTwo} alt="user-map" />


                <div className={styles.boxTwo} >
                    <img src={blockTwoImageBoxTwo} alt="" />

                </div>
                <div className={styles.boxOne} >
                    <img src={blockTwoImageBoxOne} alt="" />
                </div>


            </div>

            <div className={styles.leftContainer}>

                <div className={styles.defineContainerText}>
                    <div className={styles.containerTextMoreImage}>


                        {language === 'spanish' ? <h2 className={styles.firstTextLeftContainer}>
                            Una app para descubrir
                        </h2> : <h2 className={styles.firstTextLeftContainer}>
                            An application to discover                        </h2>}
                        <img className={styles.eyesImage} src={eyesImage} alt='eyes-small-image' />
                    </div>
                    <div className={styles.contenedorLetterBlueContainer} >
                        {language === 'spanish' ? <h2 className={styles.secondTextLeftContainer}>
                            el mundo
                        </h2> : <h2 className={styles.secondTextLeftContainer}>
                            the world
                        </h2>}
                        <div className={styles.containerBlueLetter} >
                            {language === 'spanish' ? <h2 className={styles.thirdText} >
                                sin filtros ni ediciones
                            </h2> : <h2 className={styles.thirdText} >
                                without filters or edits
                            </h2>}
                        </div>
                    </div>
                    {language === 'spanish' ? <h3 className={styles.textH3}>¡Lo que ves es lo que es!</h3> :
                        <h3 className={styles.textH3}>What you see is what it is!</h3>}
                </div>

                <div className={styles.containerLetterParagraph} >
                    {language === 'spanish' ? <p className={styles.letterParagraph} >En LokDis podrás
                        <span className={styles.fourthText}> solicitar y compartir videos y fotos </span>
                        de lugares <span className={styles.fourthText}> en tiempo real </span>
                        con personas de todo el mundo. No hay espacio para montajes ni retoques,
                        lo que ves es lo que es. </p> : <p className={styles.letterParagraph} >With LokDis you can
                        <span className={styles.fourthText}> request videos and photos </span>
                        of places <span className={styles.fourthText}> in real time </span>
                        from people around the world. There is no room for editing or retouching, what you see is what it is. </p>}


                </div>

                <div style={{ display: 'flex', width: '80%', marginRight: '13%' }} >
                    {language !== 'spanish' ? <span className={styles.additionalText}>A 100% authentic and unedited experience </span> : <span className={styles.additionalText}>Una experiencia 100% auténtica y sin ediciones</span>}
                </div>

            </div>




        </div>
    )

}


export default BlockTwo;