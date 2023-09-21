import React from 'react'
import styles from "/src/app/Styles/Grid.module.scss"

function Grid3x() {
  return (
    <div className='container'>
    <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration1.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration2.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration3.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration4.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration5.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration6.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration7.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration8.jpg" alt="" />
        </div>
        <div className={styles.gridItem}>
            <img src="/img/iproov/Illustration9.jpg" alt="" />
        </div>
        
    </div>
    </div>
  )
}

export default Grid3x