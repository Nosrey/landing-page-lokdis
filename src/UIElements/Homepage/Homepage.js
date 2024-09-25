import React from 'react'
import BlockTwo from '../BlockTwo/BlockTwo'
import styles from './styles/home.module.css'
import BlockFourth from '../BlockFourth/BlockFourth'

export const Homepage = () => {
  return (
    <div className={styles.fatherContainer}>Homepage
      <BlockFourth />
      <BlockTwo />
    </div>
  )
}
