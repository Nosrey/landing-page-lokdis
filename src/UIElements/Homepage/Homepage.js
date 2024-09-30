import React from 'react'
import styles from './styles/home.module.css'
import BlockFive from '../BlockFive/BlockFive'
import BlockFourth from '../BlockFourth/BlockFourth'
import BlockTwo from '../BlockTwo/BlockTwo';
import { Bloque1 } from '../Bloque-1/Bloque1'
import { Bloque3 } from '../Bloque-3/Bloque3'
import { Footer } from '../Footer/Footer'

export const Homepage = ({ language, setLanguage }) => {
  return (

    <div className={styles.fatherContainer}>
      <Bloque1 />
      <BlockTwo language={language} setLanguage={setLanguage} />
      <Bloque3 />
      <BlockFourth language={language} setLanguage={setLanguage} />
      <BlockFive />
      <Footer />
    </div>
  )
}