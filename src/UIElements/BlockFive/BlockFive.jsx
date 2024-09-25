

import styles from './styles/blockFive.module.css';




const BlockFive = () => {

    const redirectUrl = () => {

        window.location.assign('https://www.google.com');


    }


    return (

        <div className={styles.container} >

            <div className={styles.containerLetter} >
                <h2 className={styles.h2Letter} >¡Crea la comunidad global! 🌍</h2>
                <p className={styles.paragraph}>🚀 Ayúdanos a crear una experiencia auténtica y sin filtros contestando una encuesta súper rápida  🎯 </p>
                <p className={styles.paragraph}>Te aseguramos un lugar en la lista VIP 😎  para probar la app en cuanto salga.</p>
                <p className={styles.paragraph}>¡Tu opinión es clave y queremos escucharla! 👂💬</p>
                <button className={styles.buttonCallToAction} type='submit' onClick={redirectUrl} >Quiero probar LokDis</button>
            </div>


        </div>

    );



}



export default BlockFive;

