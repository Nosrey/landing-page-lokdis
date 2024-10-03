import styles from './styles/carrousel.module.css';
import comeIn from '../Assets/come-in-carrousel.png';

const Carrousel = ({ language }) => {
    const isSpanish = language === 'spanish';

    return (
        <div className={styles.fatherContainer}>

            <div className={styles.banner}>
                <div className={styles.textContainer}>
                    <div className={styles.movingContent}>
                        {/* Primer conjunto de texto e imágenes */}
                        {isSpanish ? <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2> : <h2 className={styles.textCarrousel}>
                            Join the community now!
                        </h2>}
                        <img src={comeIn} alt="logo" />
                        {isSpanish ? <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2> : <h2 className={styles.textCarrousel}>
                            Join the community now!
                        </h2>}
                        <img src={comeIn} alt="logo" />
                        {isSpanish ? <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2> : <h2 className={styles.textCarrousel}>
                            Join the community now!
                        </h2>}
                        <img src={comeIn} alt="logo" />
                        {isSpanish ? <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2> : <h2 className={styles.textCarrousel}>
                            Join the community now!
                        </h2>}
                        <img src={comeIn} alt="logo" />

                        {isSpanish ? <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2> : <h2 className={styles.textCarrousel}>
                            Join the community now!
                        </h2>}
                        <img src={comeIn} alt="logo" />
                        {isSpanish ? <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2> : <h2 className={styles.textCarrousel}>
                            Join the community now!
                        </h2>}
                        <img src={comeIn} alt="logo" />
                        {isSpanish ? <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2> : <h2 className={styles.textCarrousel}>
                            Join the community now!
                        </h2>}
                        <img src={comeIn} alt="logo" />
                        {isSpanish ? <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2> : <h2 className={styles.textCarrousel}>
                            Join the community now!
                        </h2>}
                        <img src={comeIn} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrousel;
