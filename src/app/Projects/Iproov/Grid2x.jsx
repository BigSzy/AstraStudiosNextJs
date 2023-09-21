import React from 'react'
import styles from '/src/app/Styles/Grid2x.module.scss'

function Grid2x() {
  return (
    <div className='container'>
        <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch1.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch2.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch3.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch4.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch5.jpg" alt="" />
            </div>
            <div className={styles.gridItem}>
                <img src="/img/iproov/Sketch6.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Grid2x