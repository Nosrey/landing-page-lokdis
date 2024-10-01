import styles from './styles/carrousel.module.css';
import comeIn from '../Assets/come-in-carrousel.png';

const Carrousel = () => {
    return (
        <div className={styles.fatherContainer}>

            <div className={styles.banner}>
                <div className={styles.textContainer}>
                    <div className={styles.movingContent}>
                        {/* Primer conjunto de texto e imágenes */}
                        <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2>
                        <img src={comeIn} alt="logo" />
                        <h2 className={styles.textCarrouselTwo}>
                            ¡Súmate a la comunidad ahora!
                        </h2>
                        <img src={comeIn} alt="logo" />
                        <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2>
                        <img src={comeIn} alt="logo" />
                        <h2 className={styles.textCarrouselTwo}>
                            ¡Súmate a la comunidad ahora!
                        </h2>
                        <img src={comeIn} alt="logo" />

                        {/* Duplicamos el contenido */}
                        <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2>
                        <img src={comeIn} alt="logo" />
                        <h2 className={styles.textCarrouselTwo}>
                            ¡Súmate a la comunidad ahora!
                        </h2>
                        <img src={comeIn} alt="logo" />
                        <h2 className={styles.textCarrousel}>
                            ¡Súmate a la comunidad ahora!
                        </h2>
                        <img src={comeIn} alt="logo" />
                        <h2 className={styles.textCarrouselTwo}>
                            ¡Súmate a la comunidad ahora!
                        </h2>
                        <img src={comeIn} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrousel;
