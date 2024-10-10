

import styles from './styles/blockFive.module.css';
import logoLokdis from '../Assets/logo-lokdis.png';
import Carrousel from '../Carrousel/Carrousel';


const BlockFive = ({ language }) => {

    const redirectUrl = () => {
        if (language === 'spanish') {
            window.location.assign('https://b6j96f1eelu.typeform.com/to/b0NPKpIT');
        } else {
            window.location.assign('https://b6j96f1eelu.typeform.com/to/mlppGgt6');
        }
    }

    return (
        <div className={styles.blockFiveContainer}>
            <div className={styles.carrousel} >

                <Carrousel language={language} />
            </div>

            <div className={styles.container} >
                <div className={styles.containerLetter} >
                    {language === 'spanish' ? <h2 className={styles.h2Letter} >Vive la experiencia LokDis 🌍</h2> : <h2 className={styles.h2LetterEnglish} >Live the LokDis experience 🌍</h2>}
                    {language === 'spanish' ? <p className={styles.paragraph}> <span className={styles.colorCyanBackground}>¡Únete y obtén 6 meses</span><br></br> <span className={styles.colorCyanBackgroundTwo}> de acceso Premium! </span> </p> : <p className={styles.paragraph}> <span className={styles.colorCyanBackground} > Join the waiting list and be</span> <span className={styles.colorCyanBackgroundTwo}>among the first people</span> <br></br>  <span className={styles.colorCyanBackground}> to have access to this</span> <br></br> <span className={styles.colorCyanBackgroundTwo} > community! </span> </p>}
                    {language === 'spanish' ? <p className={styles.paragraphSmall}>Regístrate ahora respondiendo una breve encuesta y disfruta de una experiencia Premium gratuita durante 6 meses . ¡Vive el mundo en tiempo real!</p> : <p className={styles.paragraphSmall}>Join the list by answering a short survey!</p>}
                    {language === 'spanish' ? <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >Quiero probar LokDis</button> : <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >I want to try LokDis</button>}
                </div>
                <div className={styles.containerLogo} >

                    <img src={logoLokdis} alt='logo' />

                </div>

            </div>
        </div>

    );



}



export default BlockFive;

