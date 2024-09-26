import React from 'react'
import BlockTwo from '../BlockTwo/BlockTwo'
import styles from './styles/home.module.css'


export const Homepage = ({ language, setLanguage }) => {
  return (
    <div className={styles.fatherContainer}>Homepage

      <BlockTwo language={language} setLanguage={setLanguage} />
    </div>
  )
}
