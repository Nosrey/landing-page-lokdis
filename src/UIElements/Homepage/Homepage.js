import React from 'react'
import styles from './styles/home.module.css'
import BlockFourth from '../BlockFourth/BlockFourth'

export const Homepage = ({ language, setLanguage }) => {
  return (
    <div className={styles.fatherContainer}>Homepage
      <BlockFourth language={language} />
    </div>
  )
}
