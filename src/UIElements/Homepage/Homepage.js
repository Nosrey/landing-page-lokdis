import React from 'react'
import styles from './styles/home.module.css'
import BlockFive from '../BlockFive/BlockFive'

export const Homepage = ({ language, setLanguage }) => {
  return (
    <div className={styles.fatherContainer}>Homepage
<<<<<<< HEAD
      <BlockFive />
=======
      <BlockFourth language={language} />
>>>>>>> 3cb7bc3833da19b840f2658d71e76f1620d23cd6
    </div>
  )
}
