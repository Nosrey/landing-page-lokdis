

import styles from './styles/blockFive.module.css';
import logoLokdis from '../Assets/logo-lokdis.png';
import Carrousel from '../Carrousel/Carrousel';


const BlockFive = ({ language }) => {

    const redirectUrl = () => {
        if (language === 'spanish') {
            window.open('https://b6j96f1eelu.typeform.com/to/b0NPKpIT', '_blank');
        } else {
            window.open('https://b6j96f1eelu.typeform.com/to/mlppGgt6', '_blank');
        }
    }

    return (
        <div className={styles.blockFiveContainer}>
            <div className={styles.carrousel} >

                <Carrousel language={language} />
            </div>

            <div className={styles.container} >
                {window.innerWidth <= 500 ? (
                    <div className={styles.containerLetter} >
                        {language === 'spanish' ? <h2 className={styles.h2Letter} >Vive la experiencia LokDis 🌍</h2> : <h2 className={styles.h2Letter} >Live the LokDis experience 🌍</h2>}
                        {language === 'spanish' ? <p className={styles.paragraph}> <span style={{ color: 'white' }}>¡Únete a la lista de espera y sé una de las  </span> <span style={{ color: 'white' }}> primeras personas  </span> <span style={{ lineHeight: '3.5rem' }} className={styles.colorCyanBackgroundTwo}> en tener acceso a esta </span>  <span className={styles.colorCyanBackgroundTwo}> comunidad! </span> </p> : <p className={styles.paragraph}> <span style={{ color: 'white', }} > Join the waiting list and be among the first people</span><br></br> <span className={styles.colorCyanBackground}> to have access to this</span> <span className={styles.colorCyanBackgroundTwo} > community! </span> </p>}
                        {language === 'spanish' ? <p className={styles.paragraphSmall}>Forma parte de nuestra comunidad completando una breve encuesta</p> : <p className={styles.paragraphSmall}>Join the list by answering a short survey!</p>}
                        {language === 'spanish' ? <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >Quiero probar LokDis</button> : <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >I want to try LokDis</button>}
                    </div>
                ) : (
                    <div className={styles.containerLetter} >
                        {language === 'spanish' ? <h2 className={styles.h2Letter} >Vive la experiencia LokDis 🌍</h2> : <h2 className={styles.h2Letter} >Live the LokDis experience 🌍</h2>}
                        {language === 'spanish' ? <p className={styles.paragraph}> <span style={{ color: 'white' }}>¡Únete a la lista de espera y sé una de las  </span> <span style={{ color: 'white' }}> primeras personas <br/> </span>  <span style={{ lineHeight: '3.5rem' }} className={styles.resaltadoDesktop}> en tener acceso a esta comunidad! </span> </p> : <p className={styles.paragraph}> <span style={{ color: 'white', }} > Join the waiting list and be among the first people</span><br></br> <span className={styles.colorCyanBackground}> to have access to this</span> <span className={styles.colorCyanBackgroundTwo} > community! </span> </p>}
                        {language === 'spanish' ? <p className={styles.paragraphSmall}>Forma parte de nuestra comunidad completando una breve encuesta</p> : <p className={styles.paragraphSmall}>Join the list by answering a short survey!</p>}
                        {language === 'spanish' ? <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >Quiero probar LokDis</button> : <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >I want to try LokDis</button>}
                    </div>
                )}


                <div className={styles.containerLogo} >

                    <img src={logoLokdis} alt='logo' />

                </div>

            </div>
        </div>

    );



}



export default BlockFive;

