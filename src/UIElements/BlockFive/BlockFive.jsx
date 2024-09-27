

import styles from './styles/blockFive.module.css';
import logoLokdis from '../Assets/logo-lokdis.png';



const BlockFive = ({ language }) => {

    const redirectUrl = () => {

        window.location.assign('https://www.google.com');


    }


    return (

        <div className={styles.container} >

            <div className={styles.containerLetter} >
                {language === 'spanish' ? <h2 className={styles.h2Letter} >Vive la experiencia LokDis 🌍</h2> : <h2 className={styles.h2Letter} >Live the LokDis experience 🌍</h2>}
                {language === 'spanish' ? <p className={styles.paragraph}> ¡Únete y obtén 6 meses de acceso Premium! </p> : <p className={styles.paragraph}> Join the waiting list and be among the first people to have access to this community! </p>}
                {language === 'spanish' ? <p className={styles.paragraphSmall}>Regístrate ahora respondiendo una breve encuesta y disfruta de una experiencia Premium gratuita durante 6 meses . ¡Vive el mundo en tiempo real!</p> : <p className={styles.paragraphSmall}>Join the list by answering a short survey!</p>}
                {language === 'spanish' ? <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >Quiero probar LokDis</button> : <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >I want to try LokDis</button>}
            </div>
            <div className={styles.containerLogo} >

                <img src={logoLokdis} alt='logo' />

            </div>

        </div>

    );



}



export default BlockFive;

