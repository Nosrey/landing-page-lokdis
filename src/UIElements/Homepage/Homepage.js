import React from 'react'
import styles from './styles/home.module.css'
import BlockFive from '../BlockFive/BlockFive'

export const Homepage = () => {
  return (
    <div className={styles.fatherContainer}>Homepage
      <BlockFive />
    </div>
  )
}
