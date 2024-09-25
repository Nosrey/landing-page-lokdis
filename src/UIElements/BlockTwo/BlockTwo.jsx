

import styles from './styles/blockTwo.module.css';
import eyesImage from '../Assets/eyes-small-size.png';
import blockTwoImageBoxOne from '../Assets/boxOneBlockTwo.png';
import blockTwoImageBoxTwo from '../Assets/boxTwoBlockTwo.png';



const BlockTwo = () => {



    return (
        <div className={styles.firstContainer}>

            <div className={styles.leftContainer}>

                <div className={styles.defineContainerText}>
                    <div className={styles.containerTextMoreImage}>


                        <h2 className={styles.firstTextLeftContainer}>
                            Una app para
                        </h2>
                        <img className={styles.eyesImage} src={eyesImage} alt='eyes-small-image' />
                    </div>
                    <h2 className={styles.secondTextLeftContainer}>
                        descubrir el mundo
                    </h2>
                    <div className={styles.containerBlueLetter} >
                        <h2 className={styles.thirdText} >
                            sin filtros ni ediciones
                        </h2>
                    </div>
                </div>

                <div style={{ display: 'flex', width: '80%', marginRight: '13%', marginBottom: '5%' }} >
                    <span className={styles.fourthText}>Solicita y comparte videos, fotos <span className={styles.additionalText} >sin montajes, sin retoques, en tiempo real.</span></span>

                </div>

                <div style={{ display: 'flex', width: '80%', marginRight: '13%' }} >
                    <span className={styles.additionalText}>¿Quieres una experiencia 100% auténtica?
                        ¡Únete y vive el presente con LokDis!</span>
                </div>

            </div>

            <div className={styles.containerPhotos} >
                <div className={styles.boxTwo} >
                    <img src={blockTwoImageBoxTwo} alt="" />

                </div>
                <div className={styles.boxOne} >
                    <img src={blockTwoImageBoxOne} alt="" />


                </div>
            </div>


        </div>
    )

}


export default BlockTwo;