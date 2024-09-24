

import styles from './styles/blocktwo.module.css';
import eyesImage from '../Assets/eyes-small-size.png';


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

                <div>
                    <span>Solicita y comparte videos, fotos <span className={styles.additionalText} >sin montajes, sin retoques, en tiempo real</span></span>

                </div>

            </div>


        </div>
    )

}


export default BlockTwo;