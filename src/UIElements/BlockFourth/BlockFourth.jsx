
import styles from './styles/blockFourth.module.css';
import movilOne from '../Assets/movil-one.png';
import movilTwo from '../Assets/movil-two.png';
import elipse from '../Assets/elipse.png';
import arrowDown from '../Assets/arrow-down.png';

const BlockFourth = () => {


    return (

        <div className={styles.container} >
            <div className={styles.containerParagraph} >
                <p className={styles.paragraphOne} >En el mapa verás las personas que
                    están disponibles en la app y sus ubicaciones</p>

            </div>
            <img className={styles.arrowDown} src={arrowDown} alt="flecha abajo" />
            <div className={styles.containerParagraphTwo} >
                <p className={styles.paragraphSecond} >
                    Podrás pedirle momentos reales a las personas que estén en los lugares que quieres ver
                </p>
            </div>
            <img className={styles.arrowDownSecond} src={arrowDown} alt="flecha abajo" />


            <div className={styles.containerPhotos} >

                <img src={movilOne} alt='Movil Uno' />
                <img src={movilTwo} alt="Movil Dos" />
                <img className={styles.elipse} src={elipse} alt='Elipse' />

            </div>

        </div>

    )

}



export default BlockFourth;