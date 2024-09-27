
import styles from './styles/blockFourth.module.css';
import movilOne from '../Assets/movil-one.png';
import movilTwo from '../Assets/phone-two-block-4.png';
import movilThree from '../Assets/phone-three-block-4.png'
import elipse from '../Assets/elipse.png';
import arrowDown from '../Assets/arrow-down.png';
import { useEffect } from 'react';

const BlockFourth = ({ language }) => {


    useEffect(() => {


        return () => {

            // dismount

        }

    }, [language])


    return (
        <div className={styles.fatherContainer} >

            <div className={styles.letterContainer} >

                <div className={styles.containerTextOne} >

                    {language === 'spanish' ? <h2 className={styles.textOneContainer} >Tu ventana al mundo en el momento que elijas</h2> : <p className={styles.textOneContainer} >Your window to the world at <p className={styles.moreTextContainer}>the moment of your choice</p></p>}

                </div>

                <div className={styles.containerTextTwo} >

                    {language === 'spanish' ? <span className={styles.textTwoContainer} >Explora lo que quieras, cuando</span> : <span className={styles.textTwoContainer} >Explore where you want, when</span>}

                </div>
                <div className={styles.leftOverTextContainer} >

                    {language === 'spanish' ? <span className={styles.textTwoContainer} >quieras</span> :
                        <span className={styles.textTwoContainer} >you want</span>}


                    {language === 'spanish' ? <p className={styles.textThree}> Busca los lugares que quieres ver en el mapa interactivo del mundo, solicita momentos reales y obtén una perspectiva auténtica en tiempo real.</p> :
                        <p className={styles.textThree}>
                            Find the places you want to see on the interactive map, request real moments and get an authentic perspective in real time.
                        </p>}



                </div>



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
                        Podrás pedirle momentos reales a las personas que estén en los lugares que quieres ver
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
                <img className={styles.arrowDownThree} src={arrowDown} alt="flecha abajo" />

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