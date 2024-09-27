

import styles from './styles/blockFive.module.css';




const BlockFive = () => {

    const redirectUrl = () => {

        window.location.assign('https://www.google.com');


    }


    return (

        <div className={styles.container} >

            <div className={styles.containerLetter} >
                <h2 className={styles.h2Letter} >Vive la experiencia LokDis 🌍</h2>
                <p className={styles.paragraph}> ¡Únete y obtén 6 meses de acceso Premium! </p>
                <p className={styles.paragraphSmall}>Regístrate ahora respondiendo una breve encuesta y disfruta de una experiencia Premium gratuita durante 6 meses . ¡Vive el mundo en tiempo real!</p>
                <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >Quiero probar LokDis</button>
            </div>


        </div>

    );



}



export default BlockFive;

