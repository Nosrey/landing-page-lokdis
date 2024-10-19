
import styles from './styles/blockFourth.module.css';
import movilOne from '../Assets/movil-one.png';
import movilTwo from '../Assets/phone-two-block-4.png';
import movilThree from '../Assets/phone-three-block-4.png'
import elipse from '../Assets/elipse.png';
import arrowDown from '../Bloque-3/Images/curvedArrow.gif';
import arrowUp from '../Bloque-3/Images/curvedArrow3.gif';
import movilSmallOne from '../Assets/foto-mapa-small.png';
import movilSmallOneNotSelect from '../Assets/foto-mapa-not-select.png';
import movilSmallTwo from '../Assets/phone-two-small.png';
import movilSmallTwoNotSelect from '../Assets/phone-two-small-incline.png';
import movilSmallThre from '../Assets/foto-small-movilthre.png';
import movilSmallThreNotSelect from '../Assets/foto-small-movil-thre.png';
import movilLargeOne from '../Assets/movilone-design.png';
import movilLargeTwo from '../Assets/movil-two-large.png';
import movilLargeThre from '../Assets/movil-large-thre.png'

import { useEffect, useState } from 'react';

const BlockFourth = ({ language }) => {


    const [selectedImage, setSelectedImage] = useState(null);


    const handleToggle = (image) => {

        setSelectedImage(prevImage => prevImage === image ? image : image);

    };



    useEffect(() => {
        setSelectedImage('image1');


        console.log(selectedImage);

        return () => {

            // dismount

        }

    }, [])


    return (
        <div className={styles.fatherContainer} >

            <div className={styles.letterContainer} >

                <div className={styles.containerTextOne} >

                    {language === 'spanish' ? <h2 className={styles.textOneContainer} >Tu ventana al mundo en el momento que elijas</h2> : <p className={styles.textOneContainer} >Your window to the world at <span className={styles.textOneContainer}> the moment of your choice</span></p>}

                </div>
                <div className={styles.containerTextTwoForMoreText} >
                    {language === 'spanish' ? <div className={styles.containerTextTwo} >
                        <span className={styles.textTwoContainer} >Explora lo que quieras,</span>
                    </div> : null}
                    {language !== 'spanish' ? <div className={styles.containerTextThreee} >
                        <span className={styles.textTwoContainer} >Explore where you want,</span>
                    </div> : null}
                </div>
                <div className={styles.leftOverTextContainer} >

                    {language === 'spanish' ? <span className={styles.textTwoContainer} > cuando quieras</span> :
                        <span className={styles.textTwoContainer} > when you want</span>}

                    <div className={styles.containerTextThree} >

                        {language === 'spanish' ? <p className={styles.textThree}> Busca los lugares que quieres ver en el mapa interactivo del mundo, solicita momentos reales y obtén una perspectiva auténtica en tiempo real.</p> :
                            <p className={styles.textThree}>
                                Find the places you want to see on the interactive map, request real moments and get an authentic perspective in real time.
                            </p>}
                        {language === 'spanish' ? <h2 className={styles.textNew} >¡Descubre con LokDis!</h2> : <h2 className={styles.textNew} >Discover with LokDis!</h2>}
                    </div>

                </div>

            </div>

            <div className={styles.containerBannerPhotoMovil} >

                {selectedImage === 'image1' ? <div className={`${styles.containerSmallPhotoMap} ${styles.selected}`} onClick={() => handleToggle('image1')}>

                    <img src={movilSmallOne} className={styles.smallMovilOne} alt="Movil pequeño con el mapa Lokdis" />
                </div> : <div className={styles.contaimerSmallPhotoNotSelect} onClick={() => handleToggle('image1')} >

                    <img src={movilSmallOneNotSelect} className={styles.smallMovilOne} alt="Movil pequeño con el mapa Lokdis" />

                </div>}
                {selectedImage === 'image2' ? <div className={`${styles.containerSmallPhotoMap} ${styles.selected}`} onClick={() => handleToggle('image2')}>

                    <img src={movilSmallTwoNotSelect} className={styles.smallMovilOne} alt="Movil pequeño con el mapa Lokdis" />

                </div> : <div className={styles.contaimerSmallPhotoNotSelect} onClick={() => handleToggle('image2')}>

                    <img src={movilSmallTwo} className={styles.smallMovilOne} alt="Movil pequeño con el mapa Lokdis" />

                </div>}

                {selectedImage === 'image3' ? <div className={`${styles.containerSmallPhotoMap} ${styles.selected}`} onClick={() => handleToggle('image3')}>

                    <img src={movilSmallThreNotSelect} className={styles.smallMovilOne} alt="Movil pequeño con el mapa Lokdis" />

                </div> : <div className={styles.contaimerSmallPhotoNotSelect} onClick={() => handleToggle('image3')}>

                    <img src={movilSmallThre} className={styles.smallMovilOne} alt="Movil pequeño con el mapa Lokdis" />

                </div>}




            </div>
            {selectedImage === 'image1' ? <img src={arrowDown} className={styles.firstArrowMovil} alt='imagen arrowDown' /> : null}
            {selectedImage === 'image2' ? <img src={arrowUp} className={styles.secondArrowMovil} alt='imagen arrowDown' /> : null}
            {selectedImage === 'image3' ? <img src={arrowDown} className={styles.thirdArrowMovil} alt='imagen arrowDown' /> : null}

            <div className={styles.containerPhoneMoreParagraph}>

                {selectedImage === 'image1' ? (language === 'spanish' ? <p className={styles.paragraphOneMovilDesign} >En el mapa verás las personas que
                    están disponibles en la app y sus ubicaciones</p> : <p className={styles.paragraphOneMovilDesign} >
                    On the map you will see the people who are available in the app and their locations
                </p>) : null}

                {selectedImage === 'image1' ? <img style={{ width: '870px', }} src={movilLargeOne} alt="Imagen grande del movil uno" /> : null}
                {selectedImage === 'image2' ? (language === 'spanish' ? <p className={styles.paragraphTwoMovilDesign} >
                    Podrás pedirle momentos  <span className={styles.remaining} >reales a las personas que estén en los lugares que quieres ver</span>
                </p> : <p className={styles.paragraphTwoMovilDesign} >You will be able to request real moments
                    from people who are in the places you want to see
                </p>) : null}
                {selectedImage === 'image2' ? <img style={{ width: '870px' }} src={movilLargeTwo} alt="Imagen grande del movil dos" /> : null}

                {selectedImage === 'image3' ? (language === 'spanish' ? <p className={styles.paragraphTwoMovilDesign} >
                    ¡Explora los lugares que quieras, cuando quieras!
                </p> :
                    <p className={styles.paragraphTwoMovilDesign} >Explore the places you want when you want</p>) : null}
                {selectedImage === 'image3' ? <img style={{ width: '870px' }} src={movilLargeThre} alt="Imagen grande del movil tres" /> : null}


            </div>


            <div className={styles.container} >
                <div className={styles.containerParagraph} >
                    {language === 'spanish' ? <p className={styles.paragraphOne} >En el mapa verás las personas que
                        están disponibles en la app y sus ubicaciones</p> : <p className={styles.paragraphOne} >
                        On the map you will see the people who are available in the app and their locations
                    </p>}

                </div>
                <img className={styles.arrowDown} src={arrowDown} alt="flecha abajo" />
                <div className={styles.containerParagraphTwo} >
                    {language === 'spanish' ? <p className={styles.paragraphSecond} >
                        Podrás pedirle momentos  <span className={styles.remaining} >reales a las personas que estén en los lugares que quieres ver</span>
                    </p> : <p className={styles.paragraphSecond} >You will be able to request real moments
                        from people who are in the places you want to see
                    </p>}
                </div>
                <div className={styles.containerParagraphThree} >
                    {language === 'spanish' ? <p className={styles.paragraphSecond} >
                        ¡Explora los lugares que quieras, cuando quieras!
                    </p> :
                        <p className={styles.paragraphSecond} >Explore the places you want when you want</p>}
                </div>
                <img className={styles.arrowDownThree} src={arrowUp} alt="flecha abajo" />

                <img className={styles.arrowDownSecond} src={arrowDown} alt="flecha abajo" />


                <div className={styles.containerPhotos} >

                    <img className={styles.imageMovilOne} src={movilOne} alt='Movil Uno' />
                    <img src={movilTwo} alt="Movil Dos" />
                    <img src={movilThree} alt="Movil Tres" />

                    <div className={styles.elipseContainer} >
                        <img className={styles.elipse} src={elipse} alt='Elipse' />
                    </div>
                </div>

            </div>



        </div >

    )

}



export default BlockFourth;