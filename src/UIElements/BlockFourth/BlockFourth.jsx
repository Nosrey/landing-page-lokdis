
import styles from './styles/blockFourth.module.css';
import stylesSmall from './styles/blockFourthSmall.module.css';
import stylesMedium from './styles/blockFourthMedium.module.css';
import stylesLarge from './styles/blockFourthLarge.module.css';
import allMobiles from '../Assets/block-fourth-phones.png';
import allMobilesEn from '../Assets/block-fourth-phones-en.png';
import elipse from '../Assets/elipse.png';
import arrowDown from '../Bloque-3/Images/curvedArrow.gif';
import arrowUp from '../Bloque-3/Images/curvedArrow3.gif';
import movilSmallOne from '../Assets/image-incline-one.png';
import movilSmallOneNotSelect from '../Assets/image-small-one.png';
import movilSmallTwo from '../Assets/image-small-two.png';
import movilSmallTwoNotSelect from '../Assets/image-incline-two.png';
import movilSmallThre from '../Assets/movilthree-design-en.png';
import movilSmallThreNotSelect from '../Assets/movil-three-en-incline.png';
import movilLargeOne from '../Assets/movilone-design.png';
import movilLargeTwo from '../Assets/movil-two-large.png';
import movilLargeThre from '../Assets/movilthree-design-en.png'
import avatar1 from '../Assets/avatar1.png';
import avatar2 from '../Assets/avatar2.png';
// english phones
import movilOneEnglish from '../Assets/movilone-design-en.png';
import movilTwoEnglish from '../Assets/moviltwo-design-en.png';
import movilThreEnglish from '../Assets/movilthree-design-en.png';

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
        <div className={`${styles.fatherContainer} ${stylesSmall.fatherContainer}  ${stylesMedium.fatherContainer} ${stylesLarge.fatherContainer}`} >
            <div className={`${styles.containerAvatar2} ${stylesSmall.containerAvatar2} ${stylesMedium.containerAvatar2} ${stylesLarge.containerAvatar2}`} >
                <img src={avatar2} alt="avatar uno" className={`${styles.avatar2} ${styles.avatarStyle} ${stylesSmall.avatar2} ${stylesSmall.avatarStyle} `} />
            </div>


            <div className={`${styles.letterContainer} ${stylesSmall.letterContainer} ${stylesMedium.letterContainer} ${stylesLarge.letterContainer}`} >

                <div className={`${styles.containerTextOne} ${stylesSmall.containerTextOne} ${stylesMedium.containerTextOne} ${stylesLarge.containerTextOne}`} >

                    {language === 'spanish' ? <h1 className={`${styles.textOneContainer} ${stylesSmall.textOneContainer} ${stylesMedium.textOneContainer} ${stylesLarge.textOneContainer}`} >Tu ventana al mundo en el momento que elijas</h1> : <h1 className={`${styles.textOneContainer} ${stylesSmall.textOneContainer} ${stylesMedium.textOneContainer} ${stylesLarge.textOneContainer}`} >Your window to the world at <span className={`${styles.textOneContainer} ${stylesSmall.textOneContainer} ${stylesMedium.textOneContainer} ${stylesLarge.textOneContainer}`}> the moment of your choice</span></h1>}

                </div>
                <div className={`${styles.containerTextTwoForMoreText} ${stylesSmall.containerTextTwoForMoreText} ${stylesMedium.containerTextTwoForMoreText} ${stylesLarge.containerTextTwoForMoreText}`} >
                    {language === 'spanish' ? <div className={`${styles.containerTextTwo} ${stylesSmall.containerTextTwo} ${stylesMedium.containerTextTwo} ${stylesLarge.containerTextTwo}`} >
                        <span className={`${styles.textTwoContainer} ${stylesSmall.textTwoContainer} ${stylesMedium.textTwoContainer} ${stylesLarge.textTwoContainer}`} >Explora lo que quieras,</span>
                    </div> : null}
                    {language !== 'spanish' ? <div className={`${styles.containerTextThreee} ${stylesSmall.containerTextThreee} ${stylesMedium.containerTextThreee} ${stylesLarge.containerTextThreee}`} >
                        <span className={`${styles.textTwoContainer} ${stylesSmall.textTwoContainer} ${stylesMedium.textTwoContainer} ${stylesLarge.textTwoContainer}`} >Explore where you want,</span>
                    </div> : null}
                </div>
                <div className={`${styles.leftOverTextContainer} ${stylesSmall.leftOverTextContainer} ${stylesMedium.leftOverTextContainer} ${stylesLarge.leftOverTextContainer}`} >

                    {language === 'spanish' ? <span className={`${styles.textTwoContainer} ${stylesSmall.textTwoContainer} ${stylesMedium.textThree} ${stylesLarge.textTwoContainer}`} > cuando quieras</span> :
                        <span className={`${styles.textTwoContainer} ${stylesSmall.textTwoContainer} ${stylesMedium.textThree} ${stylesLarge.textTwoContainer}`} > when you want</span>}

                    <div className={`${styles.containerTextThree} ${stylesSmall.containerTextThree} ${stylesMedium.containerTextThree} ${stylesLarge.containerTextThree}`} >

                        {language === 'spanish' ? <p className={`${styles.textThree} ${stylesSmall.textThree} ${stylesMedium.textThree} ${stylesLarge.textThree}`}> Busca los lugares que quieres ver en el mapa interactivo del mundo, solicita momentos reales y obtén una perspectiva auténtica en tiempo real.</p> :
                            <p className={`${styles.textThree} ${stylesSmall.textThree} ${stylesMedium.textThree} ${stylesLarge.textThree}`}>
                                Find the places you want to see on the interactive map, request real moments and get an authentic perspective in real time.
                            </p>}
                        {language === 'spanish' ? <h2 className={`${styles.textNew} ${stylesSmall.textNew} ${stylesMedium.textNew} ${stylesLarge.textNew}`} >¡Descubre con LokDis!</h2> : <h2 className={`${styles.textNew} ${stylesSmall.textNew} ${stylesMedium.textNew} ${stylesLarge.textNew}`} >Discover with LokDis!</h2>}
                    </div>


                </div>

            </div>

            <div className={`${styles.containerBannerPhotoMovil} ${stylesSmall.containerBannerPhotoMovil} `} >

                {selectedImage === 'image1' ? <div className={`${styles.containerSmallPhotoMap} ${styles.selected} ${stylesSmall.containerSmallPhotoMap} ${stylesSmall.selected}`} onClick={() => handleToggle('image1')}>

                    <img src={movilSmallOne} className={`${styles.smallMovilOne} ${stylesSmall.smallMovilOne}`} alt="Movil pequeño con el mapa Lokdis" />
                </div> : <div className={`${styles.contaimerSmallPhotoNotSelect} ${stylesSmall.contaimerSmallPhotoNotSelect}`} onClick={() => handleToggle('image1')} >

                    <img src={movilSmallOneNotSelect} className={`${styles.smallMovilOne} ${stylesSmall.smallMovilOne}`} alt="Movil pequeño con el mapa Lokdis" />

                </div>}
                {selectedImage === 'image2' ? <div className={`${styles.containerSmallPhotoMap} ${styles.selected} ${stylesSmall.containerSmallPhotoMap} ${stylesSmall.selected}`} onClick={() => handleToggle('image2')}>

                    <img src={movilSmallTwoNotSelect} className={`${styles.smallMovilOne} ${stylesSmall.smallMovilOne}`} alt="Movil pequeño con el mapa Lokdis" />

                </div> : <div className={`${styles.contaimerSmallPhotoNotSelect} ${stylesSmall.contaimerSmallPhotoNotSelect}`} onClick={() => handleToggle('image2')}>

                    <img src={movilSmallTwo} className={`${styles.smallMovilOne} ${stylesSmall.smallMovilOne}`} alt="Movil pequeño con el mapa Lokdis" />

                </div>}

                {selectedImage === 'image3' ? <div className={`${styles.containerSmallPhotoMap} ${styles.selected} ${stylesSmall.containerSmallPhotoMap} ${stylesSmall.selected}`} onClick={() => handleToggle('image3')}>

                    <img src={movilSmallThreNotSelect} className={`${styles.smallMovilOne} ${stylesSmall.smallMovilOne}`} alt="Movil pequeño con el mapa Lokdis" />

                </div> : <div className={`${styles.contaimerSmallPhotoNotSelect} ${stylesSmall.contaimerSmallPhotoNotSelect}`} onClick={() => handleToggle('image3')}>

                    <img src={movilSmallThre} className={`${styles.smallMovilOne} ${stylesSmall.smallMovilOne}`} alt="Movil pequeño con el mapa Lokdis" />

                </div>}




            </div>
            {selectedImage === 'image1' ? <img src={arrowDown} className={`${styles.firstArrowMovil} ${stylesSmall.firstArrowMovil}`} alt='Flecha 1' /> : null}
            {selectedImage === 'image2' ? <img src={arrowUp} className={`${styles.secondArrowMovil} ${stylesSmall.secondArrowMovil}`} alt='Flecha 2' /> : null}
            {selectedImage === 'image3' ? <img src={arrowDown} className={`${styles.thirdArrowMovil} ${stylesSmall.thirdArrowMovil}`} alt='Flecha 3' /> : null}

            <div className={`${styles.containerPhoneMoreParagraph} ${stylesSmall.containerPhoneMoreParagraph}`}>

                {selectedImage === 'image1' ? (language === 'spanish' ? <p className={` ${stylesSmall.paragraphOneMovilDesign}`} >En el mapa verás las personas que
                    están disponibles en la app y sus ubicaciones</p> : <p className={` ${stylesSmall.paragraphOneMovilDesign}`} >
                    On the map you will see the people who are available in the app and their locations
                </p>) : null}

                {selectedImage === 'image1' ? (language === 'spanish' ? <img style={{ width: '770px', }} src={movilLargeOne} alt="Imagen grande del movil uno" /> : <img style={{ width: '770px', }} src={movilOneEnglish} alt="Imagen grande del movil uno en ingles" />) : null}
                {selectedImage === 'image2' ? (language === 'spanish' ? <p className={` ${stylesSmall.paragraphTwoMovilDesign}`} >
                    Podrás pedirle momentos  <span className={styles.remaining} >reales a las personas que estén en los lugares que quieres ver</span>
                </p> : <p className={` ${stylesSmall.paragraphTwoMovilDesign}`} >You will be able to request real moments
                    from people who are in the places you want to see
                </p>) : null}
                {selectedImage === 'image2' ? (language === 'spanish' ? <img style={{ width: '770px' }} src={movilLargeTwo} alt="Imagen grande del movil dos" /> : <img style={{ width: '770px' }} src={movilTwoEnglish} alt="Imagen grande del movil dos ingles" />) : null}

                {selectedImage === 'image3' ? (language === 'spanish' ? <p className={`${stylesSmall.paragraphTwoMovilDesign}`} >
                    ¡Explora los lugares que quieras, cuando quieras!
                </p> :
                    <p className={` ${stylesSmall.paragraphTwoMovilDesign}`} >Explore the places you want when you want</p>) : null}
                {selectedImage === 'image3' ? <img style={{ width: '770px' }} src={movilLargeThre} alt="Imagen grande del movil tres" /> : null}


            </div>

            <div className={`${styles.containerAvatar1} ${stylesSmall.containerAvatar1} ${stylesMedium.containerAvatar1}`} >
                <img src={avatar1} alt="avatar uno" className={`${styles.avatar1} ${styles.avatarStyle} ${stylesSmall.avatar1} ${stylesSmall.avatarStyle}`} />

            </div>
            <div className={`${styles.container} ${stylesSmall.container} ${stylesMedium.container} ${stylesLarge.container} `} >
                <div className={`${styles.containerParagraph} ${stylesSmall.containerParagraph} ${stylesMedium.containerParagraph} ${stylesLarge.containerParagraph}`} >
                    {language === 'spanish' ? <p className={`${styles.paragraphOne} ${stylesMedium.paragraphOne} ${stylesLarge.paragraphOne}`} >En el mapa verás las personas que
                        están disponibles en la app y sus ubicaciones</p> : <p className={`${styles.paragraphOne} ${stylesMedium.paragraphOne} ${stylesLarge.paragraphOne}`} >
                        On the map you will see the people who are available in the app and their locations
                    </p>}

                </div>
                <img className={`${styles.arrowDown} ${stylesSmall.arrowDown} ${stylesMedium.arrowDown} ${stylesLarge.arrowDown}`} src={arrowDown} alt="flecha abajo" />
                <div className={`${styles.containerParagraphTwo} ${stylesSmall.containerParagraphTwo} ${stylesMedium.containerParagraphTwo} ${stylesLarge.containerParagraphTwo}`} >
                    {language === 'spanish' ? <p className={`${styles.paragraphSecond} ${stylesMedium.paragraphSecond} ${stylesLarge.paragraphSecond}`} >
                        Podrás pedirle momentos  <span className={styles.remaining} >reales a las personas que estén en los lugares que quieres ver</span>
                    </p> : <p className={`${styles.paragraphSecond} ${stylesMedium.paragraphSecond} ${stylesLarge.paragraphSecond}`} >You will be able to request real moments
                        from people who are in the places you want to see
                    </p>}
                </div>
                <div className={`${styles.containerParagraphThree} ${stylesSmall.containerParagraphThree} ${stylesMedium.containerParagraphThree} ${stylesLarge.containerParagraphThree}`} >
                    {language === 'spanish' ? <p className={`${styles.paragraphSecond} ${stylesMedium.paragraphSecond}  ${stylesLarge.paragraphSecond}`} >
                        ¡Explora los lugares que quieras, cuando quieras!
                    </p> :
                        <p className={`${styles.paragraphSecond} ${stylesMedium.paragraphSecond} ${stylesLarge.paragraphSecond}`} >Explore the places you want when you want</p>}
                </div>
                <img className={`${styles.arrowDownThree} ${stylesSmall.arrowDownThree} ${stylesMedium.arrowDownThree} ${stylesLarge.arrowDownThree}`} src={arrowDown} alt="flecha abajo" />

                <img className={`${styles.arrowDownSecond} ${stylesSmall.arrowDownSecond} ${stylesMedium.arrowDownSecond} ${stylesLarge.arrowDownSecond}`} src={arrowDown} alt="flecha abajo" />


                <div className={`${styles.containerPhotos} ${stylesSmall.containerPhotos} ${stylesMedium.containerPhotos} ${stylesLarge.containerPhotos}`} >

                    {language === 'spanish' ? < img className={`${styles.allMoviles} ${stylesMedium.allMoviles} ${stylesLarge.allMoviles}`} src={allMobiles} alt='Movil Uno' /> : < img className={`${styles.allMoviles} ${stylesMedium.allMoviles} ${stylesLarge.allMoviles}`} src={allMobilesEn} alt='Movil Uno' />}
                    <div className={`${styles.elipseContainer} ${stylesMedium.elipseContainer} ${stylesLarge.elipseContainer}`} >
                        <img className={styles.elipse} src={elipse} alt='Elipse' />
                    </div>
                </div>

            </div>


        </div >

    )

}



export default BlockFourth;