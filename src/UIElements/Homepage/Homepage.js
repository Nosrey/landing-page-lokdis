import React from 'react'
import styles from './styles/home.module.css'
import BlockFive from '../BlockFive/BlockFive'
import BlockFourth from '../BlockFourth/BlockFourth'
import BlockTwo from '../BlockTwo/BlockTwo';

export const Homepage = ({ language, setLanguage }) => {
  return (
    <div className={styles.fatherContainer}>Homepage
      <BlockFive language={language} />
    </div>
  )
}
