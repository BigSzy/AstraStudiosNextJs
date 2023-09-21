import React from 'react'
import styles from "/src/app/Styles/Grid.module.scss"

function Grid3x() {
  return (
    <div className='container'>
    <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration1.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration2.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration3.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration4.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration5.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration6.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration7.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration8.png" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration9.png" alt="" />
        </div>
        
    </div>
    </div>
  )
}

export default Grid3x